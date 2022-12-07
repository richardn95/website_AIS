$(document).ready(function(){
    $("#daftar").click(function(){
        var nama = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confPassword = document.getElementById("confPassword").value;
        
        if(nama==""||email==""||password==""||confPassword==""){
            swal({
                title:'Gagal',
                text:'Harap mengisi semua field',
                icon:'warning'
            });
        }
        
        $.ajax({
            url: 'php/daftar.php',
            method:'POST',
            statusCode:{
                404:function(){
                    alert("File Tidak ditemukan");
                }
            },
            data:{
                uname:nama,
                uemail:email,
                upass:password,
                uconfpass:confPassword
            },
            sucess:function(data){
                if(data=="Login Berhasil"){
                    swal({
                        title:'Success',
                        text:'terlogin',
                        icon:'success'
                    });
                }else{
                    swal({
                        title:'Gagal',
                        text:data,
                        icon:'warning'
                    });
                }
            }
        });
    })
});