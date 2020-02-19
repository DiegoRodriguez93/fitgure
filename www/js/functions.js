
function startSession(){

    $('#ion-slides').hide();

    $('#ion-login').show();

}

function joinNow(){

    $('#ion-slides').hide();

    $('#ion-register').show();

}
function startRegister(){
    $('#ion-register').hide();
    $('#ion-register-1').show();
}


function goToStepOne(){
    $('#ion-register-1').hide();
    $('#ion-step-1').show();
}

function stepOne($param){

    localStorage.setItem('stepone',$param);
    $('#ion-step-1').hide();
    $('#ion-step-2').show();

}

function stepTwo($param){

    localStorage.setItem('steptwo',$param);
    $('#ion-step-2').hide();
    $('#ion-step-3').show();

}
function stepThree($param){

    localStorage.setItem('stepthree',$param);
    $('#ion-step-3').hide();
    $('#ion-step-4').show();

}
function stepFour($param){

    localStorage.setItem('stepfour',$param);
    $('#ion-step-4').hide();
    
    location.replace('app.html');

}

function LogIn(){

    $userMail = $('#userMail').val();
    $password = $('#password').val();

    $.ajax({
        type: "POST",
        url: "http://api.fitgure.com/api/User/GetUser?userMail="+$userMail+"&password="+$password,
        dataType: "JSON",
        success: function (res) {
            if(res.bState){
          
            Swal.fire(
            'Ok!',
            'Credenciales correcta!',
            'success'
            );

                setTimeout(function(){
                    $('#ion-login').hide();
                    location.replace('app.html');
                },3000);

            }else{
                Swal.fire(
                    'Error!',
                    'La información suministrada no es válida, por favor verifica.',
                    'error'
                    );
            }
        },error(res){
            Swal.fire(
                'Error!',
                'La información suministrada no es válida, por favor verifica.',
                'error'
                );
        }
    });


}