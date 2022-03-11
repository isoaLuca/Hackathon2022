<?php
namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\DataReportingRepository;

class GetUserReportings extends AbstractController 
{
    public function __construct()
    {
       
    }

    public function __invoke(Request $request, DataReportingRepository $dataReportingRepository)
    {
        $dataReporting = $dataReportingRepository->findByUser((int) $request->query->get('userid'));
        
        return json_encode($dataReporting);
        
    }
}