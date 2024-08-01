<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$server = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'ppggameshop_db';

$con = mysqli_connect($server, $user, $pass, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM `cart_tbl`;";
        $result = mysqli_query($con, $sql);
        
        $cart_items = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $cart_items[] = $row;
        }

        echo json_encode($cart_items);
        break;

    case 'POST':
        $function = $_POST['function'];

        if ($function == 'add') {
            $Name = $_POST['Name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $main_img = $_POST['main_img'];
            

            $stmt = $con->prepare("INSERT INTO `cart_tbl`(`Name`, `description`, `price`, `main_img`) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $Name, $description, $price, $main_img);

            if ($stmt->execute()) {
                echo json_encode(['success' => true]);
            } 

            $stmt->close();
        } else if ($function == "delete") {
            $cart_id = $_POST['id'];
            $del = $con->prepare("DELETE FROM `cart_tbl` WHERE `cart_id` = ?");
            $del->bind_param("s", $cart_id);
            if ($del->execute()) {
                echo json_encode(['success' => true]);
            }
        }
        break;
}

mysqli_close($con);

?>
