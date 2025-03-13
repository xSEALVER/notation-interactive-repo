// When the page loads, get the selected rating from localStorage
window.onload = function() {
    const rating = localStorage.getItem('selectedRating');
    if (rating) {
        document.getElementById('rating-display').textContent = rating;
    }
}