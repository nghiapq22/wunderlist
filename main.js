$(function () {
    //toggle menu
    $("#top-left #menu ").click(function () {
        $("#main-left").toggleClass("something");
    })

    //hide main-right
    $(".bottom-right .icon-1").click(function () {
        $("#main-right").hide();
    })

    //show account setting
    $(".menu-user ul li:nth-child(3)").click(function () {
        $(".modal").show();
        $(".dialog-wrapper").css('display', 'flex');
        $(".dialog-wrapper .setting-content.account").show();
        $(".modal #style-1 li:nth-child(2)").css('background', '#ebebeb');
        $(".create-newlist").hide();
        $(".delete-item").hide();
        $(".dialog-wrapper .setting-content.genaralt").hide();
        $(".menu-user").removeClass('menu-user-2');
        $('.dialog-wrapper .setting-content.genaral').hide();

    })

    //hide modal
    $('.dialog-wrapper .content-footer button').click(function () {
        $(".modal").hide();
    })

    //show menu
    $("#main-left #user").click(function (e) {
        $(".menu-user").toggleClass('menu-user-2');
        $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
        $(".hover-messenger").hide(); //an tin nhan
        $("#right-mouse .inbox").hide(); //an inbox
        $("#right-mouse .cong-viec").hide();  //an cong viec
        $("#right-mouse .task-top").hide();  // an task-top
        $("#right-mouse .task-bottom").hide();  //an task-bottom
        e.stopPropagation();
    })

    //hide menu
    $(".menu-user").click(function (e) {
        e.stopPropagation();
    })
    $('body').click(function (e) {
        if (e.target !== $(".menu-user-2")) {
            $(".menu-user").removeClass('menu-user-2');
        }
    })

    //click chuong
    $("#stream-counts #bell").click(function (e) {
        $(".popover-bottom").addClass("popover-bottom-2");
        $(".menu-user").removeClass('menu-user-2');  //an menu
        $(".hover-messenger").hide(); //an tin nhan
        $("#right-mouse .inbox").hide(); //an inbox
        $("#right-mouse .cong-viec").hide();  //an cong viec
        $("#right-mouse .task-top").hide();  // an task-top
        $("#right-mouse .task-bottom").hide();  //an task-bottom
        e.stopPropagation();
    })
    //hide chuong
    $("body").click(function () {
        $(".popover-bottom").removeClass("popover-bottom-2");
    })

    //click message
    $("#stream-counts #message").click(function (e) {
        $('.hover-messenger').show();
        $(".menu-user").removeClass('menu-user-2');  //an menu
        $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
        $("#right-mouse .inbox").hide(); //an inbox
        $("#right-mouse .cong-viec").hide();  //an cong viec
        $("#right-mouse .task-top").hide();  // an task-top
        $("#right-mouse .task-bottom").hide();  //an task-bottom
        e.stopPropagation();
    })
    //hide message
    $("body").click(function () {
        $(".hover-messenger").hide();
    })

    //show list
//   function fetch_list(){
//     $.get('showList.php',
//     function(data){
//     $('.lists-colection').html(data);
//     });
//   }
//        fetch_list();

   

   



    //click Create List
    // $(document).on('click','#main-left #bottom-left', function(){
    $("#main-left #bottom-left").click(function () {
        $(".modal").show();
        $(".dialog-wrapper").hide();
        $(".delete-item").hide();
        $(".edit-list").hide();
        $(".create-newlist").show();
        // alert('hello');
    })
    //hide create list
    $('.create-newlist .cancel').click(function () {
        $(".modal").hide();
       
    })
    
    var choseList;

    
    //click edit-list
    $(document).on('click', '#main-left .list-option', function(){
        $(".modal").show();
        $(".dialog-wrapper").hide();
        $(".delete-item").hide();
        $(".create-newlist").hide();
        $(".edit-list").show();
        // alert('hello');
    })
    //hide create list
    $('.edit-list .cancel').click(function () {
        $(".modal").hide();
    })



    //double click task-item 
    $(document).on('dblclick','.task-list .task-item',function(){
    // $(".task-list .task-item").dblclick(function () {
        $("#main-right").css('display', 'flex');
    })


    // //click task-item top
    // $(".task-1 .task-item").click(function (e) {
    //     e.stopPropagation();
    //     var text = $(this).find(".text").html();
    //     $("#main-right .display-view").html(text);
    //     // console.log($(this));
    //     $(this).toggleClass("special");
    //     $(this).siblings().removeClass("special");
    //     $(".task-2.clone .task-item").removeClass("special");
    // }) //end click task-item top


    // //click task-item bottom
    // $(".task-2 .task-item").click(function () {
    //     // console.log($(this));

    //     var text = $(this).find(".text").html();
    //     $("#main-right .display-view").html(text);
    //     $(this).toggleClass("special");
    //     $(this).siblings().removeClass("special");
    //     $(".task-1 .task-item").removeClass("special");
    // }) //end click task-item bottom





    //click list
    // $(document).on('click','.lists-colection li', function(){
    //     $(this).children().eq(1).show();
    // })








    //right mouse show inbox
    $(document).on('contextmenu','#main-left #filter-colection',function(e){
    // $("#main-left #filter-colection").contextmenu(function (e) {
        e.preventDefault();
        $("#right-mouse .inbox").show();
        $("#right-mouse .inbox").css({
            top: (e.clientY) + 'px',
            left: (e.clientX) + 'px',
        });
        $(".menu-user").removeClass('menu-user-2');   //an menu
        $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
        $(".hover-messenger").hide(); //an tin nhan
        $("#right-mouse .cong-viec").hide();  //an cong viec
        $("#right-mouse .task-top").hide();  // an task-top
        $("#right-mouse .task-bottom").hide();  //an task-bottom

    })

    //hide inbox
    $("#right-mouse .inbox").click(function (e) {
        e.stopPropagation();
    })
    $("body").click(function () {
        $("#right-mouse .inbox").hide();
    })

    var choseList;
    //right mouse show cong viec
    $(document).on('contextmenu','.lists-colection li',function(e){
    // $(".lists-colection li").contextmenu(function(e){
        e.preventDefault();
        choseList = $(this).children().eq(2).html();
        // console.log(choseList);
        $('#right-mouse .cong-viec input').val(choseList);
        // console.log($('#right-mouse .cong-viec input').val());
        
        e.preventDefault();
        $("#right-mouse .cong-viec").show();
        $("#right-mouse .cong-viec").css({
            top: (e.clientY) + 'px',
            left: (e.clientX) + 'px',
        });
        $(".menu-user").removeClass('menu-user-2');   //an menu
        $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
        $(".hover-messenger").hide(); //an tin nhan
        $("#right-mouse .inbox").hide();  //an cong viec
        $("#right-mouse .task-top").hide();  // an task-top
        $("#right-mouse .task-bottom").hide();  //an task-bottom


        
    }) //end right mouse show cong viec
    //hide cong viec
    $("#right-mouse .cong-viec").click(function (e) {
        e.stopPropagation();
    })
    $("body").click(function () {
        $("#right-mouse .cong-viec").hide();
    })

    //click li account-setting
    $(".modal #style-1 li").click(function () {
        $(this).css('background', '#ebebeb');
        $(this).siblings().css('background', 'white');

    })

    //click general
    $(".modal #style-1 li:nth-child(1)").click(function () {
        $(".dialog-wrapper .setting-content.account").hide();
        $(".dialog-wrapper .setting-content.genaral").show();
    })

    //click account-setting
    $(".modal #style-1 li:nth-child(2)").click(function () {
        $(".dialog-wrapper .setting-content.account").show();
        $(".dialog-wrapper .setting-content.genaral").hide();
    })

    //var count = $(".task-1.clone .task-item").length;
            
   
    // if($(".icon.sort").attr("class")==="icon sort opacity"){
    //     $(".lists-icon .icon.sort").off("click");
    // }
    $(".lists-icon .icon.sort").addClass("opacity");
    $(document).on("click",".icon.sort",function(){
        if($(this).attr("class")==="icon sort"){
            $(".hover.sort").toggle();
        }
    })






    //$(".lists-icon .icon.sort").addClass("opacity");

    var self;
    //click enter input
    // $('.addTask input').keypress(function (e) {
    //     var x = e.keyCode;
    //     var input_value = $('.addTask input').val();
    //     if (x == 13 && input_value != 0) {
    //         e.stopPropagation();
    //         // $('.addTask input').val("");
    //         var itm = $('.task-1 .task-item:first');
    //         var cln = itm.clone(true);
    //         cln.find('.text').html(input_value);
    //         cln.prependTo($(".task-1.clone"));

    //         var count = $(".task-1.clone .task-item").length;
            
            // if (count >= 2) {
            //     $(".lists-icon .icon.sort").removeClass("opacity");
                // $(".lists-icon .icon.sort").click(function(e){
                    
                //     $(".hover.sort").toggle();
                //     e.stopPropagation();
                // })
                // if (($(".lists-icon").children().eq(1)).attr("class")==="icon sort") {
                //     $(".lists-icon .icon.sort").click(function(){ 
                //         $(".hover.sort").toggle();
                        
                //     })
                // } 
            // }
            // else{
            //     $(".lists-icon .icon.sort").addClass("opacity");
            // }
           
            

            // //hover lists-icon
            // $(".lists-icon .icon").hover(function () {
            //     $(this).find(".top svg").css("fill", "white");
            //     $(this).find(".bottom").css("color", "white");
            // },
            //     function () {
            //         $(this).find(".top svg").css("fill", "#B7B7B7");
            //         $(this).find(".bottom").css("color", "#B7B7B7");
            //     }
            // )




            //click star
            $(".task-1.clone .task-item .icon-2 svg ").click(function (e) {
                e.stopPropagation();
                // $(this).parent().parent().slideUp();
                $(this).parent().hide();
                $(this).parent().next().show();
                $(this).parent().parent().prependTo(".task-1.clone");
                $(this).parent().parent().hide();
                $(this).parent().parent().slideDown();
            })
            $(".task-item .icon-3").click(function (e) {
                e.stopPropagation();
                $(this).hide();
                $(this).prev().show();
            })


            var choseTask;
            //right mouse show task top
            $(document).on("contextmenu",'.task-1.clone .task-item',function (e) {
    
            // $('.task-1.clone .task-item').on("contextmenu",function (e) {
                e.preventDefault();
                choseTask = $(this).find('.taskId').html();
                console.log(choseTask);
                $('.content-footer input').val(choseTask);
                // console.log($('.content-footer input').val());
                
                
               
                $("#right-mouse .task-top").show();
                $("#right-mouse .task-top").css({
                    top: (e.clientY) + 'px',
                    left: (e.clientX) + 'px',
                });
                $(".menu-user").removeClass('menu-user-2');   //an menu
                $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
                $(".hover-messenger").hide(); //an tin nhan
                $("#right-mouse .inbox").hide();  //an inbox
                $("#right-mouse .cong-viec").hide();  // an cong viec
                $("#right-mouse .task-bottom").hide();  //an task-bottom



                //delete item
                //ket noi voi text cua item
                self = $(this);
                var text = self.find(".text").html();
                // console.log(text);
                $('.delete-item h3 span').html(text);

                //click item Delete To-do
                // $(document).on('click','.text-delete',function(){


                $('#right-mouse .task-top .list-item.end li:nth-child(2)').click(function () {
                  
                    $("#right-mouse .task-top").hide();
                    $(".create-newlist").hide();
                    $(".dialog-wrappe").hide();
                    $(".modal").show();
                    $(".modal .delete-item").show();
                    //click button Delete To-do
                    $(".modal  .content-footer .delete").click(function () {
                        self.remove();
                        $(".modal").hide();
                    })//end click button Delete To-do

                    //click button cancel
                    $(".modal  .content-footer .cancel").click(function () {
                        $(".modal").hide();
                    }) //end click button cancel


                }) //end click item Delete To-do





            })// end right mouse show task top


            // $(document).on('click','.content-footer .delete', function(){
            //     choseTask.remove();
            // })
            //hide task-top
            $("#right-mouse .task-top").click(function (e) {
                e.stopPropagation();
            })
            $("body").click(function () {
                $("#right-mouse .task-top").hide();
            }) //end hide task-top





            //remove item to bottom
            // $('.task-1.clone .icon-1 .task-check').click(function (e) {
            //     e.stopPropagation();
            //     var item = $(this).parent().parent();
            //     item.children().children(".icon-2 svg").unbind("click");
            //     item.prependTo($(".task-2.clone"));
            //     // item.children().eq(2).removeClass('icon-2').addClass("icon-4");
            //     var count = $(".task-1.clone .task-item").length;
            
            
                // if (count >= 2) {
                //     $(".lists-icon .icon.sort").removeClass("opacity");
                //     // $(".lists-icon .icon.sort").click(function(){
                //     //     $(".hover.sort").toggle();
                //     // })
                // }
                // else{
                //     $(".lists-icon .icon.sort").addClass("opacity");
                // }

                //click star
                $(".task-2 .task-item .icon-2 svg ").on("click", function (e) {
                    e.stopPropagation();
                    // $(this).parent().parent().slideUp();
                    $(this).parent().hide();
                    $(this).parent().next().show();


                })
                // $(".task-item .icon-3").click(function (e) {
                //     e.stopPropagation();
                //     $(this).hide();
                //     $(this).prev().show();
                // })



                //right mouse show task bottom
                $(document).on("contextmenu",'.task-2.clone .task-item',function (e) {
                    e.preventDefault();
                    choseTask = $(this).find('.taskId').html();
                    console.log(choseTask);
                    $('.content-footer input').val(choseTask);
                    $("#right-mouse .task-bottom").show();
                    $("#right-mouse .task-bottom").css({
                        top: (e.clientY) + 'px',
                        left: (e.clientX) + 'px',
                    });
                    $(".menu-user").removeClass('menu-user-2');   //an menu
                    $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
                    $(".hover-messenger").hide(); //an tin nhan
                    $("#right-mouse .inbox").hide();  //an inbox
                    $("#right-mouse .cong-viec").hide();  // an cong viec
                    $("#right-mouse .task-top").hide();  //an task-top




                    //delete item
                    //ket noi voi text cua item
                    self = $(this);
                    var text = self.find(".text").html();
                    // console.log(text);
                    $('.delete-item h3 span').html(text);

                    //click item Delete To-do
                    $('#right-mouse .task-bottom .list-item.end li:nth-child(2)').click(function () {
                        $("#right-mouse .task-bottom").hide();
                        $(".create-newlist").hide();
                        $(".dialog-wrappe").hide();
                        $(".modal").show();
                        $(".modal .delete-item").show();
                        //click button Delete To-do
                        $(".modal  .content-footer .delete").click(function () {
                            self.remove();
                            $(".modal").hide();
                        })//end click button Delete To-do

                        //click button cancel
                        $(".modal  .content-footer .cancel").click(function () {
                            $(".modal").hide();
                        }) //end click button cancel


                    }) //end click item Delete To-do





                }) //end right mouse show task bottom

                //hide task-bottom
                $("#right-mouse .task-bottom").click(function (e) {
                    e.stopPropagation();
                })
                $("body").click(function () {
                    $("#right-mouse .task-bottom").hide();
                }) //end hide task-bottom



                //remove item to top
                // $(".task-2.clone .icon-1 .task-checked").click(function (e) {
                //     e.stopPropagation();
                //     var item = $(this).parent().parent();
                //     item.appendTo($(".task-1.clone"));
                //     item.find(".icon-4").attr("class", "icon-2");
                //     var count = $(".task-1.clone .task-item").length;
            
            
                    // if (count >= 2) {
                    //     $(".lists-icon .icon.sort").removeClass("opacity");
                    //     // $(".lists-icon .icon.sort").click(function(){
                    //     //     $(".hover.sort").toggle();
                    //     // })
                    // }
                    // else{
                    //     $(".lists-icon .icon.sort").addClass("opacity");

                    // }





                    //click star lan 2
                    $(".task-1.clone .task-item .icon-2 svg ").click(function (e) {
                        e.stopPropagation();
                        // $(this).parent().parent().slideUp();
                        $(this).parent().hide();
                        $(this).parent().next().show();
                        $(this).parent().parent().prependTo(".task-1.clone");
                        $(this).parent().parent().hide();
                        $(this).parent().parent().slideDown();
                    })
                    $(".task-item .icon-3").click(function (e) {
                        e.stopPropagation();
                        $(this).hide();
                        $(this).prev().show();
                    })




                    // //right mouse show task top
                    // $('.task-1.clone .task-item').contextmenu(function (e) {
                    //     e.preventDefault();
                    //     $("#right-mouse .task-top").show();
                    //     $("#right-mouse .task-top").css({
                    //         top: (e.clientY) + 'px',
                    //         left: (e.clientX) + 'px',
                    //     });
                    //     $(".menu-user").removeClass('menu-user-2');   //an menu
                    //     $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
                    //     $(".hover-messenger").hide(); //an tin nhan
                    //     $("#right-mouse .inbox").hide();  //an inbox
                    //     $("#right-mouse .cong-viec").hide();  // an cong viec
                    //     $("#right-mouse .task-bottom").hide();  //an task-bottom
                    // })

                    //hide task-top
                    $("#right-mouse .task-top").click(function (e) {
                        e.stopPropagation();
                    })
                    $("body").click(function () {
                        $("#right-mouse .task-top").hide();
                    }) //end hide task-top



                // }) //end remove item to top

            // })//end remove item to bottom










            //click task-item
            $(document).on('click','.task-item',function(e){
            // $(".task-item").click(function (e) {
                // console.log($(this));
                e.stopPropagation();
                var text = $(this).children().eq(1).children().eq(0).children().eq(0).html();
                $('#top-right .display-view input').val(text);
                // $("#main-right .display-view").html(text);
                $(".task-item").removeClass('special');
                $(this).addClass("special");
                // e.stopPropagation();
                $(".menu-user").removeClass('menu-user-2');   //an menu
                $(".popover-bottom").removeClass("popover-bottom-2");  //an chuong
                $(".hover-messenger").hide(); //an tin nhan
                $("#right-mouse .inbox").hide();  //an inbox
                $("#right-mouse .cong-viec").hide();  // an cong viec
                $("#right-mouse .task-bottom").hide();  //an task-bottom
                $("#right-mouse .task-top").hide();  //an task-bottom
                

            }) //end click task-item

            // $(".task-item").dbclick(function(e){
            //     alert('heloo');
            //     // e.stopPropagation();
            //     // $('$main-right').show();;;
            // })


        // } //end  if(x == 13 && input_value != 0)
    // }) //end click enter input


    // console.log($(".lists-icon").children().eq(1));






    // //click star
    // $(".task-1 .task-item .icon-2 svg ").click(function(e){
    //     e.stopPropagation();
    //     // $(this).parent().parent().slideUp();
    //     $(this).parent().hide();
    //     $(this).parent().next().show();  
    //     $(this).parent().parent().prependTo(".task-1.clone");
    //     $(this).parent().parent().hide();
    //     $(this).parent().parent().slideDown();
    // })
    // $(".task-item .icon-3").click(function(e){
    //     e.stopPropagation();
    //     $(this).hide();
    //     $(this).prev().show();
    // })


    //comment
    // $(".comments input").keypress(function (e) {
    //     var x = $(".comments input").val();
    //     if (e.keyCode == 13 && x != 0) {
    //         $(".comments input").val("");
    //         var itm = $(".comment-list li:first");
    //         var cln = itm.clone(true);
    //         cln.find(".content .text").html(x);
    //         cln.appendTo($(".comment-list.clone"));
    //     }
    // })



    //search
    
        // $('#top-left form input').keypress(function(e){
        //     var x = e.keyCode;
        //     var input_value = $('#topleft form input').val();
        //     if (x == 13 && input_value != 0) {
        //         console.log( $(".task-1.clone"));
                
        //        $(".task-1.clone").hide();
        //        $(".task-2.clone").hide();
        //        $(".task-list .tieu-de").hide();

        //     }
        // })

            // if($('.task-list.search').show()){
            //     // $(".task-1.clone").hide();
            //     // $(".task-2.clone").hide();
            //    $(".task-list .tieu-de").hide();
            //    $(".addTask").hide();
            // }
            // if($('.task-list.search').hide()){
            //     // $(".task-1.clone").hide();
            //     // $(".task-2.clone").hide();
            //    $(".task-list .tieu-de").show();
            //    $(".addTask").show();
            // }
            // if($(".task-1.clone").show()){
            //     $('.task-list.search').hide();
            // }
            // else{
            //     $(".task-1.clone").show();
            //     $(".task-2.clone").show();
            //    $(".task-list .tieu-de").show();
            //    $(".addTask").show();
            // }
            // $('#top-left form input').blur(function(){
            //     $('.task-list.search').hide();
            //     $(".task-1.clone").show();
            //     $(".task-2.clone").show();
            //    $(".task-list .tieu-de").show();
            //    $(".addTask").show();
            // // alert('hekki');
            // })
            

    //
    // if ($(".task-1.clone").length > 2)

        //reponsive
        $(window).resize(function() {
            var width = $(window).width();
            // console.log(width);
            if (width <= 1000) {
                $("#main-left").addClass("something");
            }
            else {
                $("#main-left").removeClass("something");
            }
        });
  
        //click list
        $(document).on('click', '.lists-colection li', function(){
           
            // $(this).children().eq(3).show();
            // $(this).siblings().children().eq(3).hide();
            $(this).toggleClass('special');
        //    console.log($(this).siblings().children().eq(3));
        //    console.log($(this).siblings());
            $(this).siblings().removeClass('special');

        })

        

        

})