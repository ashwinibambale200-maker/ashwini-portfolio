
fetch("./navigation.html")
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
        "./navigation.html"
    );

    // 2. Home
    await loadSection(
        "home-placeholder",
        "./home.html"
    );

    // 3. About
    await loadSection(
        "about-placeholder",
        "./about.html"
    );

    // 4. Technical Skills
    await loadSection(
        "skills-placeholder",
        "./skill.html"
    );

    // 5. Resume / Professional Experience
    await loadSection(
        "resume-placeholder",
        "./resume.html"
    );

    // 6. Software & Development Tools
    await loadSection(
        "software-placeholder",
        "./software.html"
    );

    // 7. Professional Experience Projects
    await loadSection(
        "experience-projects-placeholder",
        "./Eproject.html"
    );

    // 8. Personal & Academic Projects
    await loadSection(
        "personal-projects-placeholder",
        "./Pproject.html"
    );

    // 9. Training & Certifications
    await loadSection(
        "training-placeholder",
        "./training.html"
    );

    // 10. Services
    await loadSection(
        "services-placeholder",
        "./service.html"
    );

    // 11. Contact
    await loadSection(
        "contact-placeholder",
        "./contact.html"
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
        dropdown.classList.add("active"); // Slides menu into view from the left
    }
}

function cancel() {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.classList.remove("active"); // Slides menu completely hidden off-screen
    }
}

// Close menu when clicking outside of it
window.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown");
    const hamburgBtn = document.querySelector(".hamburg");
    
    if (dropdown && dropdown.classList.contains("active")) {
        // Check if the click is outside the dropdown AND not on the hamburger button
        if (!dropdown.contains(event.target) && !hamburgBtn.contains(event.target)) {
            cancel();
        }
    }
});

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






