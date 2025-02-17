// Book button functionality
const bookButtons = document.querySelectorAll('.bookBtn');

bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    const price = button.getAttribute('data-price');
    alert(`Booking confirmed! Price: PHP ${price}`);
  });
});
