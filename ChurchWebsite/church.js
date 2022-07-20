window.onload = function() {
    //audio
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


    //calendar
    let th = document.getElementsByTagName("th");
    for ( let i = 0; i < th.length; i++) {
        th[i].addEventListener("click", (event) => {
            for (let j = 1; j <= 12; j++) {
                let showMonth = document.getElementById("month" + j);
                if (showMonth.id === event.target.id) {
                    showMonth.parentElement.children[1].setAttribute("class", "showCell");
                    showMonth.setAttribute("class", "showMonth");
                } else {
                    showMonth.parentElement.children[1].setAttribute("class", "hideCell");
                    showMonth.setAttribute("class", "hideMonth");
                }
            }
        });
    }
};

console.log("Made by Rumen Mitov ©2022");