<?php

namespace App\Controller\Default;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Service\Mailer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{
    
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasherInterface, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasherInterface->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            if ($user->getEmail() === 'julioocesarr@outlook.fr') {
                $user->setRoles(['ROLE_ADMIN']);
            } else {
                $user->setRoles(['ROLE_USER']);
            }

            /*$user->setToken(rtrim(strtr(base64_encode(random_bytes(150)), '+/', '-_'), '='));
            $user->setCreatedAt(new \DateTimeImmutable());
            $user->setUpdatedAt(new \DateTimeImmutable());
            */

            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Utilisateur crée !'); // TODO translation
            $this->mailer->sendRegisterMail($user);

            return $this->redirectToRoute('app_login');
        }


        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView()
        ]);
    }

    #[Route('/register/validate', name: 'app_register_validate')]
    public function registerValidate(Request $request, UserRepository $userRepository, EntityManagerInterface $entityManager) {
        $token = $request->get('token');
        $user = $userRepository->findOneBy(['token' => $token]);

        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

       // $user->setToken('');
        $entityManager->flush();

        $this->addFlash('success', 'Adresse mail validée !'); // TODO translation

        return $this->redirectToRoute('app_login');
    }
}
