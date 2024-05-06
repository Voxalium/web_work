<?php

use MongoDB\Client;

function createUser($user)
{
    $mongoClient = new Client();
    $dataBase = $mongoClient->photoData;
    $collection = $dataBase->photoUser;
    $collection->insertOne($user);
}
