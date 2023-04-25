<?php

namespace App\Entity;

use App\Repository\EtapeRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: EtapeRepository::class)]
class Etape
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['etape:index',
        'etape:show',
        'recit:show'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['etape:index',
        'etape:show',
        'recit:show'])]
    private ?string $en_tant_que = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['etape:index',
        'etape:show',
        'recit:show'])]
    private ?string $situation = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['etape:index',
        'etape:show',
        'recit:show'])]
    private ?string $resultat = null;

    #[ORM\ManyToOne(inversedBy: 'etapes')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['etape:show'])]
    private ?RecitUtilisateur $recit_utilisateur = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEnTantQue(): ?string
    {
        return $this->en_tant_que;
    }

    public function setEnTantQue(string $en_tant_que): self
    {
        $this->en_tant_que = $en_tant_que;

        return $this;
    }

    public function getSituation(): ?string
    {
        return $this->situation;
    }

    public function setSituation(string $situation): self
    {
        $this->situation = $situation;

        return $this;
    }

    public function getResultat(): ?string
    {
        return $this->resultat;
    }

    public function setResultat(string $resultat): self
    {
        $this->resultat = $resultat;

        return $this;
    }

    public function getRecitUtilisateur(): ?RecitUtilisateur
    {
        return $this->recit_utilisateur;
    }

    public function setRecitUtilisateur(?RecitUtilisateur $recit_utilisateur): self
    {
        $this->recit_utilisateur = $recit_utilisateur;

        return $this;
    }
}
