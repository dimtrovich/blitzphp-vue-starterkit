<?php

namespace App\Controllers;

use BlitzPHP\Core\Application;

class HomeController
{
    public function index()
    {
        return view('app');
    }

    public function info()
    {
        sleep(1);
        
        return [
            [
                'name'  => 'BlitzPHP',
                'version'  => Application::VERSION,
            ],
            [
                'name'  => 'PHP',
                'version'  => phpversion()
            ],
            [
                'name'  => 'Node',
                'version'  => exec('node -v')
            ],
            [
                'name'  => 'ViteJs',
                'version'  => 'v7'
            ]
        ];
    }
}
