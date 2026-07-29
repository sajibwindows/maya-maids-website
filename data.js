/* ==========================================================
   MAYA MAIDS — SITE CONTENT
   Everything in this file is DEMO content.
   Edit the arrays below to update the live site —
   no HTML editing required for these sections.
   ========================================================== */

const SERVICES = [
  {
    icon: "sparkle",
    title: "Regular House Cleaning",
    desc: "Sweeping, mopping, dusting and tidying for day-to-day upkeep.",
    from: "From ৳400 / visit"
  },
  {
    icon: "deep",
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom clean — great before guests or after a while.",
    from: "From ৳1,800 / visit"
  },
  {
    icon: "kitchen",
    title: "Kitchen & Bathroom Cleaning",
    desc: "Degreasing, tile scrubbing and sanitising for the toughest rooms.",
    from: "From ৳600 / visit"
  },
  {
    icon: "laundry",
    title: "Laundry & Ironing",
    desc: "Washing, drying, folding and pressing — done on your schedule.",
    from: "From ৳350 / load"
  },
  {
    icon: "dishes",
    title: "Dishwashing",
    desc: "Daily or after-meal dishwashing so the sink never piles up.",
    from: "From ৳150 / visit"
  },
  {
    icon: "cook",
    title: "Cooking Assistance",
    desc: "Help preparing everyday meals for the household.",
    from: "From ৳500 / visit"
  },
  {
    icon: "elder",
    title: "Elderly Care Support",
    desc: "Gentle, trained companion support for elderly family members.",
    from: "From ৳900 / visit"
  },
  {
    icon: "baby",
    title: "Baby & Childcare Help",
    desc: "Extra hands for feeding, play and daily routines.",
    from: "From ৳800 / visit"
  }
];

const PRICING_ROWS = [
  { service: "Regular House Cleaning", duration: "2 hrs", price: "৳400" },
  { service: "Deep Cleaning (per room)", duration: "3–4 hrs", price: "৳1,800" },
  { service: "Kitchen & Bathroom Cleaning", duration: "1.5 hrs", price: "৳600" },
  { service: "Laundry & Ironing (per load)", duration: "—", price: "৳350" },
  { service: "Dishwashing", duration: "45 min", price: "৳150" },
  { service: "Cooking Assistance", duration: "2 hrs", price: "৳500" }
];

const PLANS = [
  {
    name: "Basic",
    price: "৳3,500",
    per: "/ month",
    cadence: "4 visits / month · weekly",
    popular: false,
    features: [
      "1 visit per week (2 hrs)",
      "Regular cleaning tasks",
      "Same maid where possible",
      "Free replacement if unavailable"
    ]
  },
  {
    name: "Standard",
    price: "৳6,500",
    per: "/ month",
    cadence: "8 visits / month · twice weekly",
    popular: true,
    features: [
      "2 visits per week (2 hrs each)",
      "Cleaning + dishwashing included",
      "Priority scheduling",
      "Free replacement guarantee",
      "WhatsApp support line"
    ]
  },
  {
    name: "Premium",
    price: "৳14,000",
    per: "/ month",
    cadence: "26 visits / month · daily",
    popular: false,
    features: [
      "Daily visits (2–3 hrs)",
      "Cleaning, dishes & laundry",
      "Dedicated maid assignment",
      "Monthly quality review call",
      "Priority replacement (same day)"
    ]
  }
];

const WHY_US = [
  { icon: "shield", title: "Verified & Trained Staff", desc: "NID-checked, reference-checked and trained before their first visit." },
  { icon: "calendar", title: "Flexible Scheduling", desc: "One-time, weekly or daily — booked around your routine." },
  { icon: "tag", title: "Transparent Pricing", desc: "No hidden fees. You see the price before you confirm." },
  { icon: "refresh", title: "Replacement Guarantee", desc: "Not a fit? We replace your maid at no extra cost." },
  { icon: "umbrella", title: "Insured Service", desc: "Visits covered under our service protection policy." },
  { icon: "globe", title: "Bangla & English Support", desc: "Talk to our team in whichever language is easiest." },
  { icon: "phone-app", title: "Easy Online Booking", desc: "Book in under two minutes, right from this site." },
  { icon: "headset", title: "Dedicated Support Line", desc: "A real person on call, six days a week." }
];

