const audio = document.getElementById('audio-antigo'); // Correção aqui
const playButton = document.querySelector('.play');
const progressBar = document.getElementById('barra-de-progresso');

// Aqui é a função de play e pausa
function TogglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
}

// Aqui é a barra de progresso
audio.addEventListener('timeupdate', function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Alterar o áudio de posição ao interagir com a barra de progresso
progressBar.addEventListener('input', function() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio-antigo');
    const barraDeProgresso = document.getElementById('barra-de-progresso');
    const tempoDecorrido = document.getElementById('tempo-decorrido');
    const tempoTotal = document.getElementById('tempo-total');

    function formatarTempo(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = Math.floor(segundos % 60);
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    }

    audio.addEventListener('loadedmetadata', function() {
        barraDeProgresso.max = audio.duration;
        tempoTotal.textContent = formatarTempo(audio.duration);
    });

    audio.addEventListener('timeupdate', function() {
        barraDeProgresso.value = (audio.currentTime / audio.duration) * 100;
        tempoDecorrido.textContent = formatarTempo(audio.currentTime);
    });

    barraDeProgresso.addEventListener('input', function() {
        audio.currentTime = (barraDeProgresso.value / 100) * audio.duration;
    });

    window.TogglePlay = function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };
});

