<?php
    require('ketnoi.php');
    $cmtId = $_POST['cmtId'];
    $sql = "DELETE from comment where id = $cmtId";
    $stmt = $db->prepare($sql);
    $stmt->execute();
?>
?>