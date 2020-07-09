<?php
$dsn = 'mysql:host=localhost; dbname=wunderlist';
$username = 'root';
$password = '';
try {
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo 'Kết nối thành công';
} catch (PDOException $e) {
    // $error = $e->getMessage();
    // echo $error;
    echo "Kết nối thất bại: " . $e->getMessage();
}


// $servername = "mysql:host=localhost;dbname=wunderlist";
// $username = "root";
// $password = "";

// try {
//     $db = new PDO($servername, $username, $password);
//     // set the PDO error mode to exception
//     $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "Connected successfully";
// } catch (PDOException $e) {
//     echo "Connection failed: " . $e->getMessage();
// }



?>