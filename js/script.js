"use strict"
// TYPING ANIMATION
var typed = new Typed('.typing', {
    strings: [" ", "Web Developer", "Mobile Developer"],
    typeSpeed: 100,
    BackSpeed: 20,
    loop: true
});

function submitClientInfo() {
    const name = document.getElementById("clientNameInput").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const subject = document.getElementById("clientSubject").value.trim();
    const message = document.getElementById("userInput").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:shellisaiah2020@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
}



const rubberEls = document.querySelectorAll('.rubber');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('rubber-play');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

rubberEls.forEach(el => observer.observe(el));