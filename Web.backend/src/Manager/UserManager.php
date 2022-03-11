<?php

namespace App\Manager;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Services\PasswordService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserManager
{
    /**
     * @var MailerInterface
     */
    protected $mailer;
    /**
     * @var EntityManagerInterface
     */
    protected $em;

    /**
     * @var PasswordService
     */
    protected $passwordService;

    /**
     * @var UserRepository
     */
    protected $userRepository;

    protected $userPasswordHasherInterface;

    /**
     * UserManager constructor.
     * @param EntityManagerInterface $entityManager
     * @param PasswordService $passwordService
     * @param UserRepository $userRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        UserRepository $userRepository,
        MailerInterface $mailer,
        UserPasswordHasherInterface $userPasswordHasherInterface
    ) {
        $this->em = $entityManager;
        $this->userRepository = $userRepository;
        $this->userPasswordHasherInterface = $userPasswordHasherInterface;
        $this->mailer = $mailer;
    }


     /**
     * @param int $id
     */
    public function remove(int $id)
    {
        $user = $this->userRepository->find($id);

        if ($user instanceof User) {
            $user->setEmail('***********************');
            $user->setUsername('***********************');
            $this->em->persist($user);
            $this->em->flush();
        }
    }

    /**
     * @param string $email
     * @return mixed
     */
    public function findByEmail(string $email)
    {
        $user = $this->userRepository->findByEmail($email); 

        if ($user) {
            return $user[0];
        }

        return null;
    }

    public function registerAccount(User $user)
    {
        $userToPersist = new User();
        $email = (new Email())
            ->from('admin@beautyweard.com')
            ->to($user->getEmail())
            ->subject('Time for Symfony Mailer!')
            ->text('Sending emails is fun again!')
            ->html('<p>See Twig integration for better HTML integration!</p>');
        //dd($email);    
        $userToPersist->setUsername($user->getUsername());
        $userToPersist->setEmail($user->getEmail());
        $userToPersist->setRoles($user->getRoles());
        $userToPersist->setPassword($this->userPasswordHasherInterface->hashPassword($user, $user->getPassword()));
        $this->em->persist($userToPersist);
        $this->em->flush();
        $this->mailer->send($email);

        return [
            'message' => 'Ok.'
        ];
    }


}    