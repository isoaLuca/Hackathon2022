<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * 
 * @ApiResource(
 *     normalizationContext={"groups"={"user:read"}},
 *     denormalizationContext={"groups"={"user:write"}},
 *      collectionOperations={
 *          "post"={},
 *          "get"={},
 *          "create_user"={
 *              "method"="POST",
 *              "path"="/users/create",
 *              "controller"=App\Controller\Api\CreateUser::class
 *          }
 *       }     
 * )
 */
#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    /**
     * @Groups("user:read")
     *
    */
    private $id;

    /**
     * @Groups({"user:read", "user:write"})
     *
    */
    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $email;

    /**
     * @Groups({"user:read", "user:write"})
     *
    */
    #[ORM\Column(type: 'json')]
    private $roles = [];

    /**
     * @var string The hashed password
     * @Groups({"user:read", "user:write"})
    */
    #[ORM\Column(type: 'string')]
    private $password;
    /**
     * @var string The hashed password
     * @Groups({"user:read", "user:write"})
    */
    #[ORM\Column(type: 'string', length: 50)]
    private $username;

    /**
     * @Groups({"user:read", "user:write"})
     *
    */
    #[ORM\OneToMany(mappedBy: 'user', targetEntity: DataReporting::class)]
    private $dataReportings;

    /**
     * @Groups({"user:read", "user:write"})
     *
    */
    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private $organisation;

    /**
     * @Groups({"user:read", "user:write"})
     *
    */
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $CompanyAdress;

    /**
     * @Groups({"user:read", "user:write"})
     *
    */
    #[ORM\Column(type: 'json', nullable: true)]
    private $socialnetwork = [];

    public function __construct()
    {
        $this->dataReportings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }
    
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @return Collection<int, DataReporting>
     */
    public function getDataReportings(): Collection
    {
        return $this->dataReportings;
    }

    public function addDataReporting(DataReporting $dataReporting): self
    {
        if (!$this->dataReportings->contains($dataReporting)) {
            $this->dataReportings[] = $dataReporting;
            $dataReporting->setUser($this);
        }

        return $this;
    }

    public function removeDataReporting(DataReporting $dataReporting): self
    {
        if ($this->dataReportings->removeElement($dataReporting)) {
            // set the owning side to null (unless already changed)
            if ($dataReporting->getUser() === $this) {
                $dataReporting->setUser(null);
            }
        }

        return $this;
    }

    public function getOrganisation(): ?string
    {
        return $this->organisation;
    }

    public function setOrganisation(?string $organisation): self
    {
        $this->organisation = $organisation;

        return $this;
    }

    public function getCompanyAdress(): ?string
    {
        return $this->CompanyAdress;
    }

    public function setCompanyAdress(?string $CompanyAdress): self
    {
        $this->CompanyAdress = $CompanyAdress;

        return $this;
    }

    public function getSocialnetworks(): ?array
    {
        return $this->socialnetworks;
    }

    public function setSocialnetworks(?array $socialnetworks): self
    {
        $this->socialnetworks = $socialnetworks;

        return $this;
    }

    public function getSocialnetwork(): ?array
    {
        return $this->socialnetwork;
    }

    public function setSocialnetwork(?array $socialnetwork): self
    {
        $this->socialnetwork = $socialnetwork;

        return $this;
    }
}
