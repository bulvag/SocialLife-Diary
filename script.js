/* ===============================================================
   SocialLife Diary — script.js
   Scroll reveals, nav state, subtle interactions
   =============================================================== */

/* ─── Scroll Reveal (Intersection Observer) ─── */
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const delay = parseInt(entry.target.dataset.delay || '0', 10);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);

            revealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px'
    });

    revealEls.forEach(el => revealObserver.observe(el));
}

/* ─── Nav scroll state ─── */
const nav = document.getElementById('nav');

if (nav) {
    const handleScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on load
}


/* ─── Auto-scroll (double-tap to start/stop) ─── */
(function () {
    const SPEED = 0.7; // px per frame — smanji za sporije
    let rafId = null;
    let active = false;

    function start() {
        active = true;
        function step() {
            if (!active) return;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            if (window.scrollY >= maxScroll) { stop(); return; }
            window.scrollBy(0, SPEED);
            rafId = requestAnimationFrame(step);
        }
        rafId = requestAnimationFrame(step);
    }

    function stop() {
        active = false;
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    let lastTap = 0;
    document.addEventListener('touchend', () => {
        const now = Date.now();
        if (now - lastTap < 300) {
            active ? stop() : start();
        }
        lastTap = now;
    }, { passive: true });
}());

/* ─── Smooth active-state feedback on App Store buttons ─── */
document.querySelectorAll('.appstore-btn').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'translateY(-1px) scale(0.98)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});
