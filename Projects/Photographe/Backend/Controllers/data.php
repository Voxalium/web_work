<?php

require "./vendor/autoload.php";

function getData($mongoClient)
{
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;
    $found = $collection->find([]);
    if($found) {
        header("Content-Type: application/json");
        http_response_code(200);

        $jsonData = [];
        foreach($found as $d) {
            $jsonData[] = $d;
        }

        return json_encode($jsonData);
    } else {
        header("HTTP/1.0 404 Not Found");
        echo "Data Not Found\n";
        return false;
    }
}

function postData($mongoClient, $data)
{
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;
    $created = $collection->insertOne($data);
    if($created->getInsertedCount() == 1) {
        header("HTTP/1.0 201 Created");
        echo "Data created\n";
        return true;
    } else {
        header("HTTP/1.0 500 Internal Server Error");
        echo "Can't create data\n";
    }
}

function deleteData($mongoClient, $id)
{
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;

    $deleted = $collection->deleteOne(["_id" => new MongoDB\BSON\ObjectId($id)]);
    if($deleted->getDeletedCount() == 1) {
        header("HTTP/1.0 200 OK");
        echo "Data deleted\n";
        return true;
    } else {
        header("HTTP/1.0 404 Not Found");
        echo "Data not found\n";
        return false;
    }
}

function updateData($mongoClient, $id, $data)
{
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;

    $updated = $collection->updateOne(["_id" => new MongoDB\BSON\ObjectId($id)], ['$set' => $data]);
    if($updated->getModifiedCount() == 1) {
        header("HTTP/1.0 200 OK");
        echo "Data updated\n";
        return true;
    } else {
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
