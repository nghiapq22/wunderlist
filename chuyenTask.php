<?php
    require('ketnoi.php');
    session_start();
    $listId = $_GET['listId'];
    $_SESSION['listId'] = $listId ;
    $taskId = $_GET['taskId'];
    $taskStatus = $db->prepare("SELECT status from task WHERE id =$taskId");
    $taskStatus->execute();
    $status = $taskStatus->fetch(PDO::FETCH_ASSOC);
    
    if($status == 0){
        $sql = "UPDATE task set status ='1' WHERE id = $taskId";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $sql2 = "SELECT * from task where listId = $listId";
        $stmt2 = $db->prepare($sql2);
        $stmt2->execute();
        $tasks = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        $_SESSION['tasks']=$tasks;
        header("location:index.php?listId=$listId");
    }
    if($status == 1){
        $sql = "UPDATE task set status ='0' WHERE id = $taskId";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $sql2 = "SELECT * from task where listId = $listId";
        $stmt2 = $db->prepare($sql2);
        $stmt2->execute();
        $tasks = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        $_SESSION['tasks']=$tasks;
        header("location:index.php?listId=$listId");
   
    }
    
?>