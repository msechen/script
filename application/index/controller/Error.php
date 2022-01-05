<?php
namespace app\index\controller;

use think\Request;

class Error 
{
    public function index(Request $request)
    {
        $action = $request->controller();
        return $action.'Page does not exist';
    }
}