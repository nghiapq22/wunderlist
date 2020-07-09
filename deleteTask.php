<?php
    require('ketnoi.php');
    // session_start();
    // error_reporting();
    // $listId = $_SESSION['listId'];
    $taskId = $_POST['taskId'];
    $sql = "DELETE FROM task where id = $taskId";
    // echo ($sql);
    $stmt = $db->prepare($sql);
    $stmt->execute();
    // $_SESSION['listId']=$listId;
    // $sql2 = "SELECT * from task WHERE listId = $listId";
    // $stmt2 = $db->prepare($sql2);
    // $stmt2->execute();
    // $tasks = $stmt2->fetchAll(PDO::FETCH_ASSOC);
    // $_SESSION['tasks'] = $tasks;
    // // echo $listId;
    // // print_r($tasks);
    // header("location:index.php?listId=$listId");
    
?>