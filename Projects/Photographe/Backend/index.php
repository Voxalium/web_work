<?php

require "./Controllers/data.php";
$uri = $_SERVER["REQUEST_URI"];

switch($uri) {
    case "/":
        echo "Hello from /";
        break;
    case "/api/login":
        echo "Hello from /api/login";
        break;
    case "/api/datas":
        $data = getData();
        foreach($data as $d) {
            var_dump($d);
        }
        break;
    default:
        echo "404";
}
