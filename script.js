/* ==========================================
   PERSONAL SETTINGS
========================================== */

// Add your real professional email address here.
// The contact form uses it to prepare an email.
const CONTACT_EMAIL = "";

// Add your actual profile links here.
const GITHUB_URL = "";
const LINKEDIN_URL = "";

/* ==========================================
   PROGRAMMING LANGUAGES & WEB TECHNOLOGIES
========================================== */

const programmingLanguages = [
  { name: "C", rating: 4 },
  { name: "C++", rating: 4 },
  { name: "Python", rating: 4 },
  { name: "Java", rating: 3 },
  { name: "HTML", rating: 4 },
  { name: "CSS", rating: 4 },
  { name: "JavaScript", rating: 3 },
  { name: "SQL", rating: 4 },
  { name: "Kotlin", rating: 3 }
];

/* ==========================================
   APPLICATIONS & TOOLS
========================================== */

const applications = [
  { name: "VS Code", icon: "fa-code", rating: 4 },
  {
    name: "Android Studio",
    icon: "fa-mobile-screen-button",
    rating: 4
  },
  { name: "Git", icon: "fa-code-branch", rating: 3 },
  { name: "MySQL", icon: "fa-database", rating: 4 },
  { name: "Excel", icon: "fa-file-excel", rating: 4 },
  { name: "MS Word", icon: "fa-file-word", rating: 4 },
  { name: "PowerPoint", icon: "fa-file-powerpoint", rating: 4 }
];

/* ==========================================
   HARDWARE & EMERGING TECHNOLOGIES
========================================== */

const hardwareTechnologies = [
  {
    name: "Internet of Things (IoT)",
    icon: "fa-microchip",
    rating: 3
  },
  {
    name: "Raspberry Pi",
    icon: "fa-server",
    rating: 3
  }
];

/* ==========================================
   CREATE FIXED, NON-CLICKABLE STAR RATINGS
========================================== */

function createStars(name, rating) {
  const wrapper = document.createElement("div");

  wrapper.className = "stars";
  wrapper.setAttribute("role", "img");
  wrapper.setAttribute(
    "aria-label",
    `${name}: ${rating} out of 5 stars`
  );

  wrapper.style.pointerEvents = "none";
  wrapper.style.userSelect = "none";
  wrapper.style.cursor = "default";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = "★";
    star.setAttribute("aria-hidden", "true");

    if (i <= rating) {
      star.classList.add("filled");
    }

    wrapper.appendChild(star);
  }

  return wrapper;
}

/* ==========================================
   DISPLAY PROGRAMMING LANGUAGES
========================================== */

function renderProgrammingLanguages() {
  const container = document.getElementById("programmingSkills");

  if (!container) return;

  container.replaceChildren();

  programmingLanguages.forEach(skill => {
    const item = document.createElement("div");
    item.className = "skill-item";

    const name = document.createElement("span");
    name.className = "skill-name";
    name.textContent = skill.name;

    const ratingText = document.createElement("span");
    ratingText.className = "rating-text";
    ratingText.textContent = `${skill.rating}/5`;

    item.appendChild(name);
    item.appendChild(createStars(skill.name, skill.rating));
    item.appendChild(ratingText);

    container.appendChild(item);
  });
}

/* ==========================================
   DISPLAY APPLICATIONS & TOOLS
========================================== */

function renderApplications() {
  const container = document.getElementById("applicationsSkills");

  if (!container) return;

  container.replaceChildren();

  applications.forEach(app => {
    const card = document.createElement("div");
    card.className = "application-card";

    const icon = document.createElement("i");
    icon.className = `fa-solid ${app.icon} application-icon`;
    icon.setAttribute("aria-hidden", "true");

    const name = document.createElement("span");
    name.className = "application-name";
    name.textContent = app.name;

    const ratingText = document.createElement("span");
    ratingText.className = "rating-text";
    ratingText.textContent = `${app.rating}/5`;

    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(createStars(app.name, app.rating));
    card.appendChild(ratingText);

    container.appendChild(card);
  });
}

