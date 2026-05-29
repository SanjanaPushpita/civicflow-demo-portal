const scenarios = {
  rab: {
    headline: "Direct contact request detected",
    subline: "No report submission needed",
    transcript: "“র‍্যাবের নম্বর দাও”",
    intent: "Direct contact lookup",
    gps: "Not submitted",
    safety: "Contact-only request",
    source: "Structured civic directory",
    label: "Recommended Contact",
    contact: "RAB / National emergency support",
    reason: "The app returns the matched contact and blocks unnecessary GPS report submission.",
    number: "999",
    service: "RAB / Emergency Support",
    timeline: [
      ["ok", "Voice command received"],
      ["ok", "Gemini intent analysis completed"],
      ["ok", "Matched from civic contact directory"],
      ["ok", "GPS report blocked because this is contact-only"]
    ]
  },

  blood: {
    headline: "Blood bank contact lookup",
    subline: "Contact recommendation without GPS reporting",
    transcript: "“ব্লাড ব্যাংকের নম্বর দাও”",
    intent: "Blood bank contact lookup",
    gps: "Not submitted",
    safety: "Contact-only request",
    source: "Blood bank contact dataset",
    label: "Recommended Contact",
    contact: "Blood bank support contact",
    reason: "The app identifies this as a direct contact request, so it recommends blood support without submitting a report.",
    number: "16263",
    service: "Blood / Health Support",
    timeline: [
      ["ok", "Voice command received"],
      ["ok", "Detected blood bank contact request"],
      ["ok", "Matched from structured contact list"],
      ["ok", "No GPS report because this is not an emergency report"]
    ]
  },

  desco: {
    headline: "Utility helpline request detected",
    subline: "Electricity contact recommendation",
    transcript: "“ডেসকো নম্বর দাও”",
    intent: "Utility contact lookup",
    gps: "Not submitted",
    safety: "Contact-only request",
    source: "Utility helpline directory",
    label: "Recommended Contact",
    contact: "DESCO electricity support",
    reason: "For utility contact requests, the app recommends the correct service contact without submitting location.",
    number: "16120",
    service: "DESCO Electricity Support",
    timeline: [
      ["ok", "Voice command received"],
      ["ok", "Detected electricity utility contact request"],
      ["ok", "Matched DESCO from helpline directory"],
      ["ok", "No report submitted because the user only asked for a number"]
    ]
  },

  emergency: {
    headline: "Emergency detected",
    subline: "GPS report + live tracking workflow",
    transcript: "“আমি বিপদে আছি, সাহায্য লাগবে”",
    intent: "High-risk emergency",
    gps: "Submitted",
    safety: "Emergency auto-submit",
    source: "AI + safety rules",
    label: "Emergency Contact",
    contact: "National Emergency Service",
    reason: "The app captures GPS, submits an emergency report, recommends 999, and starts live tracking for high-risk cases.",
    number: "999",
    service: "National Emergency Service",
    timeline: [
      ["ok", "Voice command received"],
      ["ok", "Danger/emergency intent detected"],
      ["ok", "Current GPS location captured"],
      ["ok", "Emergency report submitted to backend dashboard"],
      ["ok", "Live tracking session started for 30 minutes"]
    ]
  },

  ambulance: {
    headline: "Medical emergency detected",
    subline: "Ambulance recommendation + emergency report",
    transcript: "“আমার অ্যাম্বুলেন্স লাগবে”",
    intent: "Medical emergency",
    gps: "Submitted",
    safety: "Emergency medical routing",
    source: "Emergency helpline rules",
    label: "Recommended Contact",
    contact: "Ambulance / National emergency support",
    reason: "The app treats ambulance requests as urgent and can submit GPS so responders know the location.",
    number: "999",
    service: "Ambulance / Medical Emergency",
    timeline: [
      ["ok", "Voice command received"],
      ["ok", "Medical emergency detected"],
      ["ok", "GPS location captured"],
      ["ok", "Emergency report submitted"],
      ["ok", "Ambulance/emergency helpline recommended"]
    ]
  },

  risk: {
    headline: "Risk-zone safety check",
    subline: "Safety monitor workflow",
    transcript: "“আমি ঝুঁকিপূর্ণ এলাকায় আছি কিনা দেখাও”",
    intent: "Risk-zone check",
    gps: "Used for safety check",
    safety: "No civic report unless danger is detected",
    source: "Structured hotspot data",
    label: "Safety Result",
    contact: "Risk-zone monitor",
    reason: "The app checks current location against structured hotspot data and can warn the user if they enter a risky area.",
    number: "999",
    service: "Safety / Emergency Fallback",
    timeline: [
      ["ok", "Voice command received"],
      ["ok", "Risk-zone safety intent detected"],
      ["ok", "GPS used for local safety check"],
      ["ok", "Risk-zone dataset checked"],
      ["ok", "Safety warning shown if the area is risky"]
    ]
  }
};

