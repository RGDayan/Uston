<?php

namespace App\Controller;

use App\Entity\Categorie;
use App\Entity\RecitUtilisateur;
use App\Repository\CategorieRepository;
use App\Repository\ProjetRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CategorieController extends AbstractController
{
    #[Route('/categories', name: 'categorie_index', methods: 'GET')]
    public function index(CategorieRepository $repository): JsonResponse
    {
        return $this->json(
            $repository->findAll(),
            200,
            [],
            ['groups' => 'categorie:show']
        );
    }

    /**
     * Créer une categorie pour un projet
     */
    #[Route('/categorie', name: 'categorie_create', methods: 'POST')]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ProjetRepository $projetRepository): JsonResponse
    {
        $categorie = $serializer->deserialize($request->getContent(), Categorie::class, 'json');

        $content = $request->toArray();
        $categorie->setProjet($projetRepository->find($content['projet_id']));

        $em->persist($categorie);
        $em->flush();

        return $this->json($categorie, 200, [], ['groups' => 'categorie:show']);
    }

    /**
     * Supprime une categorie
     */
    #[Route('/categories/{id}', name: 'categorie_delete', methods: 'DELETE')]
    public function delete(Categorie $categorie, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($categorie);
        $em->flush();

        return $this->json("{ 'response': 'Categorie supprimée' }");
    }
}
