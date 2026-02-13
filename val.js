// --- STATE MANAGEMENT ---
let noCount = 0;
let yesScale = 1;
let noScale = 1;
let isPlaying = false;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const pleaMessages = [
    "Think about it... 🥺", 
    "Please baby 🌹", 
    "Another chance Princess? 👑", 
    "Pleeaseeee 😭", 
    "I'll be so sad...", 
    "Don't do this to me!"
];

// --- MUSIC LOGIC ---
function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const player = document.getElementById('player-ui');
    if (isPlaying) {
        audio.pause();
        player.classList.remove('playing');
    } else {
        audio.play().then(() => player.classList.add('playing')).catch(e => console.log("Music error:", e));
    }
    isPlaying = !isPlaying;
}

// --- BUTTON LOGIC ---
function handleNoHover() {
    noCount++;
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
    noScale -= 0.05;
    noBtn.style.transform = `scale(${Math.max(0.4, noScale)})`;
    noBtn.innerText = noCount <= pleaMessages.length ? pleaMessages[noCount-1] : "Yield to the YES! ❤️";
}

function celebrateAndMove() {
    switchScene('menu-section');
    for(let i=0; i<30; i++) setTimeout(createHeart, i * 100);
}

function switchScene(sceneId) {
    document.querySelectorAll('.scene').forEach(s => s.classList.add('hidden'));
    document.getElementById(sceneId).classList.remove('hidden');
}

// --- LETTER CONTENT ---
const fullLetter = `To my beautiful Hawi, 

You aren't just my valentine; you are my best friend, My baby, my lover, and my home darling and i wish to be yours too, this is our fisrt valantines together and even tho we dont like to celebrate it I loved to give this website (that we developed with Gemini) to you to show you how much I love you, May God help us for the rest of our journey together and help me Love you more, the way you deserve from me baby, I love you princes we will celebrate so much more beatiful holidays togather in the future.

I love you to the edge of the universe that expands faster than the speed of light and back...`;

function startLetterSequence() {
    switchScene('letter-section');
    const area = document.getElementById('typewriter-area');
    area.innerHTML = "";
    let i = 0;
    function type() {
        if (i < fullLetter.length) {
            area.innerHTML += fullLetter.charAt(i++);
            setTimeout(type, 45); 
        } else {
            const footer = document.getElementById('letter-footer');
            if(footer) footer.style.opacity = "1";
            const backBtn = document.getElementById('letter-back-btn');
            if(backBtn) backBtn.classList.remove('hidden');
        }
    }
    type();
}

// --- PHOTO CONTENT ---
const contentData = [
    { title: "OUR STORY", desc: "Every second with you is a new favorite memory, Baby.", img: "story.jpg" },
    { title: "MY PROMISE", desc: "I promise to be your biggest fan and your permanent home.", img: "promise.jpg" },
    { title: "FOR YOU", desc: "Happy Valentine's Day, Hawi!", img: "bouquet.jpg" }
];

function loadContent(idx) {
    const data = contentData[idx];
    document.getElementById('display-title').innerText = data.title;
    document.getElementById('display-description').innerText = data.desc;
    const photoTarget = document.getElementById('photo-target');
    if(photoTarget) {
        photoTarget.innerHTML = `<img src="${data.img}" style="width:100%; height:100%; object-fit:cover;" onerror="this.alt='Photo Missing'">`;
    }
    switchScene('content-section');
}

// --- ANIMATIONS ---
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-5vh';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.zIndex = '1500';
    heart.style.transition = 'transform 3s linear, opacity 3s';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 3000);
    }, 100);
}

setInterval(() => {
    const container = document.getElementById('heart-container');
    if(!container) return;
    const item = document.createElement('div');
    item.style.position = 'fixed';
    item.style.top = '-10%';
    item.innerHTML = '🌸';
    item.style.left = Math.random() * 100 + 'vw';
    item.style.transition = 'transform 6s linear';
    container.appendChild(item);
    setTimeout(() => {
        item.style.transform = 'translateY(110vh) rotate(360deg)';
        setTimeout(() => item.remove(), 6000);
    }, 50);
}, 600);