const commandButtons = document.querySelectorAll(".command");

const elements = {
  phoneHeadline: document.getElementById("phoneHeadline"),
  phoneSubline: document.getElementById("phoneSubline"),
  transcript: document.getElementById("transcript"),
  intent: document.getElementById("intent"),
  gps: document.getElementById("gps"),
  safety: document.getElementById("safety"),
  source: document.getElementById("source"),
  contactLabel: document.getElementById("contactLabel"),
  contactName: document.getElementById("contactName"),
  contactReason: document.getElementById("contactReason"),
  number: document.getElementById("number"),
  timeline: document.getElementById("timeline"),
  callButton: document.getElementById("callButton"),
  dialerModal: document.getElementById("dialerModal"),
  dialerService: document.getElementById("dialerService"),
  dialerTitle: document.getElementById("dialerTitle"),
  dialerNumber: document.getElementById("dialerNumber"),
  realCallLink: document.getElementById("realCallLink"),
  closeDialer: document.getElementById("closeDialer"),
  endCall: document.getElementById("endCall")
};

let currentScenario = scenarios.rab;

function setScenario(key) {
  const scenario = scenarios[key];

  if (!scenario) {
    return;
  }

  currentScenario = scenario;

  commandButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.scenario === key);
  });

  elements.phoneHeadline.textContent = scenario.headline;
  elements.phoneSubline.textContent = scenario.subline;
  elements.transcript.textContent = scenario.transcript;
  elements.intent.textContent = scenario.intent;
  elements.gps.textContent = scenario.gps;
  elements.safety.textContent = scenario.safety;
  elements.source.textContent = scenario.source;
  elements.contactLabel.textContent = scenario.label;
  elements.contactName.textContent = scenario.contact;
  elements.contactReason.textContent = scenario.reason;
  elements.number.textContent = scenario.number;

  elements.timeline.innerHTML = scenario.timeline
    .map(([type, text]) => {
      const className = type === "warn" ? "timeline-step warn" : "timeline-step";
      return `<div class="${className}"><span>✓</span>${text}</div>`;
    })
    .join("");
}

function openDialer() {
  elements.dialerService.textContent = currentScenario.service;
  elements.dialerTitle.textContent = currentScenario.contact;
  elements.dialerNumber.textContent = currentScenario.number;
  elements.realCallLink.href = `tel:${currentScenario.number}`;

  elements.dialerModal.classList.add("open");
  elements.dialerModal.setAttribute("aria-hidden", "false");
}

function closeDialer() {
  elements.dialerModal.classList.remove("open");
  elements.dialerModal.setAttribute("aria-hidden", "true");
}

commandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setScenario(button.dataset.scenario);
  });
});

elements.callButton.addEventListener("click", openDialer);
elements.closeDialer.addEventListener("click", closeDialer);
elements.endCall.addEventListener("click", closeDialer);

elements.dialerModal.addEventListener("click", (event) => {
  if (event.target === elements.dialerModal) {
    closeDialer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDialer();
  }
});

// Copy Password Logic
const copyPasswordBtn = document.getElementById("copyPasswordBtn");
const dashPassword = document.getElementById("dashPassword");

if (copyPasswordBtn && dashPassword) {
  copyPasswordBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(dashPassword.textContent).then(() => {
      const originalText = copyPasswordBtn.textContent;
      copyPasswordBtn.textContent = "Copied!";
      copyPasswordBtn.style.background = "var(--green)";
      copyPasswordBtn.style.color = "var(--white)";
      copyPasswordBtn.style.borderColor = "var(--green)";
      
      setTimeout(() => {
        copyPasswordBtn.textContent = originalText;
        copyPasswordBtn.style.background = "";
        copyPasswordBtn.style.color = "";
        copyPasswordBtn.style.borderColor = "";
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy password: ', err);
    });
  });
}

// Copy Note Logic
const copyNoteBtn = document.getElementById("copyNoteBtn");
const submissionNote = document.getElementById("submissionNote");

if (copyNoteBtn && submissionNote) {
  copyNoteBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(submissionNote.textContent.trim()).then(() => {
      const originalText = copyNoteBtn.textContent;
      copyNoteBtn.textContent = "Copied!";
      copyNoteBtn.style.background = "var(--green)";
      copyNoteBtn.style.color = "var(--white)";
      copyNoteBtn.style.borderColor = "var(--green)";
      
      setTimeout(() => {
        copyNoteBtn.textContent = originalText;
        copyNoteBtn.style.background = "";
        copyNoteBtn.style.color = "";
        copyNoteBtn.style.borderColor = "";
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy note: ', err);
    });
  });
}

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .showcase-card, .access-card, .arch-step').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Smart Navbar
const nav = document.querySelector('.nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    // Scrolling down and past the header
    nav.classList.add('nav-hidden');
  } else {
    // Scrolling up
    nav.classList.remove('nav-hidden');
  }
  lastScrollY = window.scrollY;
}, { passive: true });