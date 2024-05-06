<?php

use MongoDB\Client;

function handleLogin($username, $password)
{
    $mongoClient = new Client();
    $dataBase = $mongoClient->photoData;
    $collection = $dataBase->photoUser;

    $user = $collection->findOne(["username" => $username]);

    if($user) {
        if(password_verify($password, $user["password"])) {
            echo "Password OK\n";
            return true;
        } else {
            echo "Pass word Fail\n";
            return false;
        }
    } else {
        echo "User not found\n";
        return false;
    }
}
