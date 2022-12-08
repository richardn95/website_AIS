$(document).ready(function(){
    const form = document.querySelector(".registForm");
    form.addEventListener("submit",async(e)=>{
        e.preventDefault()
        const myFormData = new FormData(e.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        // console.log(formDataObj);
        if(formDataObj['nama']=="" || formDataObj['email']=="" || formDataObj['pass']=="" || formDataObj['confpass']==""){
            alert("Mohon isi semua field");
            return;
        }
        if(formDataObj['pass'] != formDataObj['confpass']){
            alert("Password dan Konfirmasi Password berbeda");
            return;
        }

        var settings = {
            "url": "php/daftar.php",
            "type": "POST",
            "data": {
                    name: formDataObj['nama'],
                    email: formDataObj['email'],
                    password: formDataObj['pass'],
                    confPassword: formDataObj['confpass']}
          };

          $.ajax(settings).done(function (response) {
            // console.log(response);
            var status = response.slice(-3);
            response = response.slice(0,-3); 
            // console.log(status);
            var data = JSON.parse(response);
            if(status==200){
                // console.log("ok");
                console.log(data['msg']);
                alert("Berhasil Daftar, Silahkan melanjutkan untuk Login");
                location.replace('login.html')   
            }else{
                alert("Mohon maaf, Silahkan coba lagi nanti");
                location.replace('register.html')  
            }
          
          });

    });
});


