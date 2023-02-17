
function loadVideo() {
    let video = document.getElementById("backgroundVideo");
    if ( screen.width > 800 ) { video.src = "./media/video/bgVideo-1080.mp4"; }
    if ( screen.width <= 800 ) { video.src = "./media/video/bgVideo-720.mp4"; }
    if ( screen.width <= 600 ) { video.src = "./media/video/bgVideo-480.mp4"; }
    if ( screen.width <= 450 ) { video.src = "./media/video/bgVideo-360.mp4"; }

    video.load();
}

loadVideo();