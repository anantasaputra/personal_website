document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
  
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (name && email && message) {
          console.log('Nama:', name);
          console.log('Email:', email);
          console.log('Pesan:', message);
  
          const responseMsg = document.getElementById('responseMsg');
          responseMsg.classList.remove('hidden');
          form.reset();
        }
      });
    }
  });
  