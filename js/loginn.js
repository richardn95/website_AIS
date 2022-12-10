function login(){
    // console.log("hello");
    const form = document.querySelector(".registForm");
    form.addEventListener("submit",async(e)=>{
        e.preventDefault()
        const myFormData = new FormData(e.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        // console.log(formDataObj);
        if(formDataObj['email']=="" || formDataObj['pass']==""){
            alert("Mohon isi semua field");
            return;
        }

        var settings = {
            "url": "php/login.php",
            "type": "POST",
            "data": {
                    email: formDataObj['email'],
                    password: formDataObj['pass']}
          };

          $.ajax(settings).done(function (response) {
            // console.log(response);
            var status = response.slice(-3);
            response = response.slice(0,-3); 
            // console.log(status);
            var data = JSON.parse(response);
            // console.log(data);
            if(status==200){
                // console.log("ok");
                // console.log(data['accessToken']);
                alert("Berhasil Login");
                sessionStorage.setItem('accessToken',data['accessToken']);
                location.replace('home.html')   
            }else{
                alert("Mohon maaf, "+data['msg']);
                location.replace('login.html')  
            }
        
          });
        
    });
}

$(document).ready(function(){
    if(sessionStorage.getItem('accessToken')){
        // console.log(sessionStorage.getItem('accessToken'));
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
                console.log(data['name'])
                alert("Anda sudah login");
                location.replace('home.html') 
            }else{
                console.log("token salah");
                login();  
            }
        
          });
    }else{
        login();
    }
});


