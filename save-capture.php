<?php

$image = $_POST["image"];
$image = explode(";" ,$image)[1];
$image = str_replace(" ", "+",$image);

$image = explode("," ,$image)[1];

$image = base64_decode($image)

file_put_contents("filename.jpeg" , $image);

echo "done";