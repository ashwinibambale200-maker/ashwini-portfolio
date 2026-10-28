
fetch("/nav/navigation.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Navigation file not found: " + response.status);
        }

        return response.text();
    })
    .then(data => {
        document.getElementById("navigation-placeholder").innerHTML = data;

        if (typeof AOS !== "undefined") {
            AOS.init({
                duration: 1000,
                once: true
            });
        }
    })
    .catch(error => {
        console.error("Error loading navigation:", error);
    });

/* ========================================
   LOAD HTML SECTIONS
======================================== */

async function loadSection(placeholderId, filePath) {
    const placeholder = document.getElementById(placeholderId);

    if (!placeholder) {
        console.error(`Placeholder not found: ${placeholderId}`);
        return;
    }

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(
                `Failed to load ${filePath}: ${response.status}`
            );
        }

        const html = await response.text();
        placeholder.innerHTML = html;

        console.log(`Loaded successfully: ${filePath}`);

    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}


/* ========================================
   LOAD COMPLETE PORTFOLIO
======================================== */

async function loadPortfolio() {

    // 1. Navigation
    await loadSection(
        "navigation-placeholder",
        "./nav/navigation.html"
    );

    // 2. Home
    await loadSection(
        "home-placeholder",
        "./html/home.html"
    );

    // 3. About
    await loadSection(
        "about-placeholder",
        "./html/about.html"
    );

    // 4. Technical Skills
    await loadSection(
        "skills-placeholder",
        "./html/skill.html"
    );

    // 5. Resume / Professional Experience
    await loadSection(
        "resume-placeholder",
        "./html/resume.html"
    );

    // 6. Software & Development Tools
    await loadSection(
        "software-placeholder",
        "./html/software.html"
    );

    // 7. Professional Experience Projects
    await loadSection(
        "experience-projects-placeholder",
        "./html/Eproject.html"
    );

    // 8. Personal & Academic Projects
    await loadSection(
        "personal-projects-placeholder",
        "./html/Pproject.html"
    );

    // 9. Training & Certifications
    await loadSection(
        "training-placeholder",
        "./html/training.html"
    );

    // 10. Services
    await loadSection(
        "services-placeholder",
        "./html/service.html"
    );

    // 11. Contact
    await loadSection(
        "contact-placeholder",
        "./html/contact.html"
    );

    // Initialize animations after sections are loaded
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });

        AOS.refreshHard();
    }

    console.log("Portfolio loading process completed.");
}


/* ========================================
   MOBILE NAVIGATION
======================================== */

/* ========================================
   MOBILE NAVIGATION FUNCTIONS
======================================== */

function hamburg() {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.style.left = "0"; // Slides menu into view from the left
    }
}

function cancel() {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.style.left = "-100%"; // Slides menu completely hidden off-screen
    }
}


/* ========================================
   START PORTFOLIO
======================================== */

document.addEventListener("DOMContentLoaded", function () {
    loadPortfolio();
});

// Event delegation for dynamic tech tags
document.addEventListener("click", function(event) {
    if (event.target.classList.contains('tech-tag')) {
        event.target.classList.toggle('active');
    }
});






