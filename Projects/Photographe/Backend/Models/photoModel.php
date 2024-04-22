<?php

class Photo
{
    public string $title;
    public string $description;
    public string $tag;
    public string $img;

    public function __construct(string $title, string $description, string $tag, string $img)
    {
        $this->title = $title;
        $this->description = $description;
        $this->tag = $tag;
        $this->img = $img;
    }
}
