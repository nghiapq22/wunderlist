$(document).ready(function(){
   ///list
    fetch_list();
  
    //function hien thi list
    function fetch_list(){
        $.ajax({
            url: 'showList.php',
            type: 'post',
            success: function(data){
                $('.lists-colection').html(data);
            },
             
        })
    };//end function hien thi list

    

      // create list
      $('.create-newlist .save').click(function () {
        var listname = $('.create-newlist .listname').val();
        $.ajax({
            url: 'create_list.php',
            type: 'post',
            data: {
                "listname" : listname
            },
            success: function(data){
                $('.create-newlist .listname').val('');
                $('.modal').hide();
                fetch_list();
            } 
        })  
    }) //end create list
   
    //edit list
    var listId_edit;
    $(document).on('click', '.list-option',function(){
            let parent = $(this).closest('.list ');
            listId_edit = parent.find('.listId').text();
            let title = parent.find('.title').text();
            $('.edit-list .listname').val(title);
            
        })
        
    $(document).on('click','.edit-list .save', function(){          
        let listname =  $('.edit-list .listname').val();           
            $.ajax({
                url: 'editList.php',
                    type: 'post',
                    data: {
                        'listname': listname,
                        'listId' : listId_edit
                    },
                    success: function(data){
                        $('.edit-list .listname').val('');
                        $('.modal').hide();
                        fetch_list()
                    }
            })
            
        })   //end edit list
       

    //delete list
    // $(document).on('click','.delete-list', function(){
    //     alert('heloo');
        
    // }) 
    $(document).on('contextmenu','.lists-colection li',function(e){ 
        choseList = $(this).children().eq(2).html();
        // console.log(choseList);
        $('.delete-list').click(function(){
           
            $.ajax({
                url: 'deleteList.php',
                type: 'post',
                data:{
                    'list': choseList
                },
                success: function(data){
                    // $('.task-list').hide();
                    $('#right-mouse .cong-viec').hide();
                    // $('.task-list').html(data);
                    fetch_list()
                }
            })
           
        })
    })  // end delete list
  
    //add Task
    //ham in ra task 1 va 2
    function fetch_task_1(listId_addTask){
        $.ajax({
            url: 'showTask1.php',
            type: 'post',
            data:{
                'listId': listId_addTask,
            },
            success: function(data){
                $('.task-1.clone').html(data);
            },
             
        })
    }    

    function fetch_task_2(listId_addTask){
        $.ajax({
            url: 'showTask2.php',
            type: 'post',
            data:{
                'listId': listId_addTask,
            },
            success: function(data){
                $('.task-2.clone').html(data);
            },
             
        })
    }    
    
    var listId_addTask;
    $(document).on('click', '.lists-colection li', function(){
        listId_addTask = $(this).find('.listId').html();
        fetch_task_1(listId_addTask);
        fetch_task_2(listId_addTask);
    })
    $('.addTask input').keypress(function(e){
        var x = e.keyCode;
        var input_value = $('.addTask input').val();
        if (x == 13 && input_value != 0) {
            $.ajax({
                url: 'themTask.php',
                type: 'post',
                data: {
                    'listId': listId_addTask,
                    'addTask': input_value
                },
                success: function(data){
                    $('.addTask input').val('');
                    fetch_task_1(listId_addTask);
                    
                    // $('.task-1.clone').prepend(data);
                }
            })
        }
    })  //end addtask

    //chuyen task xuong
    var self;
    
    $(document).on('click', '.task-1.clone .task-check ', function(e){
        e.stopPropagation();
        self = $(this);
        let parent = $(this).closest('.task-item');
        var taskId = parent.find('.taskId').text();
        console.log(taskId);
        
        $.ajax({
            url: 'chuyenTaskxuong.php',
            type:'post',
            data: {
                'taskId' : taskId
            },
            success: function(data){
                self.closest('.task-item').slideUp();
                fetch_task_2(listId_addTask);
            }
        })
    })


    //chuyen task len
    $(document).on('click', '.task-2.clone .task-checked', function(e){
        e.stopPropagation();
        self = $(this);
        let parent = $(this).closest('.task-item');
        var taskId = parent.find('.taskId').text();
        console.log(taskId);
        
        $.ajax({
            url: 'chuyenTasklen.php',
            type:'post',
            data: {
                'taskId' : taskId
            },
            success: function(data){
                self.closest('.task-item').slideUp();
                fetch_task_1(listId_addTask);
            }
        })
        
    })

    //Delete Task
    var choseTask_contextmenu;
    $(document).on("contextmenu",'.task-item',function () {
        choseTask_contextmenu = $(this).find('.taskId').text();
    })
    $(document).on('click', '.content-footer .delete',function(){
        $.ajax({
            url: 'deleteTask.php',
            type: 'post',
            data:{
                'taskId': choseTask_contextmenu
            },
            success: function(data){
               
            }
        })
    })

    


    //show subtask + display-view
    var choseTask_click;
    // var choseTask_click_taskId;
    var nameTask;
    // var taskId_click;
    var self;
    $(document).on('click','.task-item', function(){
      
        self = $(this);
        choseTask_click = $(this).find('.taskId').html();
        nameTask = $(this).find('.taskName').text();
        // choseTask_click_taskId = $(this).find('.taskName').text();

         $('.display-view input').val(nameTask);       
        // $('.input_taskId').val(choseTask_click); 
        var taskId =  $('.input_taskId').val(choseTask_click); 
        // taskId = taskId;
        // console.log(typeof taskId);
        t = taskId.val();
        // alert(t);
        $.ajax({
            type : 'POST',
            url : 'showSubTask.php',
            data : {
                'taskId' : t,
            },
            success : function(data){
                // alert(t);
                $(".subTask").html(data);
               
            }
            
        })
       
    })


    



    //edit task 
    var taskName;
        $(document).on('keypress','.display-view_input',function(e){
            var x = e.keyCode;
            var parent = $(this).closest('#main-right');
            var taskId = parent.find('.input_taskId').val();
            // var taskId_mid = parent.parent().find('.taskId').html();
            taskName = parent.find('.display-view_input').val();
            if( x == 13){
                // console.log(nameTask);
                $.ajax({
                    url: 'editTask.php',
                    type: 'post',
                    data: {
                        'taskName': taskName,
                        'taskId': taskId
                    },
                    success: function(data){     
                        self.find('.taskName').text(taskName)
                    }
                })
            }
        })
    

    // them subTask
    $(document).on('keypress','.addSubtask', function(e){
    // $('.addSubtask').keypress(function(e){
        var x = e.keyCode;
        var subTaskName = $('.addSubtask').val();
        taskId = $('.input_taskId').val();  
        if (x == 13 && subTaskName != 0) {
            // alert(taskId);
            $.ajax({
                url: 'addSubtask.php',
                type: 'post',
                data: {
                    'addSubtask': subTaskName,
                    'taskId' : taskId
                },
                success: function(data){
                    $('.addSubtask').val('');
                    $('.subTask').append(data);
                    
                }
            })
        }
    })

    // edit subtask
    $(document).on('keypress','.subTaskName',function(e){
        var x = e.keyCode;
        var parent = $(this).closest('.subTask-item');
        var subTaskName = parent.find('.subTaskName').val();
        var subTaskId = parent.find('.subTaskId').html();
        if(x ==13 ) {
            // alert(subTaskId)
            $.ajax({
                
                url: 'editSubTask.php',
                type: 'post',
                data:{
                    'subTaskName': subTaskName,
                    'subTaskId': subTaskId
                },
                // success: function(data){
                //     // parent.find('.subTaskName').val(subTaskName);
                // }
            })
        }
    })

    //delete subTask
    $(document).on('click','.subTask-item .delete', function(){
        var parent = $(this).closest('.subTask-item');
        var subTaskId = parent.find('.subTaskId').html();
        $.ajax({
            url: 'deleteSubTask.php',
            type: 'post',
            data:{
                'subTaskId' : subTaskId
            },
            success: function(data){
                parent.remove();
            }
        })
    })

    // hien thi comments
    $(document).on('click','.task-item',function(){
        self = $(this);
        choseTask_click = $(this).find('.taskId').html();
        // alert(choseTask_click);
        $.ajax({
            url: 'showComment.php',
            type: 'post',
            data:{
                'taskId': choseTask_click,

            },
            
            success: function(data){
                $('.comment-list').html(data);
            }
        })
    })






    //add commment
    $(document).on('keypress','.addComment',function(e){
        var x = e.keyCode;
        var parent = $(this).closest('#main-right');
        var taskId = parent.find('.input_taskId').val();
        var comment = $(this).val();
        if( x ==13 && comment != 0){
            // console.log("sss");
            $.ajax({
                url: 'addComment.php',
                type: 'post',
                data: {
                    'taskId': taskId,
                    'comment': comment,
                },
                success: function(data){
                    var cmt = JSON.parse(data);
                    $('.comment-list').append(
                    '<li>'+
                    '<div class="icon">'+
                    '<img src="image/tim-kiem.png" alt="">'+
                    '</div>'+
                    '<div class="content">'+
                    '<span class="name">'+ cmt[0]['user'] + '</span>'+
                    '<span class="time">' + cmt[0]['time'] + '</span>'+
                    '<div class="text">' + cmt[0]['title'] + '</div>'+
                    '<span class="id">' + cmt[0]['cmtId'] +'</span>'+
                    '</div>'+
                    '<div class="delete">'+
                    '<svg class="delete" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"'+
                        'xmlns:xlink="http://www.w3.org/1999/xlink">'+
                        '<g stroke="none" stroke-width="1" fill-rule="evenodd">'+
                            '<g id="delete">'+
                                '<path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z"'+
                                   'id="4"></path>'+
                            '</g>'+
                       '</g>'+
                    '</svg>'+
                    '</div>'+
                    '</li>'
                    )
                    $('.addComment').val('');
                }
            })
        }
    })


   //xoa cmt

   $(document).on('click','.comment-list .delete',function(){
       var parent = $(this).closest("li");
       var cmtId = parent.find('.id').html();
       $.ajax({
           url: 'deleteComment.php',
           type:  'post',
           data: {
                'cmtId' : cmtId,
           },
           success: function(data){
               parent.remove();
           }
       })
   })




   //search
   $(document).on('keyup','.search-input',function(){
       
        var search = $(this).val();
        if(  search != 0){
     
            $.ajax({
                url: 'search.php',
                type: 'post',
                data: {
                    'search': search
                },
                success: function(data){
                    var data = JSON.parse(data);
                    var list = data[0];
                    var task = data[1];
                    var num = data[2];
                    console.log(data);
                    
                    if(num>0){
                            var content = "";
                           
                            list.forEach(element1 => {
                                content +=
                                '<h2 class="list-name">'+
                                '<a href="#">'+element1['title1']+'</a>'+
                                '</h2>';

                                task.forEach(element2 =>{
                                    if(element1['id'] == element2['listId']){

                                   
                                    content +=
                                    '<ol class = "tasks">'+
                                    '<li class="task-item">'+
                                    '<div class="icon-1">'+
                                    '<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"'+
                                    'xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;">'+
                                    '<g>'+
                                    '<path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z"'+
                                    'style="fill:none;stroke-width:1px"></path>'+
                                    '</g>'+
                                    '</svg>'+
                                    '</div>'+
                                    '<div class="text">'+
                                    '<div class="text-1">'+element2['title2']+'</div>'+
                                    '</div>'+
                                    '<div class="icon-2">'+
                                    '<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"'+
                                    'xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">'+
                                    '<g>'+
                                    '<path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path>'+
                                    '</g>'+
                                    '/svg>'+
                                    '</div>'+
        
                                    '</li>'+
                                    '</ol>'
                                }
                                });
                            });
                        
                           
                            $('.task-list.search').html(content);
                          
                       
                       
                    }
                    else{
                        $('.task-list.search').html(
                            '<div class="task-404">'+
                            '<svg class="search rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g> <path d="M8.5025,15 C4.9225,15 2.0025,12.08 2.0025,8.5 C2.0025,4.92 4.9225,2 8.5025,2 C12.0825,2 15.0025,4.92 15.0025,8.5 C15.0025,12.08 12.0825,15 8.5025,15 L8.5025,15 Z M8.5025,3 C5.4625,3 3.0025,5.46 3.0025,8.5 C3.0025,11.54 5.4625,14 8.5025,14 C11.5425,14 14.0025,11.54 14.0025,8.5 C14.0025,5.46 11.5425,3 8.5025,3 L8.5025,3 Z M17.5025,18 C17.3825,18 17.2425,17.96 17.1425,17.86 L13.6425,14.36 C13.4625,14.16 13.4625,13.84 13.6425,13.64 C13.8425,13.46 14.1625,13.46 14.3625,13.64 L17.8625,17.14 C18.0425,17.34 18.0425,17.66 17.8625,17.86 C17.7625,17.96 17.6225,18 17.5025,18 L17.5025,18 Z" id="z"></path> </g> </g> </svg>'+
                            '<h2>No Search Results</h2>'+
                            '</div>'
                        )
                    }
                    $('.task-list.search').show();
                    $('.addTask').hide();
                    $('.task-1').hide();
                    $('.task-2').hide();
                    $('.tieu-de').hide();
                        
                    
                    
                    
                }
            })
        }
        else{
            $('.task-list.search').html(
                '<div class="task-404">'+
                '<svg class="search rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g> <path d="M8.5025,15 C4.9225,15 2.0025,12.08 2.0025,8.5 C2.0025,4.92 4.9225,2 8.5025,2 C12.0825,2 15.0025,4.92 15.0025,8.5 C15.0025,12.08 12.0825,15 8.5025,15 L8.5025,15 Z M8.5025,3 C5.4625,3 3.0025,5.46 3.0025,8.5 C3.0025,11.54 5.4625,14 8.5025,14 C11.5425,14 14.0025,11.54 14.0025,8.5 C14.0025,5.46 11.5425,3 8.5025,3 L8.5025,3 Z M17.5025,18 C17.3825,18 17.2425,17.96 17.1425,17.86 L13.6425,14.36 C13.4625,14.16 13.4625,13.84 13.6425,13.64 C13.8425,13.46 14.1625,13.46 14.3625,13.64 L17.8625,17.14 C18.0425,17.34 18.0425,17.66 17.8625,17.86 C17.7625,17.96 17.6225,18 17.5025,18 L17.5025,18 Z" id="z"></path> </g> </g> </svg>'+
                '<h2>No Search Results</h2>'+
                '</div>'
            )
        }
   })


   //hide search
   $(document).on('click','.list',function(){
    $('.task-list.search').hide();
    $('.task-1').show();
    $('.task-2').show();
    $('.addTask').show();
    $('.tieu-de').show();
   })
    
})