<style type='text/css'>
    /* COMMON STYLES */
    :root,
        html {
        font-size: 10px; 
    }
    * {
    padding: 0; 
     margin: 0; 
     outline: 0;}
    html,
    body {
        height: 100%;
        width: 100%;
        font-weight: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #EDF1F4;
        font-size: 15px;
    }
    ul,
    ol {
        list-style-position: inside;
    }
    textarea,
    input[type='text'],
    input[type='button'],
    input[type='submit'],
    input[type='date'] {
        -webkit-appearance: none;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }.link{
        color: #1980D8;
        cursor: pointer;
    }
    .cP{
        cursor: pointer;
    }.flex-center-v{
        display: flex;
        align-items: center;
    }
    /* COMMON STYLES */
    .wf-form-component {
        padding: 0px 0px 0px;
    }
    .wf-form-paid {
        padding-bottom: 45px;
    }
    .wf-parent {
        padding: 0px 0;
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
        background-repeat: no-repeat;
        background-size: 100% 100%;}
    .wf-wrapper * {
        box-sizing: border-box;
    }
    .wf-wrapper {
        width: 100%;
        max-width: 700px;
        border-radius: 10px;
        margin: auto;
        border: none;
        background-color: #fff;
        color: #222;
        box-shadow: 0px 0px 2px 0 #00000033;
    }
    .iframe-container{
        height: 100%;
        width: 100%;
        border: none;
        min-height: 365px;
    }
    .wf-logo {
        display: flex;
        margin-bottom: 30px;
        max-height: 60px;
        justify-content: center;
    }
    .wf-logo[data-ux-logo-size='lg'] {
        height: 60px;
    }
    .wf-logo[data-ux-logo-size='md'] {
        height: 50px;
    }
    .wf-logo[data-ux-logo-size='sm'] {
        height: 30px;
    }
    .wf-logo[data-ux-logo-pos='left'] {
        justify-content: left;
    }
    .wf-logo[data-ux-logo-pos='center'] {
        justify-content: center;
    }
    .wf-logo[data-ux-logo-pos='right'] {
        justify-content: right;
    }
    .wf-header {
        font-size: 22px;
        padding-bottom: 35px;
        font-weight: bold;
        word-break: break-word;
    }
    .wf-sec-wrap{
        margin-bottom: 40px;
    }
    .wf-sec-wrap:first-child .wf-sec-head{
        margin-top: 0;
    }
    .wf-sec-head {
        margin-bottom: 20px;
        margin-top: 35px;
    }
    .wf-sec-title {
        font-size: 18px;
        font-weight: bold;
        word-break: break-word;
    }
    .wf-sec-desc {
        margin: 0;
        margin-top: 5px;
        word-break: break-word;
    }
    .wf-row {
        margin-bottom: 20px;
    }
    .wf-row-with-supplementary{
        margin-bottom: 10px;
    }
    .wf-label {
        padding: 7px 0;
        word-break: break-word;
    }
    .wf-field {
        text-align: left;
        word-break: break-word;
        border: 0;
        position: relative;
    }
    .wf-field-inner {
        position: relative;
        display: flex;
        flex: 1;
    }
    .wf-field-input:focus {
        border: 1px solid #1980d8;
    }
    .wf-field-dropdown .wf-field-input:focus{
        border: none;  /* multipicklist search */
    }.wf-input-focus.wf-field::after {
        opacity: 1;
    }
    .wf-input-focus.wf-field::after,
    .wf-field-error-active.wf-field .wf-field-error {
        display: block;
    }
    .wf-field-error-active.wf-field .wf-field-input,.wf-field-error-active.wf-field .wf-field-dropdown {
        border: 1px solid #FD6B6D;
        box-shadow: 0 0 1px 1px #F4A2A2;
    }
    .wf-field-mandatory .wf-field-inner::before {
        content: '';
        position: absolute;
        left: 0px;
        background-color: #ff6a6a;
        width: 3px;
        height: 100%;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        z-index: 2;
        top: 0;
        bottom: 0;
    }
    .wf-field-mandatory .wf-field-inner.no-results-elem::before{ 
        height: 98%;
    }
    .wf-field-input,
    .wf-field-dropdown {
        width: 100%;
        border: 1px solid #BDC8D3;
        border-radius: 4px;
        padding: 10px 15px;
        min-height: 38px;
        font-size: 15px;
        font-family: inherit;
    }
    select:not([data-wform-field='select-multiple']) {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        background-image: url(\"data:image/svg+xml;utf8,<svg fill='black' height='34' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");
        background-repeat: no-repeat;
        background-position-x: 99%;
        background-color: #fff;
        min-width: 70px;
    }
    input,
    select {
        background-color: #fff;
    }
    .wf-field-item {
        min-height: 38px;
    }
    .wf-time-field-wrapper {
        display: flex;
        flex: 1;
    }
    .wf-time-field-wrapper select {
        margin-left: 10px;
    }
    .wf-form-component .wf-field-error,
        .wf-form-component .wf-field-help-text {
        text-align: left;
    }
    .wf-field-error {
        color: #FF5050;
        font-size: 12px;
        margin-top: 4px;
        display: none;
        animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
    .wf-field-help-text {
        color: #515159;
        font-size: 12px;
        margin-top: 5px;
        }
    .wf-field-help-text-link{
        text-decoration: none;
    }
    .wf-field-checkbox {
        cursor: pointer;
        border-radius: 3px;
        min-width: 14px;
        min-height: 20px;
        box-sizing: initial;
        accent-color: #1980d8;
        margin-right: 10px;
        margin-bottom: auto;
    }
    .wf-field-dropdown-date {
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 15px;
        cursor: pointer;
    }
    .wf-field-dropdown-date {
        border: 1px solid #BDC8D3;
        }
    .wf-field-dropdown-date:hover {
        border: 1px solid #65C199;
    }
    .wform-field-item-upload-input {
        min-height: 5rem;
        background-color: #FBFCFD;
        border: 1px dashed #bdc8d3;
        line-height: 2.1;
        cursor: pointer;
    }
    .wform-field-item-upload-input:focus {
        border: 1px dashed #bdc8d3;
    }
    .wform-file-upload-input-label {
        background-color: #fff;
        background-image: linear-gradient(to top, #F5F8FA, #ffffff);
        color: #212129;
        border-color: #d3dbe3;
        border: 1px solid #d3dbe3;border-radius: 4px;
        padding: 0.7rem 2rem;
        font-size: 1.4rem;
        right: 1rem;
        transform: translateY(-50%);
        top: 50%;
        position: absolute;
        }
    input[type='file']::file-selector-button, input[type='file']::-webkit-file-upload-button{
     opacity: 0; 
     width: 0;
     height: 28px;
    }.wf-row[data-ux-field-appearance='captcha'] .wf-field{
        display: flex;
        align-items: center;
    }
    .wform-field-item-captcha-input{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .wf-field-captcha-img-wrap{
        border: 1px solid #BDC8D3;
        border-radius: 4px;
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: initial;
        overflow: hidden;
        min-width: 120px;
    }
    .wf-field-captcha-img{
        height: 38px;
        width: 100%;
    }
    .reload-img{
        font-size: 23px;
        color: #4B5569;
        margin-right: 5px;
    }
    .reload-captcha{
        margin-left: 10px;
        user-select: none
    }
    .wf-btn {
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 15px;
        cursor: pointer;
        font-weight: bold;
        font-family: inherit;
    }
    .wf-btn[data-ux-btn-type='default'] {
        border-radius: 0;
    }
    .wf-btn[data-ux-btn-type='primary'] {
        border-radius: 4px;
    }
    .wf-btn[data-ux-btn-type='secondary'] {
        border-radius: 20px;
    }
    .wform-btn-wrap {
        display: flex;
        margin-top: 10px;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
    }
    .wform-poweredby-container {
        position: absolute;
        left: 0;
        bottom: 0;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: #23384F;
        font-size: 13px;
        padding: 6px 8px;
        font-family: sans-serif;
        display: flex;
        align-items: center;
    }
    /* ==================== *** Form Alignment *** ==================== */
    .wf-form-component:not([data-ux-form-alignment='top']) .wf-row {
        display: flex;
    }
    .wf-form-component:not([data-ux-form-alignment='top']) .wf-label {
        word-break: break-word;
        width: 30%;
        padding: 1.2rem 2rem 0;
    }
    .wf-form-component[data-ux-form-alignment='left'] .wf-label {
        text-align: left;
        padding-left: 0;
    }
    .wf-form-component[data-ux-form-alignment='right'] .wf-label {
        text-align: right;
    }
    .wf-form-component[data-ux-form-alignment='center'] .wf-label {
        text-align: center;
    }
    .wform-btn-wrap[data-ux-pos='left'] {
        justify-content: flex-start;
    }
    .wform-btn-wrap[data-ux-pos='center'] {
        justify-content: center;
    }
    .wform-btn-wrap[data-ux-pos='right'] {
        justify-content: flex-end;
    }
    .wf-form-component:not([data-ux-form-alignment='top']) .wf-field {
        width: 70%;
    }
    .wf-form-component[data-ux-form-alignment='top'] .wf-label{
        padding-top:0;
    }
    .wf-form-component[data-ux-form-alignment='top'] .reload-captcha{
        text-align: right;
    }
    .wf-row[data-ux-field-appearance='captcha'] .wf-field-inner{
        height: 38px;
    }
    .wf-row[data-ux-field-appearance='captcha'] .wf-field.wf-field-error-active{
        flex-wrap: wrap;
    }
    .wf-row[data-ux-field-appearance='captcha'] .wf-field-error{
        flex-basis: 100%;
        width:100%;
    }
    /* ==================== *** Form Alignment ends *** ==================== */
    
    /* ==================== *** css animations *** ==================== */
    @keyframes shake {
        10%,90% {transform: translate3d(-1px, 0, 0);}
        20%,80% {transform: translate3d(2px, 0, 0);}
        30%,50%,70% {transform: translate3d(-4px, 0, 0);}
        40%,60% {transform: translate3d(4px, 0, 0);}
    }
    /* ==================== *** css animations ends *** ==================== */
    
    /* ==================== *** Mediaquery *** ==================== */
    @media screen and (max-width: 1024px) {
        .wf-wrapper {
        max-width: 700px;
        width: calc(100% - 40px);
        border: 0;
    }
        .wf-field input[type=text],
        .wf-field select,
        .wf-field textarea {
            width: 100% !important;
        }
        .wf-label:empty {
            display: none;
        }
    .wf-field-checkbox {
        min-width: 18px;
        min-height: 18px;
    }
    }
    @media screen and (max-width: 768px) {
        .wf-wrapper {
        max-width: 700px;
        width: calc(100% - 40px);
        border: 0;
    }
    .wf-field input[type=text],
        .wf-field select,
        .wf-field textarea {
        width: 100% !important;
        }
    .wf-label:empty {
        display: none;
        }
    .wf-form-component[data-ux-form-alignment='top'] .wform-btn-wrap {
        justify-content: flex-start;
    }
    }
    @media screen and (max-width: 590px) {
    .wf-parent {
        padding: 20px 0;
    }
    .wf-wrapper {
        width: calc(100% - 40px) !Important;
        border: 0;
    }
    .wf-form-component {
        padding: 20px;
        padding-bottom:60px;
    }
    .wf-field input[type=text],
    .wf-field select,
    .wf-field textarea {
        width: 100% !important;
    }
    .wf-label:empty {
        display: none;
    }
    .wf-row[data-ux-field-appearance='date-time'] .wf-field-inner{
        flex-direction: column;
    }
    .wf-row[data-ux-field-appearance='date-time'] .wf-time-field-wrapper{
        margin-top: 10px;
    }
    .wf-row[data-ux-field-appearance='date-time'] .wf-field-item:first-child{
        margin-left: 0;
    }
    .wf-row[data-ux-field-appearance='date-time'] .wf-field-item{
        flex: 1;
    }
    .wf-row[data-ux-field-appearance='captcha'] .wf-field{
        flex-direction: column;
    }
    .wf-row[data-ux-field-appearance='captcha'] .reload-captcha{
        margin-left: auto;
    }
    .wf-row[data-ux-field-appearance='captcha'] .wf-field-inner{
        width: 100%;
    }
    }
    /* ==================== *** Mediaquery ends *** ==================== */
    </style>
    <div class='wf-parent' id='BiginWebToRecordFormParent820091000000361001'>
        <div class='wf-wrapper' id='BiginWebToRecordFormDiv820091000000361001'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
        <form id='BiginWebToRecordForm820091000000361001' name='BiginWebToRecordForm820091000000361001' class='wf-form-component' data-ux-form-alignment='top' style='font-family: Arial;position: relative;font-size:15px;' method='POST' enctype='multipart/form-data' onSubmit='javascript:document.charset="UTF-8"; return validateForm820091000000361001()' accept-charset='UTF-8'>
    <!-- Do not remove this code. -->
         <input type='text' style='display:none;' name='xnQsjsdp' value='1e8ff0f54d35beeb07a24713c5b11869ab6b5cbac3398ee47be537b0778544fb'/>
         <input type='hidden' name='zc_gad' id='zc_gad' value=''/>
         <input type='text' style='display:none;' name='xmIwtLD' value='8e0d4eafbc1c9a5a1dbda5918e02f068f54adac778d8c04cbb8657d8cdf4552d5d66dfa6ff421e50ac58ffb67cf266a2'/>
         <input type='text' style='display:none;' name='actionType' value='Q29udGFjdHM='/>
         <input type='text' style='display:none;' name='returnURL' value='null' />
         <div class='wf-header'>Book an Appointment</div>
         <div id='elementDiv820091000000361001' class='wf-form-wrapper'>
              <div class='wf-row'>  
                   <!-- <div class='wf-label'>Select Clinic</div> -->
                   <div class='wf-field wf-field-mandatory'>
                        <div class='wf-field-inner'>
                        <select name='CONTACTCF1' class='wf-field-item wf-field-dropdown' data-wform-field='select' onchange='removeError(this);'>
                             <option value='-None-'>-Select Clinic-</option>
                             <option value='Calicut'>Calicut</option>
                             <option value='Kannur'>Kannur</option>
                             <option value='Kochi'>Kochi</option>
                        </select>
                        </div>
                   </div>
              </div>
              <div class='wf-row'>  
                   <!-- <div class='wf-label'>First Name</div> -->
                   <div class='wf-field wf-field-mandatory'>
                        <div class='wf-field-inner'>
                        <input name='First Name' placeholder="First Name"  maxlength='40' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
                        </div>
                   </div>
              </div>
              <div class='wf-row'>  
                   <!-- <div class='wf-label'>Last Name</div> -->
                   <div class='wf-field wf-field-mandatory'>
                        <div class='wf-field-inner'>
                        <input name='Last Name'  placeholder="Last Name" maxlength='80' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
                        </div>
                   </div>
              </div>
              <div class='wf-row'>  
                   <!-- <div class='wf-label'>Email</div> -->
                   <div class='wf-field wf-field-mandatory'>
                        <div class='wf-field-inner'>
                        <input fvalidate='true'  placeholder="Email" ftype='email' name='Email' maxlength='100' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
                        </div>
                   </div>
              </div>
              <div class='wf-row'>  
                   <!-- <div class='wf-label'>Mobile</div> -->
                   <div class='wf-field wf-field-mandatory'>
                        <div class='wf-field-inner'>
                        <input fvalidate='true'  placeholder="Mobile" ftype='mobile' name='Mobile' maxlength='30' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
                        </div>
                   </div>
              </div>
              <div class='wf-row'>  
                   <!-- <div class='wf-label'>Appointment Date</div> -->
                   <div class='wf-field wf-field-mandatory'>
                        <div class='wf-field-inner'>
                        <input fvalidate='true' ftype='date' type='date' name='CONTACTCF116' maxlength='20' value='' placeholder='MM/dd/yyyy' max='9999-12-31' class='wf-field-item wf-field-input wf-field-item-date' onchange='removeError(this);'>
                        </div>
                   </div>
              </div>
              <div class='wf-row'>  
                   <!-- <div class='wf-label'>Navigation</div> -->
                   <div class='wf-field'>
                        <div class='wf-field-inner'>
                        <input name='CONTACTCF2' maxlength='255' type='hidden' value='Aligner LP' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
                        </div>
                   </div>
              </div>
              <div class='wform-btn-wrap' data-ux-pos='left'>
                   <input id='formsubmit' type='submit' class='wf-btn' data-ux-btn-type='default' style='background-color:&#x23;1980d8; color: #fff; border: 1px solid &#x23;1980d8;width: auto;' value='Submit'/>
              </div>
        </div>
        </form>
        </div>
    </div>
    <script>
           var mndFileds=new Array('CONTACTCF1','First\x20Name','Last\x20Name','Email','Mobile','CONTACTCF116');
           var fldLangVal=new Array('Select Clinic','First Name','Last Name','Email','Mobile','Appointment Date');
          var wfInnerWidth = window.innerWidth;
          if(wfInnerWidth <= 768){
               document.forms['BiginWebToRecordForm820091000000361001'].setAttribute('data-ux-form-alignment', 'top');
          }
            var name='';
            var email='';
         function removeError(fieldObj) {
              var parentElement = fieldObj.closest('.wf-field'),
                   childEle = parentElement.getElementsByClassName('wf-field-error')[0];
              if(childEle) {
                   parentElement.classList.remove('wf-field-error-active');
                   parentElement.removeChild(parentElement.getElementsByClassName('wf-field-error')[0]);
                   parentElement.parentElement.classList.remove('wf-row-with-supplementary');
              }
         }
         function setError(fieldObj, label) {
              var parentElement = fieldObj.closest('.wf-field'),
                  childEle = parentElement.getElementsByClassName('wf-field-error')[0];
              if(!childEle) {
                   var spanEle = document.createElement('SPAN');
                   spanEle.setAttribute('class', 'wf-field-error wf-row-with-supplementary');
                   spanEle.innerHTML = label;
                   parentElement.append(spanEle);
                   parentElement.classList.add('wf-field-error-active');
                   parentElement.parentElement.classList.add('wf-row-with-supplementary');
              }
         }
         function validateFields820091000000361001() {
              var isReturn = true;
              var form = document.forms['BiginWebToRecordForm820091000000361001'];
              var validateFld = form.querySelectorAll('[fvalidate=true]');
              var i;
              for (i = 0; i < validateFld.length; i++)
              {
                   var validateFldVal = validateFld[i].value;
                   if(validateFldVal !== '') {
                        var fLabel = validateFld[i].parentElement.parentElement.parentElement.getElementsByClassName('wf-label')[0].innerHTML;
                        switch(validateFld[i].getAttribute('ftype')) {
                        case 'email':
                             if(validateFldVal.match(/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/) === null) {
                                  setError(validateFld[i], 'Enter valid ' + fLabel);
                                  isReturn = false;
                             }
                             break;
                        case 'number':
                             if(validateFldVal.match(/^[0-9]+$/) === null) {
                                  setError(validateFld[i], 'Enter valid ' + fLabel);
                                  isReturn = false;
                              }
                             break;
                        case 'double':
                             if(validateFldVal.match(/^[0-9]*(\.[0-9]{0,2})?$/) === null) {
                                  setError(validateFld[i], 'Enter valid ' + fLabel);
                                  isReturn = false;
                              }
                             break;
                        case 'mobile':
                              if(validateFldVal.match(/^[0-9a-zA-Z+.()\-;\s]+$/) === null) {
                                  setError(validateFld[i], 'Enter valid ' + fLabel);
                                  isReturn = false;
                              }
                             break;
                         }
                   }
              }
              return isReturn;
         }
    
            function checkMandatory820091000000361001() {
            var isReturn = true;
            var isNotCaptcha = false;
            for(i=0;i<mndFileds.length;i++) {
              var fieldObj=document.forms['BiginWebToRecordForm820091000000361001'][mndFileds[i]];
              if(fieldObj) {
                if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
                    if(fieldObj.type =='file'){
                        setError(fieldObj, 'Please select a file to upload.'); 
                        isReturn = false;
                    }
                    else {
                        setError(fieldObj, fldLangVal[i] + ' cannot be empty');
                    isReturn= false;
                    }
                }  else if(fieldObj.nodeName=='SELECT') {
                    if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
                    setError(fieldObj, fldLangVal[i] +' cannot be none.');
                    isReturn = false;
                   }
                } else if(fieldObj.type =='checkbox'){
                    if(fieldObj.checked == false){
                    setError(fieldObj, 'Please accept  '+fldLangVal[i]);
                    isReturn= false;
                    } 
                 } 
                }
            }
             isNotCaptcha = true;
            if(!validateFields820091000000361001()){isReturn = false;}
            if(!isReturn){
                var errEle = document.getElementsByClassName('wf-field-error');
                if(errEle && errEle.length >0){
                    var inputEle = errEle[0].parentElement.getElementsByTagName('input');
                    if(inputEle && inputEle.length == 0) {
                        inputEle = errEle[0].parentElement.getElementsByTagName('select');
                    }
                    if(inputEle && inputEle.length > 0) {
                        inputEle[0].focus();
                    }
                }
            }else if(isNotCaptcha){
                document.getElementById('formsubmit').disabled = true;
            }
            return isReturn; 
            }
    
           
    </script>
          <script id='wf_script' src='https://bigin.zoho.in/crm/WebformScriptServlet?rid=8e0d4eafbc1c9a5a1dbda5918e02f068f54adac778d8c04cbb8657d8cdf4552d5d66dfa6ff421e50ac58ffb67cf266a2gid1e8ff0f54d35beeb07a24713c5b11869ab6b5cbac3398ee47be537b0778544fb'></script>