<script>
// === Smooth Scroll for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === WhatsApp Chat Button ===
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.getElementById("whatsapp-btn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const phoneNumber = "+27XXXXXXXXX"; // ← Replace with your actual number (with country code)
      const message = encodeURIComponent("Hi Leafline, I’d like help with my CV.");
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    });
  }
});

// === FAQ or Info Card Toggle ===
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
</script>
