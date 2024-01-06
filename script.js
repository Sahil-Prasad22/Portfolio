function toggleMenu()
{
    const menu =document.querySelector(".menu-links")
    const icon =document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// Check local storage for user's preference
const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "enabled") {
  body.classList.add("dark-mode");
}
