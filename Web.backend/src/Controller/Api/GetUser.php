<?php
namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
class GetUser extends AbstractController 
{
    protected $userManager;

    public function __construct()
    {
        
    }

    public function __invoke($data)
    {
        return $this->userManager->registerAccount($data);
    }
}