<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Audio Player</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f5f5f5; }
        #audio-player { max-width: 500px; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .heart { position: absolute; color: red; animation: float 2s linear infinite; }
        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
    </style>
</head>
<body>
    <div id="audio-player">
        <audio id="audio" src="audio.mp4"></audio>
        <button id="playPauseBtn">Play</button>
        <input type="range" id="progressBar" value="0" step="1">
        <span id="currentTime">0:00</span> / <span id="duration">0:00</span>
        <div class="heart" style="display: none;">❤️</div>
    </div>
    <script>
        const audio = document.getElementById('audio');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const progressBar = document.getElementById('progressBar');
        const currentTimeDisplay = document.getElementById('currentTime');
        const durationDisplay = document.getElementById('duration');
        const heart = document.querySelector('.heart');

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = 'Pause';
                heart.style.display = 'inline';
            } else {
                audio.pause();
                playPauseBtn.textContent = 'Play';
                heart.style.display = 'none';
            }
        });

        audio.addEventListener('loadedmetadata', () => {
            durationDisplay.textContent = formatTime(audio.duration);
        });

        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            currentTimeDisplay.textContent = formatTime(audio.currentTime);
        });

        progressBar.addEventListener('input', () => {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        });

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
    </script>
</body>
</html>