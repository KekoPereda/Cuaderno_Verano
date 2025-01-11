function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}

const listaDeBotones = document.querySelectorAll('.boton')

let contador = 0;


while (contador < 6) {

    const tecla = listaDeBotones[contador];
    const numeroAudio = tecla.classList[1];
    // console.log(numeroAudio);

    const idAudio = `sonido_${numeroAudio}`
    console.log(idAudio);

    tecla.onclick = function () {
        playSonido(idAudio);
    };


    contador = contador + 1;
    // console.log("vuelta " + contador)
}









// document.addEventListener("DOMContentLoaded", () => {
//     // Seleccionar todos los botones con la clase "boton"
//     const botones = document.querySelectorAll(".boton");

//     botones.forEach((boton, index) => {
//         boton.addEventListener("click", () => {
//             // Crear un objeto de audio y asignar la ruta correspondiente
//             const audio = new Audio(`assets/audios/audio${index + 1}.mp3`);
//             audio.play();
//         });
//     });
// });