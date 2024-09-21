
let speech = new SpeechSynthesisUtterance();

let voices = [];//an empty array
let voiceSelect = document.querySelector("select");
//voices is an empty array that will eventually hold all the available voices provided by the browser's Speech Synthesis API.


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

     voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


