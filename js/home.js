$(document).ready(function(){
    // console.log("testing");
    if(sessionStorage.getItem('token')!="hello"){
        alert("Sesi telah berakhir, Silahkan login terlebih dahulu");
        location.replace('login.html');
    }
});