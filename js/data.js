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

