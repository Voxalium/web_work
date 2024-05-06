<?php

require "./Controllers/data.php";
require "./Controllers/login.php";

$uri = $_SERVER["REQUEST_URI"];

$mongo = new MongoDB\Client("mongodb://localhost:27017");
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

function handleAPIRequest($uri, $mongoClient)
{
    $method = $_SERVER['REQUEST_METHOD'];

    switch($uri) {
        case "/":
            echo "Hello from / \n";
            break;
        case "/api/login":
            if($method == "POST") {
                $username = $_POST["username"];
                $password = $_POST["password"];
                $loginResult = handleLogin($username, $password);

                if($loginResult) {
                    http_response_code(200);
                    echo "Login Success\n";
                } else {
                    http_response_code(401);
                    echo "Login Fail\n";
                }
            }
            break;
        case "/api/datas":
            switch($method) {
                case "GET":
                    $data = getData($mongoClient);
                    if($data) {
                        header("Content-Type: application/json");
                        http_response_code(200);
                        $jsonData = [];
                        foreach($data as $d) {
                            $jsonData[] = $d;
                        }
                    } else {
                        header("HTTP/1.0 404 Not Found");
                        echo "Data not found";
                    }
                    echo  json_encode($jsonData);
                    break;
                case "POST":
                    //TODO REQUIRED FIELDS
                    $title = $_POST["title"];
                    $description = $_POST["description"];
                    $tag = $_POST["tag"];
                    $img = $_POST["img"];

                    $data = [
                        "title" => $title,
                        "description" => $description,
                        "tag" => $tag,
                        "img" => $img
                    ];

                    postData($mongoClient, $data);

                    break;
            }
            break;
        case "/api/delete":
            switch ($method) {
                case "POST":
                    $id = $_POST["id"];
                    deleteData($mongoClient, $id);
            }
            break;

        default:
            http_response_code(404);
            echo "Page not found";

    }

}

if(strpos($uri, "/img/") === 0) {
    $imageName = basename($uri);
    getImage($imageName);
} else {
    handleAPIRequest($uri, $mongo);
}
