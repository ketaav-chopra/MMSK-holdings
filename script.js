document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth scrolling for navigation links using event delegation
    document.querySelector(".nav-links").addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(0);
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        }
    });

    // 2. Button hover animation (reusable function for hover effects)
    function addHoverEffect(element, scaleValue) {
        element.addEventListener("mouseover", () => {
            element.classList.add("scale-hover");
        });
        element.addEventListener("mouseleave", () => {
            element.classList.remove("scale-hover");
        });
    }
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => addHoverEffect(button, 1.1));

    // 3. Founders section fade-in effect on scroll
    const foundersSection = document.querySelector(".founders");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                foundersSection.classList.add("fade-in-visible");
            }
        });
    }, { threshold: 0.5 });
    observer.observe(foundersSection);

    // 4. Dark mode toggle button with aria-label for accessibility
    const darkModeButton = document.createElement("button");
    darkModeButton.innerText = "Toggle Dark Mode";
    darkModeButton.classList.add("btn", "dark-mode-toggle");
    darkModeButton.setAttribute("aria-label", "Toggle Dark Mode");
    document.body.prepend(darkModeButton);
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 5. Dynamic year in footer
    const footerText = document.querySelector("footer p");
    footerText.innerText = `© ${new Date().getFullYear()} MMSK Holdings. All rights reserved.`;

    // 6. Typing animation for hero text (refactored for scalability)
    const heroText = document.querySelector(".hero h2");
    const text = "Innovate. Lead. Succeed.";
    heroText.innerText = "";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            heroText.innerText += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // 7. Scroll progress bar optimized with requestAnimationFrame
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    document.body.prepend(progressBar);
    function updateProgressBar() {
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;
        progressBar.style.width = scrollPercentage + "%";
        requestAnimationFrame(updateProgressBar);
    }
    requestAnimationFrame(updateProgressBar);

    // 8. Random background color for founders section
    const colors = ["#FFDDC1", "#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF"];
    foundersSection.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // 9. Show back-to-top button when scrolling down
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "↑ Top";
    backToTopButton.classList.add("btn", "back-to-top");
    backToTopButton.setAttribute("aria-label", "Back to top");
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.display = "none";
    document.body.appendChild(backToTopButton);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 10. Expand founder cards on hover (reusable hover function)
    const founders = document.querySelectorAll(".founder");
    founders.forEach(founder => addHoverEffect(founder, 1.1));
});

// Add CSS for hover effect
document.styleSheets[0].insertRule(`
    .scale-hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
    }
`, document.styleSheets[0].cssRules.length);
