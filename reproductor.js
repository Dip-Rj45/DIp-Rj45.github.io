function changeVideo(videoSrc, description) {
    var videoElement = document.getElementById('main-video');
    var descriptionElement = document.getElementById('video-description');

    // Cambia el video del iframe
    videoElement.src = videoSrc;

    // Cambia la descripción
    descriptionElement.innerHTML = description;
}
