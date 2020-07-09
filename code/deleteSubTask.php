<?php
    require('ketnoi.php');
    $subTaskId = $_POST['subTaskId'];
    $sql = "DELETE from subtask where id = '$subTaskId'";
    $stmt = $db->prepare($sql);
    $stmt->execute();
?>