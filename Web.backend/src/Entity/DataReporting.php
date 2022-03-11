<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DataReportingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DataReportingRepository::class)]

/**
 * 
 * @ApiResource(
 *     normalizationContext={"groups"={"user:read"}},
 *     denormalizationContext={"groups"={"user:write"}},
 *      collectionOperations={
 *          "get"={},
 *          "post"={},
 *          "get"={
 *              "method"="GET",
 *              "openapi_context" = {
 *                  "parameters" = {
 *                      {
 *                          "name" = "userid",
 *                          "in" = "query"
 *                      }
 *                   }
 *               }, 
 *              "path"="/datareporting/getreportingbyuser",
 *              "controller"=App\Controller\Api\GetUserReportings::class
 *          }
 *       }     
 * )
 */

class DataReporting
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'dataReportings')]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $finalreportingpath;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private $created_at;

    #[ORM\Column(type: 'json', nullable: true)]
    private $datareporting = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getFinalreportingpath(): ?string
    {
        return $this->finalreportingpath;
    }

    public function setFinalreportingpath(?string $finalreportingpath): self
    {
        $this->finalreportingpath = $finalreportingpath;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(?\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getDatareporting(): ?array
    {
        return $this->datareporting;
    }

    public function setDatareporting(?array $datareporting): self
    {
        $this->datareporting = $datareporting;

        return $this;
    }
}
