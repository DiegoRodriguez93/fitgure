function descubre(){

    $('#descubreTop').addClass('active');
    $('#descubreImg').attr('src','img/01-active.png');
    $('#descubre-content').show();
    $('#descubre-content').focus();

    $('#entrenaTop').removeClass('active');
    $('#entrenaImg').attr('src','img/02.png');
    $('#entrena-content').hide();

    $('#perfilTop').removeClass('active');
    $('#perfilImg').attr('src','img/03.png');
    $('#perfil-content').hide();

}

function entrena(){

    $('#descubreTop').removeClass('active');
    $('#descubreImg').attr('src','img/01.png');
    $('#descubre-content').hide();

    $('#entrenaTop').addClass('active');
    $('#entrenaImg').attr('src','img/02-active.png');
    $('#entrena-content').show();

    $('#perfilTop').removeClass('active');
    $('#perfilImg').attr('src','img/03.png');
    $('#perfil-content').hide();



}

function perfil(){

    
    $('#descubreTop').removeClass('active');
    $('#descubreImg').attr('src','img/01.png');
    $('#descubre-content').hide();

    $('#entrenaTop').removeClass('active');
    $('#entrenaImg').attr('src','img/02.png');
    $('#entrena-content').hide();

    
    $('#perfilTop').addClass('active');
    $('#perfilImg').attr('src','img/03-active.png');
    $('#perfil-content').show();
    $('#perfil-content').focus();


}