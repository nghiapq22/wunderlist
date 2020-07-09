<?php
    require('ketnoi.php');
    $taskId = $_POST['taskId'];
    $taskname = $_POST['taskName'];
    $sql = "UPDATE task set title = '$taskname' where id = $taskId ";
    $stmt = $db->prepare($sql);
    $stmt->execute();

  
    
?>