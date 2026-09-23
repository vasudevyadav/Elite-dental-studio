<?php

ob_start();
header('Content-Type: application/json; charset=UTF-8');
session_start();

function sendJsonError($message)
{
    echo json_encode([
        "status" => "error",
        "message" => $message
    ]);
    exit;
}

/*
|--------------------------------------------------------------------------
| Safely receive submitted values
|--------------------------------------------------------------------------
*/

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');

/*
| Location visible field remove ho chuki hai.
| Hidden field se Coimbatore aayega.
*/
$location = trim($_POST['location'] ?? 'Coimbatore');

    $url = $_POST['url'] ?? '';
	$utm_campaign = $_POST['utm_campaign'] ?? '';
	$utm_source = $_POST['utm_source'] ?? '';
	$utm_medium = $_POST['utm_medium'] ?? '';
	$utm_term = $_POST['utm_term'] ?? '';
	$utm_content = $_POST['utm_content'] ?? '';
	$gclid = $_POST['gclid'] ?? '';

$captchaCode = trim($_POST['captcha_code'] ?? '');

/*
|--------------------------------------------------------------------------
| Save form data in session
|--------------------------------------------------------------------------
*/

$_SESSION['yname'] = $name;
$_SESSION['ytel'] = $phone;
$_SESSION['yemail'] = $email;
$_SESSION['yloc'] = $location;

/*
|--------------------------------------------------------------------------
| Captcha validation
|--------------------------------------------------------------------------
*/

$captchaSessionKey = 'captcha_code_3';

$sessionCaptcha = (string) ($_SESSION[$captchaSessionKey] ?? '');

if (
    $captchaCode === '' ||
    (string) $captchaCode !== $sessionCaptcha
) {
    sendJsonError("Captcha is not matching.");
}


/*
|--------------------------------------------------------------------------
| Server-side form validation
|--------------------------------------------------------------------------
*/

if ($name === '') {
    sendJsonError("Please enter name.");
}

if (!preg_match('/^[a-zA-Z\s._-]+$/', $name)) {
    sendJsonError("Please enter a valid name.");
}

if (!preg_match('/^[6-9][0-9]{9}$/', $phone)) {
    sendJsonError("Please enter a valid 10 digit phone number.");
}

/*
| Email is required for the appointment form.
| Existing callback form ko disturb nahi karega.
*/
if ($email === '') {
    sendJsonError("Please enter email address.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonError("Please enter a valid email address.");
}

/*
| Valid captcha should not be reused
*/
unset($_SESSION[$captchaSessionKey]);

include('connection.php');


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
/*if (empty($_POST['phone'])) {
	$error['tel_h'] = 'Phone number cannot be left empty.';
	$error['done'] = "error";
} else if (!empty($_POST['phone']) && !is_numeric($_POST['phone'])) {
	$error['tel_h'] = 'Phone number must be number.';
	$error['done'] = "error";
} else if (!empty($_POST['phone']) && strlen((string) $_POST['phone']) != 10) {
	$error['tel_h'] = 'Phone number should be 10 digit.';
	$error['done'] = "error";
} else if (!preg_match('/^([6-9]{1})([0-9]{9})$/', $_POST['phone'])) {
	$error['tel_h'] = 'Please use a valid number.';
	$error['done'] = "error";
} else if (!empty($_POST['phone']) && (in_array($_POST['phone'], $ph_no_arr1) || in_array($_POST['phone'], $ph_no_arr2) || in_array($_POST['phone'], $ph_no_arr3))) {
	$error['tel_h'] = '*The phone number mentioned has been blocked due to multiple unscrupulous requests generated. Kindly use a different phone number to register your request.';
	$error['done'] = "error";
} else {
	$error['tel_h'] = '';
	$error['done'] = "";
}*/



// if ($error['name_h'] == '' && $error['tel_h'] == '' && $error['captcha_h'] == '') {

	//echo "Everything Fine"; exit;

	include('clicktocall.php');


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
            <tr><td><b>Email </b></td><td><b>:</b></td><td>' . $email . '</td></tr>
            <tr><td><b>Location </b></td><td><b>:</b></td><td>' . $location . '</td></tr>
            <tr><td><b>Url </b></td><td><b>:</b></td><td>' . $url . '</td></tr>
            <tr><td><b>UTM Source </b></td><td><b>:</b></td><td>' . $utm_source . '</td></tr>
            <tr><td><b>UTM Medium </b></td><td><b>:</b></td><td>' . $utm_medium . '</td></tr>
            <tr><td><b>UTM Campaign </b></td><td><b>:</b></td><td>' . $utm_campaign . '</td></tr>
            <tr><td><b>UTM Term </b></td><td><b>:</b></td><td>' . $utm_term . '</td></tr>
            </table><p>Kind Regards,<br />Elite Dental Studio Team<br/>https://elitedentalstudio.co.in/</p>';
		
		
		// $to = "abhisheksharma@reinventdigital.com";
		$to = "info@elitedentalstudio.co.in, elitedentalstudio.calicut@gmail.com, poonam@reinventdigital.com, ankitladha@reinventdigital.com, sookoon@reinventdigital.com, deepakverma@reinventdigital.com";
        $subject = "Elite Dental Studio Generic Appointment";

		$headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: Elite Dental Studio <web@elitedentalstudio.co.in>" . "\r\n";
 
        if ($email !== '') {
		    $headers .= "Reply-To: " . $email . "\r\n";
		}
        
        // mail($to, $subject, $body, $headers);

        $mail_sent = mail($to, $subject, $body, $headers);

		if(!$mail_sent){
		    error_log("Mail failed to send");
		}
        
		echo json_encode([
		    "status" => "success",
		    "redirect" => "https://elitedentalstudio.co.in/coimbatore-generic/thank-you.html"
		]);
		exit;


	}
/* } else {


	if ($error['name_h'] != "") {
		$_SESSION['error_issue'] = "Please enter only characters in name<br/>";
	}

	if ($error['tel_h'] != "") {
		$_SESSION['error_issue'] .= "Please enter valid phone number";
	}

	if ($error['captcha_h'] != "") {
		$_SESSION['captcha_issue'] = $error['captcha_h'];
	}

	header('location:' . $_SERVER['HTTP_REFERER']);
	//echo "Everything not Fine"; exit;
	//echo json_encode( $error );

	echo json_encode([
	    "status" => "error",
	    "message" => "Please enter valid details."
	]);
	exit;


}
*/
//mysqli_close($con);

?>