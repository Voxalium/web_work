<?php

class User
{
    public string $userName;
    public string $hashPassword;

    public function __construct(string $userName, string $hashPassword)
    {
        $this->userName = $userName;
        $this->hashPassword = $hashPassword;
    }
}
