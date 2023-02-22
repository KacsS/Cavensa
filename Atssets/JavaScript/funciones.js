let menu = document.querySelector("#menu-icon i");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("open")
  
    
}

function imgSlider(anything){
    document.querySelector('.imagenM').src = anything;
}

function cambioColor(color){
    const circulo = document.querySelector('.circulo');
    circulo.style.background = color;
}
//prueba