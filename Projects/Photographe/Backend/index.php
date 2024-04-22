<?php

require "./Controllers/data.php";
$uri = $_SERVER["REQUEST_URI"];

switch($uri) {
    case "/":
        echo "Hello from / \n";
        break;
    case "/api/login":
        echo "Hello from /api/login";
        break;
    case "/api/datas":
        header("Content-Type: application/json");
        $data = getData();
        $jsonData = [];
        foreach($data as $d) {
            $jsonData[] = $d;
        }
        echo  json_encode($jsonData);
        break;
    default:
        echo "404";
}
