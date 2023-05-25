const audioContext = new AudioContext();
const audioElement = document.querySelector("audio");

const track = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();
const volumeControl = document.querySelector("#volume");

const pannerOptions = {pan : 0};
const panner = new StereoPannerNode(audioContext, pannerOptions);
const panControl = document.querySelector("#pan");

const playButtonID   = document.querySelector("#playButton");
const stopButtonID   = document.querySelector("#stopButton");


track.connect(gainNode).connect(panner).connect(audioContext.destination);


volumeControl.addEventListener("input", ()=>{
    gainNode.gain.value = volumeControl.value;
}, false);

panControl.addEventListener("input", ()=>{
    panner.pan.value = panControl.value;
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
