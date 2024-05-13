// GO TO COLLAGE

function password() {
    document.getElementById("login").style.display = "flex";
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Ganda" && password === "GandaGandaGanda") {
        window.location.href = "HiKyut.html";

    } else {
        alert("Invalid username or password. Please try again.");
    }
});


// SLIDESHOW

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1250); // Change image every 1.5 seconds
}

//---------------------------------------------------------------

// NO BUTTON
// NO BUTTON RUNS AWAY WHEN PRESSED
const nBtn = document.getElementById("runaway-btn");
nBtn.addEventListener('click', () => {
    nBtn.textContent = "Weh???";
});

const animateMove = (element, prop, pixels) =>
    anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
    });

["click"].forEach(function (el) {
    nBtn.addEventListener(el, function (event) {
        const top = getRandomNumber(window.innerHeight - this.offsetHeight);
        const left = getRandomNumber(window.innerWidth - this.offsetWidth);

        animateMove(this, "left", left).play();
        animateMove(this, "top", top).play();
    });
});

const getRandomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1));
};

//---------------------------------------------------------------

// YES GETS BIGGER WHEN NO IS PRESSED
const yBtn = document.querySelector(".yBtn");

const animateScale = (element, scale) =>
    anime({
        targets: element,
        scale: scale,
        easing: "easeInOutQuad",
        duration: 700 // Adjust duration as needed
    });

nBtn.addEventListener("click", function (event) {
    animateScale(yBtn, 2).play(); // Increase scale factor as needed

    // You can add any other actions you want to perform when the "No" button is pressed here
});

nBtn.addEventListener("mouseover", function (event) {
    animateScale(yBtn, 1).play(); // Return to the original scale when hovered
});

//---------------------------------------------------------------

//YES BUTTON
// EVERYTHING SHOULD BE HIDDEN AND THEN SHOW THE YES OUTCOME
const btn = document.getElementById('yBtn');

btn.addEventListener('click', () => {

    const box = document.getElementsByClassName('yesOutcome')[0];
    // 👇️ hides element (still takes up space on the page)
    // box.style.visibility = 'hidden';

    // 👇️ removes the element from the DOM
    box.style.display = 'block';

    //removes the question
    const theQuestion = document.getElementsByClassName('Yess')[1];
    theQuestion.style.display = 'none';

    const svg = document.querySelector('svg');
    svg.style.visibility = 'visible';
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
