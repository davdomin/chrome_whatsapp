document.addEventListener('DOMContentLoaded', function () {
  var phoneNumberInput = document.getElementById('phoneNumber');

  phoneNumberInput.focus();
  document.getElementById('openButton').addEventListener('click', function() {
    openWhatsApp();
  });
  function openWhatsApp() {
    var phoneNumber = phoneNumberInput.value;
    if (phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^\d]/g, '');
      var whatsappWebUrl = 'https://web.whatsapp.com/send?phone=' + phoneNumber;
      chrome.tabs.create({ url: whatsappWebUrl });
    } else {
      alert('Por favor, ingresa un número de teléfono.');
    }
  }
});
