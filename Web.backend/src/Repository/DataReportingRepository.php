<?php

namespace App\Repository;

use App\Entity\DataReporting;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DataReporting|null find($id, $lockMode = null, $lockVersion = null)
 * @method DataReporting|null findOneBy(array $criteria, array $orderBy = null)
 * @method DataReporting[]    findAll()
 * @method DataReporting[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DataReportingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DataReporting::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(DataReporting $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(DataReporting $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
      * @return DataReporting[] Returns an array of DataReporting objects
      *gets all reporting by user
    */
    public function findByUser($idUser)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.user = :val')
            ->setParameter('val', $idUser)
            ->getQuery()
            ->getArrayResult()  
        ;
    }
    

    /*
    public function findOneBySomeField($value): ?DataReporting
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
