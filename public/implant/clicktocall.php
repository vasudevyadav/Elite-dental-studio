<?php
ob_start();
session_start();

/**
 * ClickToCall
 * @Created By: Rohit (01 sep 2023)
 * @Description: Handling Click to Call Functionality
 * Updated: DeepCall V3 API
 */

$curl = curl_init();

$USER_ID = "68932213";
$TOKEN = "Ehy8xQKD2B9FDG7JWFjr";
$CALLFIRST = "agent";
$CUSTOMER = isset($phone) ? preg_replace('/[^0-9]/', '', $phone) : '';
$customerCLI = "917557188666";
$AGENTTYPE = "agent_number";
$AGENT_NUMBER = "8714608881";
$agentCLI = "917557188666";

curl_setopt_array($curl, array(
     CURLOPT_URL => 'https://v4-api.deepcall.com/api/v3/clickToCall/para?&user_id='.$USER_ID.'&token='.$TOKEN.'&callFirst='.$CALLFIRST.'&customer='.$CUSTOMER.'&customerCLI='.$customerCLI.'&agentType='.$AGENTTYPE.'&agent_number='.$AGENT_NUMBER.'&agentCLI='.$agentCLI,
     CURLOPT_RETURNTRANSFER => true,
     CURLOPT_ENCODING => "",
     CURLOPT_MAXREDIRS => 10,
     CURLOPT_TIMEOUT => 30,
     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
     CURLOPT_CUSTOMREQUEST => "POST",
     CURLOPT_POSTFIELDS => "",
     CURLOPT_HTTPHEADER => array(
     "cache-control: no-cache"
     ),
));


$response = curl_exec($curl);
// print_r($response); die;
$err = curl_error($curl);
curl_close($curl);


?>