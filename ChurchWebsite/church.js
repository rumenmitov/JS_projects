window.onload = function() {
    let Audio = {
        audioPlayer: document.getElementById("audioPlayer"),
        audioDIV: document.getElementById("audioDIV"),
        audioPlay: document.getElementById("audioPlay"),
        audioPause: document.getElementById("audioPause"),
        closeButton: document.getElementById("closeButton")
    };

    Audio.closeButton.addEventListener("click", function() {
        Audio.audioPlayer.pause();
        Audio.audioDIV.setAttribute("class", "hide");
    });

    Audio.audioPlay.setAttribute("class", "show");
    Audio.audioPause.setAttribute("class", "hide");

    Audio.audioPlay.addEventListener("click", function() {
        Audio.audioPlayer.play();
        Audio.audioPlay.setAttribute("class", "hide");
        Audio.audioPause.setAttribute("class", "show"); 
    });

    Audio.audioPause.addEventListener("click", function() {
        Audio.audioPlayer.pause();
        Audio.audioPlay.setAttribute("class", "show");
        Audio.audioPause.setAttribute("class", "hide");
    });


}

console.log("Made by Rumen Mitov ©2022");