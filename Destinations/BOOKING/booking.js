function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;

  if (name === '' || email === '' || phone === '' || checkin === '' || checkout === '' || guests === '') {
    alert('Please fill out all fields.');
  } else {
    document.getElementById('bookingForm').submit();
  }
}
