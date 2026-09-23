<?php

session_start();
$orgnURL = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>

<!DOCTYPE html>

<html lang="en">

<head>

    <!-- Required meta tags -->

    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />



    <title>Best Dental Clinic in Calicut, Kochi, Kannur</title>

    <meta name="description"
        content="Experience exceptional dental care at our best clinic in Calicut, Kochi & Kannur. Skilled professionals, advanced treatments, and a healthy, confident smile awaits you." />

    <META NAME="robots" CONTENT="noindex,nofollow">

    <link rel="icon" href="https://elitedentalstudio.co.in/wp-content/uploads/2022/11/cropped-fav-32x32.png"
        sizes="32x32" />

    <link rel="icon" href="https://elitedentalstudio.co.in/wp-content/uploads/2022/11/cropped-fav-192x192.png"
        sizes="192x192" />

    <link rel="apple-touch-icon"
        href="https://elitedentalstudio.co.in/wp-content/uploads/2022/11/cropped-fav-180x180.png" />

    <meta name="msapplication-TileImage"
        content="https://elitedentalstudio.co.in/wp-content/uploads/2022/11/cropped-fav-270x270.png" />



    <link rel="preload" href="fonts/Metropolis-ExtraBold.woff" as="font" type="font/woff2" crossorigin>

    <link rel="preload" href="fonts/Metropolis-ExtraBold.woff2" as="font" type="font/woff2" crossorigin>

    <link rel="preload" fetchPriority="high" href="images/Elite%20Dental%20Studio%20Logo_w.png" as="image"
        type="image/png">

    <link rel="preload" fetchPriority="high" href="images/LP_Banner-min.webp" as="image" type="image/webp">



    <style>
        /*========== home banner area ========*/

        .home-banner-area {

            background-color: #fff6f0;

            padding: 110px 0px 50px;

            background-image: url('../images/LP_Banner-min.webp');

            background-repeat: no-repeat;

            width: 100%;

            background-size: cover;

        }

        .home-banner-area .banner-lft-cnt h1 {

            font-size: 48px;

            color: #fff;

            margin-bottom: 10px;

            font-family: 'Metropolis-ExtraBold';

            text-transform: capitalize;

        }

        .slide-btn a {

            margin-right: 15px;

        }

        .banner-lft-cnt p {

            font-family: 'Metropolis-Bold';

            font-size: 20px;

            color: #fff;

        }

        .cmn-btn.dt-sol {

            background: #fff;

            color: #29696D;

            box-shadow: none;

        }

        .home-banner-area .row {

            align-items: center;

        }

        .banner-lft-cnt .slide-btn {

            margin-top: 30px;

        }

        .book-appointment-out {

            position: relative;

        }

        .book-appointment {

            border-radius: 20px;

            padding: 30px 40px;

            height: 100%;

            background-color: #fff;

            position: relative;

            z-index: 99;

        }

        .book-appointment h2 {

            color: #32B6A8;

            font-size: 32px;

            line-height: 36px;

            margin-bottom: 20px;

            font-family: 'Metropolis-ExtraBold';

            text-align: center;

        }

        .book-appointment .service-form .input-group {

            margin-bottom: 15px;

            position: relative;

        }

        .book-appointment .service-form .input-group .input-group-text {

            background-color: transparent;

            border: 0px;

            color: #32B6A8;

            font-size: 18px;

            position: absolute;

            z-index: 99;

            left: 6px;

            top: 5px;

            padding: 8px;

        }

        .book-appointment .service-form .input-group .input-group-text i {

            color: #32B6A8;

        }

        .book-appointment .service-form .input-group .form-control {

            padding: 11px 11px;

            font-size: 15px;

            padding-left: 44px;

            color: #000;

            border-radius: 13px !important;

            border: solid 1px #32B6A8;

            background-color: #fff;

        }

        .book-appointment .service-form .input-group .form-control::-webkit-input-placeholder {
            /* Edge */

            color: #000;

        }

        .book-appointment .service-form .input-group .form-control:-ms-input-placeholder {
            /* Internet Explorer 10-11 */

            color: #000;

        }

        .book-appointment .service-form .input-group .form-control::placeholder {

            color: #000;

        }

        .form-sbmt-btn {

            margin-bottom: 22px;

        }

        .form-sbmt-btn .cmn-btn {

            border: none;

            padding: 12px 40px 12px;

            background-color: #29696D;

        }

        .form-check .form-check-label {

            color: #000;

            font-size: 14px;

        }

        .after-smbt-p p {

            font-size: 14px;

            color: #000;

        }

        .book-appointment .service-form .input-group .form-control.error {

            background-image: url(../images/exclamation.png);

            background-size: 13px auto, auto;

            background-repeat: no-repeat, no-repeat;

            background-position: 98% 50%;

        }

        .book-appointment .captcha-inp .form-control.error {

            background-image: url(../images/exclamation.png);

            background-size: 13px auto, auto;

            background-repeat: no-repeat, no-repeat;

            background-position: 56% 50%;

        }

        /*g captcha*/

        .input_box.captcha-inp {

            position: relative;

            margin-bottom: 20px;

        }

        .captcha-inp span {

            background-color: #cdcecf;

            padding: 6px 24px;

            border-radius: 0px;

            font-size: 16px;

            line-height: 25px;

            color: #000;

            position: absolute;

            top: 0;

            right: 0;

            border-radius: 0 13px 13px 0;

        }



        .captcha-load {

            position: absolute;

            top: 6px;

            right: -50px;

        }

        .book-appointment .captcha-inp .form-control {

            padding: 11px 85px 11px 11px !important;

            font-size: 15px;

            padding-left: 44px;

            color: #000;

            border-radius: 13px !important;

            border: solid 1px #32B6A8;

            background-color: #fff;

        }

        /*========== end home banner area ========*/
    </style>

    <!-- Bootstrap CSS -->

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />

    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <link rel="stylesheet" type="text/css" href="css/responsive.css" />

    <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css" />

    <script defer src="https://kit.fontawesome.com/f02da0a219.js" crossorigin="anonymous"></script>

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!--<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">-->



    <style>
        .bg-3 {

            background-color: #D5EAF4 !important;

            color: #000;

        }
    </style>

    <meta name="google-site-verification" content="S-FKpicS9K_a_dwvtrpKJ_9qOrDC-R0wtFP7EO6hYEI" />

    <!-- Google Tag Manager -->

    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':

                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],

                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =

                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);

        })(window, document, 'script', 'dataLayer', 'GTM-MQ39SL8');</script>

    <script>!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"7YHPgL1uYupjKbpWiNPCLo",debug:true});</script>
    
</head>

