const goBackLink = document.querySelector(".goBack");

goBackLink.addEventListener("click", handleGoBack);

function handleGoBack() {
  const confirmLeave = confirm("Are you sure you want to leave this page? Any unsaved changes will be lost.");

  if (confirmLeave) {
    window.history.back();
  }
}