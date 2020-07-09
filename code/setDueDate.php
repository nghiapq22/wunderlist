<?php
    require('ketnoi.php');
    session_start();
    $time = $_POST['date'];
    $listId = $_SESSION['listId'];
    $taskId = $_SESSION['taskId'];
    $sql = " UPDATE task set setDueDate = '$time' where id = $taskId " ;
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $sql2 = "SELECT * from task where id = $taskId";
    $stmt2 = $db->prepare($sql2);
    $stmt2->execute();
    $task = $stmt2->fetch(PDO::FETCH_ASSOC);
  
    $_SESSION['task'] = $task;
    
    header("location:index.php?listId=$listId&&taskId=$taskId");
?>