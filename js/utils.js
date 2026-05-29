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