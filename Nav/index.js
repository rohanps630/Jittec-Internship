const navigationLinks = document.querySelectorAll(".navigation-link");
const loginLink = document.querySelector(".login-link");

navigationLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});

loginLink.addEventListener("click", handleLoginClick);

function handleClick(event) {
  event.preventDefault();
  const targetSectionId = event.target.getAttribute("href").slice(1);
  const targetSection = document.getElementById(targetSectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");
  });
  event.target.classList.add("active");
}

function handleLoginClick(event) {
  event.preventDefault();
  
  const confirmLeave = confirm("Are you sure you want to leave this page? You will be redirected to the login page.");
  
  if (confirmLeave) {
    window.location.href = "login.html";
  }
}
