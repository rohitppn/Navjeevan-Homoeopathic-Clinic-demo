/* =========================================================
   Navjeevan — Main JS  (bulletproof, progressive enhancement)
   ========================================================= */

// Mark JS ready IMMEDIATELY so animation classes engage,
// but only after this script has loaded successfully.
document.documentElement.classList.add("js-ready");

// ---------- Lenis Smooth Scroll (optional, fails gracefully) ----------
let lenis = null;
try {
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
} catch (e) {
  console.warn("Lenis init failed, using native scroll:", e);
}

// Anchor scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      const t = document.querySelector(id);
      if (t) {
        e.preventDefault();
        if (lenis) lenis.scrollTo(t, { offset: -80 });
        else t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// ---------- Sticky nav state ----------
const nav = document.querySelector(".nav");
if (nav) {
  const setNavState = () => {
    if (window.scrollY > 30) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  setNavState();
  window.addEventListener("scroll", setNavState, { passive: true });
}

// ---------- Mobile menu ----------
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("open");
      document.body.style.overflow = "";
    })
  );
}

// ---------- Intersection Observer for reveals ----------
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );
  document.querySelectorAll(".fade-up, .fade-in, .stagger, .reveal").forEach((el) => io.observe(el));

  // Safety net: anything still hidden after 2s gets revealed
  setTimeout(() => {
    document.querySelectorAll(".fade-up:not(.in), .fade-in:not(.in), .stagger:not(.in), .reveal:not(.in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("in");
    });
  }, 2000);
} else {
  // Old browsers: just show everything
  document.querySelectorAll(".fade-up, .fade-in, .stagger, .reveal").forEach((el) => el.classList.add("in"));
}

// ---------- Parallax hero image ----------
const heroImg = document.querySelector(".hero-img-wrap img");
if (heroImg) {
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < 800) {
            heroImg.style.transform = `translateY(${y * 0.06}px) scale(${1 + y * 0.00008})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

// ---------- Floating cards micro-parallax ----------
const tagCards = document.querySelectorAll(".hero-tag-card");
if (tagCards.length) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    tagCards.forEach((card, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      card.style.transform = `translate(${x * dir}px, ${y * dir}px)`;
    });
  });
}

// ---------- Custom cursor ----------
const cursor = document.querySelector(".cursor-dot");
if (cursor && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let cx = 0, cy = 0, tx = 0, ty = 0, scale = 1;
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });
  const animateCursor = () => {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate(${cx - 4}px, ${cy - 4}px) scale(${scale})`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();
  document.querySelectorAll("a, button, .condition-card, .dual-card").forEach((el) => {
    el.addEventListener("mouseenter", () => { scale = 3; });
    el.addEventListener("mouseleave", () => { scale = 1; });
  });
}

// ---------- FAQ accordion ----------
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  if (!q) return;
  q.addEventListener("click", () => {
    const open = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!open) item.classList.add("open");
  });
});

// ---------- Counter animation ----------
const counters = document.querySelectorAll("[data-count]");
if (counters.length && "IntersectionObserver" in window) {
  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const target = +e.target.dataset.count;
          const suffix = e.target.dataset.suffix || "";
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 50));
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(t);
            }
            e.target.textContent = cur + suffix;
          }, 28);
          counterObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObs.observe(c));
}

// ---------- Contact form → WhatsApp ----------
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const concern = data.get("concern") || "";
    const format = data.get("format") || "";
    const message = data.get("message") || "";
    const wa = `https://wa.me/919893414057?text=${encodeURIComponent(
      `Hi Dr. Ritika, I'd like to book a consultation.\n\nName: ${name}\nPhone: ${phone}\nConcern: ${concern}\nConsultation type: ${format}\nMessage: ${message}`
    )}`;
    window.open(wa, "_blank");
  });
}
