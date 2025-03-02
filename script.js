document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(0);
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Button hover animation
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s ease-in-out";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

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

    // 4. Dark mode toggle
    const darkModeButton = document.createElement("button");
    darkModeButton.innerText = "Toggle Dark Mode";
    darkModeButton.classList.add("btn");
    document.body.prepend(darkModeButton);
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 5. Dynamic year in footer
    document.querySelector("footer p").innerText = `© ${new Date().getFullYear()} MMSK Holdings. All rights reserved.`;

    // 6. Typing animation for hero text
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

    // 7. Scroll progress bar
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    document.body.prepend(progressBar);
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        let scrollPercentage = (scrollPosition / totalHeight) * 100;
        progressBar.style.width = scrollPercentage + "%";
    });

    // 8. Random background color for founders section
    const colors = ["#FFDDC1", "#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF"];
    foundersSection.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // 9. Show back-to-top button when scrolling down
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "↑ Top";
    backToTopButton.classList.add("btn");
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

    // 10. Expand founder cards on hover
    document.querySelectorAll(".founder").forEach(founder => {
        founder.addEventListener("mouseover", () => {
            founder.style.transform = "scale(1.1)";
            founder.style.transition = "transform 0.3s ease-in-out";
        });
        founder.addEventListener("mouseleave", () => {
            founder.style.transform = "scale(1)";
        });
    });
});
