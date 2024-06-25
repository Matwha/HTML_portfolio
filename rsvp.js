function sendEmail() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const email = "moceanwhale@gmail.com";
  const subject = "RSVP for Ice Cream on Thursday";
  const body = `Name: ${name}\n\nMessage: ${message}`;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

