let selectedRating = 0;

function selectRating(rating) {
  selectedRating = rating;

  // Update styles for all rating elements based on the selected rating
  const ratingElements = document.querySelectorAll(".rating-option");
  ratingElements.forEach((elem, index) => {
    if (index < rating) {
      elem.classList.remove("bg-gray-700", "text-white");
      elem.classList.add("bg-orange-700", "text-black");
    } else {
      elem.classList.remove("bg-orange-700", "text-black");
      elem.classList.add("bg-gray-700", "text-white");
    }
  });
}

function submitRating() {
  if (selectedRating > 0) {
    // Store the selected rating in localStorage
    localStorage.setItem("selectedRating", selectedRating);
    // Navigate to the result page with the selected rating as a query parameter
    window.location.href = `thank-you.html?number=${selectedRating}`;
  } else {
    alert("Veuillez sélectionner une note avant d'envoyer.");
  }
}
