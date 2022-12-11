function formatRupiah(bilangan) {
    var	number_string = bilangan.toString(),
        sisa 	= number_string.length % 3,
        rupiah 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
  
    return rupiah;
  }

function isi_saldo(){
    const form = document.querySelector(".topupForm");
    form.addEventListener("submit",async(e)=>{
        e.preventDefault()
        const myFormData = new FormData(e.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        console.log(formDataObj);
        if(formDataObj['jumlah']==""){
            alert("Mohon isi jumlah topup");
            return;
        }

        var settings = {
            "url": "php/tambah_saldo.php",
            "type": "POST",
            "data": {
                    jumlah: formDataObj['jumlah'],
                    accessToken: sessionStorage.getItem('accessToken')
                }
          };

          $.ajax(settings).done(function (response) {
            // console.log(response);
            var status = response.slice(-3);
            response = response.slice(0,-3); 
            console.log(status);
            var data = JSON.parse(response);
            console.log(data);
            if(status==200){
                // console.log("ok");
                // console.log(data['accessToken']);
                alert("Saldo berhasil ditambahkan");
                location.replace('isi_saldo.html')   
            }else{
                alert("Mohon maaf, topup tidak berhasil dilakukan, silahkan coba lagi nanti");
                location.replace('isi_saldo.html')  
            }
        
          });
    
    });
}

$(document).ready(function(){
    // console.log("hello");
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
                var data = JSON.parse(response);
                console.log(data['name']);
                document.getElementById("nama_pemilik").innerHTML = data['name'];
                document.getElementById("jlh_saldo").innerHTML = formatRupiah(data['saldo']);
                isi_saldo();  
            }else{
                console.log("salah");
                alert("Sesi telah berakhir, Silahkan login terlebih dahulu");
                location.replace('login.html'); 
                // alert("Mohon maaf, "+data['msg']);
                // location.replace('login.html')  
            }
        
          });
    }else{
        alert("Sesi telah berakhir, Silahkan login terlebih dahulu");
        location.replace('login.html');
    }
});