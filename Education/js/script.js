/* ==========================================================================
   Education Website Templates Collection — Shared Interaction Logic
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation (School template).
  document.querySelectorAll('.mobile-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const nav = toggle.closest('header, .navbar')?.querySelector('.nav-links');
      if (!nav) return;
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  });

  // Close mobile menu after navigation.
  document.querySelectorAll('.nav-links a, .nav-menu a, .ed-menu a, .apex-nav a, .uni-nav a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = link.closest('.nav-links, .nav-menu, .ed-menu, .apex-nav, .uni-nav');
      if (nav) nav.classList.remove('open');
    });
  });

  // Hub template filters.
  const filterBtns = document.querySelectorAll('.filter-btn');
  const showcaseCards = document.querySelectorAll('.showcase-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category || 'all';
      showcaseCards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? 'flex' : 'none';
      });
    });
  });

  // FAQ accordions across all templates.
  const faqGroups = [
    ['.faq-question', '.faq-item', '.faq-answer'],
    ['.college-faq-btn', '.college-faq-item', '.college-faq-content'],
    ['.uni-faq-question', '.uni-faq-item', '.uni-faq-answer'],
    ['.apex-faq-btn', '.apex-faq-item', '.apex-faq-content'],
    ['.ed-faq-btn', '.ed-faq-item', '.ed-faq-content']
  ];
  faqGroups.forEach(([buttonSel, itemSel, contentSel]) => {
    document.querySelectorAll(buttonSel).forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest(itemSel);
        const content = item?.querySelector(contentSel);
        if (!item || !content) return;
        const group = item.parentElement;
        group?.querySelectorAll(itemSel).forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherContent = other.querySelector(contentSel);
            if (otherContent) otherContent.style.maxHeight = '0px';
          }
        });
        const open = item.classList.toggle('active');
        content.style.maxHeight = open ? content.scrollHeight + 'px' : '0px';
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  });

  // College program filters.
  const collegeTabs = document.querySelectorAll('.tab-btn');
  const degreeCards = document.querySelectorAll('.degree-card');
  collegeTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      collegeTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter || 'all';
      degreeCards.forEach(card => {
        card.style.display = cat === 'all' || card.dataset.category === cat ? '' : 'none';
      });
    });
  });

  // University research tabs.
  const researchData = {
    quantum: {
      title: 'Quantum Information & Supercomputing',
      desc: 'Developing fault-tolerant topological quantum bits to revolutionize cryptographic security and molecular drug discovery.',
      grant: '$64 Million Global Grant',
      lead: 'Prof. Henrik Vance, Nobel Laureate in Physics',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
      alt: 'Quantum Physics Lab'
    },
    biogen: {
      title: 'Precision Genomic Medicine',
      desc: 'Building next-generation genomic platforms for early diagnosis, personalized therapies, and scalable clinical research.',
      grant: '$48 Million Medical Research Grant',
      lead: 'Prof. Amara Sen, Director of Genomic Medicine',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
      alt: 'Genomic Research Laboratory'
    },
    fusion: {
      title: 'Clean Fusion Energy',
      desc: 'Advancing compact fusion systems and plasma engineering to create safe, reliable, low-carbon energy technologies.',
      grant: '$72 Million Energy Innovation Grant',
      lead: 'Prof. Elias Morgan, Chair of Energy Systems',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
      alt: 'Energy Research Facility'
    }
  };
  document.querySelectorAll('.research-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.research-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const data = researchData[btn.dataset.tab];
      if (!data) return;
      ['resTitle','resDesc','resGrant','resLead'].forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.textContent = [data.title, data.desc, data.grant, data.lead][i];
      });
      const img = document.getElementById('resImg');
      if (img) { img.src = data.img; img.alt = data.alt; }
    });
  });

  // Animated statistics.
  document.querySelectorAll('.stat-number, .counter-val').forEach(el => {
    const target = Number(el.dataset.target);
    if (!Number.isFinite(target)) return;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const duration = 1200;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { run(); observer.disconnect(); }
    }, { threshold: 0.2 });
    observer.observe(el);
  });

  // School principal message modal.
  const principalModal = document.getElementById('principalModal');
  const principalTrigger = [...document.querySelectorAll('a,button')].find(el =>
    /Read Principal's Message/i.test(el.textContent || '')
  );
  const closePrincipal = principalModal?.querySelector('.modal-close');
  const closeModal = () => {
    if (principalModal) principalModal.classList.remove('open');
    document.body.classList.remove('modal-open');
  };
  if (principalTrigger && principalModal) {
    principalTrigger.addEventListener('click', e => {
      e.preventDefault();
      principalModal.classList.add('open');
      document.body.classList.add('modal-open');
    });
  }
  closePrincipal?.addEventListener('click', closeModal);
  principalModal?.addEventListener('click', e => { if (e.target === principalModal) closeModal(); });

  // Online course search and category filters.
  const courseCards = [...document.querySelectorAll('.course-card')];
  const coursePills = document.querySelectorAll('.pill-btn');
  const searchInput = document.getElementById('heroSearchInput');
  const searchButton = searchInput?.closest('.hero-search-box')?.querySelector('button');
  const noResults = document.getElementById('noResultsMsg');
  let selectedCategory = 'all';

  const applyCourseFilter = () => {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let visible = 0;
    courseCards.forEach(card => {
      const matchesCategory = selectedCategory === 'all' || card.dataset.category === selectedCategory;
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      const show = matchesCategory && matchesQuery;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (noResults) noResults.style.display = visible ? 'none' : 'block';
  };
  coursePills.forEach(pill => {
    pill.addEventListener('click', () => {
      coursePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedCategory = pill.dataset.cat || 'all';
      applyCourseFilter();
      document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  searchButton?.addEventListener('click', e => {
    e.preventDefault();
    applyCourseFilter();
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  searchInput?.addEventListener('input', applyCourseFilter);
  searchInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); applyCourseFilter(); }
  });

  // Course preview modal.
  const courseModal = document.getElementById('courseDetailModal');
  const modalTitle = document.getElementById('mTitle');
  const modalInstructor = document.getElementById('mInst');
  const modalDesc = document.getElementById('mDesc');
  const modalPrice = document.getElementById('mPrice');
  const closeCourseModal = () => {
    courseModal?.classList.remove('open');
    document.body.classList.remove('modal-open');
  };
  document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.course-card');
      if (!card || !courseModal) return;
      if (modalTitle) modalTitle.textContent = card.querySelector('h3')?.textContent || 'Course Preview';
      if (modalInstructor) modalInstructor.textContent = card.querySelector('.inst-name')?.textContent || '';
      if (modalDesc) modalDesc.textContent = 'Preview the course structure, lessons, projects, and learning outcomes. Enrollment can be started from this course page.';
      if (modalPrice) modalPrice.textContent = card.querySelector('.price-tag')?.textContent || '';
      courseModal.classList.add('open');
      document.body.classList.add('modal-open');
    });
  });
  courseModal?.querySelector('.modal-close-btn')?.addEventListener('click', closeCourseModal);
  courseModal?.addEventListener('click', e => { if (e.target === courseModal) closeCourseModal(); });

  // Front-end form handling: validate native required fields and show a non-destructive success message.
  const formMessages = {
    admissionForm: 'Thank you. Your admission inquiry has been submitted successfully.',
    collegeApplyForm: 'Thank you. Your application inquiry has been submitted successfully.',
    uniForm: 'Thank you. Your institutional application inquiry has been submitted successfully.',
    heroLeadForm: 'Thank you. Your free trial request has been submitted successfully.'
  };
  Object.entries(formMessages).forEach(([id, message]) => {
    const form = document.getElementById(id);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      let notice = form.querySelector('.form-success');
      if (!notice) {
        notice = document.createElement('div');
        notice.className = 'form-success';
        form.prepend(notice);
      }
      notice.textContent = message;
      notice.style.display = 'block';
      form.reset();
      notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  // Simple newsletter form feedback.
  document.querySelectorAll('form').forEach(form => {
    if (form.id || !form.querySelector('input[type="email"]')) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const notice = document.createElement('span');
      notice.className = 'form-success';
      notice.textContent = 'Subscribed successfully!';
      form.replaceChildren(notice);
    });
  });

  // Coaching countdown: keeps the visible countdown live.
  const countdown = { days: document.getElementById('days'), hours: document.getElementById('hours'),
    mins: document.getElementById('mins'), secs: document.getElementById('secs') };
  if (Object.values(countdown).every(Boolean)) {
    const end = Date.now() + (6 * 24 + 18) * 60 * 60 * 1000;
    const tick = () => {
      const remaining = Math.max(0, end - Date.now());
      const totalSeconds = Math.floor(remaining / 1000);
      countdown.days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(2, '0');
      countdown.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0');
      countdown.mins.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      countdown.secs.textContent = String(totalSeconds % 60).padStart(2, '0');
      if (remaining > 0) setTimeout(tick, 1000);
    };
    tick();
  }

  // Pricing actions: open the membership/free-trial dialog instead of doing nothing.
  const subscriptionModal = document.getElementById('subscriptionModal');
  const subscriptionForm = document.getElementById('subscriptionForm');
  const subscriptionTitle = document.getElementById('subscriptionTitle');
  const subscriptionPlan = document.getElementById('subscriptionPlan');
  const subscriptionSuccess = document.getElementById('subscriptionSuccess');

  const closeSubscription = () => {
    subscriptionModal?.classList.remove('open');
    subscriptionModal?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  document.querySelectorAll('.js-subscription-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (!subscriptionModal) return;

      const plan = btn.dataset.plan || 'Membership';
      if (subscriptionTitle) {
        subscriptionTitle.textContent = plan === 'Annual All-Access'
          ? 'Get Annual Membership'
          : 'Start Your 7-Day Free Trial';
      }
      if (subscriptionPlan) {
        subscriptionPlan.textContent = plan === 'Annual All-Access'
          ? 'Annual All-Access — $149/year'
          : '7-Day Free Trial — Monthly Pro';
      }
      if (subscriptionSuccess) {
        subscriptionSuccess.textContent = '';
        subscriptionSuccess.style.display = 'none';
      }
      subscriptionForm?.reset();
      subscriptionModal.classList.add('open');
      subscriptionModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      subscriptionModal.querySelector('#subName')?.focus();
    });
  });

  subscriptionModal?.querySelector('.modal-close')?.addEventListener('click', closeSubscription);
  subscriptionModal?.addEventListener('click', e => {
    if (e.target === subscriptionModal) closeSubscription();
  });

  subscriptionForm?.addEventListener('submit', e => {
    e.preventDefault();
    if (!subscriptionForm.checkValidity()) {
      subscriptionForm.reportValidity();
      return;
    }
    const name = subscriptionForm.querySelector('#subName')?.value.trim() || 'Learner';
    if (subscriptionSuccess) {
      subscriptionSuccess.textContent = `Thanks, ${name}! Your membership request has been recorded.`;
      subscriptionSuccess.style.display = 'block';
    }
    subscriptionForm.reset();
  });

  // Escape closes open modals.
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closePrincipal();
    closeCourseModal();
    closeSubscription();
  });
});
