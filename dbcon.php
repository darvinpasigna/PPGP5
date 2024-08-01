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
        $sql = "SELECT * FROM `users_tbl`";
        break;
    case 'POST' :
        $function = $_POST['function'];

        if($function == 'insert'){

            $firstname = $_POST['firstname'];
            $lastname = $_POST['lastname'];
            $email = $_POST['email'];
            $address = $_POST['address'];
            $city = $_POST['city'];
            $username = $_POST['username'];
            $pass = $_POST['pass'];
            $repass = $_POST['repass'];

            $sql = "INSERT INTO `users_tbl`(`firstname`, `lastname`, `email`, `address`, `city`, `username`, `password`, `repassword`) VALUES ('$firstname','$lastname','$email','$address','$city','$username',' $pass','$repass')";
        }else if($function == 'login'){
            $uname = $_POST['uname'];
            $upass = $_POST['upass'];
            $sql = "SELECT `username`, `password` FROM `users_tbl` WHERE `username` = '$uname' AND `password` = '$upass';";

        }else if($function == 'image')
            $img = $_FILES['image']['name'];
            $target_dir = './src/Images/';
            $target_file = $target_dir . $img;

            move_uploaded_file($_FILES['image']['tmp_name'],$target_file);
            $sql = "INSERT INTO `users_tbl` (`image`) VALUES ('$img')";
            break;
    }

    $result = mysqli_query($con,$sql);

if($method == 'GET') {
    echo '[';

    for($i = 0 ; $i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
    echo']';
}



?>