document.addEventListener('DOMContentLoaded', (event) => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenVideo = document.getElementById('fullscreen-video');
    const fullscreenText = document.getElementById('fullscreen-text');
    const closeFullscreen = document.getElementById('close-fullscreen');

    function openFullscreen(src, text, isVideo) {
        if (isVideo) {
            fullscreenVideo.src = src;
            fullscreenVideo.classList.add('active');
            fullscreenImage.classList.remove('active');
            fullscreenVideo.play();
        } else {
            fullscreenImage.src = src;
            fullscreenImage.classList.add('active');
            fullscreenVideo.classList.remove('active');
        }
        fullscreenText.textContent = text;
        fullscreenContainer.classList.remove('fullscreen-hidden');
    }

    function closeFullscreenView() {
        fullscreenContainer.classList.add('fullscreen-hidden');
        fullscreenVideo.pause();
        fullscreenVideo.currentTime = 0;
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const isVideo = item.classList.contains('video-item');
            const src = isVideo ? item.getAttribute('data-video') : item.querySelector('img').src;
            const text = item.querySelector('p').textContent;
            openFullscreen(src, text, isVideo);
        });
    });

    closeFullscreen.addEventListener('click', closeFullscreenView);

    fullscreenContainer.addEventListener('click', (e) => {
        if (e.target === fullscreenContainer) {
            closeFullscreenView();
        }
    });
});