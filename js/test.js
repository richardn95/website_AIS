$(document).ready(function(){
    const form = document.querySelector(".registForm");
    form.addEventListener("submit",async(e)=>{
        e.preventDefault()
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://simple-books-api.glitch.me/status", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        alert("hello");
        // var settings = {
        //     "url": "php/daftar.php",
        //     "type": "POST",
        //     "data": JSON.stringify({
        //             name: "testing",
        //             email: "test@gmail.com",
        //             password: "test",
        //             confPassword: "test"})
        //   };
          
        //   $.ajax(settings).done(function (response) {
        //     console.log(response);
        //     console.log(response.status);
        //     console.log(settings['data']);
        //   });
    });
});


