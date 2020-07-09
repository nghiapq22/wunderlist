<?php
    require('ketnoi.php');
    session_start();
    $listId = $_GET['listId'];
    $sql = "SELECT * from list where id = '$listId'";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $list = $stmt->fetch(PDO::FETCH_ASSOC);
    $_SESSION['list'] = $list;
    header("location:index.php?listId=$listId");
  
?>