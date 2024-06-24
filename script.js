function loadComponent(component, elementId) {
  fetch(`./components/${component}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading component:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar", "navbar-container");
  loadComponent("contact-info", "contact-info-container");
  loadComponent("footer", "footer-container");
});
