/**
 * MedCare - Modern Healthcare & Medical Website Template
 * Enhanced JavaScript Controller (ES6+)
 * Features: Dark/Light Mode, Symptom Checker, BMI Calculator, Doctor Search & Filters,
 * Doctor Profile Modal, Spotlight Quick Search (Ctrl+K), Appointment Confirmation Slip,
 * Animated Counters, FAQ Accordion, and Toast Notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DATA DEFINITIONS (Services, Doctors, Symptoms, Packages, Search Index)
  // ==========================================================================
  const medicalData = {
    services: {
      cardiology: {
        title: 'Cardiology & Heart Care',
        icon: 'bi-heart-pulse-fill',
        badge: 'Critical & Preventative',
        description: 'Our comprehensive cardiovascular department delivers end-to-end diagnosis, preventative cardiology, interventional procedures, and cardiac rehabilitation utilizing state-of-the-art diagnostic imaging.',
        features: [
          'Advanced 4D Echocardiography & Stress Testing',
          'Coronary Angiography & Minimally Invasive Stenting',
          'Arrhythmia Management & Pacemaker Implantation',
          'Personalized Cardiac Rehabilitation Programs',
          '24/7 Rapid Response Cardiac Emergency Care'
        ],
        departmentValue: 'cardiology',
        defaultDoctor: 'Dr. Sarah Mitchell'
      },
      neurology: {
        title: 'Neurology & Brain Sciences',
        icon: 'bi-activity',
        badge: 'Specialized Center',
        description: 'Dedicated neurological care for stroke, epilepsy, neuromuscular disorders, Parkinson’s, and neurotrauma with 24/7 advanced neuro-imaging and neuro-intensive monitoring.',
        features: [
          'Comprehensive Stroke Response & Thrombolytic Therapy',
          'High-Resolution Neuro-Imaging (3T MRI & High-Slice CT)',
          'Epilepsy Monitoring & EEG Diagnostics',
          'Movement Disorder & Neuro-Rehabilitation Therapy',
          'Minimally Invasive Neuro-Endoscopic Surgery'
        ],
        departmentValue: 'neurology',
        defaultDoctor: 'Dr. James Anderson'
      },
      pediatrics: {
        title: 'Pediatrics & Neonatal Care',
        icon: 'bi-person-hearts',
        badge: 'Child-Friendly Care',
        description: 'Compassionate and comprehensive medical care for newborns, infants, children, and adolescents, featuring advanced Level III NICU facilities and immunization programs.',
        features: [
          'Well-Baby Clinics & Complete Immunization Programs',
          'Level III Advanced Neonatal Intensive Care Unit (NICU)',
          'Pediatric Emergency Care & Trauma Management',
          'Developmental Screening & Behavioral Counseling',
          'Child-Centric Outpatient & Inpatient Suites'
        ],
        departmentValue: 'pediatrics',
        defaultDoctor: 'Dr. Emily Carter'
      },
      orthopedics: {
        title: 'Orthopedics & Joint Reconstruction',
        icon: 'bi-bandaid-fill',
        badge: 'Advanced Mobility',
        description: 'Expert treatment for bone fractures, sports injuries, spine disorders, and robotic-assisted total hip and knee joint replacements for faster recovery and mobility.',
        features: [
          'Robotic-Assisted Knee and Hip Joint Replacements',
          'Keyhole Arthroscopic Sports Injury Repairs',
          'Spine Care & Minimally Invasive Decompression',
          'Advanced Fracture Management & Complex Trauma Care',
          'Physiotherapy & Kinetic Recovery Programs'
        ],
        departmentValue: 'orthopedics',
        defaultDoctor: 'Dr. Michael Wilson'
      },
      dental: {
        title: 'Dental & Maxillofacial Care',
        icon: 'bi-emoji-smile-fill',
        badge: 'Aesthetic & Clinical',
        description: 'Full-spectrum oral healthcare ranging from painless root canal treatments, pediatric dentistry, orthodontic alignments, to aesthetic dental implants and smile makeovers.',
        features: [
          'Digital Smile Design & Aesthetic Veneers',
          'Single-Visit Computerized Root Canal Therapy',
          'Dental Implants with Guided Surgical Accuracy',
          'Clear Orthodontic Aligners & Braces',
          'Preventive Oral Hygiene & Pediatric Dental Health'
        ],
        departmentValue: 'dental',
        defaultDoctor: 'Dr. Priya Sharma'
      },
      emergency: {
        title: '24/7 Emergency & Trauma Care',
        icon: 'bi-hospital-fill',
        badge: 'Immediate Response',
        description: 'Accredited Level 1 Trauma Center equipped with dedicated triage bays, emergency resuscitation units, on-site diagnostics, and fleet of mobile ICU ambulances.',
        features: [
          'Zero-Wait Triage Protocol for Critical Emergencies',
          'Dedicated Resuscitation Bay & Trauma Operating Theaters',
          'On-Site 24/7 Diagnostics, Blood Bank & Pharmacy',
          'Advanced Life Support (ALS) Ambulance Fleet',
          'Board-Certified Emergency Physicians & Trauma Surgeons'
        ],
        departmentValue: 'emergency',
        defaultDoctor: 'Dr. Sarah Mitchell'
      }
    },
    doctors: [
      {
        id: 'mitchell',
        name: 'Dr. Sarah Mitchell',
        specialty: 'Cardiologist',
        department: 'cardiology',
        experience: '14+ Years Clinical Experience',
        education: 'MD, FACC - Harvard Medical School',
        rating: '4.95 / 5.0 (340+ Patients)',
        schedule: 'Mon, Wed, Fri (09:00 AM – 02:00 PM)',
        bio: 'Dr. Sarah Mitchell is an internationally recognized interventional cardiologist with extensive expertise in structural heart disease, complex coronary angioplasty, and preventative cardiology.',
        image: 'assets/images/doctor-mitchell.jpg'
      },
      {
        id: 'anderson',
        name: 'Dr. James Anderson',
        specialty: 'Chief Neurologist',
        department: 'neurology',
        experience: '12+ Years Clinical Experience',
        education: 'MD, DM Neurology - Johns Hopkins Medicine',
        rating: '4.92 / 5.0 (280+ Patients)',
        schedule: 'Tue, Thu, Sat (10:00 AM – 03:00 PM)',
        bio: 'Specializing in hyper-acute stroke intervention, epilepsy therapeutics, and neurodegenerative disorders, Dr. Anderson heads MedCare’s Comprehensive Brain Sciences Center.',
        image: 'assets/images/doctor-anderson.jpg'
      },
      {
        id: 'carter',
        name: 'Dr. Emily Carter',
        specialty: 'Pediatrician',
        department: 'pediatrics',
        experience: '10+ Years Clinical Experience',
        education: 'MD Pediatrics, FAAP - Stanford University',
        rating: '4.98 / 5.0 (420+ Parents)',
        schedule: 'Mon to Fri (09:00 AM – 01:00 PM)',
        bio: 'Dr. Emily Carter brings gentle, child-centric care to routine pediatric wellness, critical neonatal intensive care (NICU), and pediatric infectious disease management.',
        image: 'assets/images/doctor-carter.jpg'
      },
      {
        id: 'wilson',
        name: 'Dr. Michael Wilson',
        specialty: 'Orthopedic Specialist',
        department: 'orthopedics',
        experience: '15+ Years Clinical Experience',
        education: 'MS Ortho, FRCS - Oxford University',
        rating: '4.94 / 5.0 (310+ Patients)',
        schedule: 'Mon, Wed, Sat (02:00 PM – 07:00 PM)',
        bio: 'A pioneer in robotic-assisted knee and hip joint replacements, Dr. Wilson has successfully performed over 2,500 minimally invasive arthroscopic and trauma procedures.',
        image: 'assets/images/doctor-wilson.jpg'
      },
      {
        id: 'sharma',
        name: 'Dr. Priya Sharma',
        specialty: 'Cosmetic Dental Surgeon',
        department: 'dental',
        experience: '9+ Years Clinical Experience',
        education: 'BDS, MDS Oral & Maxillofacial - King’s College London',
        rating: '4.89 / 5.0 (190+ Patients)',
        schedule: 'Tue, Thu, Sat (11:00 AM – 06:00 PM)',
        bio: 'Expert in painless digital smile design, computer-guided dental implants, and single-visit restorative root canal procedures.',
        image: 'assets/images/doctor-sharma.jpg'
      }
    ],
    symptomsTriage: {
      'chest-pain': {
        name: 'Chest Pain or Tightness',
        severity: 'urgent',
        severityLabel: 'Urgent / Emergency',
        department: 'cardiology',
        deptName: 'Cardiology & Emergency Response',
        doctor: 'Dr. Sarah Mitchell',
        advice: 'Chest pressure or radiating discomfort requires immediate clinical triage to rule out cardiovascular events. Please proceed immediately to emergency or book an urgent cardiology slot.'
      },
      'headache': {
        name: 'Persistent Severe Headache / Dizziness',
        severity: 'moderate',
        severityLabel: 'Specialist Evaluation Needed',
        department: 'neurology',
        deptName: 'Neurology & Brain Sciences',
        doctor: 'Dr. James Anderson',
        advice: 'Frequent migraines, vertigo, or sudden neurological episodes should be evaluated with precision neuro-imaging.'
      },
      'fever-child': {
        name: 'High Fever in Children / Infants',
        severity: 'urgent',
        severityLabel: 'Pediatric Attention Required',
        department: 'pediatrics',
        deptName: 'Pediatrics & Neonatal Care',
        doctor: 'Dr. Emily Carter',
        advice: 'Elevated temperature in children warrants immediate examination to monitor hydration, infection markers, and pediatric vitals.'
      },
      'joint-pain': {
        name: 'Joint Stiffness / Knee Pain',
        severity: 'routine',
        severityLabel: 'Routine Specialist Care',
        department: 'orthopedics',
        deptName: 'Orthopedics & Joint Clinic',
        doctor: 'Dr. Michael Wilson',
        advice: 'Mobility restriction, arthritis symptoms, or sports injuries benefit from clinical physical evaluation and digital X-ray diagnostics.'
      },
      'tooth-pain': {
        name: 'Toothache / Gum Bleeding',
        severity: 'routine',
        severityLabel: 'Dental Care Needed',
        department: 'dental',
        deptName: 'Dental & Maxillofacial Care',
        doctor: 'Dr. Priya Sharma',
        advice: 'Tooth sensitivity or acute cavity pain should be addressed promptly to prevent pulp infection and preserve dental health.'
      },
      'shortness-breath': {
        name: 'Shortness of Breath',
        severity: 'urgent',
        severityLabel: 'High Priority',
        department: 'cardiology',
        deptName: 'Cardiology / Emergency Care',
        doctor: 'Dr. Sarah Mitchell',
        advice: 'Respiratory distress requires continuous pulse oximetry monitoring and rapid clinical assessment by our acute care physicians.'
      }
    }
  };

  // ==========================================================================
  // 2. THEME CONTROLLER & ACCESSIBILITY CONTROLS
  // ==========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rootHtml = document.documentElement;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('medcare_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  rootHtml.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootHtml.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      rootHtml.setAttribute('data-theme', newTheme);
      localStorage.setItem('medcare_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(
        newTheme === 'dark' ? 'Dark Theme Activated' : 'Light Theme Activated',
        `Switched to ${newTheme} mode for optimal reading comfort.`,
        'info',
        2500
      );
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    }
  }

  // Accessibility Font Resizer (A- / A / A+)
  const fontBtns = document.querySelectorAll('.font-resizer button');
  fontBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fontBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.getAttribute('data-size') || 'normal';
      rootHtml.setAttribute('data-font-size', size);
    });
  });

  // Dynamic Time-of-Day Greeting in Hero
  const liveGreetingEl = document.getElementById('liveGreeting');
  if (liveGreetingEl) {
    const hour = new Date().getHours();
    let greeting = 'Good morning';
    if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
    else if (hour >= 17) greeting = 'Good evening';
    liveGreetingEl.textContent = `${greeting} • 14 Specialists on Duty Today`;
  }

  // ==========================================================================
  // 3. HEADER, STICKY STATE, SCROLLSPY & MOBILE NAVIGATION
  // ==========================================================================
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 130;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isActive ? 'bi bi-x-lg' : 'bi bi-list';
      }
      mobileToggle.setAttribute('aria-expanded', isActive.toString());
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const icon = mobileToggle.querySelector('i');
          if (icon) icon.className = 'bi bi-list';
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'bi bi-list';
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 4. ANIMATED STATISTICS COUNTER
  // ==========================================================================
  const statNumbers = document.querySelectorAll('.stat-number-val');
  let countersStarted = false;

  const startCounters = () => {
    statNumbers.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentValue = Math.floor(easeProgress * target);

        counter.textContent = currentValue.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  } else if (statNumbers.length > 0) {
    startCounters();
  }

  // ==========================================================================
  // 5. TOAST NOTIFICATION SYSTEM
  // ==========================================================================
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (title, message, type = 'success', duration = 4500) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'bi-check-circle-fill';
    if (type === 'error') iconClass = 'bi-exclamation-triangle-fill';
    if (type === 'info') iconClass = 'bi-info-circle-fill';

    toast.innerHTML = `
      <i class="bi ${iconClass} toast-icon"></i>
      <div class="toast-body">
        <h6>${title}</h6>
        <p>${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 350);
    }, duration);
  };

  window.MedCareToast = showToast;

  // ==========================================================================
  // 6. HEALTH ASSESSMENT TOOLS (Symptom Checker & BMI Calculator)
  // ==========================================================================
  // Tool Tabs
  const toolTabBtns = document.querySelectorAll('.tool-tab-btn');
  const toolPanels = document.querySelectorAll('.tool-panel');

  toolTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toolTabBtns.forEach(b => b.classList.remove('active'));
      toolPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-tool-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Symptom Checker Logic
  const symptomChips = document.querySelectorAll('.symptom-chip');
  const triageResultBox = document.getElementById('triageResultBox');
  const triageSeverity = document.getElementById('triageSeverity');
  const triageDept = document.getElementById('triageDept');
  const triageDoctor = document.getElementById('triageDoctor');
  const triageAdvice = document.getElementById('triageAdvice');
  const triageBookBtn = document.getElementById('triageBookBtn');

  symptomChips.forEach(chip => {
    chip.addEventListener('click', () => {
      symptomChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');

      const symptomKey = chip.getAttribute('data-symptom');
      const triage = medicalData.symptomsTriage[symptomKey];

      if (triage && triageResultBox) {
        triageResultBox.classList.add('show');

        triageSeverity.className = `triage-severity-badge severity-${triage.severity}`;
        triageSeverity.textContent = triage.severityLabel;
        triageDept.textContent = triage.deptName;
        triageDoctor.textContent = triage.doctor;
        triageAdvice.textContent = triage.advice;

        if (triageBookBtn) {
          triageBookBtn.onclick = () => {
            prefillAndScrollToAppointment(triage.department, triage.doctor);
          };
        }
      }
    });
  });

  // Interactive BMI Calculator Logic
  const heightSlider = document.getElementById('bmiHeight');
  const weightSlider = document.getElementById('bmiWeight');
  const heightDisplay = document.getElementById('heightDisplay');
  const weightDisplay = document.getElementById('weightDisplay');
  const bmiScoreNumber = document.getElementById('bmiScoreNumber');
  const bmiCategoryTag = document.getElementById('bmiCategoryTag');
  const bmiMeterPointer = document.getElementById('bmiMeterPointer');
  const bmiAdviceText = document.getElementById('bmiAdviceText');

  const calculateBMI = () => {
    if (!heightSlider || !weightSlider) return;

    const heightCm = parseFloat(heightSlider.value);
    const weightKg = parseFloat(weightSlider.value);

    if (heightDisplay) heightDisplay.textContent = `${heightCm} cm`;
    if (weightDisplay) weightDisplay.textContent = `${weightKg} kg`;

    const heightMeters = heightCm / 100;
    const bmi = (weightKg / (heightMeters * heightMeters)).toFixed(1);

    if (bmiScoreNumber) bmiScoreNumber.textContent = bmi;

    let category = 'Normal Weight';
    let badgeClass = 'badge-success';
    let pointerPercent = 50;
    let advice = 'Your BMI is within the healthy range. Continue balanced nutrition, routine hydration, and at least 150 minutes of moderate activity per week.';

    if (bmi < 18.5) {
      category = 'Underweight';
      badgeClass = 'badge-primary';
      pointerPercent = 12;
      advice = 'Your weight is lower than recommended. We suggest consulting our clinical nutritionists for a wholesome, nutrient-dense diet plan.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Healthy Weight';
      badgeClass = 'badge-success';
      pointerPercent = 38;
      advice = 'Excellent! Your BMI reflects optimal body composition. Maintain regular wellness checkups to track your cardiovascular metrics.';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = 'Overweight';
      badgeClass = 'badge-warning';
      pointerPercent = 70;
      advice = 'Your BMI indicates slight weight elevation. Consider our preventative cardiac screening package and kinetic exercise guidance.';
    } else {
      category = 'Obesity Range';
      badgeClass = 'badge-danger';
      pointerPercent = 92;
      advice = 'A higher BMI may increase risks of hypertension and metabolic conditions. Schedule an appointment with our lifestyle & endocrinology specialists.';
    }

    if (bmiCategoryTag) {
      bmiCategoryTag.className = `bmi-category-tag ${badgeClass}`;
      bmiCategoryTag.textContent = category;
    }
    if (bmiMeterPointer) {
      bmiMeterPointer.style.left = `${pointerPercent}%`;
    }
    if (bmiAdviceText) {
      bmiAdviceText.textContent = advice;
    }
  };

  if (heightSlider && weightSlider) {
    heightSlider.addEventListener('input', calculateBMI);
    weightSlider.addEventListener('input', calculateBMI);
    calculateBMI(); // Init
  }

  // ==========================================================================
  // 7. DOCTOR DIRECTORY SEARCH & CATEGORY FILTER
  // ==========================================================================
  const doctorSearchInput = document.getElementById('doctorSearchInput');
  const doctorFilterPills = document.querySelectorAll('.filter-pill');
  const doctorCards = document.querySelectorAll('.doctor-card');
  const doctorCountDisplay = document.getElementById('doctorCountDisplay');

  let activeDepartmentFilter = 'all';

  const filterDoctors = () => {
    const query = doctorSearchInput ? doctorSearchInput.value.trim().toLowerCase() : '';
    let visibleCount = 0;

    doctorCards.forEach(card => {
      const name = card.querySelector('.doctor-name')?.textContent.toLowerCase() || '';
      const specialty = card.querySelector('.doctor-specialty')?.textContent.toLowerCase() || '';
      const department = card.getAttribute('data-department')?.toLowerCase() || '';

      const matchesQuery = !query || name.includes(query) || specialty.includes(query);
      const matchesDept = activeDepartmentFilter === 'all' || department === activeDepartmentFilter;

      if (matchesQuery && matchesDept) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (doctorCountDisplay) {
      doctorCountDisplay.textContent = `Showing ${visibleCount} Doctor${visibleCount === 1 ? '' : 's'}`;
    }
  };

  if (doctorSearchInput) {
    doctorSearchInput.addEventListener('input', filterDoctors);
  }

  doctorFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      doctorFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDepartmentFilter = pill.getAttribute('data-filter') || 'all';
      filterDoctors();
    });
  });

  // ==========================================================================
  // 8. DOCTOR PROFILE MODAL
  // ==========================================================================
  const doctorModal = document.getElementById('doctorBioModal');
  const doctorModalClose = document.getElementById('doctorBioModalClose');
  const docModalImg = document.getElementById('docModalImg');
  const docModalName = document.getElementById('docModalName');
  const docModalSpecialty = document.getElementById('docModalSpecialty');
  const docModalExp = document.getElementById('docModalExp');
  const docModalBio = document.getElementById('docModalBio');
  const docModalEducation = document.getElementById('docModalEducation');
  const docModalRating = document.getElementById('docModalRating');
  const docModalSchedule = document.getElementById('docModalSchedule');
  const docModalBookBtn = document.getElementById('docModalBookBtn');

  const openDoctorModal = (doctorId) => {
    const doctor = medicalData.doctors.find(d => d.id === doctorId);
    if (!doctor || !doctorModal) return;

    if (docModalImg) docModalImg.src = doctor.image;
    if (docModalName) docModalName.textContent = doctor.name;
    if (docModalSpecialty) docModalSpecialty.textContent = doctor.specialty;
    if (docModalExp) docModalExp.textContent = doctor.experience;
    if (docModalBio) docModalBio.textContent = doctor.bio;
    if (docModalEducation) docModalEducation.textContent = doctor.education;
    if (docModalRating) docModalRating.textContent = doctor.rating;
    if (docModalSchedule) docModalSchedule.textContent = doctor.schedule;

    if (docModalBookBtn) {
      docModalBookBtn.onclick = () => {
        closeModal(doctorModal);
        prefillAndScrollToAppointment(doctor.department, doctor.name);
      };
    }

    openModal(doctorModal);
  };

  document.querySelectorAll('[data-view-doctor]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docId = btn.getAttribute('data-view-doctor');
      openDoctorModal(docId);
    });
  });

  if (doctorModalClose && doctorModal) {
    doctorModalClose.addEventListener('click', () => closeModal(doctorModal));
  }

  // ==========================================================================
  // 9. SERVICE DETAILS MODAL
  // ==========================================================================
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalClose = document.getElementById('serviceModalClose');
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalBadge = document.getElementById('serviceModalBadge');
  const serviceModalIcon = document.getElementById('serviceModalIcon');
  const serviceModalDesc = document.getElementById('serviceModalDesc');
  const serviceModalFeatures = document.getElementById('serviceModalFeatures');
  const serviceModalBookBtn = document.getElementById('serviceModalBookBtn');

  const openServiceModal = (serviceKey) => {
    const service = medicalData.services[serviceKey];
    if (!service || !serviceModal) return;

    serviceModalTitle.textContent = service.title;
    serviceModalBadge.textContent = service.badge;
    serviceModalIcon.className = `bi ${service.icon}`;
    serviceModalDesc.textContent = service.description;

    serviceModalFeatures.innerHTML = service.features
      .map(feat => `<li><i class="bi bi-check2-circle"></i> ${feat}</li>`)
      .join('');

    if (serviceModalBookBtn) {
      serviceModalBookBtn.onclick = () => {
        closeModal(serviceModal);
        prefillAndScrollToAppointment(service.departmentValue, service.defaultDoctor);
      };
    }

    openModal(serviceModal);
  };

  document.querySelectorAll('[data-service-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-service-key');
      openServiceModal(key);
    });
  });

  if (serviceModalClose && serviceModal) {
    serviceModalClose.addEventListener('click', () => closeModal(serviceModal));
  }

  // Generic modal helpers
  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
    }
  });

  // ==========================================================================
  // 10. SPOTLIGHT QUICK SEARCH (Ctrl+K / Cmd+K)
  // ==========================================================================
  const searchModal = document.getElementById('spotlightSearchModal');
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const spotlightSearchClose = document.getElementById('spotlightSearchClose');
  const spotlightInput = document.getElementById('spotlightSearchInput');
  const spotlightResults = document.getElementById('spotlightResults');

  const spotlightIndex = [
    { title: 'Cardiology Department', category: 'Medical Service', target: '#services', icon: 'bi-heart-pulse-fill' },
    { title: 'Neurology & Brain Sciences', category: 'Medical Service', target: '#services', icon: 'bi-activity' },
    { title: 'Pediatric Child Care', category: 'Medical Service', target: '#services', icon: 'bi-person-hearts' },
    { title: 'Dr. Sarah Mitchell (Cardiologist)', category: 'Specialist Doctor', target: '#doctors', icon: 'bi-person-check-fill' },
    { title: 'Dr. James Anderson (Neurologist)', category: 'Specialist Doctor', target: '#doctors', icon: 'bi-person-check-fill' },
    { title: 'Dr. Emily Carter (Pediatrician)', category: 'Specialist Doctor', target: '#doctors', icon: 'bi-person-check-fill' },
    { title: 'Dr. Michael Wilson (Orthopedic)', category: 'Specialist Doctor', target: '#doctors', icon: 'bi-person-check-fill' },
    { title: 'Book an Appointment', category: 'Scheduling', target: '#appointment', icon: 'bi-calendar-check' },
    { title: 'Executive Health Checkup Packages', category: 'Wellness Package', target: '#packages', icon: 'bi-box2-heart-fill' },
    { title: 'Symptom Checker & Triage', category: 'Health Tool', target: '#health-tools', icon: 'bi-shield-check' },
    { title: 'BMI & Wellness Calculator', category: 'Health Tool', target: '#health-tools', icon: 'bi-calculator' },
    { title: 'Emergency & Ambulance (24/7)', category: 'Emergency Service', target: '#contact', icon: 'bi-telephone-inbound-fill' },
    { title: 'Insurance & Cashless Hospitalization', category: 'Patient Guide', target: '#patient-info', icon: 'bi-credit-card-2-front' },
    { title: 'Hospital Visiting Hours', category: 'Patient Guide', target: '#patient-info', icon: 'bi-clock-fill' }
  ];

  const renderSpotlightResults = (query = '') => {
    if (!spotlightResults) return;
    const cleanQuery = query.toLowerCase().trim();

    const filtered = spotlightIndex.filter(item => 
      !cleanQuery || item.title.toLowerCase().includes(cleanQuery) || item.category.toLowerCase().includes(cleanQuery)
    );

    if (filtered.length === 0) {
      spotlightResults.innerHTML = `
        <div style="text-align:center; padding: 2rem; color: var(--text-light);">
          <i class="bi bi-search" style="font-size: 2rem; margin-bottom: 0.5rem; display:block;"></i>
          <p>No results found for "${query}". Try searching for cardiology, doctors, or appointment.</p>
        </div>
      `;
      return;
    }

    spotlightResults.innerHTML = filtered.map(item => `
      <div class="spotlight-item" data-target="${item.target}">
        <i class="bi ${item.icon}"></i>
        <div class="spotlight-item-text">
          <h6>${item.title}</h6>
          <p>${item.category}</p>
        </div>
      </div>
    `).join('');

    spotlightResults.querySelectorAll('.spotlight-item').forEach(item => {
      item.addEventListener('click', () => {
        const targetSelector = item.getAttribute('data-target');
        closeModal(searchModal);
        const targetEl = document.querySelector(targetSelector);
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };

  if (searchTriggerBtn && searchModal) {
    searchTriggerBtn.addEventListener('click', () => {
      openModal(searchModal);
      renderSpotlightResults('');
      setTimeout(() => spotlightInput?.focus(), 100);
    });
  }

  if (spotlightSearchClose && searchModal) {
    spotlightSearchClose.addEventListener('click', () => closeModal(searchModal));
  }

  if (spotlightInput) {
    spotlightInput.addEventListener('input', (e) => {
      renderSpotlightResults(e.target.value);
    });
  }

  // Ctrl+K / Cmd+K shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) {
        closeModal(searchModal);
      } else {
        openModal(searchModal);
        renderSpotlightResults('');
        setTimeout(() => spotlightInput?.focus(), 100);
      }
    }
  });

  // ==========================================================================
  // 11. HEALTH PACKAGES INTEGRATION
  // ==========================================================================
  const packageBookButtons = document.querySelectorAll('[data-book-package]');
  packageBookButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute('data-book-package');
      const messageInput = document.getElementById('patientMessage');
      if (messageInput) {
        messageInput.value = `I would like to reserve the "${packageName}" health checkup package.`;
      }
      prefillAndScrollToAppointment('cardiology', 'Dr. Sarah Mitchell');
      showToast('Package Selected', `Selected "${packageName}". Please complete your booking details below.`, 'info');
    });
  });

  // ==========================================================================
  // 12. APPOINTMENT FORM: DYNAMIC SYNC, VALIDATION & PRINTABLE SLIP
  // ==========================================================================
  const appointmentForm = document.getElementById('appointmentForm');
  const departmentSelect = document.getElementById('deptSelect');
  const doctorSelect = document.getElementById('doctorSelect');
  const appointmentDateInput = document.getElementById('appointmentDate');
  const selectedTimeInput = document.getElementById('selectedTime');
  const timeSlotButtons = document.querySelectorAll('.time-slot-btn');
  const appointmentConfirmModal = document.getElementById('appointmentConfirmModal');
  const appointmentConfirmClose = document.getElementById('appointmentConfirmClose');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const printSlipBtn = document.getElementById('printSlipBtn');

  if (appointmentDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    appointmentDateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  const updateDoctorsList = (deptVal, preselectDoctor = '') => {
    if (!doctorSelect) return;

    doctorSelect.innerHTML = '<option value="" disabled selected>Select Specialist</option>';

    const matchingDocs = medicalData.doctors.filter(d => !deptVal || d.department === deptVal);
    
    if (matchingDocs.length > 0) {
      matchingDocs.forEach(doc => {
        const opt = document.createElement('option');
        opt.value = doc.name;
        opt.textContent = `${doc.name} (${doc.specialty})`;
        if (preselectDoctor && doc.name.toLowerCase() === preselectDoctor.toLowerCase()) {
          opt.selected = true;
        }
        doctorSelect.appendChild(opt);
      });
      doctorSelect.disabled = false;
    } else {
      medicalData.doctors.forEach(doc => {
        const opt = document.createElement('option');
        opt.value = doc.name;
        opt.textContent = `${doc.name} (${doc.specialty})`;
        doctorSelect.appendChild(opt);
      });
    }
  };

  if (departmentSelect) {
    departmentSelect.addEventListener('change', (e) => {
      updateDoctorsList(e.target.value);
    });
  }

  timeSlotButtons.forEach(slotBtn => {
    slotBtn.addEventListener('click', () => {
      timeSlotButtons.forEach(b => b.classList.remove('selected'));
      slotBtn.classList.add('selected');
      if (selectedTimeInput) {
        selectedTimeInput.value = slotBtn.getAttribute('data-time') || slotBtn.textContent.trim();
        clearFieldError(selectedTimeInput);
      }
    });
  });

  document.querySelectorAll('[data-book-doctor]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docName = btn.getAttribute('data-book-doctor');
      const docDept = btn.getAttribute('data-department') || 'cardiology';
      prefillAndScrollToAppointment(docDept, docName);
    });
  });

  const prefillAndScrollToAppointment = (department, doctor) => {
    if (departmentSelect) {
      departmentSelect.value = department;
      updateDoctorsList(department, doctor);
    }
    if (doctorSelect && doctor) {
      setTimeout(() => {
        for (let i = 0; i < doctorSelect.options.length; i++) {
          if (doctorSelect.options[i].value.toLowerCase().includes(doctor.toLowerCase())) {
            doctorSelect.selectedIndex = i;
            break;
          }
        }
      }, 50);
    }

    const appointmentSec = document.getElementById('appointment');
    if (appointmentSec) {
      appointmentSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setFieldError = (inputElement, errorText) => {
    const group = inputElement.closest('.form-group');
    if (!group) return;
    group.classList.add('has-error');
    const errorEl = group.querySelector('.form-error');
    if (errorEl) errorEl.textContent = errorText;
  };

  const clearFieldError = (inputElement) => {
    const group = inputElement.closest('.form-group');
    if (!group) return;
    group.classList.remove('has-error');
  };

  if (appointmentForm) {
    const inputs = appointmentForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => clearFieldError(input));
      input.addEventListener('change', () => clearFieldError(input));
    });

    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('patientName');
      const emailInput = document.getElementById('patientEmail');
      const phoneInput = document.getElementById('patientPhone');
      const deptInput = document.getElementById('deptSelect');
      const docInput = document.getElementById('doctorSelect');
      const dateInput = document.getElementById('appointmentDate');
      const timeInput = document.getElementById('selectedTime');

      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        setFieldError(nameInput, 'Please enter your full name (minimum 3 characters).');
        isValid = false;
      } else clearFieldError(nameInput);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        setFieldError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      } else clearFieldError(emailInput);

      const phoneRegex = /^[0-9+\s\-()]{8,18}$/;
      if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
        setFieldError(phoneInput, 'Please enter a valid phone number (min 8 digits).');
        isValid = false;
      } else clearFieldError(phoneInput);

      if (!deptInput.value) {
        setFieldError(deptInput, 'Please select a medical department.');
        isValid = false;
      } else clearFieldError(deptInput);

      if (!docInput.value) {
        setFieldError(docInput, 'Please select your preferred doctor/specialist.');
        isValid = false;
      } else clearFieldError(docInput);

      if (!dateInput.value) {
        setFieldError(dateInput, 'Please choose a preferred appointment date.');
        isValid = false;
      } else {
        const chosen = new Date(dateInput.value);
        const todayZero = new Date();
        todayZero.setHours(0, 0, 0, 0);
        if (chosen < todayZero) {
          setFieldError(dateInput, 'Date cannot be in the past.');
          isValid = false;
        } else clearFieldError(dateInput);
      }

      if (!timeInput.value) {
        setFieldError(timeInput, 'Please select a convenient time slot.');
        isValid = false;
      } else clearFieldError(timeInput);

      if (!isValid) {
        showToast('Form Incomplete', 'Please check the highlighted fields and try again.', 'error');
        return;
      }

      const submitBtn = appointmentForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="bi bi-arrow-repeat spin-icon"></i> Processing Appointment...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        const bookingId = 'MC-' + Math.floor(100000 + Math.random() * 900000);
        const deptText = deptInput.options[deptInput.selectedIndex]?.text || deptInput.value;
        const doctorText = docInput.value;
        const formattedDate = new Date(dateInput.value).toLocaleDateString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });

        document.getElementById('summaryBookingId').textContent = bookingId;
        document.getElementById('summaryName').textContent = nameInput.value.trim();
        document.getElementById('summaryDoctor').textContent = doctorText;
        document.getElementById('summaryDept').textContent = deptText;
        document.getElementById('summaryDateTime').textContent = `${formattedDate} at ${timeInput.value}`;
        document.getElementById('summaryContact').textContent = `${phoneInput.value.trim()} | ${emailInput.value.trim()}`;

        openModal(appointmentConfirmModal);

        showToast(
          'Appointment Confirmed!',
          `Booking ${bookingId} has been confirmed. Confirmation details sent to ${emailInput.value.trim()}.`,
          'success',
          6000
        );

        appointmentForm.reset();
        timeSlotButtons.forEach(b => b.classList.remove('selected'));
        if (selectedTimeInput) selectedTimeInput.value = '';
      }, 700);
    });
  }

  if (appointmentConfirmClose && appointmentConfirmModal) {
    appointmentConfirmClose.addEventListener('click', () => closeModal(appointmentConfirmModal));
  }
  if (modalDoneBtn && appointmentConfirmModal) {
    modalDoneBtn.addEventListener('click', () => closeModal(appointmentConfirmModal));
  }

  if (printSlipBtn) {
    printSlipBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ==========================================================================
  // 13. PATIENT INFORMATION TABS
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.patient-tab-btn');
  const tabPanes = document.querySelectorAll('.patient-tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // ==========================================================================
  // 14. FAQ ACCORDION
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isCurrentlyOpen = item.classList.contains('active');

        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isCurrentlyOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ==========================================================================
  // 15. CONTACT FORM & NEWSLETTER VALIDATION
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const subject = document.getElementById('contactSubject');
      const message = document.getElementById('contactMessage');
      let valid = true;

      if (!name.value.trim()) {
        setFieldError(name, 'Please enter your name.');
        valid = false;
      } else clearFieldError(name);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        setFieldError(email, 'Please enter a valid email address.');
        valid = false;
      } else clearFieldError(email);

      if (!subject.value.trim()) {
        setFieldError(subject, 'Please specify a subject for your inquiry.');
        valid = false;
      } else clearFieldError(subject);

      if (!message.value.trim() || message.value.trim().length < 10) {
        setFieldError(message, 'Message must be at least 10 characters long.');
        valid = false;
      } else clearFieldError(message);

      if (!valid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="bi bi-arrow-repeat spin-icon"></i> Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(
          'Message Dispatched!',
          'Thank you for contacting MedCare. Our patient relations desk will reply within 24 hours.',
          'success'
        );
      }, 700);
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!input || !emailRegex.test(input.value.trim())) {
        showToast('Invalid Email', 'Please provide a valid email to subscribe to health updates.', 'error');
        return;
      }

      const emailVal = input.value.trim();
      input.value = '';
      showToast(
        'Subscription Active!',
        `Thank you for subscribing (${emailVal}). You will receive monthly health tips & hospital updates.`,
        'info'
      );
    });
  }

  // Helper CSS spin icon
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes spin { 100% { transform: rotate(360deg); } }
    .spin-icon { display: inline-block; animation: spin 1s linear infinite; }
  `;
  document.head.appendChild(styleEl);

  // Automated Image Error Fallback Handler
  const setupImageErrorFallbacks = () => {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', function() {
        if (this.classList.contains('doctor-img') || this.classList.contains('doctor-modal-avatar')) {
          this.src = 'assets/images/fallback-doctor.svg';
        } else if (this.classList.contains('facility-img')) {
          this.src = 'assets/images/fallback-facility.svg';
        } else if (this.classList.contains('author-avatar')) {
          this.src = 'assets/images/fallback-avatar.svg';
        } else {
          this.src = 'assets/images/fallback-facility.svg';
        }
      });
    });
  };
  setupImageErrorFallbacks();

});
