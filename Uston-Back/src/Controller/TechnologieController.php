<?php

namespace App\Controller;

use App\Entity\Technologie;
use App\Repository\ProjetRepository;
use App\Repository\TechnologieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use function Webmozart\Assert\Tests\StaticAnalysis\null;

class TechnologieController extends AbstractController
{
    /**
     * Retourne la liste des Technologies
     */
    #[Route('/technologies', name: 'technologie_index', methods: 'GET')]
    public function index(TechnologieRepository $repository): JsonResponse
    {
        return $this->json($repository->findAll(), 200, [], ['groups' => 'technologie:index']);
    }

    /**
     * Créer une Technologie pour un projet
     */
    #[Route('/technologies', name: 'technologie_create', methods: 'POST')]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ProjetRepository $projetRepository): JsonResponse
    {
        $technologie = $serializer->deserialize($request->getContent(), Technologie::class, 'json');

        $em->persist($technologie);
        $em->flush();

        return $this->json($technologie, 200, [], ['groups' => 'technologie:show']);
    }

    /**
     * Met à jour une Technologie
     */
    #[Route('/technologies/{id}', name: 'technologie_update', methods: 'POST')]
    public function update(Technologie $technologie, Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        $upTechnologie = $serializer->deserialize(
            $request->getContent(),
            Technologie::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $technologie]);

        $em->persist($upTechnologie);
        $em->flush();

        return $this->json($technologie, 200, [], ['groups' => 'technologie:show']);
    }

    /**
     * Supprime une Technologie
     */
    #[Route('/technologies/{id}', name: 'technologie_delete', methods: 'DELETE')]
    public function delete(Technologie $technologie, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($technologie);
        $em->flush();

        return $this->json("{ 'response' : \"Good job\" }");
    }

    /**
     * Supprime la liaison d'une Technologie avec un Projet
     */
    #[Route('/projet-remove-technologie', name: 'projet_remove_technologie', methods: 'DELETE')]
    public function removeTechnologie(Request $request, ProjetRepository $projetRepository, TechnologieRepository $technologieRepository, EntityManagerInterface $em): JsonResponse
    {
        $content = $request->toArray();
        $technologie =
            $technologieRepository
                ->find($content['technologie_id'])
                ->removeProjet(
                    $projetRepository
                        ->find($content['projet_id'])
                );

        $em->persist($technologie);
        $em->flush();

        return $this->json($technologie, 200, [], ['groups' => 'technologie:show']);
    }
}
