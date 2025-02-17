document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Calculate total price based on selected room type and number of guests
  const roomType = document.getElementById('room-type').value;
  const guests = document.getElementById('guests').value;
  let totalPrice = 0;
  if (roomType === 'Deluxe Room') {
    totalPrice = guests * 3000;
  } else if (roomType === 'Premium Suite') {
    totalPrice = guests * 5000;
  } else if (roomType === 'Penthouse') {
    totalPrice = guests * 8000;
  }
  document.getElementById('total-price').value = '₱' + totalPrice;

  // Show alert message
  alert('You are now booked! Enjoy your stay at Fiesta Royal Apartelle.');
});

document.querySelector('.check-availability-button').addEventListener('click', function() {
  // Simulate checking availability (you can add actual logic here)
  setTimeout(function() {
    document.getElementById('availability-message').innerText = 'Availability checked!';

    // Calculate and display total price after availability is checked
    const roomType = document.getElementById('room-type').value;
    const guests = document.getElementById('guests').value;
    let totalPrice = 0;
    if (roomType === 'Deluxe Room') {
      totalPrice = guests * 3000;
    } else if (roomType === 'Premium Suite') {
      totalPrice = guests * 5000;
    } else if (roomType === 'Penthouse') {
      totalPrice = guests * 8000;
    }
    document.getElementById('total-price').value = '₱' + totalPrice;
  }, 2000); // Simulating a delay of 2 seconds
});