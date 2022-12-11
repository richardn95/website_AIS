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

function history(){
    var settings = {
        "url": "php/history.php",
        "type": "POST",
        "data": {
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
        console.log(data.length);
        // if(status==200){
        //     // console.log("ok");
        //     // console.log(data['accessToken']);
        //     alert("Pembayaran untuk "+formDataObj['pesan']+" berhasil dilakukan");
        //     location.replace('bayar.html')   
        // }else{
        //     alert("Mohon maaf, "+data['msg']+" Silahkan isi saldo terlebih dahulu");
        //     location.replace('isi_saldo.html')  
        // }
    
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
                // console.log("ok");
                // console.log(data['accessToken']);
                var data = JSON.parse(response);
                console.log(data['name']);
                console.log(data['saldo']);
                document.getElementById("nama_pemilik").innerHTML = data['name'];
                document.getElementById("jlh_saldo").innerHTML = formatRupiah(data['saldo']);
                history();  
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