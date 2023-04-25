<?php

namespace App\Controller;

use App\Entity\Etape;
use App\Repository\EtapeRepository;
use App\Repository\ProjetRepository;
use App\Repository\RecitUtilisateurRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class EtapeController extends AbstractController
{
    #[Route('/etapes', name: 'etape_index', methods: 'GET')]
    public function index(EtapeRepository $repository): JsonResponse
    {
        return $this->json(
            $repository->findAll(),
            200,
            [],
            ['groups' => 'etape:index']
        );
    }

    #[Route('/etapes', name: 'etape_create', methods: "POST")]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, RecitUtilisateurRepository $recitUtilisateurRepository): JsonResponse
    {
        $etape = $serializer->deserialize(
            $request->getContent(),
            Etape::class,
            'json');

        $content = $request->toArray();
        $etape->setRecitUtilisateur($recitUtilisateurRepository->find($content['recit_id']));

        $em->persist($etape);
        $em->flush();

        return $this->json($etape, 200, [], ['groups' => 'etape:show']);
    }

    #[Route('/etapes/{id}', name: 'etape_update', methods: 'PUT')]
    public function update(Etape $etape, Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        $upEtape = $serializer->deserialize(
            $request->getContent(),
            Etape::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $etape]
        );

        $em->persist($upEtape);
        $em->flush();

        return $this->json(
            $etape,
            200,
            [],
            ['groups' => 'etape:show']
        );
    }

    #[Route('/etapes/{id}', name: 'etape_delete', methods: 'DELETE')]
    public function delete(Etape $etape, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($etape);
        $em->flush();

        return $this->json("{ 'response': 'Etape supprimée' }");
    }
}
