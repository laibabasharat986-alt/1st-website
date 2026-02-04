// 1. Audio Setup (.mp3 file ke liye)
const songUrl = 'song'; // Aapki file ka naam yahan hona chahiye
const audio = new Audio(songUrl);
audio.loop = true;

// 2. Countdown Setup
const targetDate = new Date("February 14, 2026 00:00:00").getTime();
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
const correctPassword = "2630"; // Aapka password

blackBox.addEventListener('click', () => {
    const enteredPassword = prompt("Enter the secret code to open your surprise:");
    if (enteredPassword === correctPassword) {
        
        // Music Start Karein
        audio.play().catch(error => console.log("Audio play error:", error));

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

// 4. Music Control Button (Play/Pause)
musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = 'Music Playing... 🎶';
    } else {
        audio.pause();
        musicBtn.textContent = 'Play Music 🎶';
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