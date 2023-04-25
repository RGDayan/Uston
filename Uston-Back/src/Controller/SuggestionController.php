<?php

namespace App\Controller;

use App\Entity\RecitUtilisateur;
use App\Entity\Suggestion;
use App\Repository\CategorieRepository;
use App\Repository\ProjetRepository;
use App\Repository\RecitUtilisateurRepository;
use App\Repository\SuggestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use function Symfony\Component\String\s;
use function Symfony\Component\String\u;

class SuggestionController extends AbstractController
{
    #[Route('/suggestions', name: 'suggestion_index', methods: 'GET')]
    public function index(SuggestionRepository $repository): JsonResponse
    {
        return $this->json(
            $repository->findAll(),
            200,
            [] ,
            ['groups' => 'suggestion:index']);
    }

    #[Route('/projets/{id}/suggestions', name: 'suggestion_indexFromProjet', methods: 'GET')]
    public function indexFromProjet(int $id, ProjetRepository $projetRepository): JsonResponse
    {
        $projet = $projetRepository->find($id);

        return $this->json(
            $projet->getSuggestions(),
            200,
            [],
            ['groups' => 'suggestion:indexFromProjet']
        );
    }

    #[Route('/suggestions/{id}', name: 'suggestion_show', methods: 'GET')]
    public function show(Suggestion $suggestion): JsonResponse
    {
        return $this->json(
            $suggestion,
            200,
            [],
            ['groups' => 'suggestion:show']
        );
    }

    #[Route('/suggestions', name: 'suggestion_create', methods: 'POST')]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ProjetRepository $projetRepository): JsonResponse
    {
        $suggestion = $serializer->deserialize(
            $request->getContent(),
            Suggestion::class,
            'json');

        $content = $request->toArray();
        $suggestion->setProjet($projetRepository->find($content['projet_id']));

        $em->persist($suggestion);
        $em->flush();

        return $this->json(
            $suggestion,
            200,
            [],
            ['groups' => 'suggestion:show']);
    }

    #[Route('/suggestions-add-categorie', name: 'suggestion_add_categorie', methods: 'POST')]
    public function addCategorie(Request $request, SuggestionRepository $suggestionRepository, CategorieRepository $categorieRepository, EntityManagerInterface $em): JsonResponse
    {
        $content = $request->toArray();
        $suggestion = $suggestionRepository
            ->find($content['value_id'])
            ->addCategory(
                $categorieRepository
                    ->find($content['categorie_id'])
            );

        $em->persist($suggestion);
        $em->flush();

        return $this->json(
            $suggestion,
            200,
            [],
            ['groups' => 'suggestion:show']);
    }

    #[Route('/suggestions/{id}', name: 'suggestion_update', methods: 'PUT')]
    public function update(Suggestion $suggestion, Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        $upSuggestion = $serializer->deserialize(
            $request->getContent(),
            Suggestion::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $suggestion]);
        $em->persist($upSuggestion);
        $em->flush();

        return $this->json(
            $suggestion,
            200,
            [],
            ['groups' => 'suggestion:show']
        );
    }

    #[Route('/suggestions-remove-categorie', name: 'suggestion_remove_categorie', methods: 'DELETE')]
    public function removeCategorie(Request $request, SuggestionRepository $suggestionRepository, CategorieRepository $categorieRepository, EntityManagerInterface $em): JsonResponse
    {
        $content = $request->toArray();
        $suggestion = $suggestionRepository
            ->find($content['rel_id'])
            ->removeCategory(
                $categorieRepository
                    ->find($content['categorie_id'])
            );

        $em->persist($suggestion);
        $em->flush();

        return $this->json($suggestion, 200, [], ['groups' => 'suggestion:show']);
    }

    #[Route('/suggestions/{id}', name: 'suggestion_delete', methods: 'DELETE')]
    public function delete(Suggestion $suggestion, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($suggestion);
        $em->flush();

        return $this->json("{ 'response': 'Suggestion supprimée' }");
    }
}
