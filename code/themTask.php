<?php
    require('ketnoi.php');
    error_reporting(0);
    session_start();
    // if(!isset($listId)){
    //     header("location:index.php");
    // }
    $listId = $_POST['listId'];
//    echo $listId;
//    if($_SERVER['REQUEST_METHOD']=='POST'){
    $taskname = $_POST['addTask'];

    // $sql = "SELECT task.* from task where task.listId=$listId";
    // $stmt = $db->prepare($sql);
    // $stmt->execute(array($sql));
    // $data=$stmt->fetch(PDO::FETCH_ASSOC);
    // $_SESSION['tasks'] = $data;
    // $taskname = $_POST['addTask'];
    // if($sql){

        // unset($_SESSION['search']);
        // unset($_SESSION['task']);
        // unset($_SESSION['comments']);
        // unset($_SESSION['subtasks']);

    $sql = "INSERT INTO task (title, listId) VALUES ('$taskname', '$listId') ";
    $stmt = $db->prepare($sql);
    $stmt->execute();
       
 
//     $taskId = $db->lastInsertId();

//     echo'
    
//     <li class="task-item">
//     <div class="icon-1">
//     <a href="chuyenTaskxuong.php?listId='.$listId.'&&taskId='.$taskId.'">
//         <svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
//             xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;">
//             <g>
//                 <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z"
//                     style="fill:none;stroke-width:1px"></path>
//             </g>
//         </svg>
//     </a>
//     </div>
//     <a href="display-view.php?listId='.$listId.'&&taskId='.$taskId.'">
//     <div class="text"> <span>'
//     .$taskname.'</span><br><span>'.$taskId.'</span>
//     </div>
//     </a>
//     <div class="icon-2">
//         <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"
//             xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
//             <g>
//                 <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path>
//             </g>
//         </svg>
//     </div>
//     <div class="icon-3">
//         <svg width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg"
//             xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
//             <g>
//                 <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path>
//             </g>
//         </svg>
//     </div>
// </li>
// ';




    
    


    // $sql = "SELECT * from task where task.listId=$listId";
    // $stmt = $db->prepare($sql);
    // $stmt->execute(array($sql));
    // $data=$stmt->fetchAll(PDO::FETCH_ASSOC);

?>
