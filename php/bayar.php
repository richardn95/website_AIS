<?php
if(isset($_POST)){
    $curl = curl_init();
    $patch_body = '{
        "jumlah": '.$_POST["jumlah"].'
    }';
    $bearer = 'Authorization: Bearer '.$_POST["accessToken"];

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://localhost:8080/profile/pay',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'PATCH',
        CURLOPT_POSTFIELDS =>$patch_body,
        CURLOPT_HTTPHEADER => array(
          $bearer,
          'Content-Type: application/json'),
      ));

    $response = curl_exec($curl);
    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    echo $response;
    echo $httpcode;
    // var_dump($_POST);
}else{return;}

?>