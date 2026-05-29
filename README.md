# CivicFlow AI  - Interactive Web Demo

CivicFlow AI is a Bangla, English, and Banglish voice-first civic safety assistant for Bangladesh.

This repository contains the **interactive web demo portal** for CivicFlow AI. The real product is a Flutter Android mobile app, but this website allows judges and viewers to understand the main app workflow directly from the browser without installing the APK.

## Live Demo

**Web Demo:**  
https://civicflow-demo-portal.vercel.app/

**Protected Dashboard:**  
https://civicflow-ai-backend.onrender.com/dashboard/reports

**Dashboard Password:**  
`print('CivicFlow_AI')`

**Android APK Backup:**  
https://drive.google.com/file/d/1d06SXD1AvqUn_g_ga4dXuBbAERWtQsZU/view?usp=sharing

**Main App Source Code:**  
https://github.com/SanjanaPushpita/civicflow-ai

---

## What This Web Demo Shows

The website demonstrates the core workflow of the CivicFlow AI Android app:

- Voice-first civic reporting concept
- Bangla/Banglish command understanding demo
- Direct helpline/contact lookup
- Emergency auto-submit workflow
- GPS decision logic
- Demo phone dialer UI
- Risk-zone safety monitor explanation
- Protected backend dashboard preview
- Real app screenshots and feature explanations

This web version is created for judging and demonstration purposes. It mirrors the Android app workflow but does not replace the full native mobile application.

---

## Main Product Features

The full CivicFlow AI mobile app includes:

- Flutter Android mobile app
- Gemini voice AI/audio analysis
- TTS voice reply
- Emergency auto-submit
- GPS capture
- Firebase Auth user accounts
- Firestore citizen profiles
- Citizen identity attached to reports
- Backend report submission
- Protected backend dashboard
- Live emergency location tracking
- Report history
- Help/Helpline directory
- Location-based helpline recommendation
- Universal contact/helpline voice lookup
- Blood bank contacts and voice matching
- Risk-zone alert foundation
- Safety monitor screen
- Modern login and home UI

---

## Interactive Demo Commands

The web demo includes fixed command examples to show how the app behaves:

| Demo Command | Purpose |
|---|---|
| `র‍্যাবের নম্বর দাও` | Direct contact lookup |
| `ব্লাড ব্যাংকের নম্বর দাও` | Blood bank contact matching |
| `ডেসকো নম্বর দাও` | Utility helpline lookup |
| `আমি বিপদে আছি, সাহায্য লাগবে` | Emergency auto-submit demo |
| `আমার অ্যাম্বুলেন্স লাগবে` | Medical emergency support |
| `আমি ঝুঁকিপূর্ণ এলাকায় আছি কিনা দেখাও` | Risk-zone safety check |

Direct contact requests do not submit GPS reports. Emergency cases can trigger GPS report submission and live tracking in the real Android app.

---

## Project Structure

```text
civicflow-demo-portal/
│
├── index.html
├── styles.css
├── script.js
│
└── assets/
    ├── Dashboard.png
    ├── helpline.png
    ├── home.png
    ├── icon.png
    ├── risk_zone_warning.png
    └── safety.png
