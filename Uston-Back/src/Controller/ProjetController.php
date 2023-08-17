<?php

namespace App\Controller;

use App\Entity\Projet;
use App\Repository\ProjetRepository;
use App\Repository\TechnologieRepository;
use Doctrine\ORM\EntityManagerInterface;
use JetBrains\PhpStorm\NoReturn;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class ProjetController extends AbstractController
{
    /**
     * Retourne la liste des projets
     */
    #[Route('/projets', name: 'projet_index', methods: 'GET')]
    public function index(ProjetRepository $repository): JsonResponse
    {
        return $this->json($repository->findAll(), 200, [], ['groups' => 'projet:index']);
    }

    /**
     * Retour un projet correspondant à l'id donné
     */
    #[Route('/projets/{id}', name: 'projet_show', methods: 'GET')]
    public function show(Projet $projet): JsonResponse
    {
        return $this->json($projet, 200, [], ['groups' => 'projet:show']);
    }

    /**
     * Créer un projet en BDD
     */
    #[Route('/projets', name: 'projet_create', methods: 'POST')]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, TechnologieRepository $technologyRepository): JsonResponse
    {
        $projet = $serializer->deserialize($request->getContent(), Projet::class, 'json');
        $projet->setCreatedAt(new \DateTimeImmutable());

        $em->persist($projet);
        $em->flush();

        return $this->json($projet, 200, [], ['groups' => 'projet:index']);
    }

    /**
     * Ajoute la liaison d'une Technologie avec un Projet
     */
    #[Route('/projet-add-technologie', name: 'projet_add_technologie', methods: 'POST')]
    public function addTechnologie(Request $request, ProjetRepository $projetRepository, TechnologieRepository $technologieRepository, EntityManagerInterface $em): JsonResponse
    {
        $content = $request->toArray();
        $projet = $projetRepository
            ->find($content['projet_id'])
            ->addTechnology(
                $technologieRepository
                    ->find($content['technologie_id'])
            );

        $em->persist($projet);
        $em->flush();

        return $this->json($projet, 200, [], ['groups' => 'projet:show']);
    }

    /**
     * Ajoute la relation d'une list de Technologies avec un Projet
     */
    #[NoReturn] #[Route('/projet-add-technologies', name: 'projet_add_technologies', methods: 'POST')]
    public function addTechnologies(Request $request, ProjetRepository $projetRepository, TechnologieRepository $technologieRepository, EntityManagerInterface $em): JsonResponse
    {
        $content = $request->toArray();
        $projet = $projetRepository
            ->find($content['projet_id']);
        foreach ($content['technologies_id'] as $techId){
                $projet->addTechnology(
                    $technologieRepository
                        ->find($techId)
                );
        }

        $em->persist($projet);
        $em->flush();
        return $this->json($projet, 200, [], ['groups' => 'projet:show']);
    }

    /**
     * Met à jour un projet
     */
    #[Route('/projets/{id}', name: 'projet_update', methods: 'PUT')]
    public function update(Projet $projet, Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        $upProjet = $serializer->deserialize(
            $request->getContent(),
            Projet::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $projet]);

        $em->persist($upProjet);
        $em->flush();

        return $this->json($projet, 200, [], ['groups' => 'projet:show']);
    }

    /**
     * Supprime un projet
     */
    #[Route('/projets/{id}', name: 'projet_delete', methods: 'DELETE')]
    public function delete(Projet $projet, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($projet);
        $em->flush();

        return $this->json("{ 'response' : \"Projet supprimé avec succès\" }");
    }
}
