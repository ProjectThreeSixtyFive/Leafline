document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling effect for in-page links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // (Removed complex cursor effect as per latest instructions)

  // Basic cursor effect (if needed, uncomment below)
  // document.addEventListener("mousemove", function(e) {
  //   let cursor = document.createElement("div");
  //   cursor.classList.add("cursor-effect");
  //   cursor.style.left = `${e.clientX}px`;
  //   cursor.style.top = `${e.clientY}px`;
  //   document.body.appendChild(cursor);
  //   setTimeout(() => cursor.remove(), 500);
  // });

  // WhatsApp LeafLine widget is already included in the HTML section via .whatsapp-widget element.
});
