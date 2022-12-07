$(document).ready(function(){
    if(sessionStorage.getItem('token')=="hello"){
        location.replace('home.html');
    }
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
        
        sessionStorage.setItem('token','hello');
        alert("Berhasil Login");
        location.replace('home.html');
    });
});
