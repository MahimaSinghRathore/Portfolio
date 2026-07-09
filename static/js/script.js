/* =========================================================
   Portfolio interactions: nav, typing, counters, parallax
   ========================================================= */

(function () {
    "use strict";

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.querySelector(".site-nav");
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const backToTop = document.querySelector(".back-to-top");

    function updateChrome() {
        const isScrolled = window.scrollY > 24;
        nav?.classList.toggle("is-scrolled", isScrolled);
        backToTop?.classList.toggle("is-visible", window.scrollY > 640);
    }

    window.addEventListener("scroll", updateChrome, { passive: true });
    updateChrome();

    navToggle?.addEventListener("click", function () {
        const isOpen = navMenu?.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
        navToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    document.querySelectorAll(".nav-menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu?.classList.remove("is-open");
            navToggle?.setAttribute("aria-expanded", "false");
            if (navToggle) {
                navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    });

    if (window.AOS) {
        window.AOS.init({
            duration: 850,
            easing: "ease-out-cubic",
            once: true,
            offset: 80
        });
    }

    const typingTarget = document.getElementById("typing-text");
    const typingPhrases = [
        "Software Engineer",
        "Full Stack Developer",
        "Machine Learning Enthusiast",
        "AI Developer"
    ];

    function startTyping() {
        if (!typingTarget || prefersReducedMotion) {
            return;
        }

        let phraseIndex = 0;
        let letterIndex = 0;
        let deleting = false;

        function tick() {
            const phrase = typingPhrases[phraseIndex];
            typingTarget.textContent = phrase.slice(0, letterIndex);

            if (!deleting && letterIndex < phrase.length) {
                letterIndex += 1;
                window.setTimeout(tick, 78);
                return;
            }

            if (!deleting && letterIndex === phrase.length) {
                deleting = true;
                window.setTimeout(tick, 1300);
                return;
            }

            if (deleting && letterIndex > 0) {
                letterIndex -= 1;
                window.setTimeout(tick, 38);
                return;
            }

            deleting = false;
            phraseIndex = (phraseIndex + 1) % typingPhrases.length;
            window.setTimeout(tick, 260);
        }

        tick();
    }

    startTyping();

    const counters = document.querySelectorAll(".counter");
    const counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target;
            const rawTarget = String(counter.dataset.target || "0").replace(/[^\d.]/g, "");
            const target = Number.parseFloat(rawTarget) || 0;
            const hasDecimal = rawTarget.includes(".");
            const duration = prefersReducedMotion ? 1 : 1200;
            const startTime = performance.now();

            function animate(now) {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = target * eased;
                counter.textContent = hasDecimal ? value.toFixed(1) : Math.round(value);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = hasDecimal ? target.toFixed(1) : Math.round(target);
                }
            }

            requestAnimationFrame(animate);
            observer.unobserve(counter);
        });
    }, { threshold: 0.35 });

    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });

    function enableTilt() {
        if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        document.querySelectorAll(".tilt-card").forEach(function (card) {
            card.addEventListener("mousemove", function (event) {
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(900px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-6px)`;
            });

            card.addEventListener("mouseleave", function () {
                card.style.transform = "";
            });
        });
    }

    enableTilt();

    function enableParallax() {
        if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const parallaxItems = document.querySelectorAll("[data-depth]");
        const hero = document.querySelector(".hero");

        hero?.addEventListener("mousemove", function (event) {
            const rect = hero.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            parallaxItems.forEach(function (item) {
                const depth = Number.parseFloat(item.dataset.depth || "0.12");
                item.style.transform = `translate3d(${x * depth * 80}px, ${y * depth * 80}px, 0)`;
            });
        });

        hero?.addEventListener("mouseleave", function () {
            parallaxItems.forEach(function (item) {
                item.style.transform = "";
            });
        });
    }

    enableParallax();
})();