<body>

    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQ39SL8" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>

    <!-- End Google Tag Manager (noscript) -->





    <!--=========== header area =========== -->

    <header class="header-area">

        <div class="container">

            <div class="header-inner">

                <div class="top-lft-logo">

                    <a href="#"><img src="images/Elite Dental Studio Logo_w.png" class="img-fluid" width="90"
                            height="76"></a>

                </div>

                <div class="appointment-header">

                    <div class="apt-contact">





                        <!--<p><img src="images/loc-ic.png" alt="call ic"> <a href="https://goo.gl/maps/wSmdjdwo332YGi4eA">DLF Phase IV, Gurugram</a></p>-->

                        <!--<p><img src="images/call-ic.png" alt="call ic"> <a href="tel:9745073555">9745073555</a></p>-->

                        <p>

                            <img src="images/call-ic.png" alt="call ic">

                            <!--                                <i class="fa fa-whatsapp" aria-hidden="true" style="-->

                            <!--    color: #fff;-->

                            <!--    padding: 10px;-->

                            <!--"></i>-->



                            <a href="tel:+91 8714608881">+91 8714608881</a>
                        </p>

                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#myModalappointment"
                            class="cmn-btn d-none d-lg-inline-block"><i class="fa-solid fa-phone"></i> instant call
                            back</a>

                    </div>

                    <!--<div class="book-btn">-->

                    <!--    <a href="#">Book Your Appointment</a>-->

                    <!--</div>-->

                </div>

            </div>

        </div>

    </header>

    <!--=========== end header area =========== -->



    <!-- ========= home banner area =======-->

    <section class="home-banner-area">

        <div class="container">

            <div class="row">

                <div class="col-lg-7">

                    <div class="banner-lft-cnt">

                        <h1>Unlock Your<br /> Brightest Smile!</h1>

                        <p><strong>Experience World-Class Dental Care Tailored Just For You.</strong></p>

                        <!-- <p>For A Confident, Long Lasting Smile</p> -->

                        <div class="slide-btn">

                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#myModalappointment"
                                class="cmn-btn tal-den d-none d-lg-inline-block bg-3">Contact Us Today</a>

                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#myModalappointment"
                                class="cmn-btn d-inline-block d-lg-none bg-3"><i class="fa-solid fa-phone"></i> instant
                                call back</a>

                        </div>

                    </div>

                </div>



                <div class="col-lg-5">

                    <div class="book-appointment-out">

                        <div class="book-appointment">

                            <?php //require_once('bigin.php'); ?>


                            <h2>Book Your Appointment</h2>

                            <form class="service-form" method="POST" id="apt_form" enctype="multipart/form-data">

                                <div class="row">

                                    <div class="col-md-12">

                                        <div class="input-group">

                                            <span class="input-group-text"><i class="fa fa-user"
                                                    aria-hidden="true"></i></span>

                                            <input type="text" class="form-control" placeholder="Name" name="name"
                                                id="name" onKeyPress="return onlyAlphabets(event);" required <?php if (isset($_session['yname']) && $_session['yname'] != "") { ?>value="<?php echo $_SESSION['yname'] ?>" <?php }
                                                $_SESSION['yname'] = "" ?>>

                                        </div>

                                    </div>



                                    <div class="col-md-12">

                                        <div class="input-group">

                                            <span class="input-group-text"><i class="fa fa-phone"
                                                    aria-hidden="true"></i></span>

                                            <input type="text" class="form-control" placeholder="Phone" name="phone"
                                                id="phone" onKeyPress="return isNumber(event);" maxlength="10"
                                                minlength="10" required <?php if (isset($_session['ytel']) && $_session['ytel'] != "") { ?>value="<?php echo $_SESSION['ytel'] ?>"
                                                <?php }
                                                $_SESSION['ytel'] = "" ?>>

                                        </div>

                                    </div>

                                    <div class="col-md-12">

                                        <div class="input-group">

                                            <span class="input-group-text"><i class="fa fa-location"
                                                    aria-hidden="true"></i></span>

                                            <select class="form-control form-select" name="location" required>

                                                <option value="">Select Location</option>

                                                <option value="Kochi" <?php if ($_SESSION['yloc'] == 'Kochi') {
                                                    'selected';
                                                } ?>>Kochi</option>

                                                <option value="Calicut" <?php if ($_SESSION['yloc'] == 'Calicut') {
                                                    'selected';
                                                } ?>>Calicut</option>

                                                <option value="Kannur" <?php if ($_SESSION['yloc'] == 'Kannur') {
                                                    'selected';
                                                } ?>>Kannur</option>

                                                <option value="Coimbatore" <?php if ($_SESSION['yloc'] == 'Coimbatore') {
                                                    'selected';
                                                } ?>>Coimbatore</option>

                                            </select>

                                            <?php $_SESSION['ytel'] = ""; ?>

                                        </div>

                                    </div>

                                    <div class="col-lg-10 col-10">

                                        <div class="input_box captcha-inp">

                                            <input type="text" placeholder="Captcha" id="captcha_code"
                                                name="captcha_code" class="form-control" required="">

                                            <span><img id="captcha_code1"
                                                    src="/dental-care/captcha/page_captcha_code1.php" /></span>

                                            <a href="#" class="captcha-load captcha_refresh capLoad"
                                                onClick="refreshCaptcha1();" id="refresh_captcha"><img
                                                    src="images/catcha-load.png" alt="captcha"></a>



                                        </div>

                                    </div>

                                    <?php

                                    if (isset($_SESSION['error_issue']) && $_SESSION['error_issue'] != "") {

                                        ?>

                                        <p class="text-danger"><small><i class="fa fa-exclamation-circle"></i>
                                                <?php echo $_SESSION['error_issue'];
                                                $_SESSION['error_issue'] = ""; ?></small>
                                        </p>

                                        <?php

                                    }

                                    ?>

                                    <?php

                                    if (isset($_SESSION['captcha_issue']) && $_SESSION['captcha_issue'] != "") {

                                        ?>

                                        <p class="text-danger"><small><i class="fa fa-exclamation-circle"></i>
                                                <?php echo $_SESSION['captcha_issue'];
                                                $_SESSION['captcha_issue'] = ""; ?></small>
                                        </p>

                                        <?php

                                    }

                                    ?>



                                    <!--<div class="form-check mb-3">-->

                                    <!--    <label class="form-check-label">-->

                                    <!--      <input class="form-check-input" type="checkbox" name="disclaimer" required> I declare that the information provided is correct. I would like to receive communication about Dental services.-->

                                    <!--    </label>-->

                                    <!--</div>-->
                                    
                                    <input type="hidden" name="url" value="<?php echo $orgnURL; ?>">

                                    <input type="hidden" name="utm_campaign"
                                        value="<?php echo $_GET['utm_campaign']; ?>">

                                    <input type="hidden" name="utm_source" value="<?php echo $_GET['utm_source']; ?>">

                                    <input type="hidden" name="utm_medium" value="<?php echo $_GET['utm_medium']; ?>">

                                    <input type="hidden" name="utm_term" value="<?php echo $_GET['utm_term']; ?>">
                                    <input type="hidden" name="utm_content" value="<?php echo $_GET['utm_content']; ?>">
                                    <input type="hidden" name="gclid" value="<?php echo $_GET['gclid']; ?>">

                                </div>

                                <div id="form_message" class="text-center mb-2"></div>

                                <div class="form-sbmt-btn text-center">

                                    <button type="submit" class="cmn-btn" id="callme_button">Book An
                                        Appointment</button>

                                </div>

                                <div class="after-smbt-p text-center">

                                    <p>By clicking Submit you agree to be contacted by Elite dental studio over Phone or
                                        SMS/WhatsApp/Email.</p>

                                </div>



                            </form>




                        </div>

                    </div>

                </div>





            </div>

        </div>

    </section>

    <!-- ========= end home banner area =======-->

    <!--========= Dental Treatments area ========-->

    <section class="dental-treatments-area" style="background-color:#D5EAF4">

        <div class="container">

            <div class="dental-heading" data-aos="fade-up" data-aos-duration="1000">

                <div class="heading text-center">

                    <h2>Our Range of Dental Services</h2>

                    <hr style="margin: 18px auto 20px;">

                    <p>Being the best dental clinic in Kozhikode, Elite Dental Studio offers a full spectrum of dental
                        procedures to help you explore what's best for your smile. Get back that confidence you lost
                        when your teeth were sensitive and you couldn't chew anything. With our latest technology, we
                        can offer a wide variety of dental procedures to fit your needs. </p>

                </div>



            </div>



        </div>

        <div class="dental-treatments-slide" data-aos="fade-up" data-aos-duration="1000">

            <div class="container">

                <div class="col-lg-12">

                    <div class="owl-carousel dental-treat-owl">

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Services Images-min.jpg" class="img-fluid" alt="img-fluid"
                                        width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Laser Dentistry</h3>

                                    <p>Experience precision and comfort with our advanced laser dentistry services. Our
                                        best dentist in Kochi utilises cutting-edge technology for various dental
                                        procedures, ensuring minimal discomfort, faster healing, and precise results.
                                        Embrace pain-free dental solutions and a quicker recovery time with our laser
                                        dentistry expertise.</p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Cosmetic Treatments-min.jpg" class="img-fluid" alt="img-fluid"
                                        width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Cosmetic Treatments</h3>

                                    <p>Unveil your most confident smile with our personalised cosmetic treatments,
                                        available at our conveniently located 'dental clinic near me.' From teeth
                                        whitening and veneers to smile makeovers, our cosmetic experts specialise in
                                        enhancing your dental aesthetics. Transform imperfections into dazzling smiles,
                                        boosting your self-esteem and leaving a lasting impression. </p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Maxillofacial & Orthognathic Surgery-min.jpg" class="img-fluid"
                                        alt="img-fluid" width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Maxillofacial & Orthognathic Surgery</h3>

                                    <p>Trust our skilled maxillofacial and orthognathic surgeons for complex facial and
                                        jaw corrections. Being the famous dental hospital in Kochi, our specialised
                                        surgical interventions address issues related to facial structure, TMJ
                                        disorders, and corrective jaw surgeries. With meticulous precision and advanced
                                        techniques, we restore facial harmony and functionality, ensuring optimal oral
                                        health and confidence.</p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Invisalign Treatment-min.jpg" class="img-fluid" alt="img-fluid"
                                        width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Invisalign Treatment</h3>

                                    <p>Embrace the discrete path to straighten teeth with our Invisalign treatment. Our
                                        best ortho doctors in Kozhikode customise clear aligners tailored to your unique
                                        dental needs. Enjoy the convenience of removable aligners, gradually achieving a
                                        perfectly aligned smile without the hassle of traditional braces. Experience
                                        orthodontic transformation with comfort and confidence.

                                    </p>

                                </div>

                            </div>

                        </div>



                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Periodontics-min.jpg" class="img-fluid" alt="img-fluid" width="339"
                                        height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Periodontics</h3>

                                    <p>Prioritise your gum health with our dedicated periodontic services. Our expert
                                        periodontists diagnose and treat gum diseases, offering specialised procedures
                                        like scaling, root planing, and gum surgeries. So, if you are looking for
                                        ‘dentist near me.’ Our comprehensive approach ensures the health of your gums,
                                        promoting overall oral well-being and preventing complications. </p>

                                </div>

                            </div>

                        </div>



                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Paediatric Dentistry-min.jpg" class="img-fluid" alt="img-fluid"
                                        width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Paediatric Dentistry</h3>

                                    <p>Nurture your child's oral health with our gentle and specialised paediatric
                                        dentistry services. Our compassionate team creates a friendly environment,
                                        ensuring positive dental experiences for children. From preventive treatments to
                                        dental education, we, as the best dental clinic in Kochi, focus on early

                                        intervention and lifelong oral hygiene habits.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Oral Medicine and Radiology-min.jpg" class="img-fluid"
                                        alt="img-fluid" width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Oral Medicine and Radiology</h3>

                                    <p>Rely on our oral medicine and radiology experts for precise diagnoses and
                                        comprehensive oral health assessments. Our specialised services include advanced
                                        imaging techniques and diagnostics for various oral conditions. With our
                                        expertise, we provide accurate evaluations, enabling timely and effective
                                        treatments for optimal oral health outcomes.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Endodontics-min.jpg" class="img-fluid" alt="img-fluid" width="339"
                                        height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Endodontics</h3>

                                    <p>Find relief from tooth pain and preserve your natural teeth with our expert
                                        endodontic treatments. Our skilled endodontists perform root canal therapies and
                                        other procedures to treat dental pulp infections and alleviate discomfort. With
                                        meticulous care and advanced techniques, we save damaged teeth, ensuring
                                        pain-free functionality and restoring your confident smile.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Prosthodontics-min.jpg" class="img-fluid" alt="img-fluid"
                                        width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Prosthodontics</h3>

                                    <p>Restore your smile's functionality and aesthetics with our prosthodontic
                                        solutions, found at our 'dental hospital near me.' Our specialised
                                        prosthodontists design custom-made dental prosthetics, including crowns,
                                        bridges, dentures, and dental implants. Whether you need single-tooth
                                        replacements or full-mouth restorations, our expert team ensures durable,
                                        natural-looking restorations, enhancing your oral health and confidence.</p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Orthodontics-min.jpg" class="img-fluid" alt="img-fluid" width="339"
                                        height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Orthodontics</h3>

                                    <p>Achieve a perfectly aligned smile and improved bite with our comprehensive
                                        orthodontic treatments. Our skilled orthodontists offer traditional braces,
                                        clear aligners, and other orthodontic appliances tailored to your needs.
                                        Experience personalised orthodontic care, addressing misalignments and enhancing
                                        your smile's appearance and functionality.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div class="item">

                            <div class="dental-treat-bx">

                                <div class="dent-treat-cin">

                                    <img src="images/Restorative Dentistry-min.jpg" class="img-fluid" alt="img-fluid"
                                        width="339" height="215" />

                                </div>

                                <div class="dent-treat-cnt">

                                    <h3>Restorative Dentistry</h3>

                                    <p>Regain your dental functionality and aesthetics with our restorative dentistry
                                        services. Our experienced dentists specialise in repairing damaged teeth,
                                        restoring missing teeth, and enhancing overall oral health. From fillings and
                                        crowns to implants and bridges, we use advanced techniques and materials for
                                        durable and natural-looking restorations.

                                    </p>

                                </div>

                            </div>

                        </div>





                    </div>

                    <div class="wd-nbn">

                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#myModalappointment"
                            class="talk-to-cd">

                            <div class="t-inner">

                                <div class="img-box">

                                    <img src="images/talk_to_icon.png">

                                </div>

                                <div class="t-info">

                                    <h2>instant call back</h2>

                                </div>

                            </div>

                        </a>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <!--========= end Dental Treatments area ========-->

    <!-- ========== about area ==========-->

    <section class="about-area">

        <div class="container">

            <div class="about-inner">

                <div class="row align-items-center">

                    <div class="col-lg-5">

                        <div class="about-lft-img text-center">

                            <img src="images/about-us-min-new.webp" alt="About" class="img-fluid" width="373"
                                height="396">

                        </div>

                    </div>

                    <div class="col-lg-7">

                        <div class="abou-rgt-cnt">

                            <div class="heading">

                                <h2>About <br>Elite Dental Studio</h2>

                                <p class="mb-2">At Elite Dental Studio, we pride ourselves on being the best dental
                                    clinic in Kochi, offering a wide range of top-notch oral healthcare services. With
                                    state-of-the-art facilities and cutting-edge pain management technology, we have a
                                    team of the best dentist in Kochi who deliver affordable, high-quality dental care,
                                    including Dental Implants, Pediatric Dentistry, Root Canal Therapy, Laser Dentistry,
                                    Periodontics, Prosthodontics, and Cosmetic Treatments.</p>

                                <p class="mb-2">Our mission is to exceed patient expectations with every service we
                                    offer, ensuring that each patient leaves with a healthy, radiant smile. Committed to
                                    setting industry standards, Elite Dental Studio is a best dental clinic in Calicut
                                    that prioritises clinic safety, hygiene, exceptional customer service, and
                                    unwavering dedication to medical ethics and transparency.</p>

                                <ul>

                                    <li>Committed to Excellence</li>

                                    <li>Cutting-Edge Technology</li>

                                    <li>Experienced Dental Specialists</li>

                                    <li>Individualised Treatment Plans</li>

                                </ul>

                                <hr>

                            </div>

                            <div class="row banner_uspes">

                                <div class="col-3">

                                    <div class="usp_box text-center">

                                        <div class="img_box">

                                            <img src="images/Dental Filling.png" alt="Dental Filling">

                                        </div>

                                        <h2 class="counter-count">2800</h2>

                                        <span>+</span>

                                        <p>Dental Fillings</p>

                                    </div>

                                </div>

                                <div class="col-3">

                                    <div class="usp_box text-center">

                                        <div>

                                            <img src="images/Tooth Extraction.png" alt="Tooth Extraction">

                                        </div>

                                        <h2 class="counter-count">1200</h2>

                                        <span>+</span>

                                        <p>Tooth Extraction</p>

                                    </div>

                                </div>

                                <div class="col-3">

                                    <div class="usp_box text-center">

                                        <div>

                                            <img src="images/Root Canal.png" alt="Root Canal">

                                        </div>

                                        <h2 class="counter-count">3</h2>

                                        <span>K+</span>

                                        <p>Root Canal</p>

                                    </div>

                                </div>

                                <div class="col-3">

                                    <div class="usp_box text-center">

                                        <div>

                                            <img src="images/Implant Placed.png" alt="Implant Placed">

                                        </div>

                                        <h2 class="counter-count">2100</h2>

                                        <span>+</span>

                                        <p>Implants Placed</p>

                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>



                </div>



            </div>

        </div>

    </section>

    <!-- ========== end about area ==========-->

    <!-- ======== image gallery =========-->

    <section class="gallery-area gallery-inter-area desk-view pt-5">

        <div class="container">

            <div class="row">

                <div class="col-lg-3">

                    <div class="gallery-img left-gallery-img">

                        <img src="images/cal-1.webp" alt="cal-1" class="img-fluid" width="261" height="445">

                    </div>

                </div>

                <div class="col-lg-9">

                    <div class="row">

                        <div class="col-lg-4 col-md-6">

                            <div class="gallery-img">

                                <img src="images/cal-2.webp" alt="cal-2" class="img-fluid" width="261" height="210">

                            </div>

                        </div>

                        <div class="col-lg-4 col-md-6">

                            <div class="gallery-img">

                                <img src="images/cal-3.webp" alt="cal-3" class="img-fluid" width="261" height="210">

                            </div>

                        </div>

                        <div class="col-lg-4 col-md-6">

                            <div class="gallery-img">

                                <img src="images/cal-4.webp" alt="cal-4" class="img-fluid" width="261" height="210">

                            </div>

                        </div>

                        <div class="col-lg-4 col-md-6">

                            <div class="gallery-img">

                                <img src="images/cal-5.webp" alt="cal-5" class="img-fluid" width="261" height="210">

                            </div>

                        </div>

                        <div class="col-lg-4 col-md-6">

                            <div class="gallery-img">

                                <img src="images/cal-6.webp" alt="cal-6" class="img-fluid" width="261" height="210">

                            </div>

                        </div>

                        <div class="col-lg-4 col-md-6">

                            <div class="gallery-img">

                                <img src="images/cal-7.webp" alt="cal-7" class="img-fluid" width="261" height="210">

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <section class="gallery-area gallery-inter-area mob-view pt-5">

        <div class="container">

            <div class="gallery-inter-slide">

                <div class="owl-carousel gallery-inter-owl">

                    <div class="item">

                        <div class="gallery-img">

                            <img src="images/cal-1.png" alt="Gallery_1" class="img-fluid">

                        </div>

                    </div>

                    <div class="item">

                        <div class="gallery-img">

                            <img src="images/cal-2.jpg" alt="" class="img-fluid">

                        </div>

                    </div>

                    <div class="item">

                        <div class="gallery-img">

                            <img src="images/cal-3.png" alt="" class="img-fluid">

                        </div>

                    </div>

                    <div class="item">

                        <div class="gallery-img">

                            <img src="images/cal-4.jpg" alt="" class="img-fluid">

                        </div>

                    </div>

                    <div class="item">

                        <div class="gallery-img">

                            <img src="images/cal-5.jpg" alt="" class="img-fluid">

                        </div>

                    </div>

                    <div class="item">

                        <div class="gallery-img">

                            <img src="images/cal-6.png" alt="" class="img-fluid">

                        </div>

                    </div>

                    <div class="item">

                        <div class="gallery-img">

                            <img src="images/cal-7.jpg" alt="" class="img-fluid">

                        </div>

                    </div>



                </div>

            </div>

        </div>

    </section>



    <!-- ======== end image gallery =========-->

    <style>
        .docs-owl .owl-nav {

            text-align: center;

            margin-top: 30px;

        }

        .docs-owl .owl-nav button.owl-next,

        .docs-owl .owl-nav button.owl-prev {

            width: 35px;

            height: 35px;

            border: solid 1px #000;

            border-radius: 100px;

            margin-left: 10px;

        }

        /*@media screen and (max-width: 767px){*/

        /*  .dental-team-bx img {*/

        /*    object-position: center -115px;*/

        /*  }*/

        /*  .dental-team-bx.dr-hegde img {*/

        /*    object-position: center top;*/

        /*    object-fit: contain;*/

        /*  }*/

        /*}*/

        /*@media screen and (max-width: 540px){*/

        /* .dental-team-bx img{*/

        /*    object-position: center -75px;*/

        /* }*/

        /*}*/
    </style>

    <!-- ======== team of doctor =========-->

    <section class="team-of-doctor">

        <div class="container">

            <div class="heading text-center">

                <h2>Our Team of Experts</h2>

                <hr style="margin: 18px auto 20px;">

            </div>



            <div class="owl-carousel docs-owl">

                <div class="doc-item">

                    <div class="dental-team-bx dr-hegde">

                        <img src="images/dr_vipin-min.png" class="img-fluid" alt="team 2">

                        <h4>DR. VIPIN VISWANATH</h4>

                        <p>BDS, MDS<br /> Medical Director & Oral Maxillofacial Surgeon - Kochi</p>

                    </div>

                </div>

                <div class="doc-item">

                    <div class="dental-team-bx">

                        <img src="images/Dr_jafar.jpg" class="img-fluid" alt="team 1">

                        <h4>Dr. Jafar Hamza</h4>

                        <p>BDS,<br /> (PG Clinical Resi - Europe)<br /> (Managing Director Kochi)</p>

                    </div>

                </div>

                <div class="doc-item">

                    <div class="dental-team-bx">

                        <img src="images/Dr_Amal.jpg" class="img-fluid" alt="team 3">

                        <h4>Dr. Amal Sidharth</h4>

                        <p>BDS, MDS<br /> (Managing Director- Calicut & Pedodontist)</p>

                    </div>

                </div>

                <div class="doc-item">

                    <div class="dental-team-bx">

                        <img src="images/Dr_Sreenath.jpg" class="img-fluid" alt="team 3">

                        <h4>DR. SREENATH NARAYANAN</h4>

                        <p>BDS, MDS<br /> (Medical Director & Endodontist - Calicut)</p>

                    </div>

                </div>

                <div class="doc-item">

                    <div class="dental-team-bx">

                        <img src="images/dr_megha-min.png" class="img-fluid" alt="team 4">

                        <h4>Dr. Megha C</h4>

                        <p>BDS, MDS<br /> Pediatric Dentistry</p>

                    </div>

                </div>

                <div class="doc-item">

                    <div class="dental-team-bx">

                        <img src="images/dr_nifla.jpg" class="img-fluid" alt="team 4">

                        <h4>DR. FATHIMA NIFLA C.P</h4>

                        <p>BDS,MDS<br> (Director &amp; Endodontist)</p>

                    </div>

                </div>

            </div>



        </div>

    </section>

    <!-- ======== team of doctor =========-->



    <!-- =========== clinic near you ===========-->

    <section class="clinic-near-you">

        <div class="container">

            <div class="row align-items-center">

                <div class="col-lg-7">

                    <div class="find-dental-near-bx">

                        <div class="heading">

                            <h2>Find a Dental Clinic Near You</h2>

                            <hr>

                            <select class="p-3 rounded" id="select_add">

                                <option value="#kochi_add">Kochi</option>

                                <option value="#kozhikode_add">Calicut</option>

                                <option value="#kannur_add">Kannur</option>

                                <option value="#coimbatore_add">Coimbatore</option>

                            </select>

                        </div>

                        <div class="clinic-map-bx" id="kochi_add">

                            <div class="row">

                                <div class="col-lg-7">

                                    <div class="loc-contact-info">

                                        <h3>Panampilly Nagar, Kochi</h3>

                                        <div class="loc-li-info clinic-address">

                                            <div class="info-add">

                                                <p>Address: 5/981 A, Main Avenue Road<br />

                                                    Panampilly Nagar<br />

                                                    Kochi, Kerala - 68203</p>

                                            </div>

                                        </div>

                                        <div class="clinic-call">

                                            <div class="loc-li-info">

                                                <div class="info-ic">

                                                    <i class="fa-solid fa-phone"></i>

                                                </div>

                                                <div class="info-add">

                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#myModalappointment">instant call back</a>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="clinic-direc-btn">

                                            <a href="https://maps.app.goo.gl/DGoTZh4s7pgX7Tf79"
                                                class="cmn-btn cmn-dir">Get Direction</a>



                                        </div>

                                    </div>



                                </div>

                                <div class="col-lg-5">

                                </div>

                            </div>

                        </div>

                        <div class="clinic-map-bx d-none" id="kozhikode_add">

                            <div class="row">

                                <div class="col-lg-7">

                                    <div class="loc-contact-info">

                                        <h3>Eranhipaalam, Kozhikode</h3>

                                        <div class="loc-li-info clinic-address">

                                            <div class="info-add">

                                                <p>Address: First Floor, Nechikkadan Tower,<br />

                                                    Mini Bypass Rd, opposite Swapna Nagari,<br />

                                                    Eranhipaalam, P.O, Kozhikode, Kerala 673006</p>

                                            </div>

                                        </div>

                                        <div class="clinic-call">

                                            <div class="loc-li-info">

                                                <div class="info-ic">

                                                    <i class="fa-solid fa-phone"></i>

                                                </div>

                                                <div class="info-add">

                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#myModalappointment">instant call back</a>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="clinic-direc-btn">

                                            <a href="https://maps.app.goo.gl/5Pa7RAgLDpkLFAJn6"
                                                class="cmn-btn cmn-dir">Get Direction</a>



                                        </div>

                                    </div>



                                </div>

                                <div class="col-lg-5">



                                </div>

                            </div>

                        </div>

                        <div class="clinic-map-bx d-none" id="kannur_add">

                            <div class="row">

                                <div class="col-lg-7">

                                    <div class="loc-contact-info">

                                        <h3>Kannur</h3>

                                        <div class="loc-li-info clinic-address">

                                            <div class="info-add">

                                                <p>Address: Nyma Tower, opposite Koyili Hospital, Talap, Kannur, Kerala
                                                    670002</p>

                                            </div>

                                        </div>

                                        <div class="clinic-call">

                                            <div class="loc-li-info">

                                                <div class="info-ic">

                                                    <i class="fa-solid fa-phone"></i>

                                                </div>

                                                <div class="info-add">

                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#myModalappointment">instant call back</a>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="clinic-direc-btn">

                                            <a href="https://maps.app.goo.gl/KZLcS8vEWui7Evsq9"
                                                class="cmn-btn cmn-dir">Get Direction</a>



                                        </div>

                                    </div>



                                </div>

                                <div class="col-lg-5">



                                </div>

                            </div>

                        </div>

                        <div class="clinic-map-bx d-none" id="coimbatore_add">

                            <div class="row">

                                <div class="col-lg-7">

                                    <div class="loc-contact-info">

                                        <h3>Coimbatore</h3>

                                        <div class="loc-li-info clinic-address">

                                            <div class="info-add">

                                                <p>Address: Diwan Bahadur Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002
                                                </p>

                                            </div>

                                        </div>

                                        <div class="clinic-call">

                                            <div class="loc-li-info">

                                                <div class="info-ic">

                                                    <i class="fa-solid fa-phone"></i>

                                                </div>

                                                <div class="info-add">

                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#myModalappointment">instant call back</a>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="clinic-direc-btn">

                                            <a href="https://maps.app.goo.gl/xt2aKrzYM7YgAw6v5">Get Direction</a>

                                        </div>

                                    </div>



                                </div>

                                <div class="col-lg-5">



                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                <div class="col-lg-5">

                    <div class="loc-map" id="kochi_add_map"
                        data-iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15718.542465479559!2d76.2952356!3d9.9642438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873e4be116aa5%3A0xcde9dcdaf26b0668!2sELITE%20DENTAL%20STUDIO!5e0!3m2!1sen!2sin!4v1696424934330!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'>
                    </div>

                    <div class="loc-map d-none" id="kozhikode_add_map"
                        data-iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15651.530574233546!2d75.7889049!3d11.2700363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f8bb837948d%3A0xa556c5175bb33fe0!2sELITE%20DENTAL%20STUDIO!5e0!3m2!1sen!2sin!4v1696425342744!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'>
                    </div>

                    <div class="loc-map d-none" id="kannur_add_map"
                        data-iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.260102502679!2d75.3718763!3d11.886968000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d006edbcac7%3A0x939f77ba1b983856!2sElite%20Dental%20Studio%20%7C%20Best%20dental%20Clinic%20in%20Kannur!5e0!3m2!1sen!2sin!4v1714720228231!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'>
                    </div>

                    <div class="loc-map d-none" id="coimbatore_add_map"
                        data-iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7832.780420642349!2d76.9505827!3d11.0093217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591567f75a1f%3A0xa040008e7ebcf16c!2sElite%20Dental%20Studio%20%7C%20Best%20Dental%20Clinic%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1784630959900!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'>
                    </div>

                </div>



            </div>

        </div>

    </section>

    <!-- =========== end clinic near you ===========-->



    <!-- ========== why choose us ===========-->

    <section class="why-choose-area">

        <div class="container">

            <div class="heading text-center">

                <h2>Why Choose Us?</h2>

                <hr style="margin: 18px auto 20px;">

                <p>We know how important it is to find the right dentist for your health. Your search for the "best
                    dentist near me" ends with us. Here's why:</p>

            </div>



            <div class="row why-choose-row align-items-center">

                <div class="col-lg-6">

                    <div class="row">

                        <div class="col-lg-6 col-6">

                            <div class="why-ic-bx">

                                <img src="images/Icon 1.png" alt="" class="img-fluid">

                                <p>Comprehensive <br>Expertise</p>

                            </div>

                        </div>

                        <div class="col-lg-6 col-6">

                            <div class="why-ic-bx">

                                <img src="images/Icon 2.png" alt="" class="img-fluid">

                                <p>Patient-Centric<br> Approach</p>

                            </div>

                        </div>

                        <div class="col-lg-6 col-6">

                            <div class="why-ic-bx">

                                <img src="images/Icon 3.png" alt="" class="img-fluid">

                                <p>Cutting-Edge <br>Technology</p>

                            </div>

                        </div>

                        <div class="col-lg-6 col-6">

                            <div class="why-ic-bx">

                                <img src="images/Icon 4.png" alt="" class="img-fluid">

                                <p>Holistic<br> Well-being</p>

                            </div>

                        </div>

                    </div>

                </div>



                <div class="col-lg-6">

                    <div class="why-rgt-img">

                        <img src="images/why-choose-us-min.webp" alt="why choose" class="img-fluid rounded" width="416"
                            height="278">

                    </div>

                </div>

            </div>

        </div>

    </section>

    <!-- ========== end why choose us ===========-->

    <!-- ========= testimonail area ==========-->

    <section class="testimonials pt-5">

        <!--<div class="testi-bg">-->

        <!--    <div class="container">-->

        <!--        <div class="heading text-center">-->

        <!--            <h2>Make an Appointment</h2>-->

        <!--            <hr style="margin: 18px auto 20px;">-->

        <!--        </div>-->

        <!--    </div>-->

        <!--    <div class="row justify-content-center">-->

        <!--        <div class="col-lg-10">-->

        <!--            <div class="apoint-table table-responsive">-->

        <!--                <table class="table table-striped">-->

        <!--                    <thead>-->

        <!--                        <tr>-->

        <!--                            <th>Opening Hours</th>-->

        <!--                            <th></th>-->

        <!--                        </tr>-->

        <!--                    </thead>-->

        <!--                    <tbody>-->

        <!--                        <tr>-->

        <!--                          <th colspan="2">Kochi</th>-->

        <!--                        </tr>-->

        <!--                        <tr>-->

        <!--                            <td>Monday - Saturday </td>-->

        <!--                            <td>09:30 AM - 09:00 PM</td>-->

        <!--                        </tr>-->

        <!--                        <tr>-->

        <!--                            <td>Sunday </td>-->

        <!--                            <td>10:00 AM - 07:00 PM</td>-->

        <!--                        </tr>-->

        <!--                        <tr>-->

        <!--                          <th colspan="2">Kozhikode</th>-->

        <!--                        </tr>-->

        <!--                        <tr>-->

        <!--                            <td>Monday - Saturday </td>-->

        <!--                            <td>09:30 AM - 09:00 PM</td>-->

        <!--                        </tr>-->

        <!--                        <tr>-->

        <!--                            <td>Sunday </td>-->

        <!--                            <td>09:30 AM - 06:00 PM</td>-->

        <!--                        </tr>-->

        <!--                    </tbody>-->

        <!--                </table>-->

        <!--            </div>-->

        <!--        </div>-->

        <!--    </div>-->

        <!--    <div class="btn-center text-center">-->

        <!--        <a href="#" class="cmn-btn">Book Your Appointment</a>-->

        <!--    </div>-->





        <!--</div>-->



        <div class="testi-slide">

            <div class="container">

                <div class="owl-carousel testi-owl">

                    <div class="item">

                        <div class="testimonials-bx">

                            <div class="testi-author">

                                <img src="images/testi-aut-1.png" alt="" class="img-fluid">

                            </div>

                            <div class="testimonials-cnt">

                                <img src="images/quote.png" alt="">

                                <div class="stars text-center mb-2">

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                </div>

                                <p>I’m deeply grateful to my friend, who guided me to discover Elite Dental Studio in
                                    Panampilly Nagar, Cochin. The assistance and support provided by Joseph were
                                    invaluable.

                                    Upon visiting the clinic, I was genuinely impressed by the exceptional quality of
                                    service. The doctors and staff exhibited a remarkable level of professionalism,
                                    making my experience truly outstanding. Their expertise and care instilled a sense
                                    of confidence in the treatment I received.

                                    Overall, my time at Elite Dental Studio was not just a good experience, but a
                                    genuinely excellent one. I’m thankful for Joseph’s recommendations and the
                                    exceptional care provided by the entire team.</p>

                                <hr>

                                <h6>Amitha k a</h6>

                            </div>



                        </div>

                    </div>

                    <div class="item">

                        <div class="testimonials-bx">

                            <div class="testi-author">

                                <img src="images/testi-aut-1.png" alt="" class="img-fluid">

                            </div>

                            <div class="testimonials-cnt">

                                <img src="images/quote.png" alt="">

                                <div class="stars text-center mb-2">

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                </div>

                                <p>I had a very pleasant experience with Elite Dental Studio and the staff. I was very
                                    anxious about the appointment and any procedure, but the doctors were very patient
                                    and spend a lot of time trying to comfort me, and the staff was very helpful and
                                    kind and always available to help. Doctors takes the time to explain what needs to
                                    be done and provides valuable advice , It’s not easy to find a good dentist in
                                    Kochi.</p>

                                <hr>

                                <h6>Gokul Nath D S</h6>

                            </div>



                        </div>

                    </div>

                    <div class="item">

                        <div class="testimonials-bx">

                            <div class="testi-author">

                                <img src="images/testi-aut-1.png" alt="" class="img-fluid">

                            </div>

                            <div class="testimonials-cnt">

                                <img src="images/quote.png" alt="">

                                <div class="stars text-center mb-2">

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                </div>

                                <p>In a nutshell, excellent service and very kind and attentive staff.

                                    This was easily the best dental clinic I’ve been to, and in fact, this was my second
                                    time here. I came back because the quality of service offered and the level of
                                    perfection and attention to details given by the doctors here is beyond compare.

                                    I got lucky enough to get Doctor Elizabeth today, and she very kindly and patiently
                                    walked me through the entire process. Her friendliness coupled with her kind
                                    attitude and the care she takes to go that extra mile really helped me walk out of
                                    there with a smile on my face.

                                    I’ll definitely keep coming back here for all my future dental needs!</p>

                                <hr>

                                <h6>Aleesha Fizal</h6>

                            </div>



                        </div>

                    </div>

                    <div class="item">

                        <div class="testimonials-bx">

                            <div class="testi-author">

                                <img src="images/testi-aut-1.png" alt="" class="img-fluid">

                            </div>

                            <div class="testimonials-cnt">

                                <img src="images/quote.png" alt="">

                                <div class="stars text-center mb-2">

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                </div>

                                <p>Thank you for me for such a short notice. Best service I have seen in dental care.
                                    May God bless you for your work. I will definitely recommend this place for any
                                    future dental work. Thanks again.</p>

                                <hr>

                                <h6>Bijou Chacko</h6>

                            </div>

                        </div>

                    </div>

                    <div class="item">

                        <div class="testimonials-bx">

                            <div class="testi-author">

                                <img src="images/testi-aut-1.png" alt="" class="img-fluid">

                            </div>

                            <div class="testimonials-cnt">

                                <img src="images/quote.png" alt="">

                                <div class="stars text-center mb-2">

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                </div>

                                <p>The best place for any dental issues.<br />

                                    A premium one with affordable rate.<br />

                                    The doctors are really amazing, They firstly explain deeply about our problems and
                                    explain about the procedures that we needs. Then if we are interested then only we
                                    need to proceed. And the interesting fact that was the registration fee,
                                    consultation fee and xrays are free of cost. And had a great experience and I
                                    recommend Elite Dental Studio</p>

                                <hr>

                                <h6>JUVAID BIN ZUBAIR</h6>

                            </div>

                        </div>

                    </div>

                    <div class="item">

                        <div class="testimonials-bx">

                            <div class="testi-author">

                                <img src="images/testi-aut-1.png" alt="" class="img-fluid">

                            </div>

                            <div class="testimonials-cnt">

                                <img src="images/quote.png" alt="">

                                <div class="stars text-center mb-2">

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                    <i class="fa fa-star"></i>

                                </div>

                                <p>Good Dental Studio who had highly qualified and professional team. Proper hygiene and
                                    equipment are used to undertake treatment. Special mention to Dr. Mehnu who
                                    undertook RCT and Dr. Amrita, Prosthodontist were through professional doctors. They
                                    communicated well and kept me informed about the complete procedure.

                                    The front end team at reception who is managing booking of appointment and timely
                                    updates of doctors availablity is highly appreciated. Well done and keep same
                                    approach to all patients who are visiting to you Studio.</p>

                                <hr>

                                <h6>Rajesh Katoch</h6>

                            </div>

                        </div>

                    </div>





                </div>



            </div>

        </div>

    </section>

    <!-- ========= end testimonail area ==========-->



    <!-- ======== it works area ==========-->

    <!-- <section class="it-works-area">

            <div class="container">

                <div class="heading text-center">

                    <h2>It works, <br>Say our Patients</h2>

                    <hr style="margin: 18px auto 20px;">

                </div>



                <div class="it-works-slide">

                    <div class="owl-carousel work-owl">

                        <div class="item"> 

                             <div class="works-image">          

                                 <img src="images/1.jpg" alt="">   

                             </div>

                        </div>

                        <div class="item"> 

                            <div class="works-image">          

                                 <img src="images/2.jpg" alt="">   

                             </div>

                        </div>

                        <div class="item"> 

                            <div class="works-image">          

                                 <img src="images/3.jpg" alt="">   

                             </div>

                        </div>

                        <div class="item"> 

                            <div class="works-image">          

                                 <img src="images/5.jpg" alt="">   

                             </div>

                        </div>  

                        <div class="item"> 

                            <div class="works-image">          

                                 <img src="images/6.jpg" alt="">   

                             </div>

                        </div>                    

                    </div>

                </div>



            </div>

        </section> -->

    <!-- ======== end it works area ==========-->



    <!-- ========== faq area  =========-->

    <section class="faq-about-plan-area faq-inner" data-aos="fade-up" data-aos-duration="1000">

        <div class="pos-about-girl">

            <img src="images/Faq-min.webp" alt="Faq" class="img-fluid" width="402" height="706">

        </div>

        <div class="container">

            <div class="row">

                <div class="col-lg-8">

                    <div class="blog-faq">

                        <div class="heading">

                            <h2>Frequently<br> Asked Questions</h2>

                        </div>

                        <div class="accordion" id="accordionExample">

                            <div class="accordion-item">

                                <h2 class="accordion-header" id="headingOne">

                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                        1. How can I book an appointment?

                                    </button>

                                </h2>

                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                                    <div class="accordion-body">

                                        Booking an appointment at Elite Dental Studio is easy and convenient. You can
                                        schedule your appointment by calling our reception during our working hours.
                                        Alternatively, you can visit our official website and fill out the online
                                        appointment request form. Once we receive your request, our staff will contact
                                        you to confirm the appointment date and time that suits your schedule.

                                    </div>

                                </div>

                            </div>

                            <div class="accordion-item">

                                <h2 class="accordion-header" id="headingTwo">

                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                                        2. What are your dental clinic timings?

                                    </button>

                                </h2>

                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">

                                    <div class="accordion-body">

                                        We are open from Monday to Saturday, starting from 9:30 AM to 9:00 PM. On
                                        Sundays, our clinic operates from 10:00 AM to 7:00 PM. We understand the
                                        importance of flexible timings to accommodate our patient's busy schedules, and
                                        our extended hours aim to provide you with convenient options for dental care.

                                    </div>

                                </div>

                            </div>

                            <div class="accordion-item">

                                <h2 class="accordion-header" id="headingThree">

                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">

                                        3. What modes of payment are acceptable at Elite Dental Studio?

                                    </button>

                                </h2>

                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">

                                    <div class="accordion-body">

                                        At Elite Dental Studio, we accept various modes of payment to ensure a
                                        hassle-free experience for our patients. We welcome payments through major
                                        credit cards, debit cards, cash, and digital payment methods.

                                    </div>

                                </div>

                            </div>

                            <div class="accordion-item">

                                <h2 class="accordion-header" id="headingfour">

                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsefour" aria-expanded="false"
                                        aria-controls="collapsefour">

                                        4. Do I need to arrive early for my first appointment?

                                    </button>

                                </h2>

                                <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour"
                                    data-bs-parent="#accordionExample">

                                    <div class="accordion-body">

                                        Yes, we recommend arriving a little early for your first appointment at Elite
                                        Dental Studio. Arriving 10-15 minutes before your scheduled time allows us to
                                        complete any necessary paperwork, verify your insurance information (if
                                        applicable), and ensure that your visit starts on time. This helps us in
                                        providing you with a smooth and efficient check-in process, allowing our team to
                                        focus on your dental needs during your appointment.

                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>

                </div>

                <div class="wd-nbn">

                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#myModalappointment"
                        class="talk-to-cd">

                        <div class="t-inner">

                            <div class="img-box">

                                <img src="images/talk_to_icon.png">

                            </div>

                            <div class="t-info">

                                <h2>instant call back</h2>

                            </div>

                        </div>

                    </a>

                </div>



            </div>

        </div>

    </section>

    <!-- ========== end faq area  =========-->



    <footer class="footer-area">

        <div class="container">

            <div class="bottom-footer">

                <div class="inner-foot-botm">

                    <div class="foot-prcy">

                        <p>Copyright © 2023 Dental. All Rights Reserved</p>

                    </div>

                    <div class="foot-prcy">

                        <p>Design &amp; Developed By:<a href="https://www.reinventdigital.com/">Reinvent Digital </a>
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </footer>



    <!-- ====== mobile call strip  ======-->

    <div class="action_btns_bottom">

        <div class="action_inner">

            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#myModalappointment" class="phn-btn"
                target="_blank"><i class="fa fa-phone" aria-hidden="true"></i> Instant call back</a>

            <a href="#" class="phn-apoint"><i class="fa-solid fa-calendar-check"></i> Book Your Appointment</a>

        </div>

    </div>

    <!-- ==== end mobile call strip  ====-->



    <!--========== book appointment form popup ============= -->

    <div class="modal dr-video-pop appointment-pop fade" id="myModalappointment" tabindex="-1"
        aria-labelledby="myModalLabel" aria-hidden="true">

        <div class="modal-dialog">

            <div class="modal-content">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <div class="call-back-area book-appointment">

                    <div class="heading text-center mb-4">

                        <h2>Instant call back</h2>

                    </div>

                    <div class=" appointment-form">



                        <form class="service-form" method="POST" id="elite_3" enctype="multipart/form-data">

                            <input type="hidden" name="form_name" value="call_back" />

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="input-group">

                                        <span class="input-group-text"><i class="fa fa-user"
                                                aria-hidden="true"></i></span>

                                        <input type="text" class="form-control" placeholder="Name" name="name"
                                            id="bname" onKeyPress="return onlyAlphabets(event);" required <?php if (isset($_session['yname']) && $_session['yname'] != "") { ?>value="<?php echo $_SESSION['yname'] ?>" <?php }
                                            $_SESSION['yname'] = "" ?>>

                                    </div>

                                </div>



                                <div class="col-md-12">

                                    <div class="input-group">

                                        <span class="input-group-text"><i class="fa fa-phone"
                                                aria-hidden="true"></i></span>

                                        <input type="text" class="form-control" placeholder="Phone" name="phone"
                                            id="bphone" onKeyPress="return isNumber(event);" maxlength="10"
                                            minlength="10" required <?php if (isset($_session['ytel']) && $_session['ytel'] != "") { ?>value="<?php echo $_SESSION['ytel'] ?>" <?php }
                                            $_SESSION['ytel'] = "" ?>>

                                    </div>

                                </div>

                                <div class="col-md-12">

                                    <div class="input-group">

                                        <span class="input-group-text"><i class="fa fa-location"
                                                aria-hidden="true"></i></span>

                                        <select class="form-control form-select" name="location" required>

                                            <option value="">Select Location</option>

                                            <option value="Kochi" <?php if ($_SESSION['yloc'] == 'Kochi') {
                                                'selected';
                                            } ?>>Kochi</option>

                                            <option value="Calicut" <?php if ($_SESSION['yloc'] == 'Calicut') {
                                                'selected';
                                            } ?>>Calicut</option>

                                            <option value="Calicut" <?php if ($_SESSION['yloc'] == 'Calicut') {
                                                'selected';
                                            } ?>>Kannur</option>

                                            <option value="Coimbatore" <?php if ($_SESSION['yloc'] == 'Coimbatore') {
                                                'selected';
                                            } ?>>Coimbatore</option>

                                        </select>

                                        <?php $_SESSION['ytel'] = ""; ?>

                                    </div>

                                </div>

                                <div class="col-lg-10 col-10">

                                    <div class="input_box captcha-inp">

                                        <input type="text" placeholder="Captcha" id="bcaptcha_code" name="captcha_code"
                                            class="form-control" required="">

                                        <span><img id="captcha_code2"
                                                src="/dental-care/captcha/page_captcha_code2.php" /></span>

                                        <a href="javascript:void(0)" class="captcha-load captcha_refresh capLoad"
                                            onClick="refreshCaptcha2();" id="brefresh_captcha"><img
                                                src="images/catcha-load.png" alt="captcha"></a>



                                    </div>

                                </div>

                                <?php

                                if (isset($_SESSION['error_issue']) && $_SESSION['error_issue'] != "") {

                                    ?>

                                    <p class="text-danger"><?php echo $_SESSION['error_issue']; ?></p>

                                    <?php

                                }

                                ?>

                                <?php

                                if (isset($_SESSION['captcha_issue']) && $_SESSION['captcha_issue'] != "") {

                                    ?>

                                    <p class="text-danger"><?php echo $_SESSION['captcha_issue']; ?></p>

                                    <?php

                                }

                                ?>



                                <!--<div class="form-check mb-3">-->

                                <!--    <label class="form-check-label">-->

                                <!--      <input class="form-check-input" type="checkbox" name="disclaimer" required> I declare that the information provided is correct. I would like to receive communication about Dental services.-->

                                <!--    </label>-->

                                <!--</div>-->

                                <input type="hidden" name="url" value="<?php echo $orgnURL; ?>">

                                <input type="hidden" name="utm_campaign" value="<?php echo $_GET['utm_campaign']; ?>">

                                <input type="hidden" name="utm_source" value="<?php echo $_GET['utm_source']; ?>">

                                <input type="hidden" name="utm_medium" value="<?php echo $_GET['utm_medium']; ?>">

                                <input type="hidden" name="utm_term" value="<?php echo $_GET['utm_term']; ?>">
                                <input type="hidden" name="utm_content" value="<?php echo $_GET['utm_content']; ?>">
                                <input type="hidden" name="gclid" value="<?php echo $_GET['gclid']; ?>">

                            </div>

                            <div id="form_message2" class="text-center mb-2"></div>

                            <div class="form-sbmt-btn text-center">

                                <button type="submit" class="cmn-btn" id="callme_button">Submit</button>

                            </div>

                            <div class="after-smbt-p">

                                <p>By clicking Submit you agree to be contacted by Exldentist over Phone or
                                    SMS/WhatsApp/Email.</p>

                            </div>



                        </form>

                    </div>



                </div>

            </div>

        </div>

    </div>



    <div class="support-icon">

        <a href="https://api.whatsapp.com/send?phone=918714608881"><img src="images/whatsapp.webp"
                alt="whatsapp logo"></a>

    </div>



    <style>
        .support-icon {

            position: fixed;

            right: 20px;

            z-index: 99;

            bottom: 50px;

            transition: all 1s;

            width: 60px;

            height: 60px;

        }

        .support-icon img {

            width: 100%;

        }
    </style>







    <!--========== book appointment form popup ============= -->





    <!-- Modal -->



    <style>
        .dr-video-pop .book-appointment {

            box-shadow: 0px 0px 11px #000000c2;

            border-radius: 20px;

            padding: 30px 40px;

            height: 100%;

            background-color: #143436;

            position: relative;

            z-index: 99;

        }

        .appointment-pop .modal-content {

            border-radius: 20px;

            background-color: transparent;

            border: 0px solid;

        }

        .dr-video-pop .book-appointment .service-form {
            background-color: transparent;
        }

        .dr-video-pop .modal-dialog {

            max-width: 600px;

            height: 100%;

            margin-bottom: 0px;

            display: flex;

            justify-content: center;

            align-items: center;

            margin-top: 0px;

        }

        .dr-video-pop .book-appointment .service-form .input-group .form-control {

            padding: 11px 11px;

            font-size: 15px;

            padding-left: 44px;

            color: #000;

            border-radius: 13px !important;

            border: solid 1px #f7f7f7;

            background-color: #fff;

        }

        .dr-video-pop .btn-close {

            position: absolute;

            right: -21px;

            filter: invert(1);

            opacity: 1;

            background-color: #fff;

            border-radius: 100px;

            width: 30px;

            height: 30px;

            top: -10px;

            z-index: 999;

        }

        .dr-video-pop .captcha-inp span {
            padding: 5px 24px;
        }
    </style>

    <button type="button" class="btn btn-primary d-none" id="myTriggerButton" data-bs-toggle="modal"
        data-bs-target="#exampleModal">

        Launch demo modal

    </button>

    <div class="modal dr-video-pop appointment-pop fade" id="exampleModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div class="modal-dialog">

            <div class="modal-content">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <div class="call-back-area book-appointment">

                    <div class="heading text-center mb-4">

                        <h2 style="color:#fff;">BOOK AN APPOINTMENT</h2>

                    </div>

                    <div class=" appointment-form">

                        <?php $currentURL = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>



                        <form class="service-form" method="POST" id="clovecontact4" enctype="multipart/form-data">

                            <input type="hidden" name="returnURL" value="<?php echo $currentURL; ?>">

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="input-group">

                                        <span class="input-group-text"><i class="fa fa-user"
                                                aria-hidden="true"></i></span>

                                        <input type="text" class="form-control" placeholder="Name" name="name"
                                            id="bname_" required <?php if (isset($_session['yname']) && $_session['yname'] != "") { ?>value="<?php echo $_SESSION['yname'] ?>" <?php }
                                            $_SESSION['yname'] = "" ?>>

                                    </div>

                                </div>



                                <div class="col-md-12">

                                    <div class="input-group">

                                        <span class="input-group-text"><i class="fa fa-phone"
                                                aria-hidden="true"></i></span>
                                        <?php /* ?>
                                 <input type="text" class="form-control" placeholder="Phone" name="phone" id="bphone_" onkeypress="return validateNumber(event);" maxlength="10" minlength="10" required <?php if(isset($_session['ytel']) && $_session['ytel'] != ""){?>value = "<?php echo $_SESSION['ytel']?>" <?php } $_SESSION['ytel'] = ""?>> <?php */ ?>

                                        <input type="text" class="form-control" placeholder="Phone" name="phone"
                                            id="phone" onKeyPress="return isNumber(event);" maxlength="10"
                                            minlength="10" required <?php if (isset($_session['ytel']) && $_session['ytel'] != "") { ?>value="<?php echo $_SESSION['ytel'] ?>" <?php }
                                            $_SESSION['ytel'] = "" ?>>

                                    </div>

                                </div>

                                <div class="col-md-12">



                                    <div class="input-group">

                                        <span class="input-group-text"><i class="fa fa-location"
                                                aria-hidden="true"></i></span>
                                        <?php /* ?>
                                 <input type="text" class="form-control" placeholder="Location" name="location" id="location_" onKeyPress="return onlyAlphabets(event);" required  <?php if(isset($_session['yname']) && $_session['yname'] != ""){?>value = "<?php echo $_SESSION['yname']?>" <?php } $_SESSION['yname'] = ""?>>

                                 <?php */ ?>


                                        <select class="form-control form-select" name="location" required>

                                            <option value="">Select Location</option>

                                            <option value="Kochi" <?php if ($_SESSION['yloc'] == 'Kochi') {
                                                'selected';
                                            } ?>>Kochi</option>

                                            <option value="Calicut" <?php if ($_SESSION['yloc'] == 'Calicut') {
                                                'selected';
                                            } ?>>Calicut</option>

                                            <option value="Kannur" <?php if ($_SESSION['yloc'] == 'Kannur') {
                                                'selected';
                                            } ?>>Kannur</option>

                                            <option value="Coimbatore" <?php if ($_SESSION['yloc'] == 'Coimbatore') {
                                                'selected';
                                            } ?>>Coimbatore</option>

                                        </select>

                                    </div>



                                </div>

                                <div class="col-lg-10 col-10">

                                    <div class="input_box captcha-inp">

                                        <input type="text" placeholder="Captcha" id="bcaptcha_code_" name="captcha_code"
                                            class="form-control" required="">

                                        <span><img id="captcha_code3"
                                                src="/dental-care/captcha/page_captcha_code3.php" /></span>

                                        <a href="javascript:void(0)" class="captcha-load captcha_refresh capLoad"
                                            onClick="refreshCaptcha3();"
                                            id="brefresh_captcha_"><!--<img src="/wp-content/uploads/2023/03/catcha-load.png" alt="captcha">--></a>



                                    </div>





                                </div>

                                <?php

                                if (isset($_SESSION['error_issue']) && $_SESSION['error_issue'] != "") {

                                    ?>

                                    <p><?php echo $_SESSION['error_issue'];
                                    $_SESSION['error_issue'] = ""; ?></p>

                                    <?php

                                }

                                ?>

                                <?php

                                if (isset($_SESSION['captcha_issue']) && $_SESSION['captcha_issue'] != "") {

                                    ?>

                                    <p><?php echo $_SESSION['captcha_issue'];
                                    $_SESSION['captcha_issue'] = ""; ?></p>

                                    <?php

                                }

                                ?>

                                <input type="hidden" name="url" value="<?php echo $orgnURL; ?>">

                                <input type="hidden" name="utm_campaign" value="<?php echo $_GET['utm_campaign']; ?>">

                                <input type="hidden" name="utm_source" value="<?php echo $_GET['utm_source']; ?>">

                                <input type="hidden" name="utm_medium" value="<?php echo $_GET['utm_medium']; ?>">

                                <input type="hidden" name="utm_term" value="<?php echo $_GET['utm_term']; ?>">
                                <input type="hidden" name="utm_content" value="<?php echo $_GET['utm_content']; ?>">
                                <input type="hidden" name="gclid" value="<?php echo $_GET['gclid']; ?>">



                            </div>

                            <div id="form_message3" class="text-center mb-2"></div>

                            <div class="form-sbmt-btn text-center mt-3">

                                <button type="submit" class="cmn-btn" id="callme_button3">Submit</button>

                            </div>

                        </form>

                    </div>



                </div>

            </div>
        </div>

    </div>



    <script src="js/jquery.min.js"></script>

    <!--<script src="js/popper.min.js"></script>-->

    <script src="js/bootstrap.min.js"></script>

    <script src="js/owl.carousel.min.js"></script>

    <script src="js/style.js"></script>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>-->

    <script>

        AOS.init();

    </script>



    <script>

        function refreshCaptcha1() {

            jQuery("#captcha_code1").attr('src', '/dental-care/captcha/page_captcha_code1.php?var=' + new Date().getTime());

        }

        function refreshCaptcha2() {

            jQuery("#captcha_code2").attr('src', '/dental-care/captcha/page_captcha_code2.php?var=' + new Date().getTime());

        }


        function refreshCaptcha3() {

            jQuery("#captcha_code3").attr('src', '/dental-care/captcha/page_captcha_code3.php?var=' + new Date().getTime());

        }


        $('#select_add').on('change', function () {

            $('.clinic-map-bx').addClass('d-none');

            $($(this).val()).removeClass('d-none');

            $('.loc-map').addClass('d-none');

            $($(this).val() + '_map').removeClass('d-none');

        });



        //Doctors caoursel

        $('.docs-owl').owlCarousel({

            loop: true,

            nav: true,

            navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],

            dots: false,

            autoplay: true,

            responsive: {

                0: { items: 1 },

                767: { items: 2 },

                992: { items: 4, autoplay: false, loop: false }

            },

            margin: 20

        });









        function onlyAlphabets(e, t) {

            return (e.charCode > 64 && e.charCode < 91) || (e.charCode > 96 && e.charCode < 123) || e.charCode == 32;

        }

        function isNumber(evt) {

            evt = (evt) ? evt : window.event;

            var charCode = (evt.which) ? evt.which : evt.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {

                return false;

            }

            return true;

        }

        //name validation function

        function IsAlpha(name) {

            var regex = /^([a-zA-Z _']*)$/;

            return regex.test(name);

        }

        //phone number validation

        function validateNumber(phone) {

            if (phone.length >= 10) {

                var RE = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;

                return (RE.test(phone));

            } else {

                return false;

            }

        }



        function checkForm() {

            var error = true;

            var name = $('#name').val();

            var phone = $('#phone').val();

            var captcha = $("#captcha_code").val();

            if (name == "") {

                error = false;

                $("#name").addClass('error');

            } else {

                nmr = IsAlpha(name);

                if (nmr == true) {

                    $("#name").removeClass('error');

                } else {

                    error = false;

                    $("#name").addClass('error');

                }

            }

            if (phone == "" || phone.length < 10) {

                error = false;

                $("#phone").addClass('error');

            } else {

                vnr = validateNumber(phone)

                if (vnr == true) {

                    $("#phone").removeClass('error');

                } else {

                    error = false;

                    $("#phone").addClass('error');

                }

            }



            if (captcha == "") {

                error = false;

                $("#captcha_code").addClass('error');

            } else {

                $("#captcha_code").removeClass('error');

            }

            //alert(error);

            if (error == false) {

                return error;

            } else {



                $("#callme_button").html('Please Wait...');

                $("#callme_button").attr('disabled', 'disabled');



            }

        }

        function checkForm1() {

            var error = true;

            var name = $('#popupname').val();

            var phone = $('#popupphone').val();

            if (name == "") {

                error = false;

                $("#popupname").addClass('error');

            } else {

                nmr = IsAlpha(name);

                if (nmr == true) {

                    $("#popupname").removeClass('error');

                } else {

                    error = false;

                    $("#popupname").addClass('error');

                }

            }

            if (phone == "" || phone.length < 10) {

                error = false;

                $("#popupphone").addClass('error');

            } else {

                vnr = validateNumber(phone)

                if (vnr == true) {

                    $("#popupphone").removeClass('error');

                } else {

                    error = false;

                    $("#popupphone").addClass('error');

                }

            }





            //alert(error);

            if (error == false) {

                return error;

            } else {



                $("#callme_button1").html('Please Wait...');

                $("#callme_button1").attr('disabled', 'disabled');



            }

        }

        function checkForm2() {

            var error = true;

            var name = $('#bname').val();

            var phone = $('#bphone').val();

            var captcha = $("#bcaptcha_code").val();

            if (name == "") {

                error = false;

                $("#name").addClass('error');

            } else {

                nmr = IsAlpha(name);

                if (nmr == true) {

                    $("#bname").removeClass('error');

                } else {

                    error = false;

                    $("#bname").addClass('error');

                }

            }

            if (phone == "" || phone.length < 10) {

                error = false;

                $("#phone").addClass('error');

            } else {

                vnr = validateNumber(phone)

                if (vnr == true) {

                    $("#bphone").removeClass('error');

                } else {

                    error = false;

                    $("#bphone").addClass('error');

                }

            }



            if (captcha == "") {

                error = false;

                $("#bcaptcha_code").addClass('error');

            } else {

                $("#bcaptcha_code").removeClass('error');

            }

            //alert(error);

            if (error == false) {

                return error;

            } else {



                $("#callme_button2").html('Please Wait...');

                $("#callme_button2").attr('disabled', 'disabled');



            }

        }





        $('.enquire_now1').click(function (e) {

            e.preventDefault();

            $('html,body').animate({

                scrollTop: $('#apt_form').offset().top - 80

            }, 200);

            $('#apt_form').find('input[name="name"]').focus();

        });



        $('.enquire_now1').click(function (e) {

            e.preventDefault();

            $('html,body').animate({

                scrollTop: $('#apt_form').offset().top - 80

            }, 200);

            $('#apt_form').find('input[name="name"]').focus();

        });

        $('.appointment').click(function (e) {

            e.preventDefault();

            $('html,body').animate({

                scrollTop: $('#apt_form').offset().top - 80

            }, 200);

            $('#apt_form').find('input[name="name"]').focus();

        });





        var scrtp = document.body.scrollTop || document.documentElement.scrollTop;

        window.onscroll = function () {

            scrtp = document.body.scrollTop || document.documentElement.scrollTop;

            loadIframes();

        }

        var c_ = 0;

        function loadIframes() {

            if ($('.loc-map').offset().top <= scrtp + window.innerHeight && c_ == 0) {

                $('.loc-map').each(function (index) {

                    $(this).html($(this).attr('data-iframe'));

                });

                c_++;

            }

        }





        var is_ = 0;

        function checkScroll() {

            var scrollPosition = window.scrollY;

            var windowHeight = window.innerHeight;

            var documentHeight = document.documentElement.scrollHeight;

            var scrollPercentage = (scrollPosition + windowHeight) / documentHeight * 100;





            if (scrollPercentage >= 45 && is_ === 0) {

                // Your code to display the popup here

                // alert("Popup triggered at 45% scroll!");



                $('#myTriggerButton').trigger('click');



                is_++;



                // You can replace alert with your own popup logic

            } else {

                //$('#myTriggerButton').trigger('click');



            }

        }

        // Event listener for scroll

        window.addEventListener('scroll', checkScroll);



        function checkForm3() {

            var error = true;

            var name = $('#bname_').val();

            var phone = $('#bphone_').val();

            var location = $('#location_').val();

            var captcha = $("#bcaptcha_code_").val();

            if (name == "") {

                error = false;

                $("#bname_").addClass('error');

            } else {

                nmr = IsAlpha(name);

                if (nmr == true) {

                    $("#bname_").removeClass('error');

                } else {

                    error = false;

                    $("#bname_").addClass('error');

                }

            }

            if (phone == "" || phone.length < 10) {

                error = false;

                $("#bphone_").addClass('error');

            } else {

                vnr = validateNumber(phone)

                if (vnr == true) {

                    $("#bphone_").removeClass('error');

                } else {

                    error = false;

                    $("#bphone_").addClass('error');

                }

            }



            if (captcha == "") {

                error = false;

                $("#bcaptcha_code_").addClass('error');

            } else {

                $("#bcaptcha_code_").removeClass('error');

            }

            //	alert(error);

            if (error == false) {

                return error;

            } else {



                $("#callme_button3").html('Please Wait...');

                $("#callme_button3").attr('disabled', 'disabled');



            }

        }



    </script>

    <script>
        $(document).ready(function () {

            $("#apt_form").on("submit", function (e) {
                e.preventDefault();

                let name = $("#name").val().trim();
                let phone = $("#phone").val().trim();
                let captcha = $("#captcha_code").val().trim();
                let location = $("select[name='location']").val();

                $("#form_message").html("").removeClass("text-danger text-success");

                // Frontend Validation
                if (name == "") {
                    showError("Please enter name");
                    return false;
                }

                if (!/^[a-zA-Z\s ._-]+$/.test(name)) {
                    showError("Please enter valid name");
                    return false;
                }

                if (!/^[6-9][0-9]{9}$/.test(phone)) {
                    showError("Please enter valid 10 digit phone number");
                    return false;
                }

                if (location == "") {
                    showError("Please select location");
                    return false;
                }

                if (captcha == "") {
                    showError("Please enter captcha");
                    return false;
                }

                $.ajax({
                    url: "submit.php",
                    type: "POST",
                    data: $(this).serialize(),
                    dataType: "json",
                    beforeSend: function () {
                        $("#callme_button").text("Submitting...");
                    },
                    success: function (response) {

                        if (response.status == "success") {
                            window.location.href = response.redirect;
                        } else {
                            showError(response.message);
                            refreshCaptcha1();
                        }

                        $("#callme_button").text("Book An Appointment");
                    },
                    error: function () {
                        showError("Something went wrong. Please try again.");
                        $("#callme_button").text("Book An Appointment");
                    }
                });

            });

            function showError(message) {
                $("#form_message")
                    .addClass("text-danger")
                    .html("<small>" + message + "</small>");
            }


            $("#elite_3").on("submit", function (e) {
                e.preventDefault();

                let name = $("#elite_3 #bname").val().trim();
                let phone = $("#elite_3 #bphone").val().trim();
                let captcha = $("#elite_3 #bcaptcha_code").val().trim();
                let location = $("#elite_3 select[name='location']").val();

                $("#elite_3 #form_message2").html("").removeClass("text-danger text-success");

                // Frontend Validation
                if (name == "") {
                    showError2("Please enter name");
                    return false;
                }

                if (!/^[a-zA-Z\s ._-]+$/.test(name)) {
                    showError2("Please enter valid name");
                    return false;
                }

                if (!/^[6-9][0-9]{9}$/.test(phone)) {
                    showError2("Please enter valid 10 digit phone number");
                    return false;
                }

                if (location == "") {
                    showError2("Please select location");
                    return false;
                }

                if (captcha == "") {
                    showError2("Please enter captcha");
                    return false;
                }

                $.ajax({
                    url: "submit.php",
                    type: "POST",
                    data: $(this).serialize(),
                    dataType: "json",
                    beforeSend: function () {
                        $("#elite_3 #callme_button").text("Submitting...");
                    },
                    success: function (response) {

                        if (response.status == "success") {
                            window.location.href = response.redirect;
                        } else {
                            showError2(response.message);
                            refreshCaptcha2();
                        }

                        $("#elite_3 #callme_button").text("Book An Appointment");
                    },
                    error: function () {
                        showError2("Something went wrong. Please try again.");
                        $("#elite_3 #callme_button").text("Book An Appointment");
                    }
                });

            });

            function showError2(message) {
                $("#elite_3 #form_message2")
                    .addClass("text-danger")
                    .html("<small>" + message + "</small>");
            }


            $("#clovecontact4").on("submit", function (e) {
                e.preventDefault();

                let name = $("#clovecontact4 #bname_").val().trim();
                let phone = $("#clovecontact4 #phone").val().trim();
                let captcha = $("#clovecontact4 #bcaptcha_code_").val().trim();
                let location = $("#clovecontact4 select[name='location']").val();

                $("#clovecontact4 #form_message3").html("").removeClass("text-danger text-success");

                // Frontend Validation
                if (name == "") {
                    showError3("Please enter name");
                    return false;
                }

                if (!/^[a-zA-Z\s ._-]+$/.test(name)) {
                    showError3("Please enter valid name");
                    return false;
                }

                if (!/^[6-9][0-9]{9}$/.test(phone)) {
                    showError3("Please enter valid 10 digit phone number");
                    return false;
                }

                if (location == "") {
                    showError3("Please select location");
                    return false;
                }

                if (captcha == "") {
                    showError3("Please enter captcha");
                    return false;
                }

                $.ajax({
                    url: "submit4.php",
                    type: "POST",
                    data: $(this).serialize(),
                    dataType: "json",
                    beforeSend: function () {
                        $("#callme_button3").text("Submitting...");
                    },
                    success: function (response) {

                        if (response.status == "success") {
                            window.location.href = response.redirect;
                        } else {
                            showError3(response.message);
                            refreshCaptcha3();
                        }

                        $("#callme_button3").text("Submit");
                    },
                    error: function () {
                        showError3("Something went wrong. Please try again.");
                        $("#callme_button3").text("Submit");
                    }
                });

            });

            function showError3(message) {
                $("#clovecontact4 #form_message3")
                    .addClass("text-danger")
                    .html("<small>" + message + "</small>");
            }

        });
    </script>

</body>

</html>