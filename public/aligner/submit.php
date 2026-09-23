<?php
ob_start();
header('Content-Type: application/json');
session_start();

extract($_POST);

$_SESSION['yname'] = $_POST['name'];
$_SESSION['ytel'] = $_POST['phone'];
$_SESSION['yloc'] = $_POST['location'];

if (isset($_POST['form_name']) && $_POST['form_name'] == 'call_back'){
	//Nothing
	if ($_POST['captcha_code'] != $_SESSION["captcha_code_2"]) {
	    echo json_encode([
	        "status" => "error",
	        "message" => "Captcha is not matching."
	    ]);
	    exit;
	}
	$email = '';
} else {
	//check captcha
	if ($_POST['captcha_code'] != $_SESSION["captcha_code_1"]) {
	    echo json_encode([
	        "status" => "error",
	        "message" => "Captcha is not matching."
	    ]);
	    exit;
	}

	$email = $_POST['email'];
}


include('connection.php');
include('clicktocall.php');


if (empty($_POST['name'])) {
    $error['name_h'] = 'Name cannot be left empty.';
    $error['done'] = "error";
} else if (!preg_match("/^[a-zA-Z\s ._-]+$/", $_POST['name'])) {
	$error['name_h'] = 'Please enter valid name.';
	$error['done'] = "error";
} else {
	$error['name_h'] = '';
	$error['done'] = "";
}

$ph_no_arr1 = array("08851672425", "08178109008", "07018140305");
$ph_no_arr2 = array("08851672425", "08178109008", "07018140305");
$ph_no_arr3 = array("+918851672425", "+918178109008", "+917018140305", "+919877187263", "+919667732671", "8268868995");

	$name = $_POST['name'] ?? '';
	$phone = $_POST['phone'] ?? '';
	$location = $_POST['location'] ?? '';
	$url = $_POST['url'] ?? '';
	$utm_campaign = $_POST['utm_campaign'] ?? '';
	$utm_source = $_POST['utm_source'] ?? '';
	$utm_medium = $_POST['utm_medium'] ?? '';
	$utm_term = $_POST['utm_term'] ?? '';
	$utm_content = $_POST['utm_content'] ?? '';
	$gclid = $_POST['gclid'] ?? '';
	$email = $_POST['email'] ?? '';


	$leadipaddress = $_SERVER['REMOTE_ADDR'] ?? '';
	$msg = $_POST['msg'] ?? '';
	$response = $response ?? '';

	if ($name != '' and $phone != '') {
		
		date_default_timezone_set('Asia/Kolkata');
		$gdatetime = date("d M Y, h:i A");
		$datetime = date("Y-m-d H:i:s");

		$qry = "INSERT INTO leads(lead_created_date_time, lead_campaign_name, lead_source, lead_location, lead_name, lead_mobile, lead_email, treatments,lead_notes,	    lead_ppc_campaign, lead_ppc_source, lead_ppc_keyword, lead_ppc_medium, lead_ip_address, lead_region, clc_response) VALUES('" . $datetime . "', '" . $url . "', '" . $utm_source . "', '" . $location . "', '" . mysqli_real_escape_string($con, $name) . "', '" . mysqli_real_escape_string($con, $phone) . "', '" . mysqli_real_escape_string($con, $email) . "', '', '" . $msg . "', '" . $utm_campaign . "', '" . $utm_source . "', '" . $utm_term . "', '" . $utm_medium . "', '" . $leadipaddress . "', '', '" . $response . "')";
		//echo $qry; exit;
		mysqli_query($con, $qry);

		// Send lead to Google Sheet
		$googleSheetUrl = "https://script.google.com/macros/s/AKfycbx9FdZpKEpunXlDOEoYMC-scY0oUit24n0VfbL7A3guiB0AA18simXUc4veA_hYt355yg/exec";

		$sheetData = [
		    'datetime'    => $gdatetime,
		    'name'        => $name,
		    'phone'       => $phone,
		    'email'       => $email,
		    'location'    => $location,
		    'url'         => $url,
		    'utm_source'  => $utm_source,
		    'utm_medium'  => $utm_medium,
		    'utm_campaign'=> $utm_campaign,
		    'utm_term'    => $utm_term,
		    'utm_content' => $utm_content,
		    'gclid'       => $gclid
		];

		$ch = curl_init($googleSheetUrl);

		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($sheetData));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);

		$googleSheetResponse = curl_exec($ch);

		curl_close($ch);


		// $mail = new PHPMailer();
		$body = '<p>Dear Admin,</p><p>Please see the below appointment details.</p><table>
            <tr><td><b>Name </b></td><td><b>:</b></td><td>' . $name . ' </td></tr>
            <tr><td><b>Phone </b></td><td><b>:</b></td><td>' . $phone . ' </td></tr>
            <tr><td><b>Location </b></td><td><b>:</b></td><td>' . $location . '</td></tr>
            <tr><td><b>Url </b></td><td><b>:</b></td><td>' . $url . '</td></tr>
            <tr><td><b>UTM Source </b></td><td><b>:</b></td><td>' . $utm_source . '</td></tr>
            <tr><td><b>UTM Medium </b></td><td><b>:</b></td><td>' . $utm_medium . '</td></tr>
            <tr><td><b>UTM Campaign </b></td><td><b>:</b></td><td>' . $utm_campaign . '</td></tr>
            <tr><td><b>UTM Term </b></td><td><b>:</b></td><td>' . $utm_term . '</td></tr>
            <tr><td><b>UTM Content </b></td><td><b>:</b></td><td>' . $utm_content . '</td></tr>
            <tr><td><b>GCL-ID </b></td><td><b>:</b></td><td>' . $gclid . '</td></tr>
            </table><p>Kind Regards,<br />Elite Dental Studio Team<br/>https://elitedentalstudio.co.in/</p>';
		
		$to = "info@elitedentalstudio.co.in, elitedentalstudio.calicut@gmail.com, poonam@reinventdigital.com, ankitladha@reinventdigital.com, sookoon@reinventdigital.com, deepakverma@reinventdigital.com";
// 		$to = "abhisheksharma@reinventdigital.com";
        $subject = "Elite Dental Studio Aligners Appointment";

		$headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: Elite Dental Studio <web@elitedentalstudio.co.in>" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        
        mail($to, $subject, $body, $headers);

        // include('clicktocall.php');
        
		echo json_encode([
		    "status" => "success",
		    "redirect" => "https://elitedentalstudio.co.in/aligner/thank-you.html"
		]);
		exit;


	}

?>