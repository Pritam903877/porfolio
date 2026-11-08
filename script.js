
/* =================================
   PRITAM MONDAL PORTFOLIO
   JAVASCRIPT
================================= */

// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuBtn.textContent = isOpen ? "✕" : "☰";

    menuBtn.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU AFTER CLICKING LINK

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// ACTIVE NAVIGATION ON SCROLL

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    // CHANGE THIS TO YOUR REAL GMAIL

    const myEmail = "yourmail@gmail.com";


    if (!name || !email || !subject || !message) {

        document.getElementById("formStatus").textContent =
            "Please fill in all the fields.";

        return;

    }


    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(

        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message

    );


    document.getElementById("formStatus").textContent =
        "Opening your email application...";


    const mailLink =
        `mailto:${myEmail}?subject=${mailSubject}&body=${mailBody}`;

    window.location.href = mailLink;

});