/* ==========================================
   DISPLAY HARDWARE & EMERGING TECHNOLOGIES
========================================== */

function renderHardwareTechnologies() {
  const container = document.getElementById(
    "hardwareSkillsContainer"
  );

  if (!container) return;

  container.replaceChildren();

  hardwareTechnologies.forEach(item => {
    const card = document.createElement("div");
    card.className = "application-card";

    const icon = document.createElement("i");
    icon.className = `fa-solid ${item.icon} application-icon`;
    icon.setAttribute("aria-hidden", "true");

    const name = document.createElement("span");
    name.className = "application-name";
    name.textContent = item.name;

    const ratingText = document.createElement("span");
    ratingText.className = "rating-text";
    ratingText.textContent = `${item.rating}/5`;

    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(createStars(item.name, item.rating));
    card.appendChild(ratingText);

    container.appendChild(card);
  });
}

/* ==========================================
   MULTI-PAGE NAVIGATION
   Pages use URL hashes:
   #home, #about, #skills, #experience,
   #projects, #contact
========================================== */

const pageIds = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact"
];

const navigation = document.getElementById("navigation");
const menuToggle = document.getElementById("menuToggle");

function showPage(pageId) {
  const validPage = pageIds.includes(pageId)
    ? pageId
    : "home";

  document.querySelectorAll(".page").forEach(page => {
    const isActive = page.id === validPage;

    page.classList.toggle("active", isActive);

    if (isActive) {
      page.setAttribute("aria-current", "page");
    } else {
      page.removeAttribute("aria-current");
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    const isActive = link.getAttribute("href") === `#${validPage}`;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  // Close the mobile menu after navigation.
  if (navigation) {
    navigation.classList.remove("open");
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.className = "fa-solid fa-bars";
    }
  }

  // Start each page at the top.
  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

  document.title =
    `${validPage.charAt(0).toUpperCase() + validPage.slice(1)} | Vedant`;
}

function handleRouteChange() {
  const requestedPage = window.location.hash.slice(1) || "home";
  showPage(requestedPage);
}

window.addEventListener("hashchange", handleRouteChange);

// Display the correct page when the website first opens.
handleRouteChange();

/* ==========================================
   MOBILE MENU
========================================== */

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.className = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    }
  });
}

/* ==========================================
   RESUME PRINT / SAVE AS PDF
========================================== */

function printResume() {
  window.print();
}

const downloadResume = document.getElementById("downloadResume");
const aboutResume = document.getElementById("aboutResume");

if (downloadResume) {
  downloadResume.addEventListener("click", printResume);
}

if (aboutResume) {
  aboutResume.addEventListener("click", printResume);
}

/* ==========================================
   FOOTER YEAR
========================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle(
      "visible",
      window.scrollY > 300
    );
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================
   CONTACT FORM
   Opens the visitor's email application.
   No server or database is used.
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!CONTACT_EMAIL.trim()) {
      alert(
        "Please add your professional email in script.js first, " +
        "inside the CONTACT_EMAIL setting."
      );
      return;
    }

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    const mailto =
      `mailto:${CONTACT_EMAIL.trim()}` +
      `?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
}

/* ==========================================
   SOCIAL PROFILE LINKS
   Empty profile URLs remain disabled.
========================================== */

function configureProfileLink(selector, url) {
  document.querySelectorAll(selector).forEach(link => {
    if (url && url.trim()) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("data-placeholder-link");
    } else {
      link.href = "#";
      link.setAttribute("data-placeholder-link", "");
      link.setAttribute("aria-disabled", "true");
    }
  });
}

configureProfileLink(
  'a[aria-label="GitHub"]',
  GITHUB_URL
);

configureProfileLink(
  'a[aria-label="LinkedIn"]',
  LINKEDIN_URL
);

document.querySelectorAll("[data-placeholder-link]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    alert(
      "Add your actual profile URL in script.js to activate this link."
    );
  });
});

/* ==========================================
   INITIALIZE SKILL SECTIONS
========================================== */

renderProgrammingLanguages();
renderApplications();
renderHardwareTechnologies();
