document.querySelector("#myBtn").addEventListener("click", function() {
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailPattern.test(email) && phone.length >= 10) {
      alert("Message sent successfully!");
    } else {
      alert("Please enter a valid email and phone number (at least 10 characters)");
    }
  });
  