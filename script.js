document.getElementById('availabilityForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const hospitalSelect = document.getElementById('hospitalSelect');
  const selectedHospital = hospitalSelect.options[hospitalSelect.selectedIndex].text;

  // Getting the total and available beds 
  const totalBeds = parseInt(selectedHospital.match(/\d+/)[0]); 
  const availableBeds = Math.floor(Math.random() * (totalBeds + 1)); 

  const availabilityMessage = document.getElementById('availabilityMessage');
  const reservationSection = document.getElementById('reservationSection');

  if (availableBeds > 0) {
    availabilityMessage.textContent = `${availableBeds} out of ${totalBeds} beds are available at ${selectedHospital}.`;
    reservationSection.style.display = 'block'; 
  } else {
    availabilityMessage.textContent = `No beds are available at ${selectedHospital}. Checking other hospitals...`;
    reservationSection.style.display = 'none'; 
    setTimeout(() => {
      availabilityMessage.textContent = 'No available beds found at any hospital. Please try again later.';
    }, 2000); 
  }
});

document.getElementById('reservationForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
  // Get form inputs
  const name = document.getElementById('nameInput').value;
  const mobile = document.getElementById('mobileInput').value;
  const address = document.getElementById('addressInput').value;
  const beds = document.getElementById('bedsInput').value;
  const date = document.getElementById('dateInput').value; // Get the reservation date

  // Sending reservation data 
  console.log('Name:', name);
  console.log('Mobile Number:', mobile);
  console.log('Address:', address);
  console.log('Beds:', beds);
  console.log('Reservation Date:', date); // Log the reservation date

  alert('Reservation submitted successfully!');
});

