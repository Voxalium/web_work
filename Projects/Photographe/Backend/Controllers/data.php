<?php


require "./vendor/autoload.php";

function getData($mongoClient)
{
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;
    return $collection->find([]);
}
function postData($mongoClient, $data)
{
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;
    $collection->insertOne($data);
}
function deleteData($mongoClient, $id)
{
    echo $id;
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;

    $deleted = $collection->deleteOne(["_id" => new MongoDB\BSON\ObjectId($id)]);
    if($deleted->getDeletedCount() == 1) {
        header("HTTP/1.0 200 OK");
        echo $id;
        echo "Data deleted";
        return true;
    } else {
        echo $id;
        header("HTTP/1.0 404 Not Found");
        echo "Data not found";
        return false;
    }
}

function converter($photo)
{
    return [
        'title' => $photo->title,
        'description' => $photo->description,
        'tag' => $photo->tag,
        'img' => $photo->img,
    ];
}
