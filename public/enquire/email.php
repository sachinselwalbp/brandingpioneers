<?php

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];   
        $message = $_POST['message']; 

      // Set your email address where you want to receive emails.
       $lead="
       Name:$name
       Email:$email
       Phone:$phone
       Message:$message
       ";
       $to = 'bpwithlinux@gmail.com';//fullsappot@gmail.com
       $toone = 'brandingpioneers@gmail.com';
       $subject = 'Contact Request From BP LP (IH-N) ';
       //$headers = "From: ".$name." \r\n";
       $header .= 'From: bpwithlinux@gmail.com \BP LP Lead Alert';
       
       $send_email = mail($to,$subject,$lead,$header);
       $send_email = mail($toone,$subject,$lead,$header);

       echo ($send_email) ? 'success' : 'error';

// whatsapp

function send_whatsapp($mess="Test"){
  $phone="+919789565515";  // Enter your phone number here
  $apikey="115738";       // Enter your personal apikey received in step 3 above

  $url='https://api.callmebot.com/whatsapp.php?source=php&phone='.$phone.'&text='.urlencode($mess).'&apikey='.$apikey;

  if($ch = curl_init($url))
  {
      curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
      $html = curl_exec($ch);
      $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
      // echo "Output:".$html;  // you can print the output for troubleshooting
      curl_close($ch);
      return (int) $status;
  }
  else
  {
      return false;
  }
}

// lead to whatsapp ^^

send_whatsapp("'
*BP Enquire LP*

Name : '$name'
Email : '$email'
Phone : '$phone'
Message : '$message'
");    //Text message that your would like to send

?>