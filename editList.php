<?php
    require('ketnoi.php');
    session_start();
  
        $listId = $_POST['listId'];
        $listname = $_POST['listname'] ;
        $sql = "UPDATE list set title ='$listname' where id = $listId";
        $stmt = $db->prepare($sql);
        $stmt->execute();
   
?>