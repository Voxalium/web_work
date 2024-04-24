<?php

require "./Controllers/data.php";
$uri = $_SERVER["REQUEST_URI"];


function getImage($imageName)
{
    $imagePath = "./Img/" . $imageName;

    if(file_exists($imagePath)) {
        header("Content-Type: image/webp");
        readfile($imagePath);
    } else {
        header("HTTP/1.0 404 Not Found");
        echo "404 - Image Not Found";
    }

}

function handleAPIRequest($uri)
{
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
            header("HTTP/1.0 404 Not Found");
            echo "404 Page Not Found";
    }
}

if(strpos($uri, "/img/") === 0) {
    $imageName = basename($uri);
    getImage($imageName);
} else {
    handleAPIRequest($uri);
}
