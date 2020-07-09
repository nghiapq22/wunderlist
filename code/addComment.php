<?php
  require('ketnoi.php');
    session_start();
    $user = $_SESSION['email'];
  
    $comment = $_POST['comment'];
    $taskId = $_POST['taskId'];
    $sql = "INSERT into comment(title, taskId) VALUES ('$comment', '$taskId')" ;
    $stmt = $db->prepare($sql);
    $stmt->execute();

    $cmtId = $db->lastInsertId();
    $sql2 = "SELECT * from comment where id = $cmtId ";
    $stmt2 = $db->prepare($sql2);
    $stmt2->execute();
    $comment=$stmt2->fetch(PDO::FETCH_ASSOC);
    $array[] = array(
                'user' => $user,
                'cmtId' => $comment['id'],
                'title' => $comment['title'],
                'time' => $comment['createDate'],
            );

    // $sql2 = "SELECT * from comment where taskId = $taskId ";
    // $stmt2 = $db->prepare($sql2);
    // $stmt2->execute();
    // $comments=$stmt2->fetchAll(PDO::FETCH_ASSOC);
    // foreach($comments as $comment){
    //     $array[] = array(
    //         'user' => $user,
    //         'cmtId' => $comment['id'],
    //         'title' => $comment['title'],
    //         'time' => $comment['createDate'],
    //     );
    // }
    echo json_encode($array);
 ?>