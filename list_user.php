<?php    
    require('user.php');
    $listUser = array();
    $listUser[] = new User('user0','nghia01@gmail.com','123456');
    $listUser[] = new User('user1','nghia02@gmail.com','123456');
    $listUser[] = new User('user2','nghia03@gmail.com','123456');
    $listUser[] = new User('user3','nghia04@gmail.com','123456');
    $_SESSION['listUser'] = $listUser;
    
    // print_r($listUser);
?>