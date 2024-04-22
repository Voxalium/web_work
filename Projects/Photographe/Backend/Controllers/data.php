<?php

require "./vendor/autoload.php";

use MongoDB\Client;

function getData()
{
    $mongoClient = new Client("mongodb://localhost:27017");
    $database = $mongoClient->photoData;
    $collection = $database->photoCollection;
    return $collection->find([]);

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
