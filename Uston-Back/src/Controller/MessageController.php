<?php

namespace App\Controller;

use App\Entity\Message;
use App\Repository\SuggestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MessageController extends AbstractController
{
    #[Route('/messages', name: 'message_create', methods: 'POST')]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, SuggestionRepository $suggestionRepository): JsonResponse
    {
        $message = $serializer->deserialize(
            $request->getContent(),
            Message::class,
            'json');

        $content = $request->toArray();
        $message->setSuggestion($suggestionRepository->find($content['suggestion_id']));

        $em->persist($message);
        $em->flush();

        return $this->json($message, 200, [], ['groups' => 'message:show']);
    }
}
