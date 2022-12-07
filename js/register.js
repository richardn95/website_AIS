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
        alert("Berhasil Daftar, Silahkan melanjutkan untuk Login");
        location.replace('login.html')
    });
});


