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

function tipe_data(tipe){
    if(tipe==0){
        return "Top-up";
    }else if(tipe==1){
        return "Transaksi";
    }
}

function history(){
    // alert("hello");
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
        console.log(data[0]);
        console.log(data.length);
        var text_html="";
        for (let i = 0; i < data.length; i++) {
            text_html+='<div class="text-body d-flex bg-light">'+
                    '<p class="m-3 col-3">'+data[i]['createdAt'].slice(0,10)+' </p>'+
                    '<p class="m-3 col">'+data[i]['createdAt'].slice(11,19)+'</p>'+
                    '<p class="m-3 col">Rp. '+formatRupiah(data[i]['amount'])+'</p>'+
                    '<p class="m-3 col-2">'+tipe_data(data[i]['id_status'])+'</p>'+
                '</div>'
          }
        
        document.getElementById("body_table").innerHTML = text_html;
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