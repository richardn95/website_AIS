// const form = document.querySelector(".registForm");
// const url = "http://localhost:3000/profile"
// form.addEventListener("submit",async(e)=>{
//     e.preventDefault()
//     const myFormData = new FormData(e.target);
//     const formDataObj = {};
//     myFormData.forEach((value, key) => (formDataObj[key] = value));
//     console.log(formDataObj);
//     const dataRegis = JSON.stringify(formDataObj)

//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             body: dataRegis,
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         });
//         console.log(response);

//     } catch (error) {
//         console.log(error);
//     }

//  })
var nama = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confPassword = document.getElementById("confPassword");
var btnDaftar = document.getElementById("daftar");

btnDaftar.addEventListener('click', function(){
    //alert(nama.value.replace(/[^a-zA-Z ]/g, ""));
    console.log(nama.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confPassword.value);
    alert("ok");
    if(password.value != confPassword.value){
        alert("pass and conf not same");
    }else{
        alert("ok");
    }

//     var ajax = new XMLHttpRequest();

//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4 && ajax.status==200){
//             console.log(ajax.responseText); 
//             // alert("ok");
//         }
//     }

//     ajax.open('GET',"php/daftar.txt");
//     ajax.send();
//     // alert("ok");
});

