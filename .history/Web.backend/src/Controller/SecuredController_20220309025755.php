<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecuredController extends AbstractController
{
    #[Route('/secured', name: 'app_secured')]
    public function index(): Response
    {
        return $this->render('secured/index.html.twig', [
            'controller_name' => 'SecuredController',
        ]);
    }

    #[Route(path: '/api/login', name: 'api_login', methods:['POST'])]
    public function apiLoginin(){
        $user = $this->getUser();
        return $this->json([
            'roles' => $user->getRoles(),
            
        ]); 
    }


}
