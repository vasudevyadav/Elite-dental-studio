<?php
session_start();
$random_alpha = rand();
$captcha_code = substr($random_alpha, 0, 4);
$_SESSION["captcha_code_3"] = $captcha_code;
$target_layer = imagecreatetruecolor(100,35);
$captcha_background = imagecolorallocate($target_layer, 205, 206, 207);
imagefill($target_layer,0,0,$captcha_background);
$captcha_text_color = imagecolorallocate($target_layer, 0, 0, 0);
imagestring($target_layer, 5, 5, 5, $_SESSION["captcha_code_3"], $captcha_text_color);
header("Content-type: image/jpeg");
imagejpeg($target_layer);
?>