<?php
namespace App\Controller\Api;

use App\Entity\DataReporting;
use App\Controller\FileController;
use App\Repository\DataReportingRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CreateDataReportingByUserId extends AbstractController 
{
    protected $dataReportingRepository;
    protected $fileController;

    public function __construct(DataReportingRepository $dataReportingRepository, FileController $controller)
    {
        $this->dataReportingRepository = $dataReportingRepository;
        $this->fileController = $controller;
    }

    public function __invoke(Request $request)
    {
        $dataReporting = new DataReporting();
        $userId = (int) $request->query->get('userid');
        $filePath = (string) $request->query->get('filepath');
        $dataFileJson = $this->fileController->index($filePath);
        $dataReporting->getUser()->id = $userId;
        $dataReporting->setDatareporting($dataFileJson);
        $this->dataReportingRepository->add($dataReporting);
        
        return json_encode($dataReporting);
    }
}