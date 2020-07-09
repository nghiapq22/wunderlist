<?php
    require('ketnoi.php');
    $listId = $_GET['listId'];
    // echo $listId;

    $taskId = $_GET['taskId'];
   
      $sql2 = "SELECT * from subtask where taskId = $taskId ";
      $stmt2 = $db->prepare($sql2);
     
      $stmt2->execute();
      $subTasks=$stmt2->fetchAll(PDO::FETCH_ASSOC);
      $_SESSION['subTasks'] = $subTasks;
      print_r($subTasks);
    //   header("location:index.php?listId=$listId&&taskId=$taskId");
?>