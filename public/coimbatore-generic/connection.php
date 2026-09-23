<?php 
$db_host = 'localhost';
// $db_name = 'elitevk9_wp244';
// $db_user = 'elitevk9_wp244';
// $db_pass = '$f(RzR?&p7gy';

$db_name = 'u754279598_elitewp';
$db_user = 'u754279598_elitewpuser';
$db_pass = '0ViulI$nQ@';



class mysqli_class extends mysqli {
    public function __construct($host, $user, $pass, $db) {
        parent::__construct($host, $user, $pass, $db);
 
        if (mysqli_connect_error()) {
            die('Connect Error (' . mysqli_connect_errno() . ') '
                    . mysqli_connect_error());
        }
    }
}
$con = new mysqli_class($db_host, $db_user, $db_pass, $db_name);	   
date_default_timezone_set('Asia/Calcutta');	   

?>