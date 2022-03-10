<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Reader\Csv as ReaderCsv;
use PhpOffice\PhpSpreadsheet\Reader\Ods as ReaderOds;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as ReaderXlsx;

class FileController extends AbstractController
{
    #[Route('/file', name: 'app_file')]
    public function index(): Response
    {   
        $inputFileName = "../var/uploads/DatasHackaton_2022_08_03.xlsx";
        /**  Identify the type of $inputFileName  **/
        $inputFileType = \PhpOffice\PhpSpreadsheet\IOFactory::identify($inputFileName);
        /**  Create a new Reader of the type that has been identified  **/
        $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($inputFileType);
        /**  Load $inputFileName to a Spreadsheet Object  **/
        $spreadsheet = $reader->load($inputFileName);
        /**  Here Iam counting the number of sheets in the file **/
        $count = $spreadsheet->getSheetCount();
        if($count > 1 ){
           $sheetnames = $spreadsheet->getSheetNames();
        }
        /**  Convert Spreadsheet Object to an Array for ease of use  **/

        $arra1 = $spreadsheet->getSheet(1)->toArray();

        return $this->render('file/file.html.twig', [
            'sheet1' => $arra1,
            'sheetname' => $sheetnames,
        ]);
    }        
}
