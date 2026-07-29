/* ============ APP DATA ============ */

const services = [
  {
    name: "Regular House Cleaning",
    description: "Dusting, mopping, vacuuming and general tidying for a fresh home.",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"/><path d="M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"/></svg>`
  },
  {
    name: "Deep Cleaning",
    description: "Thorough top-to-bottom clean including hard-to-reach areas.",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`
  },
  {
    name: "Kitchen & Bathroom Cleaning",
    description: "Specialised cleaning for kitchens and bathrooms with sanitisation.",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`
  },
  {
    name: "Laundry & Ironing",
    description: "Wash, dry, fold and iron your clothes with care.",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`
  },
  {
    name: "Cooking Assistance",
    description: "Help with meal preparation and kitchen organisation.",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/><path d="M8 14v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5"/><line x1="12" y1="2" x2="12" y2="4"/></svg>`
  },
  {
    name: "Elderly Care Support",
    description: "Compassionate assistance for elderly family members.",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  }
];

const pricing = [
  { service: "Regular House Cleaning", duration: "3–4 hours", price: "৳800" },
  { service: "Deep Cleaning", duration: "5–6 hours", price: "৳1,500" },
  { service: "Kitchen & Bathroom Cleaning", duration: "2–3 hours", price: "৳600" },
  { service: "Laundry & Ironing", duration: "2–3 hours", price: "৳500" },
  { service: "Cooking Assistance", duration: "2–3 hours", price: "৳550" },
  { service: "Elderly Care Support", duration: "4 hours", price: "৳900" }
];

const plans = [
  {
    name: "Basic",
    price: "৳3,000",
    period: "/month",
    featured: false,
    features: [
      "4 cleaning visits per month",
      "Same maid assigned",
      "Basic supplies included",
      "WhatsApp support"
    ]
  },
  {
    name: "Standard",
    price: "৳5,500",
    period: "/month",
    featured: true,
    badge: "Most Popular",
    features: [
      "8 cleaning visits per month",
      "Same maid assigned",
      "Premium supplies included",
      "Priority scheduling",
      "Monthly quality check"
    ]
  },
  {
    name: "Premium",
    price: "৳9,000",
    period: "/month",
    featured: false,
    features: [
      "12 cleaning visits per month",
      "Same maid assigned",
      "All supplies included",
      "24/7 priority support",
      "Bi-weekly quality checks",
      "Free deep cleaning quarterly"
    ]
  }
];

const whyUs = [
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "Background Verified",
    description: "Every maid undergoes police verification and reference checks."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: "Trained Professionals",
    description: "All staff complete our comprehensive training programme."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: "On-Time Guarantee",
    description: "We value your time. Our maids arrive punctually, every time."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Replacement Promise",
    description: "Not satisfied? We'll replace your maid at no extra cost."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    title: "Flexible Scheduling",
    description: "Book one-time or recurring — you're in control."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    title: "Transparent Pricing",
    description: "No hidden fees. What you see is what you pay."
  }
];

const processSteps = [
  {
    title: "Application Received",
    description: "Candidate submits application with basic information and documents."
  },
  {
    title: "Identity Verification",
    description: "NID verification and photo documentation for identity confirmation."
  },
  {
    title: "Reference Checks",
    description: "We contact previous employers and personal references."
  },
  {
    title: "Police Clearance",
    description: "Background check through local police stations."
  },
  {
    title: "Skills Assessment",
    description: "Practical test of cleaning, cooking and household management skills."
  },
  {
    title: "Training Programme",
    description: "2-week intensive training on standards, safety and customer service."
  }
];

const faqs = [
  {
    question: "How do I book a maid?",
    answer: "You can book through our website, call us directly, or message on WhatsApp. We'll confirm your booking within a few hours and assign a maid based on your requirements."
  },
  {
    question: "Are the maids background verified?",
    answer: "Yes, absolutely. Every Maya Maid goes through a rigorous 6-step verification process including NID check, police clearance, reference verification, and skills assessment before they ever enter your home."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "We offer a replacement guarantee. If you're not happy with your assigned maid, let us know and we'll send a different professional at no extra cost. Your satisfaction is our priority."
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "For one-time bookings, we recommend having basic supplies available. For subscription plans, we bring all necessary cleaning materials. Specific arrangements can be discussed during booking."
  },
  {
    question: "Can I request the same maid every time?",
    answer: "Yes! Subscription customers get the same maid assigned for consistency. For one-time bookings, you can request a preferred maid subject to availability."
  },
  {
    question: "What areas do you serve in Dhaka?",
    answer: "We currently serve Dhanmondi, Gulshan, Banani, Mirpur, Uttara, Mohammadpur, Bashundhara, Baridhara, Khilgaon, Rampura, Malibagh, and surrounding areas. Contact us to confirm coverage for your location."
  }
];

const reviews = [
  {
    stars: 5,
    text: "Finally, a reliable maid service in Dhaka! My maid has been coming for 3 months now and I couldn't be happier. Professional, punctual, and thorough.",
    author: "Farhana Rahman, Gulshan"
  },
  {
    stars: 5,
    text: "The verification process gave me peace of mind. I feel comfortable leaving my maid alone at home with my elderly parents. Highly recommend!",
    author: "Ahmed Karim, Dhanmondi"
  },
  {
    stars: 5,
    text: "Subscription plan is worth every taka. No more last-minute cancellations or no-shows. Maya Maids handles everything professionally.",
    author: "Nusrat Jahan, Banani"
  },
  {
    stars: 4,
    text: "Great service overall. The maid was well-trained and knew exactly what to do. Only minor issue was slight delay on the first visit.",
    author: "Tahmid Hassan, Mirpur"
  },
  {
    stars: 5,
    text: "As a working mother, Maya Maids has been a lifesaver. I can focus on my job knowing my home is in good hands.",
    author: "Sadia Islam, Uttara"
  }
];
