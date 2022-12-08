$(document).ready(function(){
  const form = document.querySelector(".registForm");
  form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    var settings = {
        "url": "php/daftar.php",
        "type": "POST",
        "data": {
                name: "testfromjssss",
                email: "test@gmail.com",
                password: "test",
                confPassword: "test"}
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        var status = response.slice(-3);
        response = response.slice(0,-3); 
        console.log(status);
        var data = JSON.parse(response);
        if(status==200){
          // console.log(data["status"]);
          // console.log(settings['data']);
        }
      
      });
});
});


