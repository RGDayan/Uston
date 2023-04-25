<?php

namespace App\Entity;

use App\Repository\CategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CategorieRepository::class)]
class Categorie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["projet:show",
        "categorie:show",
        'recit:indexFromProjet',
        'recit:show',
        'suggestion:show',
        'suggestion:indexFromProjet'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["projet:show",
        "categorie:show",
        'recit:indexFromProjet',
        'recit:show',
        'suggestion:show',
        'suggestion:indexFromProjet'])]
    private ?string $libelle = null;

    #[ORM\Column(length: 7)]
    #[Groups(["projet:show",
        "categorie:show",
        'recit:indexFromProjet',
        'recit:show',
        'suggestion:show',
        'suggestion:indexFromProjet'])]
    private ?string $codeCouleur = null;

    #[ORM\ManyToOne(inversedBy: 'categories')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["categorie:show"])]
    private ?Projet $Projet = null;

    #[ORM\ManyToMany(targetEntity: RecitUtilisateur::class, mappedBy: 'categories')]
    private Collection $recitUtilisateurs;

    #[ORM\ManyToMany(targetEntity: Suggestion::class, mappedBy: 'categories')]
    private Collection $suggestions;

    public function __construct()
    {
        $this->recitUtilisateurs = new ArrayCollection();
        $this->suggestions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = trim($libelle);

        return $this;
    }

    public function getCodeCouleur(): ?string
    {
        return $this->codeCouleur;
    }

    public function setCodeCouleur(string $codeCouleur): self
    {
        $this->codeCouleur = trim($codeCouleur);

        return $this;
    }

    public function getProjet(): ?Projet
    {
        return $this->Projet;
    }

    public function setProjet(?Projet $Projet): self
    {
        $this->Projet = $Projet;

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
            $recitUtilisateur->addCategory($this);
        }

        return $this;
    }

    public function removeRecitUtilisateur(RecitUtilisateur $recitUtilisateur): self
    {
        if ($this->recitUtilisateurs->removeElement($recitUtilisateur)) {
            $recitUtilisateur->removeCategory($this);
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
            $suggestion->addCategory($this);
        }

        return $this;
    }

    public function removeSuggestion(Suggestion $suggestion): self
    {
        if ($this->suggestions->removeElement($suggestion)) {
            $suggestion->removeCategory($this);
        }

        return $this;
    }
}
