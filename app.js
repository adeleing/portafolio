let menuVisible = false;

//FUNCION QUE OCULTA O MUESTRA EL MENU

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById('nav').classList ='';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList ='responsive';
        menuVisible = true;
    }
    
}

//OCULATR EL MENU UNA VEZ QUE SELECCIONES UNA OPCION
function seleccionar() {
    document.getElementById('nav').classList ='';
    menuVisible = false;
}

//FUNCION QUE APLICA ANIMACION DE HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('HTML');
        habilidades[1].classList.add('CSS');
        habilidades[2].classList.add('JAVASCRIPT');
        habilidades[3].classList.add('RESPOTERIA');
        habilidades[4].classList.add('COMUNICACION');
        habilidades[5].classList.add('TRABAJO');
        habilidades[6].classList.add('CREATIVIDAD');
        habilidades[7].classList.add('DEDICACION');
    }
}

window.onscroll = function(){
    efectoHabilidades();
}