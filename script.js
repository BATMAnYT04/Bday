/* =========================================
   BIRTHDAY WEBSITE
   ========================================= */


let currentGift = 0;


/* =========================================
   START EXPERIENCE
   ========================================= */
   const music = document.getElementById("birthdayMusic");

music.volume = 0.7;

// Try to start immediately
window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction.");
    });
});

// Start music after the first interaction if autoplay was blocked
function startMusic() {
    music.play().catch(() => {});
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

function startExperience() {

    document.getElementById("welcome").classList.remove("active");

    document.getElementById("gifts").classList.add("active");

    createHearts();

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

    updateMusicButton();
}


/* =========================================
   OPEN GIFT
   ========================================= */

function openGift(number) {

    // Don't allow locked gifts
    if (
        number > 1 &&
        document
            .getElementById("gift" + number)
            .classList.contains("locked")
    ) {
        return;
    }

    currentGift = number;

    const popup = document.getElementById("popup");
    const content = document.getElementById("popup-content");


    /* ================= GIFT 1 ================= */

    if (number === 1) {

        content.innerHTML = `

            <h2>🎁 For My ISHU ❤️</h2>

            <img
                class="memory-photo"
                src="photos/start.jpeg"
            >

            <p>
                Three years...
                ❤️
            </p>

            <p>
                It's crazy to think that the girl who
                was once just my neighbour became
                such an important part of my life.
            </p>

            <p>
                I never knew that someone living so close
                to me would eventually become someone
                so close to my heart.
            </p>

            <p>
                And somehow, three years later,
                here we are.
                ❤️
            </p>

        `;
    }


    /* ================= GIFT 2 ================= */

    if (number === 2) {

        content.innerHTML = `

            <h2>💗 Why I Love You</h2>

            <p>
                ISHU, if you ask me what I love about you...
            </p>

            <p>
                Honestly?
                <br><br>
                <b>You.</b>
                ❤️
            </p>

            <p>
                I don't need a list of reasons.
                I love your personality, your smile,
                your presence, your little things...
                everything that makes you <b>you</b>.
            </p>

            <p>
                <b>
                    I just love you for being ISHU.
                </b>
                ❤️
            </p>

        `;
    }


    /* ================= GIFT 3 ================= */

    if (number === 3) {

        content.innerHTML = `

            <h2>🌙 Our Night Talks</h2>

            <p>
                Some of my favorite memories with you
                aren't big moments.
            </p>

            <p>
                They're those nights when we would just
                keep talking...
            </p>

            <p>
                Sometimes about something important,
                sometimes about absolutely nothing.
                😂❤️
            </p>

            <p>
                But somehow I never wanted those
                conversations to end.
            </p>

            <p>
                Those late-night talks became some of
                my favorite parts of these three years.
            </p>

            <div class="photo-grid">

                <img src="photos/1.jpeg">

                <img src="photos/2.jpeg">

                <img src="photos/fav.jpeg">

                <img src="photos/us.jpeg">

                <img src="photos/us1.jpeg">

                <img src="photos/start.jpeg">

            </div>

        `;
    }


    /* ================= GIFT 4 ================= */

    if (number === 4) {

        content.innerHTML = `

            <div class="letter">

                <h2>💌 A Letter</h2>

                <p>
                    My dearest ISHU,
                </p>

                <p>
                    Three years with you...
                    and there are so many things
                    I could say.
                </p>

                <p>
                    We've laughed, talked for hours,
                    stayed up at night, made memories,
                    and experienced so many things
                    together.
                </p>

                <p>
                    But today, I also want to say
                    something I've wanted to say
                    properly.
                </p>

                <p>
                    <b>
                        I'm sorry.
                    </b>
                </p>

                <p>
                    I know there are things I've done
                    and moments where I could have
                    treated you better.
                    I'm genuinely sorry for hurting you.
                </p>

                <p>
                    I can't change the past,
                    but I can learn from it.
                    And I want to become a better person
                    for myself and for us.
                </p>

                <p>
                    Thank you for staying,
                    for understanding,
                    and for being you.
                </p>

                <p>
                    I don't know what the future holds,
                    but I hope we continue creating
                    beautiful memories together.
                </p>

                <p>
                    <b>
                        Happy Birthday, ISHU.
                        ❤️
                    </b>
                </p>

                <p>
                    Always yours,<br>
                    <b>Neil ❤️</b>
                </p>

            </div>

        `;
    }


    /* ================= GIFT 5 ================= */

    if (number === 5) {

        closePopup();

        document
            .getElementById("gifts")
            .classList.remove("active");

        document
            .getElementById("final")
            .classList.add("active");

        createFireworks();

        return;
    }


    popup.classList.add("show");
}

/* =========================================
   CLOSE POPUP
   ========================================= */

function closePopup() {

    document
        .getElementById("popup")
        .classList.remove("show");


    /*
        Unlock the next gift.
    */

    if (currentGift >= 1 && currentGift < 5) {

        const nextGift =
            document.getElementById(
                "gift" + (currentGift + 1)
            );

        if (nextGift) {

            nextGift.classList.remove("locked");

            nextGift.style.animation =
                "popupOpen 0.6s ease";
        }
    }
}


/* =========================================
   FLOATING HEARTS
   ========================================= */

function createHearts() {

    const container =
        document.querySelector(".hearts");


    setInterval(() => {

        const heart =
            document.createElement("div");


        heart.className = "heart";

        heart.innerHTML =
            ["❤️", "💕", "💗", "💖", "💘"]
            [Math.floor(Math.random() * 5)];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        heart.style.animationDuration =
            (5 + Math.random() * 6) + "s";


        container.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 12000);


    }, 700);
}


/* =========================================
   FIREWORKS
   ========================================= */

function createFireworks() {

    const finalScreen =
        document.getElementById("final");


    setInterval(() => {

        const firework =
            document.createElement("div");


        firework.innerHTML =
            ["✨", "🎆", "💖", "❤️", "⭐"]
            [Math.floor(Math.random() * 5)];


        firework.style.position =
            "absolute";


        firework.style.left =
            Math.random() * 100 + "%";


        firework.style.top =
            Math.random() * 80 + "%";


        firework.style.fontSize =
            (20 + Math.random() * 40) + "px";


        firework.style.animation =
            "popupOpen 0.8s ease";


        finalScreen.appendChild(firework);


        setTimeout(() => {

            firework.remove();

        }, 1000);


    }, 300);
}

/* =========================================
   MUSIC TOGGLE
   ========================================= */
function updateMusicButton() {
    const button = document.getElementById("musicToggle");
    if (!button || !music) return;
    button.textContent = music.paused ? "🔇 Music Off" : "🔊 Music On";
}

function toggleMusic() {
    if (!music) return;

    if (music.paused) {
        music.play().catch(() => {});
    } else {
        music.pause();
    }

    updateMusicButton();
}

music.addEventListener("play", updateMusicButton);
music.addEventListener("pause", updateMusicButton);
