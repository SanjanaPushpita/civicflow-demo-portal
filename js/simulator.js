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

