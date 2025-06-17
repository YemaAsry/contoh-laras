// Simple Order Alert
document.getElementById("orderBtn").addEventListener("click", function () {
  alert("Thanks! Your coffee is being brewed ☕");
});
const filterButtons = document.querySelectorAll('.filter-buttons button');
const menuItems = document.querySelectorAll('.menu-items .item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    menuItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
