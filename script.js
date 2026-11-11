const candles = document.getElementById('candles');
const blowButton = document.getElementById('blow');
const musicButton = document.getElementById('music');
const song = document.getElementById('song');

blowButton.addEventListener('click', () => {
  candles.classList.add('blown');
  blowButton.disabled = true;
  blowButton.textContent = 'Velas apagadas';
});

musicButton.addEventListener('click', async () => {
  try {
    if (song.paused) {
      await song.play();
      musicButton.textContent = 'Pausar música';
    } else {
      song.pause();
      musicButton.textContent = 'Continuar música';
    }
  } catch (error) {
    musicButton.textContent = 'Não foi possível tocar';
    console.error('Falha ao reproduzir o áudio:', error);
  }
});

song.addEventListener('ended', () => {
  musicButton.textContent = 'Tocar música';
});