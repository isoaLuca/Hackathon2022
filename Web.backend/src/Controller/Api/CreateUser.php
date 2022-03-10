<?php
namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Manager\UserManager;

class CreateUser extends AbstractController 
{
    protected $userManager;

    public function __construct(UserManager $userManager)
    {
        $this->userManager = $userManager;
    }

    public function __invoke($data)
    {
        return $this->userManager->registerAccount($data);
    }
}