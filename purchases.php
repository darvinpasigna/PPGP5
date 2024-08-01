<?php

header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$user ='root';
$pass = '';
$dbname = 'ppggameshop_db';

$con = mysqli_connect($server, $user, $pass, $dbname);
$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET' :
        $sql = "SELECT * FROM `purchases_tbl`";
        break;
    case 'POST' :
        $function = $_POST['function'];

        if($function == 'add'){

            $Name = $_POST['Name'];
            $price = $_POST['price'];
            $main_img = $_POST['main_img'];

            $stmt = $con->prepare("INSERT INTO `purchases_tbl`(`Name`, `price`, `main_img`) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $Name, $price, $main_img);

            if ($stmt->execute()) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false, 'error' => $stmt->error]);
            }

            $stmt->close();
        }
        break;
}

mysqli_query($con,$sql);

$result = mysqli_query($con,$sql);

    echo '[';

    for($i = 0 ; $i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
    echo']';




?>