<?php
    require('ketnoi.php');
    session_start();
    error_reporting();
    $listId = $_POST['list'];
    $sql = "DELETE FROM list where id = $listId";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    // unset($_SESSION['tasks']);
    
    

?>