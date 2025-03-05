document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelector(".nav-links").addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });

    // Button hover effect
    function addHoverEffect(element) {
        element.addEventListener("mouseover", () => element.classList.add("scale-hover"));
        element.addEventListener("mouseleave", () => element.classList.remove("scale-hover"));
    }
    document.querySelectorAll(".btn").forEach(button => addHoverEffect(button));

    // Founders section fade-in effect with IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll(".founder").forEach(founder => observer.observe(founder));

    // Dark mode toggle with local storage
    const darkModeButton = document.createElement("button");
    darkModeButton.innerText = "Toggle Dark Mode";
    darkModeButton.classList.add("btn", "dark-mode-toggle");
    document.body.prepend(darkModeButton);
    
    // Toggle dark mode on button click
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });
    
    // Check for dark mode preference in local storage on page load
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Dynamic year in footer
    const footerText = document.querySelector("footer p");
    footerText.innerText = `© ${new Date().getFullYear()} MMSK Holdings. All rights reserved.`;

    // Typing animation for hero text
    const heroText = document.querySelector(".hero h2");
    const text = "Innovate. Lead. Succeed.";
    let index = 0;
    
    function typeEffect() {
        if (index < text.length) {
            heroText.innerText += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Scroll progress bar
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    document.body.prepend(progressBar);

    function updateProgressBar() {
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        progressBar.style.width = `${(scrollPosition / totalHeight) * 100}%`;
        requestAnimationFrame(updateProgressBar);
    }
    requestAnimationFrame(updateProgressBar);

    // Back-to-top button functionality
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "↑ Top";
    backToTopButton.classList.add("btn", "back-to-top");
    document.body.appendChild(backToTopButton);

    // Show or hide the back-to-top button based on scroll position
    window.addEventListener("scroll", () => {
        backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
    });

    // Smooth scroll back to top on button click
    backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Debug log to confirm page load
    console.log("Page loaded successfully.");
});
