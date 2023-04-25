<?php

namespace App\Entity;

use App\Repository\RecitUtilisateurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: RecitUtilisateurRepository::class)]
class RecitUtilisateur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['recit:index',
        'recit:indexFromProjet',
        'recit:show',
        'etape:show'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['recit:index',
        'recit:indexFromProjet',
        'recit:show'])]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups('recit:show')]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups('recit:show')]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\ManyToOne(inversedBy: 'recitUtilisateurs')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['recit:show'])]
    private ?Projet $projet = null;

    #[ORM\ManyToMany(targetEntity: Categorie::class, inversedBy: 'recitUtilisateurs')]
    #[Groups(['recit:show'])]
    private Collection $categories;

    #[ORM\OneToMany(mappedBy: 'recit_utilisateur', targetEntity: Etape::class, orphanRemoval: true)]
    #[Groups(['recit:show'])]
    private Collection $etapes;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->etapes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getProjet(): ?Projet
    {
        return $this->projet;
    }

    public function setProjet(?Projet $projet): self
    {
        $this->projet = $projet;

        return $this;
    }

    /**
     * @return Collection<int, Categorie>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Categorie $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
        }

        return $this;
    }

    public function removeCategory(Categorie $category): self
    {
        $this->categories->removeElement($category);

        return $this;
    }

    /**
     * @return Collection<int, Etape>
     */
    public function getEtapes(): Collection
    {
        return $this->etapes;
    }

    public function addEtape(Etape $etape): self
    {
        if (!$this->etapes->contains($etape)) {
            $this->etapes->add($etape);
            $etape->setRecitUtilisateur($this);
        }

        return $this;
    }

    public function removeEtape(Etape $etape): self
    {
        if ($this->etapes->removeElement($etape)) {
            // set the owning side to null (unless already changed)
            if ($etape->getRecitUtilisateur() === $this) {
                $etape->setRecitUtilisateur(null);
            }
        }

        return $this;
    }
}
