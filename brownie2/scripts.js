/* scripts.js placeholder */
// Modal functions
function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
  }
  
  function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
  }
  
  // Close modal if clicked outside
  window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  