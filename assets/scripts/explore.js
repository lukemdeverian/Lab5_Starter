// explore.js

window.addEventListener('DOMContentLoaded', initializePage);

function initializePage() {

  const avatarImage = document.querySelector('#explore > img');

  const voiceDropdown = document.getElementById('voice-select');

  const speechInput = document.getElementById('text-to-speak');

  const speakBtn = document.querySelector('button');

  let availableVoices = []; 

  function loadVoiceOptions() {

    availableVoices = window.speechSynthesis.getVoices();

    voiceDropdown.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    availableVoices.forEach((voiceItem, voiceIndex) => {

      const voiceOption = document.createElement('option');

      voiceOption.value = voiceIndex;

      voiceOption.textContent = ${voiceItem.name} (${voiceItem.lang});

      voiceDropdown.appendChild(voiceOption);

    });

  }

  loadVoiceOptions();

  if (speechSynthesis.onvoiceschanged !== undefined) {

    speechSynthesis.onvoiceschanged = loadVoiceOptions;

  }

  speakBtn.addEventListener('click', () => {

    const spokenText = new SpeechSynthesisUtterance(speechInput.value);

    spokenText.voice = availableVoices[voiceDropdown.value];

    spokenText.onstart = () => {

      avatarImage.src = 'assets/images/smiling-open.png';

    };

    spokenText.onend = () => {

      avatarImage.src = 'assets/images/smiling.png';

    };

    window.speechSynthesis.speak(spokenText);

  });

}