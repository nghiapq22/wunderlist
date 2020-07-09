<?php
    require('ketnoi.php');
    
   
    $taskId = $_POST['taskId'];
    $sql = "SELECT * from task where id = $taskId";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $task = $stmt->fetch(PDO::FETCH_ASSOC);
    

    
   


   
  ?>