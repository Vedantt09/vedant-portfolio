document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // SKILL DATA
  // ==========================================

  const programmingSkills = [
    {
      name: "C",
      icon: "fa-solid fa-c",
      category: "Programming"
    },
    {
      name: "C++",
      icon: "fa-solid fa-code",
      category: "Programming"
    },
    {
      name: "Python",
      icon: "fa-brands fa-python",
      category: "Programming"
    },
    {
      name: "Java",
      icon: "fa-brands fa-java",
      category: "Programming"
    },
    {
      name: "HTML",
      icon: "fa-brands fa-html5",
      category: "Web Development"
    },
    {
      name: "CSS",
      icon: "fa-brands fa-css3-alt",
      category: "Web Development"
    },
    {
      name: "JavaScript",
      icon: "fa-brands fa-js",
      category: "Web Development"
    },
    {
      name: "SQL",
      icon: "fa-solid fa-database",
      category: "Database"
    },
    {
      name: "Kotlin",
      icon: "fa-brands fa-android",
      category: "Android Development"
    }
  ];

  const applicationsSkills = [
    {
      name: "VS Code",
      icon: "fa-solid fa-code",
      category: "Code Editor"
    },
    {
      name: "Android Studio",
      icon: "fa-brands fa-android",
      category: "App Development"
    },
    {
      name: "Git",
      icon: "fa-brands fa-git-alt",
      category: "Version Control"
    },
    {
      name: "MySQL",
      icon: "fa-solid fa-database",
      category: "Database"
    },
    {
      name: "Excel",
      icon: "fa-solid fa-file-excel",
      category: "Productivity"
    },
    {
      name: "MS Word",
      icon: "fa-solid fa-file-word",
      category: "Productivity"
    },
    {
      name: "PowerPoint",
      icon: "fa-solid fa-file-powerpoint",
      category: "Presentations"
    }
  ];

  const hardwareSkills = [
    {
      name: "IoT",
      icon: "fa-solid fa-microchip",
      category: "Emerging Technology"
    },
    {
      name: "Raspberry Pi",
      icon: "fa-solid fa-memory",
      category: "Hardware"
    }
  ];

  // ==========================================
  // RENDER SKILL CARDS
  // ==========================================

  function renderSkills(containerId, skills) {
    const container = document.getElementById(containerId);

    if (!container) {
      return;
    }

    container.innerHTML = "";

    skills.forEach((skill) => {
      const card = document.createElement("article");
      card.className = "skill-card";

      const icon = document.createElement("div");
      icon.className = "skill-icon";

      const iconElement = document.createElement("i");
      iconElement.className = skill.icon;
      iconElement.setAttribute("aria-hidden", "true");

      icon.appendChild(iconElement);

      const name = document.createElement("h3");
      name.className = "skill-name";
      name.textContent = skill.name;

      const category = document.createElement("span");
      category.className = "skill-category";
      category.textContent = skill.category;

      card.appendChild(icon);
      card.appendChild(name);
      card.appendChild(category);

      container.appendChild(card);
    });
  }

  renderSkills("programmingSkills", programmingSkills);
  renderSkills("applicationsSkills", applicationsSkills);
  renderSkills("hardwareSkillsContainer", hardwareSkills);

  // ==========================================
  // PAGE NAVIGATION
  // ==========================================

  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll(".nav-link");
  const navigation = document.getElementById("navigation");
  const menuToggle = document.getElementById("menuToggle");

  function showPage(pageId) {
    const targetPage = document.getElementById(pageId);

    if (!targetPage || !targetPage.classList.contains("page")) {
      return;
    }

    pages.forEach((page) => {
      page.classList.toggle("active", page.id === pageId);
    });

    navLinks.forEach((link) => {
      const linkTarget = link.getAttribute("href");
      const isActive = linkTarget === `#${pageId}`;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (navigation) {
      navigation.classList.remove("open");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");

      const menuIcon = menuToggle.querySelector("i");

      if (menuIcon) {
        menuIcon.className = "fa-solid fa-bars";
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleNavigationClick(event) {
    const link = event.target.closest('a[href^="#"]');

    if (!link) {
      return;
    }

    const targetId = link.getAttribute("href").slice(1);

    if (!document.getElementById(targetId)) {
      return;
    }

    event.preventDefault();
    showPage(targetId);

    if (window.location.hash !== `#${targetId}`) {
      history.pushState(null, "", `#${targetId}`);
    }
  }

  document.addEventListener("click", handleNavigationClick);

  // Open the correct page when using browser back/forward.
  window.addEventListener("popstate", () => {
    const pageId = window.location.hash.slice(1) || "home";
    showPage(pageId);
  });

  // Open the correct page when the site loads with a URL hash.
  const initialPage = window.location.hash.slice(1) || "home";

  if (document.getElementById(initialPage)?.classList.contains("page")) {
    showPage(initialPage);
  }

  // ==========================================
  // MOBILE NAVIGATION MENU
  // ==========================================

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

      const menuIcon = menuToggle.querySelector("i");

      if (menuIcon) {
        menuIcon.className = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }
    });
  }

  // ==========================================
  // RESUME PRINT / SAVE
  // ==========================================

  function printResume() {
    window.print();
  }

  const downloadResumeButton = document.getElementById("downloadResume");
  const aboutResumeButton = document.getElementById("aboutResume");

  if (downloadResumeButton) {
    downloadResumeButton.addEventListener("click", printResume);
  }

  if (aboutResumeButton) {
    aboutResumeButton.addEventListener("click", printResume);
  }

  // ==========================================
  // PLACEHOLDER SOCIAL LINKS
  // ==========================================

  document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
      }
    });
  });

  // ==========================================
  // CONTACT FORM
  // ==========================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("contactName")?.value.trim();
      const email = document.getElementById("contactEmail")?.value.trim();
      const message = document.getElementById("contactMessage")?.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
      }

      /*
       * Replace this placeholder with your real email address
       * before using the contact form.
       */
      const recipient = "your-email@example.com";

      if (recipient === "your-email@example.com") {
        alert(
          "Please update the recipient email in script.js with your real email address."
        );
        return;
      }

      const subject = encodeURIComponent(
        `Portfolio contact from ${name}`
      );

      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }

  // ==========================================
  // BACK-TO-TOP BUTTON
  // ==========================================

  const backToTopButton = document.getElementById("backToTop");

  function updateBackToTopButton() {
    if (!backToTopButton) {
      return;
    }

    backToTopButton.classList.toggle(
      "visible",
      window.scrollY > 300
    );
  }

  window.addEventListener("scroll", updateBackToTopButton, {
    passive: true
  });

  updateBackToTopButton();

  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==========================================
  // CURRENT YEAR IN FOOTER
  // ==========================================

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
