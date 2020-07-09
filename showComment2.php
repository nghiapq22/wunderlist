<?php
    include('ketnoi.php');
    $taskId = $_POST['taskId'];
    $sql3 = "SELECT * from comment where taskId = $taskId ";
    $stmt3 = $db->prepare($sql3);
    $stmt3->execute();
    $comments=$stmt3->fetchAll(PDO::FETCH_ASSOC);
    foreach($comments as $comment){
        $return_arr[] = array(
            "id" => $comment['id'],
            "title" => $comment['title'],
            "date" => $comment['createDate']
        );
    }
    echo json_encode($return_arr);
    
?>