<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Helper\Helper;
use DateTime;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class AuthController extends AbstractController
{
    #[Route('/auth', name: 'app_auth')]
    public function index(): Response
    {
        return $this->render('auth/index.html.twig', [
            'controller_name' => 'AuthController',
        ]);
    }

    /**
    * @Route("/register", name="api_register", methods={"POST"})
    */
    
    /*public function register(Request $request, UserPasswordEncoderInterface $encoder, Helper $helper)
    {
        $em = $this->getDoctrine()->getManager();
        $request = $this->transformJsonBody($request);
        try {
        $user = new User(
        $request->get('email'),
        $request->get('password'),
        $request->get('firstName'),
        $request->get('lastName'),
        $request->get('birthday')
        );
        } catch (\TypeError $typeError) {
        return $this->respondValidationError("Invalid arguments !");
        }
        
        
        
        try {
        $helper->isValid($user);
        } catch (\Exception $exception) {
        return $this->respondValidationError($exception->getMessage());
        }
        
        
        
        $user->setBirthday(DateTime::createFromFormat('d-m-Y', $user->getBirthdayString()));
        $em->persist($user);
        $em->flush();
        return $this->respondWithSuccess(sprintf('User %s successfully created', $user->getUsername()));
    }*/
    
    
    
    /**
    * @Route("/api/login_check", name="api_login_check")
    *
    * @param UserInterface $user
    * @param JWTTokenManagerInterface $JWTManager
    * @return JsonResponse
    */
    public function getTokenUser(UserInterface $user, JWTTokenManagerInterface $JWTManager)
    {
        return new JsonResponse(['token' => $JWTManager->create($user)]);
    }
}
