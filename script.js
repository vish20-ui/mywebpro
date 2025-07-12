// script.js (must be a module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnPT1puwmZ2b4eBSyK2xfGuAsiSsw5D8M",
  authDomain: "carbon-saver-website.firebaseapp.com",
  projectId: "carbon-saver-website",
  storageBucket: "carbon-saver-website.appspot.com",
  messagingSenderId: "453253776917",
  appId: "1:453253776917:web:f74701cb520b768638f01c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ===== SIGNUP PAGE (index.html) =====
const signupBtn = document.getElementById("signup-btn");
if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Account Created!");
        window.location.href = "index2.html"; // redirect to login
      })
      .catch(err => alert("Signup failed: " + err.message));
  });
}

// ===== LOGIN PAGE (index2.html) =====
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login Successful!");
        window.location.href = "index3.html"; // redirect to dashboard
      })
      .catch(err => alert("Login failed: " + err.message));
  });
}

// ===== DASHBOARD PAGE (index3.html) =====
export function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => section.style.display = "none");
  const active = document.getElementById(id);
  if (active) active.style.display = "block";
}

// ===== UI INTERACTIONS (Common) =====
const interactiveElements = document.querySelectorAll("button, input, details summary");
interactiveElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.style.transform = "scale(1.05)";
    el.style.transition = "transform 0.2s ease";
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)";
  });
});

// Button Bounce Animation
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("mousedown", () => {
    button.classList.add("btn-bounce");
  });
  button.addEventListener("mouseup", () => {
    setTimeout(() => button.classList.remove("btn-bounce"), 200);
  });
});

// Floating Earth Decoration
function createFloatingEarth() {
  const earth = document.createElement("div");
  earth.innerHTML = "🌍";
  earth.className = "floating-earth";
  document.body.appendChild(earth);
}

// Run on load
window.addEventListener("load", () => {
  createFloatingEarth();
});
