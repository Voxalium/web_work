const audioContext = new AudioContext();
const audioElement = document.querySelector("audio");

const track = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();
const volumeControl = document.querySelector("#volume");

const playButtonID   = document.querySelector("#playButton");
const stopButtonID   = document.querySelector("#stopButton");


track.connect(gainNode).connect(audioContext.destination);


volumeControl.addEventListener("input", ()=>{
    gainNode.gain.value = volumeControl.value;
}, false);


playButtonID.addEventListener("click", () =>{
    if(audioContext.state === "suspended"){
        audioContext.resume();
    }
    if(playButtonID.dataset.playing === "false"){
        audioElement.play();
        playButtonID.dataset.playing = "true";
    } else if (playButtonID.dataset.playing === "true"){
        audioElement.pause();
        playButtonID.dataset.playing = "false";
    }
}, false);

stopButtonID.addEventListener("click", ()=>{
    audioElement.pause();
    playButtonID.dataset.playing = "false";
    audioElement.currentTime = 0;
}, false)

audioElement.addEventListener( "ended", ()=>{
    playButtonID.dataset.playing = "false";
}, false);



