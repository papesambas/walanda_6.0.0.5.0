<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LogistiquesController extends AbstractController
{
    #[Route('/logistiques', name: 'app_logistiques')]
    public function index(): Response
    {
        return $this->render('logistiques/index.html.twig', [
            'controller_name' => 'LogistiquesController',
        ]);
    }
}
