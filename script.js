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


/* ─── Auto-scroll floating button ─── */
(function () {
    const SPEED = 0.7;
    let rafId = null;
    let active = false;

    const btn = document.createElement('button');
    btn.id = 'scroll-fab';
    btn.setAttribute('aria-label', 'Auto scroll');
    btn.innerHTML = '▶';
    document.body.appendChild(btn);

    function start() {
        active = true;
        btn.innerHTML = '⏹';
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
        btn.innerHTML = '▶';
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    btn.addEventListener('pointerup', () => active ? stop() : start());
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
