<?php
    require('ketnoi.php');
    session_start();
    // $listId = $_GET['listId'];
    // $_SESSION['listId'] = $listId ;
    $taskId = $_POST['taskId'];
        $sql = "UPDATE task set status ='1' WHERE id = $taskId";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        // $sql2 = "SELECT * from task where listId = $listId";
        // $stmt2 = $db->prepare($sql2);
        // $stmt2->execute();
        // $tasks = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        // $_SESSION['tasks']=$tasks;
        // header('location:index.php?listId='.$listId.'&&taskId='.$taskId);
    
    
?>