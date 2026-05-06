// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  function updateVolume() {
    const vol = Number(volumeSlider.value);
    audioElement.volume = vol / 100;

    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  }

  hornSelect.addEventListener('change', function () {
    const selected = hornSelect.value;

    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = selected;

    audioElement.src = `assets/audio/${selected}.mp3`;
  });

  volumeSlider.addEventListener('input', updateVolume);

  playButton.addEventListener('click', function () {
    if (hornSelect.value === 'select') return;

    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  updateVolume();
}