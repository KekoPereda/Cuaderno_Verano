let audioActual = null;
let cajaActual = null;

function playSonido(idElementoAudio, elementoCaja) {
    const audioElement = document.getElementById(idElementoAudio);

    if (audioElement) {
        if (audioActual && audioActual !== audioElement) {
            audioActual.pause();
            audioActual.currentTime = 0;
        }

        if (cajaActual && cajaActual !== elementoCaja) {
            cajaActual.style.backgroundColor = "";
        }


        elementoCaja.style.backgroundColor = "var(--complemento)";

        // Reproduce el nuevo audio
        audioElement.play().catch(error => {
            console.error('Error al reproducir el audio:', error);
        });

        audioActual = audioElement;
        cajaActual = elementoCaja;

        // Evento para restablecer el color y las variables cuando el audio termine
        audioElement.onended = () => {
            elementoCaja.style.backgroundColor = "";
            audioActual = null;
            cajaActual = null;
        };
    } else {
        console.error(`No se encontró el elemento de audio con el ID: ${idElementoAudio}`);
    }
}


const listaDeBotones = document.querySelectorAll('.boton');


listaDeBotones.forEach(boton => {

    const numeroAudio = boton.classList[1].replace('audio', '');
    const idAudio = `sonido_audio_${numeroAudio}`;
    const elementoCaja = boton.closest('.contenido_caja');

    console.log(`Asignando botón al audio ID: ${idAudio}`);
    boton.onclick = () => playSonido(idAudio, elementoCaja);
});
