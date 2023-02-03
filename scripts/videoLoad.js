
function loadVideo() {
    let video = document.getElementById("backgroundVideo");
    if ( screen.width > 800 ) { video.src = "../images/backgroundVideo.mp4"; }
    if ( screen.width <= 800 ) { video.src = "../images/backgroundVideo2.mp4"; }
    if ( screen.width <= 600 ) { video.src = "../images/backgroundVideo3.mp4"; }
    if ( screen.width <= 450 ) { video.src = "../images/backgroundVideo4.mp4"; }

    video.load();
}

loadVideo();