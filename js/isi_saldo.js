$(document).ready(function(){
    // console.log("hello");
    if(sessionStorage.getItem('accessToken')){
        console.log(sessionStorage.getItem('accessToken'));
    }else{
        alert("Sesi telah berakhir, Silahkan login terlebih dahulu");
        location.replace('login.html');
    }
});