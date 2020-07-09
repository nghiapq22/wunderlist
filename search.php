<?php
    require('ketnoi.php');
    // session_start();


    // unset($_SESSION['search']);
    // unset($_SESSION['task']);
    // unset($_SESSION['comments']);
    // unset($_SESSION['subtasks']);




    $search = $_POST['search'];
    $sql = "SELECT DISTINCT listId from task WHERE title LIKE '%$search%' and status ='0'";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $listIds = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $num = $stmt->rowCount();
    $array = array();
    foreach($listIds as $listId){      
        $listId =  $listId['listId'] ;
        $sql2 = "SELECT * from list where id = '$listId'";
        $stmt2 = $db->prepare($sql2);
        $stmt2->execute();
        $lists = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        foreach($lists as $list)
        {
            $array_list[] = array(
                'title1' => $list['title'],
                'id' => $list['id'],
            );
        }
        $sql3 = "SELECT * from task where listId = '$listId' and title like '%$search%'";
        $stmt3 = $db->prepare($sql3);
        $stmt3->execute();
        $tasks = $stmt3->fetchAll(PDO::FETCH_ASSOC);
        foreach($tasks as $task){
            $array_task[] = array(
                'title2' => $task['title'],
                'listId' => $task['listId'],
            );
        }
        $array = array( $array_list,$array_task,$num);
    }
   
    print_r(json_encode($array)) ;
       
    // $sql2 = "SELECT * from list where id = ";
    // $stmt = $db->prepare($sql);
    // $stmt->execute();
    
    // $lists = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // $num = $stmt->rowCount();
    // echo $num;
    // unset($_SESSION['tasks']);
    // $_SESSION['lists-search'] = $lists;
    // $_SESSION['num'] = $num;
    // $_SESSION['search'] = $search;
    // foreach($tasks as $task){
    //     $listId = $task['listId'];
    //     $sql2 = "SELECT * from list where id = '$listId'";
    //     $stmt2 = $db->prepare($sql2);
    //     $stmt2->execute();
    //     $list = $stmt2->fetch(PDO::FETCH_ASSOC);
    // }

    // header("location:index.php");
?>