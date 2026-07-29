/* ============ APP JS ============ */

document.addEventListener('DOMContentLoaded', function() {
  
  // Populate services grid
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    servicesGrid.innerHTML = services.map(service => `
      <div class="service-card">
        <div class="service-icon">${service.icon}</div>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
      </div>
    `).join('');
  }
  
  // Populate pricing table
  const pricingTable = document.getElementById('pricingTable');
  if (pricingTable && pricingTable.querySelector('tbody')) {
    pricingTable.querySelector('tbody').innerHTML = pricing.map(item => `
      <tr>
        <td>${item.service}</td>
        <td>${item.duration}</td>
        <td>${item.price}</td>
        <td><button class="btn btn-sm btn-outline openBooking" data-service="${item.service}">Book</button></td>
      </tr>
    `).join('');
  }
  
  // Populate plans grid
  const plansGrid = document.getElementById('plansGrid');
  if (plansGrid) {
    plansGrid.innerHTML = plans.map(plan => `
      <div class="plan-card ${plan.featured ? 'featured' : ''}">
        ${plan.badge ? `<span class="plan-badge">${plan.badge}</span>` : ''}
        <h3 class="plan-name">${plan.name}</h3>
        <div class="plan-price">${plan.price}<span>${plan.period}</span></div>
        <ul class="plan-features">
          ${plan.features.map(feature => `
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              ${feature}
            </li>
          `).join('')}
        </ul>
        <button class="btn btn-gold btn-full openBooking" data-plan="${plan.name}">Choose ${plan.name}</button>
      </div>
    `).join('');
  }
  
  // Populate why us grid
  const whyGrid = document.getElementById('whyGrid');
  if (whyGrid) {
    whyGrid.innerHTML = whyUs.map(item => `
      <div class="why-card">
        <div class="why-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `).join('');
  }
  
  // Populate process list
  const processList = document.getElementById('processList');
  if (processList) {
    processList.innerHTML = processSteps.map(step => `
      <li>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </li>
    `).join('');
  }
  
  // Populate FAQ accordion
  const faqAccordion = document.getElementById('faqAccordion');
  if (faqAccordion) {
    faqAccordion.innerHTML = faqs.map((faq, index) => `
      <div class="accordion-item">
        <button class="accordion-trigger" aria-expanded="false">
          <span>${faq.question}</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-content">
          <div class="accordion-content-inner">${faq.answer}</div>
        </div>
      </div>
    `).join('');
    
    // Accordion functionality
    faqAccordion.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', function() {
        const item = this.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqAccordion.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.accordion-content').style.maxHeight = null;
          i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
  
  // Populate reviews track
  const reviewsTrack = document.getElementById('reviewsTrack');
  if (reviewsTrack) {
    reviewsTrack.innerHTML = reviews.map(review => `
      <div class="review-card">
        <div class="review-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
        <p class="review-text">"${review.text}"</p>
        <p class="review-author">— ${review.author}</p>
      </div>
    `).join('');
  }
  
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const body = document.body;
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      body.classList.toggle('nav-open');
    });
  }
  
  // Booking modal
  const bookingOverlay = document.getElementById('bookingOverlay');
  const bookingClose = document.getElementById('bookingClose');
  const openBookingButtons = document.querySelectorAll('.openBooking, #openBookingTop, #openBookingHero');
  const bookingServiceSelect = document.getElementById('bk-service');
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  
  // Populate service dropdown in booking modal
  if (bookingServiceSelect) {
    bookingServiceSelect.innerHTML = `
      <option value="">Select a service</option>
      ${services.map(s => `<option value="${s.name}">${s.name}</option>`).join('')}
      <option value="Subscription Plan">Subscription Plan</option>
    `;
  }
  
  // Open booking modal
  openBookingButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const service = this.getAttribute('data-service') || this.getAttribute('data-plan');
      if (service && bookingServiceSelect) {
        bookingServiceSelect.value = service;
      }
      
      // Set minimum date to today
      const dateInput = document.getElementById('bk-date');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
      }
      
      bookingOverlay.hidden = false;
    });
  });
  
  // Close booking modal
  if (bookingClose) {
    bookingClose.addEventListener('click', function() {
      bookingOverlay.hidden = true;
      bookingSuccess.hidden = true;
      bookingForm.reset();
    });
  }
  
  // Close modal on overlay click
  if (bookingOverlay) {
    bookingOverlay.addEventListener('click', function(e) {
      if (e.target === bookingOverlay) {
        bookingOverlay.hidden = true;
        bookingSuccess.hidden = true;
        bookingForm.reset();
      }
    });
  }
  
  // Booking form submit
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      bookingSuccess.hidden = false;
      setTimeout(() => {
        bookingOverlay.hidden = true;
        bookingSuccess.hidden = true;
        bookingForm.reset();
      }, 2000);
    });
  }
  
  // Lead form
  const leadForm = document.getElementById('leadForm');
  const leadSuccess = document.getElementById('leadSuccess');
  if (leadForm && leadSuccess) {
    leadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      leadSuccess.hidden = false;
      setTimeout(() => {
        leadSuccess.hidden = true;
        leadForm.reset();
      }, 3000);
    });
  }
  
  // Chat panel
  const chatToggle = document.getElementById('chatToggle');
  const chatPanel = document.getElementById('chatPanel');
  const chatClose = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');
  
  if (chatToggle && chatPanel) {
    chatToggle.addEventListener('click', function() {
      chatPanel.hidden = false;
      chatToggle.hidden = true;
    });
  }
  
  if (chatClose && chatPanel && chatToggle) {
    chatClose.addEventListener('click', function() {
      chatPanel.hidden = true;
      chatToggle.hidden = false;
    });
  }
  
  if (chatForm && chatInput && chatBody) {
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (message) {
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-msg user';
        userMsg.textContent = message;
        chatBody.appendChild(userMsg);
        
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Simulate bot response
        setTimeout(() => {
          const botMsg = document.createElement('div');
          botMsg.className = 'chat-msg bot';
          botMsg.textContent = 'Thanks for your message! Our team will reach out within 2 hours during business hours.';
          chatBody.appendChild(botMsg);
          chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
      }
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile nav if open
          body.classList.remove('nav-open');
          if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });
  
});
