
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.classList.toggle("is-active", open);
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuBtn.classList.remove("is-active");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Current year
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Scroll reveal
  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Animated counters
  document.querySelectorAll("[data-counter]").forEach(counter => {
    const target = Number(counter.dataset.counter);
    const suffix = counter.dataset.suffix || "";
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const duration = 1400;
      const start = performance.now();

      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(target * eased).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      }, { threshold: 0.7 });
      io.observe(counter);
    } else run();
  });

  // Magnetic-ish button movement
  document.querySelectorAll("[data-magnetic]").forEach(button => {
    button.addEventListener("mousemove", e => {
      const rect = button.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });

  // Simple tilt cards
  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -4;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
  });

  // Demo contact forms
  document.querySelectorAll(".demo-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const button = form.querySelector("button[type='submit']");
      const original = button.textContent;
      button.textContent = "Message received ✓";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        form.reset();
      }, 2200);
    });
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  body.classList.add("page-ready");
});
