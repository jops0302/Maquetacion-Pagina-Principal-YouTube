const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
});

const ComprobarAncho = () => {
    if(window.innerWidth <= 768){
        contenedor.classList.remove('active');
    } else {
        contenedor.classList.add('active');
    }
}
ComprobarAncho();   

window.addEventListener('resize', () => {
    ComprobarAncho();  
});