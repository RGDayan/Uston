<?php

namespace App\Entity;

use App\Repository\ProjetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProjetRepository::class)]
class Projet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["projet:index",
        "projet:show",
        "categorie:show",
        "technologie:show",
        "technologie:index",
        "recit:indexFromProjet",
        "recit:show",
        "suggestion:show"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["projet:index",
        "projet:show",
        "categorie:show",
        "technologie:show",
        "technologie:index",
        "recit:indexFromProjet",
        "suggestion:index"])]
    private ?string $titre = null;

    #[ORM\Column(length: 500)]
    #[Groups(["projet:index",
        "projet:show",
        "categorie:show",
        "technologie:show",
        "technologie:index",
        "recit:indexFromProjet"])]
    private ?string $besoin = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["projet:index",
        "projet:show",
        "categorie:show",
        "technologie:show",
        "technologie:index",
        'recit:indexFromProjet'])]
    private ?string $description = null;

    #[ORM\OneToMany(mappedBy: 'Projet', targetEntity: Categorie::class, orphanRemoval: true)]
    #[Groups(["projet:show",
        "recit:show",
        "suggestion:show"])]
    private Collection $categories;

    #[ORM\ManyToMany(targetEntity: Technologie::class, mappedBy: 'Projet')]
    #[Groups("projet:show")]
    private Collection $technologies;

    #[ORM\Column]
    #[Groups(["projet:index",
        "projet:show",
        "categorie:show",
        'recit:indexFromProjet'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToMany(mappedBy: 'projet', targetEntity: RecitUtilisateur::class, orphanRemoval: true)]
    #[Groups('recit:indexFromProjet')]
    private Collection $recitUtilisateurs;

    #[ORM\OneToMany(mappedBy: 'projet', targetEntity: Suggestion::class, orphanRemoval: true)]
    #[Groups(['suggestion:indexFromProjet'])]
    private Collection $suggestions;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->technologies = new ArrayCollection();
        $this->recitUtilisateurs = new ArrayCollection();
        $this->suggestions = new ArrayCollection();
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
        $this->titre = trim($titre);

        return $this;
    }

    public function getBesoin(): ?string
    {
        return $this->besoin;
    }

    public function setBesoin(string $besoin): self
    {
        $this->besoin = trim($besoin);

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = trim($description);

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
            $category->setProjet($this);
        }

        return $this;
    }

    public function removeCategory(Categorie $category): self
    {
        if ($this->categories->removeElement($category)) {
            // set the owning side to null (unless already changed)
            if ($category->getProjet() === $this) {
                $category->setProjet(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Technologie>
     */
    public function getTechnologies(): Collection
    {
        return $this->technologies;
    }

    public function addTechnology(Technologie $technology): self
    {
        if (!$this->technologies->contains($technology)) {
            $this->technologies->add($technology);
            $technology->addProjet($this);
        }

        return $this;
    }

    public function removeTechnology(Technologie $technology): self
    {
        if ($this->technologies->removeElement($technology)) {
            $technology->removeProjet($this);
        }

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection<int, RecitUtilisateur>
     */
    public function getRecitUtilisateurs(): Collection
    {
        return $this->recitUtilisateurs;
    }

    public function addRecitUtilisateur(RecitUtilisateur $recitUtilisateur): self
    {
        if (!$this->recitUtilisateurs->contains($recitUtilisateur)) {
            $this->recitUtilisateurs->add($recitUtilisateur);
            $recitUtilisateur->setProjet($this);
        }

        return $this;
    }

    public function removeRecitUtilisateur(RecitUtilisateur $recitUtilisateur): self
    {
        if ($this->recitUtilisateurs->removeElement($recitUtilisateur)) {
            // set the owning side to null (unless already changed)
            if ($recitUtilisateur->getProjet() === $this) {
                $recitUtilisateur->setProjet(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Suggestion>
     */
    public function getSuggestions(): Collection
    {
        return $this->suggestions;
    }

    public function addSuggestion(Suggestion $suggestion): self
    {
        if (!$this->suggestions->contains($suggestion)) {
            $this->suggestions->add($suggestion);
            $suggestion->setProjet($this);
        }

        return $this;
    }

    public function removeSuggestion(Suggestion $suggestion): self
    {
        if ($this->suggestions->removeElement($suggestion)) {
            // set the owning side to null (unless already changed)
            if ($suggestion->getProjet() === $this) {
                $suggestion->setProjet(null);
            }
        }

        return $this;
    }
}
