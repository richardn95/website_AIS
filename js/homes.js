$(document).ready(function(){
    // console.log("hello");
    if(sessionStorage.getItem('accessToken')){
        console.log(sessionStorage.getItem('accessToken'));
        var settings = {
            "url": "php/token.php",
            "type": "POST",
            "data": {
                    accessToken: sessionStorage.getItem('accessToken')}
          };

          $.ajax(settings).done(function (response) {
            // console.log(response);
            var status = response.slice(-3);
            response = response.slice(0,-3); 
            console.log(status);
            // console.log(data);
            if(status==200){
                // console.log("ok");
                // console.log(data['accessToken']);
                var data = JSON.parse(response);
                console.log(data['name']); 
            }else{
                console.log("token salah");
                alert("Sesi telah berakhir, Silahkan login terlebih dahulu");
                location.replace('login.html');  
            }
        
          });
    }else{
        alert("Sesi telah berakhir, Silahkan login terlebih dahulu");
        location.replace('login.html');
    }
});