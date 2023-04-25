<?php

namespace App\Controller;

use App\Entity\RecitUtilisateur;
use App\Repository\CategorieRepository;
use App\Repository\ProjetRepository;
use App\Repository\RecitUtilisateurRepository;
use App\Repository\TechnologieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class RecitUtilisateurController extends AbstractController
{
    #[Route('/recits-utilisateur', name: 'recit_utilisateur_index', methods: 'GET')]
    public function index(RecitUtilisateurRepository $repository): JsonResponse
    {
        return $this->json(
            $repository->findAll(),
            200,
            [],
            ['groups' => 'recit:index']
        );
    }

    #[Route('/projets/{id}/recits-utilisateur', name: 'recit_utilisateur_indexFromProjet', methods: 'GET')]
    public function indexFromProjet(int $id, ProjetRepository $projetRepository): JsonResponse
    {
        $projet = $projetRepository->find($id);

        return $this->json(
            $projet->getRecitUtilisateurs(),
            200,
            [],
            ['groups' => 'recit:indexFromProjet']
        );
    }

    #[Route('/recits-utilisateur/{id}', name: 'recit_utilisateur_show', methods: 'GET')]
    public function show(RecitUtilisateur $recitUtilisateur): JsonResponse
    {
        return $this->json(
            $recitUtilisateur,
            200,
            [],
            ['groups' => 'recit:show']
        );
    }

    #[Route('/recits-utilisateur', name: 'recit_utilisateur_create', methods: 'POST')]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ProjetRepository $projetRepository): JsonResponse
    {
        $recit = $serializer->deserialize(
            $request->getContent(),
            RecitUtilisateur::class,
            'json');

        $content = $request->toArray();
        $recit->setProjet($projetRepository->find($content['projet_id']));

        $em->persist($recit);
        $em->flush();

        return $this->json($recit, 200, [], ['groups' => 'recit:show']);
    }

    #[Route('/recits-utilisateur-add-categorie', name: 'recit_utilisateur_add_categorie', methods: 'POST')]
    public function addCategorie(Request $request, RecitUtilisateurRepository $recitRepository, CategorieRepository $categorieRepository, EntityManagerInterface $em): JsonResponse
    {
        $content = $request->toArray();
        $recit = $recitRepository
            ->find($content['value_id'])
            ->addCategory(
                $categorieRepository
                    ->find($content['categorie_id'])
            );

        $em->persist($recit);
        $em->flush();

        return $this->json($recit, 200, [], ['groups' => 'recit:show']);
    }

    #[Route('/recits-utilisateur/{id}', name: 'recit_utilisateur_update', methods: 'PUT')]
    public function update(RecitUtilisateur $recitUtilisateur, Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        $upRecit = $serializer->deserialize(
            $request->getContent(),
            RecitUtilisateur::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $recitUtilisateur]);
        $em->persist($upRecit);
        $em->flush();

        return $this->json(
            $recitUtilisateur,
            200,
            [],
            ['groups' => 'recit:show']
        );
    }

    #[Route('/recits-utilisateur-remove-categorie', name: 'recit_utilisateur_remove_categorie', methods: 'DELETE')]
    public function removeCategorie(Request $request, RecitUtilisateurRepository $recitRepository, CategorieRepository $categorieRepository, EntityManagerInterface $em): JsonResponse
    {
        $content = $request->toArray();
        $recit = $recitRepository
            ->find($content['rel_id'])
            ->removeCategory(
                $categorieRepository
                    ->find($content['categorie_id'])
            );

        $em->persist($recit);
        $em->flush();

        return $this->json($recit, 200, [], ['groups' => 'recit:show']);
    }

    #[Route('/recits-utilisateur/{id}', name: 'recit_utilisateur_delete', methods: 'DELETE')]
    public function delete(RecitUtilisateur $recitUtilisateur, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($recitUtilisateur);
        $em->flush();

        return $this->json("{ 'response': 'Recit utilisateur supprimé' }");
    }
}
