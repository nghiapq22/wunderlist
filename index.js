window.onload = function () {
    // co dan main-left
    document.querySelector("#main-left #menu").addEventListener("click", function () {
        document.getElementById("main-left").classList.toggle("something");
    })
    //an bottom-right
    document.querySelector(".bottom-right .icon-1").addEventListener("click", function () {
        document.getElementById("main-right").style.display = "none";
    })
    // hien ra account setting
    document.querySelectorAll(".menu-user li")[2].addEventListener("click", function () {
        document.getElementsByClassName("modal")[0].style.display = "block ";
        document.getElementsByClassName("create-newlist")[0].style.display = "none ";
        document.getElementsByClassName("delete-item")[0].style.display = "none";
        document.getElementsByClassName("dialog-wrapper")[0].style.display = "flex";
        //    document.getElementsByClassName("setting-content account")[0].style.display = "none ";
        //    document.getElementsByClassName("setting-content account")[0].style.display = "block ";
        document.querySelector('.dialog-wrapper .setting-content.genaral').style.display = "none";
        var z = document.querySelectorAll('.modal #style-1 li');
        for (var i = 0; i < z.length; i++) {
            z[i].style.background = "white";
            z[1].style.background = "#ebebeb";
        }
        document.querySelector('.dialog-wrapper .setting-content.account').style.display = "block";


    })

    //an modal
    document.querySelector(".content-footer button").addEventListener("click", function () {

        document.getElementsByClassName("modal")[0].style.display = "none";
    })

    // hien menu
    document.querySelector("#main-left #user").addEventListener("click", function (e) {
        document.getElementsByClassName("menu-user")[0].classList.toggle("menu-user-2");
        document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");  //an chuong
        document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2"); // an tin nhan
        document.querySelector('#right-mouse .inbox').style.display = "none";  //an inbox
        document.querySelector('#right-mouse .cong-viec').style.display = "none";  //an cong viec
        document.querySelector('#right-mouse .task-top').style.display = "none";   // an task-top
        document.querySelector('#right-mouse .task-bottom').style.display = "none";   //an task-bottom
        e.stopPropagation();
    })


    // hide menu
    var x = document.getElementsByClassName("menu-user")[0];
    window.addEventListener("click", function (e) {
        if (e.target != x) {
            document.getElementsByClassName("menu-user")[0].classList.remove("menu-user-2");
        }
    })


    //click chuong
    document.querySelector("#stream-counts #bell").addEventListener("click", function (e) {
        document.getElementsByClassName("popover-bottom")[0].classList.toggle("popover-bottom-2");
        document.getElementsByClassName("menu-user")[0].classList.remove("menu-user-2");  //an menu
        document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2"); // an tin nhan
        document.querySelector('#right-mouse .inbox').style.display = "none";  //an inbox
        document.querySelector('#right-mouse .cong-viec').style.display = "none";  //an cong viec
        document.querySelector('#right-mouse .task-top').style.display = "none";   // an task-top
        document.querySelector('#right-mouse .task-bottom').style.display = "none";   //an task-bottom
        e.stopPropagation();
    })

    // hide chuong
    var y = document.getElementsByClassName("popover-bottom")[0];
    window.addEventListener("click", function (e) {
        if (e.target != y) {
            document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");
        }
    })

    //click message
    document.querySelector("#stream-counts #message").addEventListener("click", function (e) {
        document.getElementsByClassName("hover-messenger")[0].classList.toggle("hover-messenger-2");
        document.getElementsByClassName("menu-user")[0].classList.remove("menu-user-2");  //an menu
        document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");  //an chuong
        document.querySelector('#right-mouse .inbox').style.display = "none";  //an inbox
        document.querySelector('#right-mouse .cong-viec').style.display = "none";  //an cong viec
        document.querySelector('#right-mouse .task-top').style.display = "none";   // an task-top
        document.querySelector('#right-mouse .task-bottom').style.display = "none";   //an task-bottom
        e.stopPropagation();
    })

    // hide message
    var message = document.getElementsByClassName("hover-messenger")[0];
    window.addEventListener("click", function (e) {
        if (e.target != message) {
            document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2");
        }
    })




    //click Create List
    document.querySelector("#main-left #bottom-left").addEventListener("click", function () {
        document.getElementsByClassName("modal")[0].style.display = "block ";
        document.getElementsByClassName("dialog-wrapper")[0].style.display = "none";
        document.getElementsByClassName("delete-item")[0].style.display = "none";
        document.getElementsByClassName("create-newlist")[0].style.display = "block ";

    })

    //an create list
    document.querySelector(".create-newlist .cancel").addEventListener("click", function () {
        document.getElementsByClassName("modal")[0].style.display = "none";
    })

    //click







    //click enter input
    var self;
    document.querySelector('.addTask input').addEventListener('keydown', function (event) {
        var x = event.keyCode;
        var item = document.querySelector('.addTask input').value;
        if (x == 13 && item != 0) {
            document.querySelector('.addTask input').value = "";
            // alert(item);
            // list_item.push(item);
            // list_item.reverse();
            // show_item();
            var itm = document.querySelector('.task-1 > .task-item');
            var cln = itm.cloneNode(true);          
            cln.children[1].innerHTML = item;
            var a = document.querySelector('.task-1.clone');
            document.querySelector('.task-1.clone').insertBefore(cln, a.firstChild);

            // // vong lap task-item cua task-top
            // var task_item_s = document.querySelectorAll(".task-1 .task-item");
            // for (var i = 0; i < task_item_s.length; i++) {
            //     var task_item = task_item_s[i];
            //     // double click item
            //     task_item.addEventListener("dblclick", function () {
            //         document.getElementById("main-right").style.display = "flex";
            //     })   //end double click item

            //     //click item
            //     task_item.addEventListener("click", function () {
            //         var text = this.querySelector('.task-1 .text').innerHTML;
            //         document.querySelector('#main-right .display-view').innerHTML = text;
            //         var f = document.querySelectorAll(".task-1 .task-item");
            //         for (var i = 0; i < f.length; i++) {
            //             f[i].classList.remove('special');
            //         }
            //         this.classList.add('special');


            //     })     //end click item




            //right mouse show task-top

            var items = document.querySelectorAll('.task-1.clone .task-item');
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                // console.log(item);

                item.addEventListener('contextmenu', function (e) {
                    e.preventDefault();
                    document.querySelector('#right-mouse .task-top').style.display = 'block';
                    document.querySelector('#right-mouse .task-top').style.top = e.clientY + 'px'
                    document.querySelector('#right-mouse .task-top').style.left = e.clientX + 'px';
                    document.getElementsByClassName("menu-user")[0].classList.remove("menu-user-2");  //an menu
                    document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");  //an chuong
                    document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2"); // an tin nhan
                    document.querySelector('#right-mouse .inbox').style.display = "none";  //an inbox
                    document.querySelector('#right-mouse .cong-viec').style.display = "none";  //an cong viec
                    document.querySelector('#right-mouse .task-bottom').style.display = "none";   //an task-bottom
                    //delete item              
                    self = this;
                    // console.log(self);
                    // ket noi text voi delete-item
                    var text = self.children[1].innerHTML;
                    // console.log(text);   
                    document.querySelector('.delete-item h3 span').innerHTML = text;

                    //click item Delete To-do

                    var k = document.querySelectorAll('#right-mouse .task-top .list-item.end li')[1];
                    k.addEventListener("click", function () {
                        document.querySelector(".modal").style.display = "block";
                        document.getElementsByClassName("delete-item")[0].style.display = "block";
                        document.getElementsByClassName("create-newlist")[0].style.display = "none ";
                        document.getElementsByClassName("dialog-wrapper")[0].style.display = "none";
                        //click delete To-d0 button
                        var delete_button = document.querySelector(".modal  .content-footer .delete");
                        // console.log(delete_button);
                        delete_button.addEventListener('click', function () {

                            self.remove();
                            document.querySelector(".modal").style.display = "none";
                        }) //end click delete To-d0 button

                        //click cancel button
                        var cancel_button = document.querySelector(".modal  .delete-item .cancel");
                        // console.log(cancel_button);

                        cancel_button.addEventListener("click", function () {
                            document.querySelector(".modal").style.display = "none";
                        }) //end click cancel button

                    })// end click item Delete To-do
                    // k.addEventListener('click', function () {
                    //     var parent = document.querySelector('.task-1.clone');
                    //     parent.removeChild(self);
                    // })

                }) //end right mouse show task-top

            } //ket thuc vong for



            //hide task-top
            window.addEventListener("click", function (e) {
                if (e.target != document.querySelector('#right-mouse .task-top'))
                    document.querySelector('#right-mouse .task-top').style.display = 'none';
            })  //end hide task-top





            //remove item to bottom   
            document.querySelector('.task-1.clone .icon-1 .task-check').addEventListener('click', function (e) {
                e.stopPropagation();
                //  console.log(this.parentElement.parentElement);
                var item = this.parentElement.parentElement;
                // console.log(item);
                var a = document.querySelector('.task-2.clone');
                document.querySelector('.task-2.clone').insertBefore(item, a.firstChild);

                // //  this.parentElement.parentElement.style.display = "none";
                //  var itm =  document.querySelector('.task-2 > .task-item');
                //  var cln =itm.cloneNode(true);
                //  var text = this.parentElement.parentElement.children[1].innerHTML;
                //  console.log(text);

                //  cln.children[1].children[0].innerHTML = text;
                //  var a = document.querySelector('.task-2.clone');
                //  document.querySelector('.task-2.clone').insertBefore(cln,a.firstChild);



                //right mouse show task-bottom
                // var self_2;
                var items_2 = document.querySelectorAll('.task-2.clone .task-item');
                for (var i = 0; i < items_2.length; i++) {
                    var item_2 = items_2[i];
                    item_2.addEventListener('contextmenu', function (e) {
                        e.preventDefault();
                        document.querySelector('#right-mouse .task-bottom').style.display = 'block';
                        document.querySelector('#right-mouse .task-bottom').style.top = e.clientY + 'px'
                        document.querySelector('#right-mouse .task-bottom').style.left = e.clientX + 'px';
                        document.getElementsByClassName("menu-user")[0].classList.remove("menu-user-2");  //an menu
                        document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");  //an chuong
                        document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2"); // an tin nhan
                        document.querySelector('#right-mouse .inbox').style.display = "none";  //an inbox
                        document.querySelector('#right-mouse .cong-viec').style.display = "none";  //an cong viec
                        document.querySelector('#right-mouse .task-top').style.display = "none";   //an task-top



                        //delete item              
                        self = this;
                        console.log(this);

                        // console.log(self);
                        // ket noi text voi delete-item
                        var text = self.children[1].innerHTML;
                        // console.log(text);   
                        document.querySelector('.delete-item h3 span').innerHTML = text;

                        //click item Delete To-do

                        var k = document.querySelectorAll('#right-mouse .task-bottom .list-item.end li')[1];
                        k.addEventListener("click", function () {
                            document.getElementsByClassName("task-bottom")[0].style.display = "none";
                            document.querySelector(".modal").style.display = "block";
                            document.getElementsByClassName("delete-item")[0].style.display = "block";
                            document.getElementsByClassName("create-newlist")[0].style.display = "none ";
                            document.getElementsByClassName("dialog-wrapper")[0].style.display = "none";
                            //click delete To-d0 button
                            var delete_button = document.querySelector(".modal  .content-footer .delete");
                            // console.log(delete_button);
                            delete_button.addEventListener('click', function () {

                                self.remove();
                                document.querySelector(".modal").style.display = "none";
                            }) //end click delete To-d0 button

                            //click cancel button
                            var cancel_button = document.querySelector(".modal  .delete-item .cancel");
                            // console.log(cancel_button);

                            cancel_button.addEventListener("click", function () {
                                document.querySelector(".modal").style.display = "none";
                            }) //end click cancel button

                        })// end click item Delete To-do







                    })//end right mouse show task-bottom
                } //ket thuc vong for



                //hide task-bottom
                //click stop menu
                document.querySelector('#right-mouse .task-bottom').addEventListener("click", function (e) {
                    e.stopPropagation();
                }) //end click stop menu

                document.getElementsByTagName("body")[0].addEventListener("click", function (e) {
                    if (e.target != document.querySelector('#right-mouse .task-bottom'))
                        document.querySelector('#right-mouse .task-bottom').style.display = 'none';
                })  //end hide task-bottom

                //remove item to top
                document.querySelector('.task-2.clone .icon-1 .task-checked').addEventListener('click', function (e) {

                    e.stopPropagation();
                    var item = this.parentElement.parentElement;
                    // console.log(item);

                    // var itm = document.querySelector('.task-1 > .task-item');
                    // var cln = itm.cloneNode(true);
                    // var text = this.parentElement.parentElement.children[1].children[0].innerHTML;
                    // cln.children[1].innerHTML = text;
                    // document.getElementsByClassName('task-1.clone')[0].appenchild(cln);

                    document.querySelector('.task-1.clone').appendChild(item);




                    // right-mouse show task-top lap lai sau khi remove item to top
                    //right mouse show task-top
                    var items = document.querySelectorAll('.task-1.clone .task-item');
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        item.addEventListener('contextmenu', function (e) {
                            e.preventDefault();
                            document.querySelector('#right-mouse .task-top').style.display = 'block';
                            document.querySelector('#right-mouse .task-top').style.top = e.clientY + 'px'
                            document.querySelector('#right-mouse .task-top').style.left = e.clientX + 'px';
                            document.getElementsByClassName("menu-user")[0].classList.remove("menu-user-2");  //an menu
                            document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");  //an chuong
                            document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2"); // an tin nhan
                            document.querySelector('#right-mouse .inbox').style.display = "none";  //an inbox
                            document.querySelector('#right-mouse .cong-viec').style.display = "none";  //an cong viec
                            document.querySelector('#right-mouse .task-bottom').style.display = "none";   //an task-bottom
                            // //delete item              
                            // var self = this;
                            // var k = document.querySelectorAll('#right-mouse .task-top .list-item.end li')[1];
                            // k.addEventListener('click', function () {
                            //     var parent = document.querySelector('.task-1.clone');
                            //     parent.removeChild(self);
                            // }) //end delete item
                        })
                    }  //end right mouse show task-top



                    //hide task-top
                    window.addEventListener("click", function (e) {
                        if (e.target != document.querySelector('#right-mouse .task-top'))
                            document.querySelector('#right-mouse .task-top').style.display = 'none';
                    })  //end hide task-top








                })   //end remove item to top




                // // vong lap task-item cua task-bottom
                // var task_item_s = document.querySelectorAll(".task-2 .task-item");
                // for (var i = 0; i < task_item_s.length; i++) {
                //     var task_item = task_item_s[i];
                //     // // double click item
                //     // task_item.addEventListener("dblclick", function () {
                //     //     document.getElementById("main-right").style.display = "flex";
                //     // })   //end double click item

                //     //click item
                //     task_item.addEventListener("click", function () {

                //         document.querySelector('.task-2 .task-item').classList.remove('special');
                //         var text = this.querySelector('.task-2 .text').innerHTML;
                //         document.querySelector('#main-right .display-view').innerHTML = text;
                //         var f = document.querySelectorAll(".task-2 .task-item");
                //         for (var i = 0; i < f.length; i++) {
                //             f[i].classList.remove('special');
                //         }
                //         this.classList.add('special');

                //     })     //end click item
                // }//end vong lap task-item cua task-bottom


            })  //end remove item to bottom 







            // vong lap task-item 
            var task_item_s = document.querySelectorAll(".task-list .task-item");
            for (var i = 0; i < task_item_s.length; i++) {

                var task_item = task_item_s[i];
                // double click item
                task_item.addEventListener("dblclick", function () {
                    document.getElementById("main-right").style.display = "flex";
                })   //end double click item

                //click item
                task_item.addEventListener("click", function () {
                    var text = this.querySelector('.task-item .text').innerHTML;
                    document.querySelector('#main-right .display-view').innerHTML = text;
                    var f = document.querySelectorAll(".task-list .task-item");
                    for (var i = 0; i < f.length; i++) {
                        f[i].classList.remove('special');
                    }
                    this.classList.add('special');


                })     //end click item


            }     //end vong lap task-item 

        }  //end  if (x == 13 && item != 0) 
    })   //end click enter input


    //  //delete item-top
    //     document.querySelectorAll('#right-mouse .task-top .list-item.end li')[1].addEventListener('click',function(){
    //         var item = this.parentElement.parentElement.parentElement.parentElement.children[2].children[1].children[1].children[1].children;
    //         console.log(item);


    //     })

    // var list_item = [

    // ];

    //  //show Item    
    // function show_item(){
    //     var a = "";
    //     for(var i =0; i<list_item.length;i++){
    //     var item = list_item[i];
    //         a+=   ' <li class= "task-item"> ';
    //         a+=   '<div class="icon-1">';
    //         a+=      '<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" ';
    //         a+=          'xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;">  ';
    //         a+=     '<g>';
    //         a+=             ' <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z"  ';
    //         a+=               ' style="fill:none;stroke-width:1px"></path>  ';
    //         a+=         '</g> ';
    //         a+=       '</svg>';
    //         a+=   '</div>' ;
    //         a+=   '<div class="text">';
    //         a+=       item ;
    //         a+=    '</div>';
    //         a+=   '<div class="icon-2">';
    //         a+=      '<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"';
    //         a+=          'xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">';
    //         a+=          '<g>';
    //         a+=              '<path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path>';
    //         a+=          '</g>';
    //         a+=       '</svg>';
    //         a+=   '</div>';
    //         a+=    '</li>';
    //     }
    // document.getElementsByClassName('task-1')[0].innerHTML = a;
    //   //remove item
    //  var checks =document.querySelectorAll('.task-1 .icon-1 svg');
    //  for(var i=0; i<checks.length;i++ ){
    //     var  check = checks[i];
    //      check.addEventListener('click',function(i){
    //         list_item.splice(i,1);
    //         show_item();
    //      })
    //     }



    // //

    //     //double click item
    //     var task_item_s=document.querySelectorAll(".task-1 .task-item");
    //     for (var i= 0; i<task_item_s.length; i++){
    //     var  task_item = task_item_s[i];
    //         task_item.addEventListener("dblclick",function(){
    //             document.getElementById("main-right").style.display = "flex";
    //         })

    //         //click item
    //         task_item.addEventListener("click",function(){
    //              var text = this.querySelector('.task-1 .text').innerHTML ;                  
    //             document.querySelector('#main-right .display-view').innerHTML = text;
    //             var f=document.querySelectorAll(".task-1 .task-item");
    //             for (var i= 0; i<f.length; i++){
    //             f[i].classList.remove('special');
    //             }
    //             this.classList.add('special');
    //         })

    //     }

    // }










    //right-mouse show inbox
    document.querySelector('#main-left #filter-colection').addEventListener('contextmenu', function (event) {
        event.preventDefault();
        document.querySelector('#right-mouse .inbox').style.display = "block";
        document.querySelector('#right-mouse .inbox').style.left = (event.clientX) + 'px';
        document.querySelector('#right-mouse .inbox').style.top = (event.clientY) + 'px';
        document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");
        document.getElementsByClassName("menu-user")[0].classList.remove("menu-user-2");  //an menu
        document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2"); // an tin nhan
        document.querySelector('#right-mouse .cong-viec').style.display = "none";  //an cong viec
        document.querySelector('#right-mouse .task-top').style.display = "none";   // an task-top
        document.querySelector('#right-mouse .task-bottom').style.display = "none";   //an task-bottom


    });

    // hide inbox
    var c = document.querySelector('#right-mouse .inbox');
    window.addEventListener("click", function (e) {
        if (e.target != c) {
            document.querySelector('#right-mouse .inbox').style.display = "none";
        }
    })

    //right-mouse show cong-viec

    var cong_viec_s = document.querySelectorAll('.lists-colection li');
    for (var i = 0; i < cong_viec_s.length; i++) {
        var cong_viec = cong_viec_s[i];
        cong_viec.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            document.querySelector('#right-mouse .cong-viec').style.display = "block";
            document.querySelector('#right-mouse .cong-viec').style.left = e.clientX + 'px';
            document.querySelector('#right-mouse .cong-viec').style.top = e.clientY + 'px';
            document.getElementsByClassName("menu-user")[0].classList.remmove("menu-user-2"); //an menu
            document.getElementsByClassName("popover-bottom")[0].classList.remove("popover-bottom-2");  //an chuong
            document.getElementsByClassName("hover-messenger")[0].classList.remove("hover-messenger-2"); // an tin nhan
            document.querySelector('#right-mouse .inbox').style.display = "none";  //an inbox
            document.querySelector('#right-mouse .task-top').style.display = "none";   // an task-top
            document.querySelector('#right-mouse .task-bottom').style.display = "none";   //an task-bottom

        })
    }

    // HIDE CONG-VIEC
    window.addEventListener("click", function (e) {
        if (e.target != document.querySelector('#right-mouse .cong-viec')) {
            document.querySelector('#right-mouse .cong-viec').style.display = "none";
        }
    })

    // click the li account setting
    var z = document.querySelectorAll('.modal #style-1 li');
    for (var i = 0; i < z.length; i++) {
        z[i].addEventListener('click', function () {
            for (var j = 0; j < z.length; j++) {
                z[j].style.background = "white";
            }
            this.style.background = "#ebebeb";
        })
    }

    // click genaral
    document.querySelectorAll('.modal #style-1 li')[0].addEventListener('click', function () {
        // document.querySelectorAll('.modal #style-1 li')[0].style.background = "#EBEBEB"
        document.querySelector('.dialog-wrapper .setting-content.account').style.display = "none";
        document.querySelector('.dialog-wrapper .setting-content.genaral').style.display = "block";

    })
    // click account
    document.querySelectorAll('.modal #style-1 li')[1].addEventListener('click', function () {
        // document.querySelectorAll('.modal #style-1 li')[1].style.background = "#EBEBEB"
        document.querySelector('.dialog-wrapper .setting-content.account').style.display = "block";
        document.querySelector('.dialog-wrapper .setting-content.genaral').style.display = "none";

    })


    // responsive
    function responsive_1000(x){
        if (x.matches){
        document.getElementById("main-left").classList.add("something");
        }
        else{
            document.getElementById("main-left").classList.remove("something");
        }
    }
    var x = window.matchMedia("(max-width: 1000px)")
    responsive_1000(x)
    x.addListener(responsive_1000)


   






    


}

