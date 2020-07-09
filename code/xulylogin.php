<?php
    // require('list_user.php');
    // session_start();
    // error_reporting(0);
    // $listUser = $_SESSION['listUser'];
    // // print_r($listUser);
    // if(isset($_POST['login'])){
    //     $email = $_POST['email'];
    //     $password = $_POST['password'];
    //         $mess =true;
    //         $test = false;
    //         for($i=0 ;$i<count($listUser);$i++){
    //             if(  $listUser[$i]->getUsername() == $email  &&  $listUser[$i]->getPassword() == $password )
    //             {
    //                 $test = true;
    //                 $userID = $listUser[$i]->getId();       
    //             }
    //         }
    //         if($test == true){
    //             header('location:index.php');
    //             $_SESSION['id']=$id;
    //             $_SESSION['email'] = $email;
    //         }
    //             else {
    //                 header("location:http://localhost/tech/login.php?mess=$mess");
    //             }
                
                
    //         }

        

    session_start();
    if(isset($_SESSION['email'])){
        header('location:index.php');

    }
    require('ketnoi.php');
    if(isset($_POST['login'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $password = md5($password);
        $query = "SELECT * FROM user WHERE email= '$email' AND password= '$password' ";
        $stmt = $db->prepare($query);
        // $stmt->bindValue(':email',$email);
        // $stmt->bindValue(':password', $password);
        $stmt->execute();
        $count = $stmt->rowCount();
        $user=$stmt->fetch(PDO::FETCH_ASSOC);
        print_r($count);
        echo $query;
        $mess =true;
        if($user){
            $_SESSION['userId'] = $user['id'];
            $_SESSION['email'] = $user['email'];
            // print_r($user['id']);
            header('location:index.php');
            
        }
        else{
            header("location:http://localhost/tech/login.php?mess=$mess");
        }
    
    }
    
    
?>