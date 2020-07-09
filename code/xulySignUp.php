<?php
    // require('list_user.php'); 
    // session_start();
    // $listUser = $_SESSION['listUser'];
    // // print_r($listUser);
    // if(isset($_POST['sign_up'])){
    //     $email = $_POST['email'];
    //     $password = $_POST['password'];
    //     $re_password = $_POST['re-password'];
    //     $thongbao = true;
    //     if( $email=='' || $password == '' || $re_password ==''){
    //         echo "bạn không đước để trống thông tin";
    //     }
    //     else
    //     {
    //         for ($i = 0; $i < count($listUser); $i++)
    //         {
    //             if( $email == $listUser[$i]->getUsername())
    //             {
                    
    //                 header("location:sign-up.php?exist=$thongbao"); 
    //                 exit;
    //             }
    //         }               
    //         if($_POST['password'] != $_POST['re-password'])
    //         {
    //             header("location:sign-up.php?same=$thongbao");   
    //         }
    //         else
    //         {
    //             $listUser = $_SESSION['listUser'];
    //             $listUser[] = new User( count($listUser),$email,$password);   // them vao cuoi mang
    //             $_SESSION['listUser'] = $listUser;
    //             header("location:login.php?success=$thongbao");
    //             // print_r($listUser);
    //         }
    //     }
            
                
           
        
    // }

    require('ketnoi.php');
    if(isset($_POST['sign_up'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $re_password = $_POST['re-password'];
        $query = "SELECT * FROM user WHERE email = :email";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':email',$email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        print_r($user);
        
        $thongbao = true;
        if($user){
            // $error = 'tai khoan ton tai';
            header("location:sign-up.php?exist=$thongbao"); 
            exit;
        }
        if($password != $re_password){
            header("location:sign-up.php?same=$thongbao");
        }
        else{
            // $password = password_hash($password, PASSWORD_DEFAULT);
            // $query = $db->prepare(
            //     INSERT INTO user (email, password)
            //     VAlUES (:email,:password)
            // );
            
            $query ="INSERT INTO user (email, password) VALUES (:email, :password)";
            $stmt = $db->prepare($query);
                         
            
            $stmt->bindParam(':email',$email);
            $stmt->bindParam(':password', md5($password) );
            $stmt->execute();
            // echo $query;
              
            // echo "dang ki thanh cong"; 
            header("location:login.php?success=$thongbao");
        
        }
    }


  

?>