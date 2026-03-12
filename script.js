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

/* ─── Demo / screen-recording mode ─────────────────────────────────────────
   Press  D  (or add ?demo to the URL) to start an auto-scroll.
   All reveal elements are shown instantly so nothing pops in mid-scroll.
   Press  D  again (or Escape) to stop.
   Speed: tweak SCROLL_PX_PER_FRAME below (default 1.2 px per ~16 ms frame).
   ──────────────────────────────────────────────────────────────────────── */
(function () {
    const SCROLL_PX_PER_FRAME = 1.2; // lower = slower, higher = faster
    let rafId = null;

    function showAllReveals() {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
            el.classList.add('visible');
        });
    }

    function startDemo() {
        showAllReveals();
        window.scrollTo({ top: 0, behavior: 'instant' });

        function step() {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            if (window.scrollY >= maxScroll) {
                stopDemo();
                return;
            }
            window.scrollBy(0, SCROLL_PX_PER_FRAME);
            rafId = requestAnimationFrame(step);
        }

        rafId = requestAnimationFrame(step);
        document.body.dataset.demoActive = '1';
    }

    function stopDemo() {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        delete document.body.dataset.demoActive;
    }

    function toggleDemo() {
        document.body.dataset.demoActive ? stopDemo() : startDemo();
    }

    // Mobile: double-tap anywhere to toggle
    let lastTap = 0;
    document.addEventListener('touchend', e => {
        const now = Date.now();
        if (now - lastTap < 300) {
            e.preventDefault();
            toggleDemo();
        }
        lastTap = now;
    }, { passive: false });

    // URL param: ?demo
    if (new URLSearchParams(location.search).has('demo')) {
        window.addEventListener('load', startDemo);
    }
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
