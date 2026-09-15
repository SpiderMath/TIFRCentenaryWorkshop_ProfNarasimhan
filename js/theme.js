(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const brandLogo = document.getElementById("brand-logo");

  function updateLogo(theme) {
    if (!brandLogo) return;
    if (theme === "dark") {
      // brandLogo.src = "assets/tifr-logo-dark.svg";
      brandLogo.src = "assets/tifr-logo-blue.png";
      brandLogo.alt = "TIFR Logo (Dark Theme)";
    } else {
      // brandLogo.src = "assets/tifr-logo-light.svg";
      brandLogo.src = "assets/tifr-logo-blue.png";
      brandLogo.alt = "TIFR Logo (Light Theme)";
    }
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("workshop-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
    updateLogo(theme);
  }

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem("workshop-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const currentTheme = root.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  // Hamburger menu toggle for mobile viewports
  const menuToggle = document.getElementById("menu-toggle");
  const primaryNav = document.getElementById("primary-nav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = primaryNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
})();
