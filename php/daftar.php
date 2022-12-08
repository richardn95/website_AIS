<?php
if(isset($_POST)){
    $curl = curl_init();
    $post_body = '{
        "name":"'.$_POST["name"].'",
        "email": "'.$_POST["email"].'",
        "password": "'.$_POST["password"].'",
        "confPassword": "'.$_POST["confPassword"].'"
    }';

    curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://localhost:3000/profile',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>$post_body,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    ));

    $response = curl_exec($curl);
    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    echo $response;
    // echo $post_body;
    // echo $_POST["name"];
    echo $httpcode;
    // var_dump($_POST);
}else{return;}

?>