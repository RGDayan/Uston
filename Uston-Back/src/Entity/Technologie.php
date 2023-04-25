<?php

namespace App\Entity;

use App\Repository\TechnologieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TechnologieRepository::class)]
class Technologie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["projet:show", "technologie:index", "technologie:show"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["projet:show", "technologie:index", "technologie:show"])]
    private ?string $libelle = null;

    #[ORM\Column(length: 7)]
    #[Groups(["projet:show", "technologie:index", "technologie:show"])]
    private ?string $codeCouleur = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["projet:show", "technologie:index", "technologie:show"])]
    private ?string $lienDoc = null;

    #[ORM\ManyToMany(targetEntity: Projet::class, inversedBy: 'technologies')]
    #[Groups(["technologie:show", "technologie:index"])]
    private Collection $Projet;

    public function __construct()
    {
        $this->Projet = new ArrayCollection();
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

    public function getLienDoc(): ?string
    {
        return $this->lienDoc;
    }

    public function setLienDoc(?string $lienDoc): self
    {
        $this->lienDoc = trim($lienDoc);

        return $this;
    }

    /**
     * @return Collection<int, Projet>
     */
    public function getProjet(): Collection
    {
        return $this->Projet;
    }

    public function addProjet(Projet $projet): self
    {
        if (!$this->Projet->contains($projet)) {
            $this->Projet->add($projet);
        }

        return $this;
    }

    public function removeProjet(Projet $projet): self
    {
        $this->Projet->removeElement($projet);

        return $this;
    }
}