const VERIFICATION_STEPS = [
  { title: "Application & Interview", desc: "Candidates apply and go through an in-person interview with our team." },
  { title: "NID & Address Verification", desc: "National ID and home address are checked and kept on file." },
  { title: "Reference Check", desc: "Previous employers or community references are contacted directly." },
  { title: "Skills Training", desc: "A hands-on training module covering cleaning standards and safety." },
  { title: "Trial Period & Rating", desc: "New maids start on a trial period with close monitoring and client ratings." },
  { title: "Ongoing Monitoring", desc: "Regular check-ins and rating reviews continue for as long as they're active." }
];

const FAQS = [
  { q: "How do I book a service?", a: "Use the “Book Now” button anywhere on this site, or message us on WhatsApp with your area and preferred date. We confirm within a few hours." },
  { q: "Can I change my assigned maid?", a: "Yes. If it's not a good fit, let us know and we'll arrange a replacement — this is included at no extra cost." },
  { q: "What if I'm not satisfied with a visit?", a: "Tell us within 24 hours and we'll arrange a re-clean or credit toward your next visit." },
  { q: "What payment methods are accepted?", a: "Cash on visit, bKash and Nagad are supported. Card payments are coming soon." },
  { q: "Which areas do you cover?", a: "We currently serve Dhanmondi, Gulshan, Banani, Mirpur, Uttara and several nearby areas — message us to confirm your location." },
  { q: "Can I cancel or pause my subscription?", a: "Yes, subscriptions can be paused or cancelled with 3 days' notice — no lock-in contracts." }
];

const REVIEWS = [
  { name: "Farhana R.", area: "Dhanmondi", rating: 5, quote: "Booking took two minutes and the maid arrived exactly on time. Kitchen hasn't looked this good in months." },
  { name: "Imran H.", area: "Gulshan", rating: 5, quote: "Switched to the Standard plan after one trial visit. Scheduling around our routine has been effortless." },
  { name: "Nusrat J.", area: "Mirpur", rating: 4, quote: "Really appreciated the verification process — knowing who's coming into the house made the decision easy." },
  { name: "Kamrul I.", area: "Uttara", rating: 5, quote: "Had one maid unavailable one week and Maya Maids sent a replacement the same day. No fuss at all." }
];

const ICONS = {
  sparkle: '<path d="M12 2v6M12 16v6M4 12h6M14 12h6M6 6l4 4M18 6l-4 4M6 18l4-4M18 18l-4-4"/>',
  deep: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
  kitchen: '<path d="M4 3v7a4 4 0 0 0 4 4v7"/><path d="M8 3v7"/><path d="M4 3h4"/><path d="M18 3c-2 2-2 6-2 8 0 2 1 3 2 3v7"/>',
  laundry: '<circle cx="12" cy="13" r="6"/><circle cx="12" cy="13" r="2.5"/><path d="M7 5h.01M10 5h8"/>',
  dishes: '<ellipse cx="12" cy="16" rx="8" ry="3"/><path d="M6 16V8a6 6 0 0 1 12 0v8"/>',
  cook: '<path d="M4 21h16"/><path d="M6 21c0-6 1-11 6-11s6 5 6 11"/><path d="M12 10V4"/><path d="M9 4h6"/>',
  elder: '<circle cx="12" cy="7" r="3"/><path d="M6 21c0-4 3-7 6-7s6 3 6 7"/><path d="M9 21v-4M15 21v-4"/>',
  baby: '<circle cx="12" cy="8" r="4"/><path d="M6 21c0-5 3-8 6-8s6 3 6 8"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  tag: '<path d="M12 3h6a2 2 0 0 1 2 2v6L11 20l-8-8L12 3z"/><circle cx="15" cy="8" r="1.5"/>',
  refresh: '<path d="M4 12a8 8 0 0 1 13.7-5.7L21 9"/><path d="M20 12a8 8 0 0 1-13.7 5.7L3 15"/><path d="M17 3v6h-6M7 21v-6h6"/>',
  umbrella: '<path d="M4 12a8 8 0 0 1 16 0z"/><path d="M12 12v7a2 2 0 0 1-4 0"/><path d="M12 3v2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9z"/>',
  "phone-app": '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M18 19a4 4 0 0 1-4 3h-2"/>'
};
