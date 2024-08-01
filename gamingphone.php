<?php

header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$user ='root';
$pass = '';
$dbname = 'ppggameshop_db';

$con = mysqli_connect($server, $user, $pass, $dbname);

$sql = "SELECT * FROM `gamingphone_tbl`;";

mysqli_query($con,$sql);

$result = mysqli_query($con,$sql);

    echo '[';

    for($i = 0 ; $i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
    echo']';




?>