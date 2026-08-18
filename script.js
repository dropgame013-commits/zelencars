(() => {
  'use strict';

  /* ============================================================
     i18n — every user-facing string lives here, both languages.
     ============================================================ */
  const i18n = {
    ru: {
      'nav.menu': 'МЕНЮ', 'nav.work': 'Работы', 'nav.about': 'О бренде',
      'nav.services': 'Услуги', 'nav.contact': 'Контакты',
      'hero.eyebrow': 'AUTOMOTIVE VISUALS', 'hero.sub': 'Кинематографичная съёмка автомобилей',
      'hero.cta': 'Записаться на съёмку', 'hero.scroll': 'Листайте вниз',
      'work.label': 'Избранные работы',
      'work.item1.name': 'Night Run', 'work.item2.name': 'Brabus Line',
      'work.item3.name': 'Open Road', 'work.item4.name': 'Delivery Day',
      'work.item5.name': 'Black on Black', 'work.item6.name': 'City Lights',
      'work.item7.name': 'First Snow', 'work.item8.name': 'Red Signal',
      'about.label': 'О бренде',
      'about.title': 'Визуальная студия,<br>построенная вокруг&nbsp;одного автомобиля.',
      'about.p1': 'ZelenCars — псевдоним Миши, независимого автомобильного видеографа. Без команды и студии: от съёмки до монтажа — один человек.',
      'about.p2': 'Бренд существует с 2021 года на идее, что у каждого автомобиля есть характер, и задача — честно его показать. Главная специализация — видео, фотография и контент для соцсетей работают на ту же цель.',
      'about.p3': 'Скоро — свой YouTube-канал. Если хотите поддержать проект или предложить автомобиль для съёмки, напишите об этом в сообщении.',
      'impact.years': 'Лет в деле', 'impact.est': 'Основан', 'impact.original': 'Оригинальный материал',
      'services.label': 'Услуги',
      'services.video.title': 'Автомобильное видео', 'services.video.desc': 'Профессиональная видеосъёмка автомобилей — от короткого ролика до полного проекта.',
      'services.photo.title': 'Автомобильное фото', 'services.photo.desc': 'Студийная и выездная фотосъёмка, которая показывает характер автомобиля.',
      'services.social.title': 'Контент для соцсетей', 'services.social.desc': 'Короткие видео и фотосеты для Instagram, YouTube и Telegram.',
      'social.title': 'Следите за проектами', 'social.soon': 'скоро',
      'final.title': 'Твой автомобиль.<br>Твоя история.', 'final.cta': 'Записаться на съёмку',
      'contact.label': 'Контакты', 'contact.title': 'Снимем твой автомобиль',
      'contact.sub': 'Расскажи, какой автомобиль хочешь снять и что имеешь в виду.',
      'contact.form.name': 'Имя', 'contact.form.telegram': 'Telegram',
      'contact.form.car': 'Автомобиль', 'contact.form.optional': 'необязательно',
      'contact.form.message': 'Сообщение', 'contact.form.submit': 'Отправить заявку',
      'contact.success.title': 'Заявка отправлена',
      'contact.success': 'Спасибо — свяжусь с тобой в Telegram в ближайшее время.',
      'contact.form.sending': 'Отправка…',
      'contact.form.error': 'Не получилось отправить. Попробуй ещё раз или напиши в Telegram напрямую.',
      'contact.form.thanks': 'Спасибо!',
      'footer.tag': 'Automotive Visuals', 'footer.made': 'Studio-built site',
    },
    en: {
      'nav.menu': 'MENU', 'nav.work': 'Work', 'nav.about': 'About',
      'nav.services': 'Services', 'nav.contact': 'Contact',
      'hero.eyebrow': 'AUTOMOTIVE VISUALS', 'hero.sub': 'Cinematic automotive video &amp; photography',
      'hero.cta': 'Book a shoot', 'hero.scroll': 'Scroll to explore',
      'work.label': 'Selected work',
      'work.item1.name': 'Night Run', 'work.item2.name': 'Brabus Line',
      'work.item3.name': 'Open Road', 'work.item4.name': 'Delivery Day',
      'work.item5.name': 'Black on Black', 'work.item6.name': 'City Lights',
      'work.item7.name': 'First Snow', 'work.item8.name': 'Red Signal',
      'about.label': 'About',
      'about.title': 'A visual studio built<br>around&nbsp;one car at a time.',
      'about.p1': 'ZelenCars is the alias of Michael, an independent automotive videographer. No team, no studio: one person, from shoot to edit.',
      'about.p2': 'The brand has existed since 2021, built on one idea — every car has a character, and the job is to film it honestly. The core discipline is video; photography and social content work toward the same goal.',
      'about.p3': 'A YouTube channel is coming soon. If you&#8217;d like to support the project or offer a car to shoot, mention it in your message.',
      'impact.years': 'Years on the road', 'impact.est': 'Founded', 'impact.original': 'Original footage',
      'services.label': 'Services',
      'services.video.title': 'Automotive Video', 'services.video.desc': 'Professional automotive videography — from single-car edits to full campaign coverage.',
      'services.photo.title': 'Automotive Photo', 'services.photo.desc': 'Studio and on-location photography built to show a car&#8217;s actual character.',
      'services.social.title': 'Social Content', 'services.social.desc': 'Short-form cuts and photo sets built for Instagram, YouTube and Telegram.',
      'social.title': 'Follow the journey', 'social.soon': 'soon',
      'final.title': 'Your car.<br>Your story.', 'final.cta': 'Book a shoot',
      'contact.label': 'Contact', 'contact.title': 'Let&#8217;s shoot your car',
      'contact.sub': 'Tell me what you&#8217;re driving and what you have in mind.',
      'contact.form.name': 'Name', 'contact.form.telegram': 'Telegram',
      'contact.form.car': 'Car', 'contact.form.optional': 'optional',
      'contact.form.message': 'Message', 'contact.form.submit': 'Send request',
      'contact.success.title': 'Request sent',
      'contact.success': 'Thanks — I&#8217;ll reach out on Telegram shortly.',
      'contact.form.sending': 'Sending…',
      'contact.form.error': 'Couldn&#8217;t send that. Please try again or message Telegram directly.',
      'contact.form.thanks': 'Thank you!',
      'footer.tag': 'Automotive Visuals', 'footer.made': 'Studio-built site',
    },
  };

  let currentLang = localStorage.getItem('zc_lang') || 'ru';

  function applyLang(lang){
    currentLang = lang;
    localStorage.setItem('zc_lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = i18n[lang][el.getAttribute('data-i18n')];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.querySelector('.lang-ru').classList.toggle('is-active', lang === 'ru');
      btn.querySelector('.lang-en').classList.toggle('is-active', lang === 'en');
    });
  }
  function toggleLang(){ applyLang(currentLang === 'ru' ? 'en' : 'ru'); }
  ['langSwitch', 'langSwitchMenu', 'langSwitchFooter'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', toggleLang);
  });
  applyLang(currentLang);

  /* ============================================================
     Footer year / work count — computed, never goes stale.
     ============================================================ */
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  const workCountEl = document.getElementById('workCount');
  const workItemCount = document.querySelectorAll('.work-item').length;
  if (workCountEl) workCountEl.textContent = String(workItemCount).padStart(2, '0');

  /* ============================================================
     Preloader
     ============================================================ */
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderBarFill');
  const loaderPct = document.getElementById('loaderPct');
  let pct = 0;
  const pctTimer = setInterval(() => {
    pct = Math.min(100, pct + Math.round(6 + Math.random() * 14));
    if (loaderPct) loaderPct.textContent = String(pct).padStart(2, '0');
    if (loaderFill) loaderFill.style.width = pct + '%';
    if (pct >= 100) clearInterval(pctTimer);
  }, 110);

  function hideLoader(){
    pct = 100;
    if (loaderPct) loaderPct.textContent = '100';
    if (loaderFill) loaderFill.style.width = '100%';
    clearInterval(pctTimer);
    setTimeout(() => {
      loader?.classList.add('is-hidden');
      document.getElementById('hero')?.classList.add('is-in');
    }, 260);
  }
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2600);

  /* ============================================================
     Media slots — real media, or a designed "awaiting footage" card.
     Drop files into public/videos + public/images with the same
     filenames referenced in index.html and this becomes invisible.
     ============================================================ */
  function wireMediaSlot(el){
    const slot = el.closest('.media-slot');
    if (!slot) return;
    const markEmpty = () => slot.classList.add('is-empty');
    const markFilled = () => slot.classList.remove('is-empty');
    el.addEventListener('error', markEmpty, true);
    el.addEventListener(el.tagName === 'VIDEO' ? 'loadeddata' : 'load', markFilled);
  }
  document.querySelectorAll('.media-el').forEach(wireMediaSlot);

  /* ============================================================
     Custom cursor (desktop, fine pointer only)
     ============================================================ */
  const cursor = document.getElementById('cursor');
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (isFinePointer && cursor){
    document.documentElement.classList.add('has-cursor');
    window.addEventListener('mousemove', e => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursor.classList.add('is-visible');
    }, { passive: true });
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));

    document.querySelectorAll('[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-active');
        cursor.querySelector('span').textContent = el.getAttribute('data-cursor');
      });
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    });
  }

  /* ============================================================
     Magnetic buttons
     ============================================================ */
  if (isFinePointer){
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ============================================================
     Nav show/hide + fullscreen menu
     ============================================================ */
  const nav = document.getElementById('nav');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 30);
    if (y > lastY && y > 160) nav.classList.add('is-hidden');
    else nav.classList.remove('is-hidden');
    lastY = y;
  }, { passive: true });

  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const menuClose = document.getElementById('menuClose');
  function setMenu(open){
    menuBtn.setAttribute('aria-expanded', String(open));
    menuOverlay.classList.toggle('is-open', open);
    menuOverlay.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
  }
  menuBtn?.addEventListener('click', () => setMenu(!menuOverlay.classList.contains('is-open')));
  menuBackdrop?.addEventListener('click', () => setMenu(false));
  menuClose?.addEventListener('click', () => setMenu(false));
  menuOverlay?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  /* ============================================================
     Scroll cue → jump to portfolio
     ============================================================ */
  document.getElementById('scrollCue')?.addEventListener('click', () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* ============================================================
     Generic reveal-on-scroll
     ============================================================ */
  const revealSelector = '.about-title, .about-body, .impact-item, .services-item, .social-title, .social-links, .contact-title, .contact-sub, .contact-form, .final-cta h2';
  document.querySelectorAll(revealSelector).forEach(el => el.setAttribute('data-reveal', ''));
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-in');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('[data-reveal]').forEach(el => revealIO.observe(el));

  /* ============================================================
     Portfolio — lazy-load + autoplay on view, pause off view
     ============================================================ */
  const mediaTargets = document.querySelectorAll('.media-reveal');
  const mediaIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      const media = el.querySelector('.work-media');
      if (entry.isIntersecting){
        if (media && media.dataset.src && !media.src){
          media.src = media.dataset.src;
          if (media.tagName === 'VIDEO') media.load();
        }
        el.classList.add('is-revealed');
        if (media && media.tagName === 'VIDEO') media.play().catch(() => {});
      } else if (media && media.tagName === 'VIDEO' && media.src){
        media.pause();
      }
    });
  }, { threshold: 0.3 });
  mediaTargets.forEach(el => mediaIO.observe(el));

  document.querySelectorAll('.work-item').forEach(el => {
    el.addEventListener('click', () => {
      if (window.matchMedia('(hover: none)').matches) el.classList.toggle('is-tapped');
    });
  });

  /* ============================================================
     Services — click swaps visual + ghost folio number
     ============================================================ */
  const servicesList = document.getElementById('servicesList');
  const servicesImg = document.getElementById('servicesImg');
  const servicesGhost = document.getElementById('servicesGhost');
  const servicesFallbackLabel = document.getElementById('servicesFallbackLabel');
  const servicesVisual = document.querySelector('.services-visual');
  if (servicesImg && servicesImg.dataset.src) servicesImg.src = servicesImg.dataset.src;

  servicesList?.querySelectorAll('.services-item').forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('is-active')) return;
      servicesList.querySelectorAll('.services-item').forEach(i => i.classList.remove('is-active'));
      item.classList.add('is-active');
      const src = item.getAttribute('data-media');
      const ghost = item.getAttribute('data-ghost');
      servicesVisual?.classList.add('is-swapping');
      setTimeout(() => {
        if (servicesImg && src) servicesImg.src = src;
        if (servicesFallbackLabel && src) servicesFallbackLabel.textContent = src;
        if (servicesGhost && ghost) servicesGhost.textContent = ghost;
        servicesVisual?.classList.remove('is-swapping');
      }, 240);
    });
  });

  /* ============================================================
     Impact — count-up, real computed years only
     ============================================================ */
  const impactYearsEl = document.getElementById('impactYears');
  if (impactYearsEl){
    const yearsActive = new Date().getFullYear() - 2021;
    impactYearsEl.setAttribute('data-count-to', String(yearsActive));
    const countUp = (el) => {
      const target = Number(el.getAttribute('data-count-to')) || 0;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        el.textContent = String(target);
        return;
      }
      const duration = 900;
      const start = performance.now();
      function tick(now){
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };
    const impactIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){ countUp(entry.target); impactIO.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    impactIO.observe(impactYearsEl);
  }

  /* ============================================================
     Contact form — Web3Forms (web3forms.com), emails your inbox.
     Setup: create an inbox at web3forms.com, paste the Access Key
     below. No server to host. See README.md for the full walkthrough.
     ============================================================ */
  const WEB3FORMS_ACCESS_KEY = '65bb3ef1-bda0-40e8-9f7d-b4eb6f632255';
  const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

  async function submitForm({ form, subject, statusEl, onSuccess }){
    const status = document.getElementById(statusEl);
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.website){
      status.textContent = i18n[currentLang]['contact.form.thanks'];
      status.className = 'form-status is-ok';
      form.reset();
      onSuccess?.();
      return;
    }
    if (!form.checkValidity()){ form.reportValidity(); return; }

    status.textContent = i18n[currentLang]['contact.form.sending'];
    status.className = 'form-status';

    if (WEB3FORMS_ACCESS_KEY === 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY'){
      status.textContent = i18n[currentLang]['contact.form.error'];
      status.className = 'form-status is-error';
      return;
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject, ...data }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message || 'Request failed');
      status.textContent = '';
      form.reset();
      onSuccess?.();
    } catch (err) {
      status.textContent = i18n[currentLang]['contact.form.error'];
      status.className = 'form-status is-error';
    }
  }

  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    submitForm({
      form: contactForm,
      subject: 'New ZelenCars booking request',
      statusEl: 'contactStatus',
      onSuccess: () => {
        contactForm.hidden = true;
        contactSuccess.hidden = false;
      },
    });
  });

  /* ============================================================
     Frame counter — cosmetic technical readout tied to scroll depth
     ============================================================ */
  const heroFrame = document.getElementById('heroFrame');
  if (heroFrame){
    window.addEventListener('scroll', () => {
      const n = Math.min(999, Math.floor(window.scrollY / 4) + 1);
      heroFrame.textContent = `FRAME_${String(n).padStart(3, '0')}`;
    }, { passive: true });
  }

  /* ============================================================
     GSAP ScrollTrigger + Lenis — the cinematic scroll choreography.
     Progressive enhancement: everything above already works without
     it, so a slow CDN or reduced-motion just yields a calmer page.
     ============================================================ */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.gsap && window.ScrollTrigger && !reduceMotion){
    gsap.registerPlugin(ScrollTrigger);

    if (window.Lenis){
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.1 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    // Hero: video breathes in, content parallax-fades, meta corners clear out.
    gsap.to('.hero-video', {
      scale: 1.16, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to('.hero-content', {
      yPercent: 24, opacity: 0.12, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to(['.hero-hud--l', '.hero-hud--r'], {
      opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: '32% top', scrub: true },
    });

    // Signature move: ZELEN / CARS pull apart as the hero exits.
    gsap.to('.ht-row--a', {
      xPercent: -55, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to('.ht-row--b', {
      xPercent: 55, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });

    // Aperture reveal as Work arrives.
    gsap.fromTo('.section-iris',
      { clipPath: 'circle(140% at 50% 0%)' },
      {
        clipPath: 'circle(0% at 50% 0%)', ease: 'none',
        scrollTrigger: { trigger: '.work', start: 'top 95%', end: 'top 10%', scrub: true },
      }
    );

    // Section labels: mono shutter wipe, same beat everywhere.
    gsap.utils.toArray('.section-head').forEach(head => {
      gsap.fromTo(head,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: head, start: 'top 88%' } }
      );
    });

    // Portfolio tiles drift at slightly different rates — constant, gentle motion.
    gsap.utils.toArray('.work-item').forEach((item, i) => {
      const depth = [-24, 16, -10, 20, -16, 12, -20, 14][i % 8];
      gsap.to(item, {
        y: depth, ease: 'none',
        scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    // Services ghost folio number drifts opposite the list.
    gsap.to('.services-ghost', {
      yPercent: -14, ease: 'none',
      scrollTrigger: { trigger: '.services', start: 'top bottom', end: 'bottom top', scrub: true },
    });

    // Final CTA media: slow creep, never fully still.
    gsap.to('.final-cta-media .media-el', {
      scale: 1.14, ease: 'none',
      scrollTrigger: { trigger: '.final-cta', start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }

  ['.hero-video', '.final-cta-media video'].forEach(sel => {
    document.querySelector(sel)?.play?.().catch(() => {});
  });
})();
