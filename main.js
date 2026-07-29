/* ==========================================================
   MAYA MAIDS — interactions & rendering
   ========================================================== */
(function(){
  "use strict";

  const icon = (name, size = 20) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;

  /* ---------- Services ---------- */
  function renderServices(){
    const grid = document.getElementById("servicesGrid");
    if(!grid) return;
    grid.innerHTML = SERVICES.map(s => `
      <div class="service-card">
        <div class="service-icon">${icon(s.icon, 22)}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <span class="service-from">${s.from}</span>
      </div>
    `).join("");
  }

  /* ---------- Pricing table ---------- */
  function renderPricing(){
    const tbody = document.querySelector("#pricingTable tbody");
    if(!tbody) return;
    tbody.innerHTML = PRICING_ROWS.map(r => `
      <tr>
        <td>${r.service}</td>
        <td>${r.duration}</td>
        <td>${r.price}</td>
        <td class="row-cta"><button class="mini-link js-book-service" data-service="${r.service}">Book →</button></td>
      </tr>
    `).join("");
  }

  /* ---------- Plans ---------- */
  function renderPlans(){
    const grid = document.getElementById("plansGrid");
    if(!grid) return;
    grid.innerHTML = PLANS.map(p => `
      <div class="plan-card ${p.popular ? "popular" : ""}">
        ${p.popular ? '<span class="plan-badge">Most popular</span>' : ""}
        <h3>${p.name}</h3>
        <p class="plan-price">${p.price} <span>${p.per}</span></p>
        <p class="plan-cadence">${p.cadence}</p>
        <ul class="plan-features">
          ${p.features.map(f => `<li>${icon("shield", 15)}<span>${f}</span></li>`).join("")}
        </ul>
        <button class="btn ${p.popular ? "btn-gold" : "btn-outline"} btn-full js-book-service" data-service="${p.name} Plan">Choose ${p.name}</button>
      </div>
    `).join("");
  }

  /* ---------- Why us ---------- */
  function renderWhy(){
    const grid = document.getElementById("whyGrid");
    if(!grid) return;
    grid.innerHTML = WHY_US.map(w => `
      <div class="why-card">
        <div class="why-icon">${icon(w.icon, 20)}</div>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </div>
    `).join("");
  }

  /* ---------- Verification process ---------- */
  function renderProcess(){
    const list = document.getElementById("processList");
    if(!list) return;
    list.innerHTML = VERIFICATION_STEPS.map(s => `
      <li>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </li>
    `).join("");
  }

  /* ---------- FAQ ---------- */
  function renderFaq(){
    const wrap = document.getElementById("faqAccordion");
    if(!wrap) return;
    wrap.innerHTML = FAQS.map((f, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-q" aria-expanded="false">
          <span>${f.q}</span>
          <span class="plus">+</span>
        </button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>
    `).join("");

    wrap.querySelectorAll(".faq-q").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const answer = item.querySelector(".faq-a");
        const isOpen = item.classList.contains("open");

        wrap.querySelectorAll(".faq-item.open").forEach(open => {
          if(open !== item){
            open.classList.remove("open");
            open.querySelector(".faq-q").setAttribute("aria-expanded", "false");
            open.querySelector(".faq-a").style.maxHeight = null;
          }
        });

        if(isOpen){
          item.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          answer.style.maxHeight = null;
        } else {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------- Reviews ---------- */
  function renderReviews(){
    const track = document.getElementById("reviewsTrack");
    if(!track) return;
    track.innerHTML = REVIEWS.map(r => `
      <div class="review-card">
        <div class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
        <p class="review-quote">“${r.quote}”</p>
        <div class="review-person">
          <div class="review-avatar">${r.name.charAt(0)}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-area">${r.area}</div>
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ---------- Mobile nav ---------- */
  function initNav(){
    const header = document.querySelector(".site-header");
    const toggle = document.getElementById("navToggle");
    if(!toggle) return;
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".main-nav a").forEach(a => {
      a.addEventListener("click", () => header.classList.remove("nav-open"));
    });
  }

  /* ---------- Booking modal ---------- */
  function initBooking(){
    const overlay = document.getElementById("bookingOverlay");
    const closeBtn = document.getElementById("bookingClose");
    const form = document.getElementById("bookingForm");
    const success = document.getElementById("bookingSuccess");
    const serviceSelect = document.getElementById("bk-service");
    if(!overlay) return;

    // populate service dropdown from data.js
    const allServiceNames = [
      ...SERVICES.map(s => s.title),
      ...PLANS.map(p => p.name + " Plan")
    ];
    serviceSelect.innerHTML = allServiceNames.map(n => `<option>${n}</option>`).join("");

    function openModal(serviceName){
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      if(serviceName){
        const match = [...serviceSelect.options].find(o => o.value === serviceName);
        if(match) serviceSelect.value = serviceName;
      }
      form.hidden = false;
      success.hidden = true;
    }
    function closeModal(){
      overlay.hidden = true;
      document.body.style.overflow = "";
    }

    document.querySelectorAll("#openBookingTop, #openBookingHero").forEach(btn => {
      btn.addEventListener("click", () => openModal());
    });
    document.body.addEventListener("click", e => {
      const trigger = e.target.closest(".js-book-service");
      if(trigger) openModal(trigger.dataset.service);
    });

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", e => { if(e.target === overlay) closeModal(); });
    document.addEventListener("keydown", e => { if(e.key === "Escape" && !overlay.hidden) closeModal(); });

    form.addEventListener("submit", e => {
      e.preventDefault();
      form.hidden = true;
      success.hidden = false;
    });
  }

  /* ---------- Lead form ---------- */
  function initLeadForm(){
    const form = document.getElementById("leadForm");
    const success = document.getElementById("leadSuccess");
    if(!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      form.reset();
      success.hidden = false;
      setTimeout(() => { success.hidden = true; }, 6000);
    });
  }

  /* ---------- Live chat (demo) ---------- */
  function initChat(){
    const toggle = document.getElementById("chatToggle");
    const panel = document.getElementById("chatPanel");
    const closeBtn = document.getElementById("chatClose");
    const form = document.getElementById("chatForm");
    const input = document.getElementById("chatInput");
    const body = document.getElementById("chatBody");
    if(!toggle) return;

    toggle.addEventListener("click", () => { panel.hidden = !panel.hidden; });
    closeBtn.addEventListener("click", () => { panel.hidden = true; });

    form.addEventListener("submit", e => {
      e.preventDefault();
      const text = input.value.trim();
      if(!text) return;
      const userMsg = document.createElement("div");
      userMsg.className = "chat-msg user";
      userMsg.textContent = text;
      body.appendChild(userMsg);
      input.value = "";
      body.scrollTop = body.scrollHeight;

      setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "chat-msg bot";
        botMsg.textContent = "Thanks! This is a demo chat — for a real reply right now, tap the WhatsApp button.";
        body.appendChild(botMsg);
        body.scrollTop = body.scrollHeight;
      }, 500);
    });
  }

  /* ---------- Misc ---------- */
  function initMisc(){
    const yearEl = document.getElementById("year");
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    renderPricing();
    renderPlans();
    renderWhy();
    renderProcess();
    renderFaq();
    renderReviews();
    initNav();
    initBooking();
    initLeadForm();
    initChat();
    initMisc();
  });
})();
