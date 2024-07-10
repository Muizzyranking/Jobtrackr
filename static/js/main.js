function showMessage(type, title, text) {
  const popup = document.getElementById("popup-message");
  const icon = document.getElementById("popup-icon");
  const popupTitle = document.getElementById("popup-title");
  const popupText = document.getElementById("popup-text");

  // Clear previous classes
  popup.className = "fixed top-4 right-4 z-50 rounded-xl border p-4";
  popup.className =
    "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-xl border p-4";
  // popup.className = "fixed top-4 right-4 z-50 rounded-xl border p-4";

  // Add dynamic classes based on message type
  switch (type) {
    case "success":
      popup.classList.add("bg-green-50", "border-green-500");
      icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`;
      break;
    case "error":
      popup.classList.add("bg-red-50", "border-red-500");
      icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-red-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>`;
      break;
    case "info":
      popup.classList.add("bg-blue-50", "border-blue-500");
      icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-blue-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`;
      break;
    case "warning":
      popup.classList.add("bg-yellow-50", "border-yellow-500");
      icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-yellow-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`;
      break;
    default:
      popup.classList.add("bg-white", "border-gray-100");
      icon.innerHTML = "";
  }

  // Set the title and text
  popupTitle.textContent = title;
  popupText.textContent = text;

  // Show the popup
  popup.classList.remove("hidden");

  // Auto close after 5 seconds
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);

  // Add event listener to close button
  document.getElementById("popup-dismiss").addEventListener("click", () => {
    popup.classList.add("hidden");
  });
}
function closeAlert() {
  var alertBox = document.getElementById("alert-box");
  alertBox.style.display = "none";
}
