// 1. YouTube IFrame API Setup
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-audio', {
        height: '0',
        width: '0',
        videoId: 'https://youtu.be/PkhfKq9m0Uo?list=RDPkhfKq9m0Uo', // "Tujhe Sochta Hoon" Video ID
        playerVars: {
            'autoplay': 0,
            'loop': 1,
            'playlist': 'PkhfKq9m0Uo'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
}

// YouTube API script load karein
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Countdown Setup
const targetDate = new Date("February 14, 2026 00:00:00").getTime(); // Apni date set karein
const timerElement = document.getElementById('timer');

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        timerElement.textContent = "It's time! ❤️";
    }
}
setInterval(updateCountdown, 1000);

// 3. Black Box Opening & Password
const blackBox = document.getElementById('black-box');
const vault = document.getElementById('vault');
const musicBtn = document.getElementById('music-btn');
const correctPassword = "2630"; // Yahan apna secret code likhein

blackBox.addEventListener('click', () => {
    const enteredPassword = prompt("Enter the secret code to open your surprise:");
    if (enteredPassword === correctPassword) {
        
        // Gana start karein
        if (player) {
            player.playVideo();
        }

        blackBox.style.transform = 'scale(0.5)';
        setTimeout(() => {
            vault.classList.add('open');
            vault.style.display = 'block';
            blackBox.style.display = 'none'; 
            musicBtn.style.display = 'block';
            musicBtn.textContent = 'Music Playing... 🎶';
        }, 500);

        // Confetti Effect
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }
    } else {
        alert("Wrong code! Try again.");
    }
});

// 4. Music Control Button
musicBtn.addEventListener('click', () => {
    if (player.getPlayerState() === 1) { // 1 means Playing
        player.pauseVideo();
        musicBtn.textContent = 'Play Music 🎶';
    } else {
        player.playVideo();
        musicBtn.textContent = 'Pause Music 🎶';
    }
});

// 5. Scroll Reveal
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            reveal.classList.add('active');
        }
    });
});