 let selectedRating = 0;

  // Handle rating selection
  function selectRating(rating) {
    selectedRating = rating;

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

  // Handle submit click
  function submitRating() {
    if (selectedRating > 0) {
      document.getElementById("notation-section").style.display = "none";
      document.getElementById("result-section").style.display = "block";
      document.getElementById("rating-display").textContent = selectedRating;
    } else {
      alert("Veuillez sélectionner une note avant d'envoyer.");
    }
  }

  // Hide result section initially
  window.onload = function () {
    document.getElementById("result-section").style.display = "none";

    // Add click listeners to rating options
    document.querySelectorAll(".rating-option").forEach((elem, index) => {
      elem.addEventListener("click", () => selectRating(index + 1));
    });

    // Add submit listener
    document.querySelector("button").addEventListener("click", submitRating);

    // Add listener for the "Retour" link
    document.querySelector("a[href='#notation-section']").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("result-section").style.display = "none";
      document.getElementById("notation-section").style.display = "block";
    });
  };
