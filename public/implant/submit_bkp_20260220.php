<?php
ob_start();
session_start();
extract($_POST);



$_SESSION['yname'] = $_POST['name'];
$_SESSION['ytel'] = $_POST['phone'];
$_SESSION['yloc'] = $_POST['location'];

if ($_POST['form_name'] == 'call_back') {
	//Nothing
	$email = '';
} else {
	//check captcha
	if ($_POST['captcha_code'] !== $_SESSION["captcha_code_1"]) {
		$error['captcha_h'] = "Captcha is not matching.";
		header('location:' . $_SERVER['HTTP_REFERER']);

	}
	$email = $_POST['email'];
}


include('../includes/connection.php');
include('../includes/clicktocall.php');
include('../includes/Phpmailer/PHPMailerAutoload.php');



if (empty($_POST['phone'])) {
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
if (empty($_POST['phone'])) {
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
} else if (!empty($_POST['phone']) && (in_array($_POST['phone'], $ph_no_arr1) || in_array($_POST['tel'], $ph_no_arr2) || in_array($_POST['phone'], $ph_no_arr3))) {
	$error['tel_h'] = '*The phone number mentioned has been blocked due to multiple unscrupulous requests generated. Kindly use a different phone number to register your request.';
	$error['done'] = "error";
} else {
	$error['tel_h'] = '';
	$error['done'] = "";
}



if ($error['name_h'] == '' && $error['tel_h'] == '' && $error['captcha_h'] == '') {

	//echo "Everything Fine"; exit;

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$location = $_POST['location'];




	if ($name != '' and $phone != '') {

		$datetime = date("Y-m-d H:i:s");


		$qry = "INSERT INTO leads(lead_created_date_time, lead_campaign_name, lead_source, lead_location, lead_name, lead_mobile, lead_email, treatments,lead_notes, lead_ppc_campaign, lead_ppc_source, lead_ppc_keyword, lead_ppc_medium, lead_ip_address, lead_region, clc_response) VALUES('" . $datetime . "', '" . $url . "', '" . $lead_source . "', '" . $location . "', '" . mysqli_real_escape_string($con, $name) . "', '" . mysqli_real_escape_string($con, $phone) . "', '" . mysqli_real_escape_string($con, $email) . "', '', '" . $msg . "', '" . $utm_campaign . "', '" . $utm_source . "', '" . $utm_term . "', '" . $utm_medium . "', '" . $leadipaddress . "', '', '" . $response . "')";
		//echo $qry; exit;
		mysqli_query($con, $qry);


		// 	     $to = "azhar@reinventdigital.com,rohit@reinventdigital.com";

		// $headers .= "From: Elite <no-reply@elitedentalstudio.co.in>\n";
// $headers.= "MIME-version: 1.0\n";
// $headers.= "Content-type: text/html; charset= iso-8859-1\n";
// $subject = 'Elite Appointment';
// $messages = '<p>Dear Admin,</p><p>Please see the below appointment details.</p><table>
// <tr><td><b>Name </b></td><td><b>:</b></td><td>'.$name.' </td></tr>
// <tr><td><b>Phone </b></td><td><b>:</b></td><td>'.$phone.' </td></tr>
// <tr><td><b>Location </b></td><td><b>:</b></td><td>'.$location.' </td></tr>
// <tr><td><b>UTM Source </b></td><td><b>:</b></td><td>'.$email.'</td></tr>
// <tr><td><b>UTM Medium </b></td><td><b>:</b></td><td>'.$utm_medium.'</td></tr>
// <tr><td><b>UTM Campaign </b></td><td><b>:</b></td><td>'.$utm_campaign.'</td></tr>
// <tr><td><b>UTM Term </b></td><td><b>:</b></td><td>'.$utm_term.'</td></tr>
// </table><p>Kind Regards,<br />Elite Dental Team<br/>https://elitedentalstudio.co.in/</p>';;
// mail($to,$subject,$messages,$headers);

		$mail = new PHPMailer();
		$body = '<p>Dear Admin,</p><p>Please see the below appointment details.</p><table>
<tr><td><b>Name </b></td><td><b>:</b></td><td>' . $name . ' </td></tr>
<tr><td><b>Phone </b></td><td><b>:</b></td><td>' . $phone . ' </td></tr>
<tr><td><b>Location </b></td><td><b>:</b></td><td>' . $location . '</td></tr>
<tr><td><b>UTM Source </b></td><td><b>:</b></td><td>' . $utm_source . '</td></tr>
<tr><td><b>UTM Medium </b></td><td><b>:</b></td><td>' . $utm_medium . '</td></tr>
<tr><td><b>UTM Campaign </b></td><td><b>:</b></td><td>' . $utm_campaign . '</td></tr>
<tr><td><b>UTM Term </b></td><td><b>:</b></td><td>' . $utm_term . '</td></tr>
</table><p>Kind Regards,<br />Elite Dental Studio Team<br/>https://elitedentalstudio.co.in/</p>';
		$mail->IsSMTP(); // telling the class to use SMTP
//$mail->Host       = "webmail.vitaldentalcare.co.in"; // SMTP server
		$mail->Host = "elitedentalstudio.co.in";      // sets GMAIL as the SMTP server
		$mail->SMTPAuth = true;                  // enable SMTP authentication
		$mail->Username = "web@elitedentalstudio.co.in";  // GMAIL username
		$mail->Password = "#v8]n]B3Mj)e";
		$mail->SetFrom('web@elitedentalstudio.co.in', 'info');
		$mail->AddReplyTo($email, $name);
		$mail->Subject = "Elite Dental Studio implant Appointment";
		$mail->AltBody = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
		$mail->MsgHTML($body);
		$mail->AddAddress('info@elitedentalstudio.co.in', "Admin");
		$mail->addCC('elitedentalstudio.calicut@gmail.com', 'elite');
		$mail->addCC('poonam@reinventdigital.com', 'poonam');
		//s$mail->addBCC('rohit@reinventdigital.com', 'rohit');
		$mail->Send();



		header('Location: https://elitedentalstudio.co.in/implant/thank-you.html');
		exit;

	}
} else {


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
}

//mysqli_close($con);

?>