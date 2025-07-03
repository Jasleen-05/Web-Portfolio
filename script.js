document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // ✅ If the toggle switch is found
  if (toggle) {
    const savedTheme = localStorage.getItem("theme");

    // Load theme from localStorage or default to light
    if (savedTheme === "dark") {
      html.classList.add("dark");
      toggle.checked = true;
    } else {
      html.classList.remove("dark");
      toggle.checked = false;
      localStorage.setItem("theme", "light");
    }

    // Toggle listener
    toggle.addEventListener("change", function () {
      if (toggle.checked) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  }

  // ✅ Global scroll-to-top function
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});