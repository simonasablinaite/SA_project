const formBtnEl = document.getElementById('btn');

formBtnEl.addEventListener('click', (event) => {
   event.preventDefault();
   console.log('veikia');

   const nameEl = document.getElementById('name').value;
   const emailEl = document.getElementById('email').value;
   const subjectEl = document.getElementById('subject').value;

   console.log(nameEl, emailEl, subjectEl);

   const body = {
      name: nameEl,
      email: emailEl,
      subject: subjectEl
   }

   // email code here..

   Email.send({
      SecureToken: "5d4bc0f8-96a3-4e17-8381-41b3f9fd73d3",
      To: 'simonasablinaite@gmail.com',
      From: "simonasablinaite@gmail.com",
      Subject: "Testing email",
      Body: [body.name, body.email, body.subject]
   }).then(
      message => alert(message)
   );
})