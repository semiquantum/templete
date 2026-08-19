/* ==========================================================================
   Template 03: University Website - St. Jude University JS Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Research Spotlight Tab Switcher ---
  const researchData = {
    quantum: {
      title: 'Quantum Information & Supercomputing',
      grant: '$64 Million Global Grant',
      lead: 'Prof. Henrik Vance, Nobel Laureate in Physics',
      desc: 'Developing fault-tolerant topological quantum bits to revolutionize cryptographic security and molecular drug discovery.',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80'
    },
    biogen: {
      title: 'CRISPR Gene Editing & Longevity Sciences',
      grant: '$48 Million Medical Grant',
      lead: 'Dr. Evelyn Thorne, Chair of Genomic Medicine',
      desc: 'Targeted gene therapy trials combating neurodegenerative diseases through cellular rejuvenation therapies.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80'
    },
    fusion: {
      title: 'Clean Fusion Energy & Plasma Physics',
      grant: '$82 Million Energy Breakthrough',
      lead: 'Dr. Rajesh Patel, Director of Plasma Physics',
      desc: 'Pioneering magnetic confinement tokamak reactors to deliver zero-carbon infinite energy to future smart grids.',
      img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80'
    }
  };

  const tabs = document.querySelectorAll('.research-tab-btn');
  const rTitle = document.getElementById('resTitle');
  const rGrant = document.getElementById('resGrant');
  const rLead = document.getElementById('resLead');
  const rDesc = document.getElementById('resDesc');
  const rImg = document.getElementById('resImg');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.getAttribute('data-tab');
      const data = researchData[key];

      if (data && rTitle) {
        rTitle.innerText = data.title;
        rGrant.innerText = data.grant;
        rLead.innerText = data.lead;
        rDesc.innerText = data.desc;
        rImg.src = data.img;
      }
    });
  });

  // --- 2. FAQ Accordion ---
  const faqItems = document.querySelectorAll('.uni-faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.uni-faq-question');
    const a = item.querySelector('.uni-faq-answer');

    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(el => {
        el.classList.remove('active');
        const ans = el.querySelector('.uni-faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // --- 3. Admission Form ---
  const uniForm = document.getElementById('uniForm');
  if (uniForm) {
    uniForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your institutional inquiry has been submitted to the St. Jude International Admissions Council.');
      uniForm.reset();
    });
  }
});
