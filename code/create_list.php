<?php
    session_start();
    $userId = $_SESSION['userId'];
    require('ketnoi.php');
    $listname = $_POST['listname'];
   
        // $listname = $_POST['listname'];
        $sql = "INSERT INTO list (title) VALUES ('$listname')  ";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $last_id = $db->lastInsertId();
        // echo $last_id;
        $stmt2 = $db->prepare("INSERT INTO user_list(userId, listId) VALUES ('$userId', '$last_id')");
        $stmt2->execute();
        $stmt3 = $db->prepare("SELECT list.* FROM user_list
        INNER JOIN list ON list.id = user_list.listId
        AND $userId   = user_list.userId ");
        $stmt3->execute();
        $list = $stmt3->fetch(PDO::FETCH_ASSOC);
    //   print_r($list);
        // $_SESSION['listId']=$list['id'];
    //     echo $list['id'];

    
?>

