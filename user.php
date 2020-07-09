<?php
    class User{
        private $_id;
        private $_username;
        private $_password;
    
        function setId($id) {
            $this->_id = $id;
        }
        function setUsername($username){
            $this->_username = $username;
        }
        function setPassword($password){
            $this->_password = $password;
        }
        function getId(){
            return $this->_id;
        }
        function getUsername(){
            return $this->_username;
        }
        function getPassword(){
            return $this->_password;
        }
        function __construct($id, $username, $password){
            $this->_id = $id;
            $this->_username = $username;
            $this->_password = $password;
        }
    }
?>