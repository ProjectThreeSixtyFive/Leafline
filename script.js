document.addEventListener("DOMContentLoaded", function() {
    console.log("The Willow site loaded successfully.");

    // WhatsApp button functionality
    const whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/27696751651";
    whatsappBtn.textContent = "Chat with Us on WhatsApp";
    whatsappBtn.style.position = "fixed";
    whatsappBtn.style.bottom = "20px";
    whatsappBtn.style.right = "20px";
    whatsappBtn.style.backgroundColor = "#25D366";
    whatsappBtn.style.color = "white";
    whatsappBtn.style.padding = "10px 20px";
    whatsappBtn.style.borderRadius = "5px";
    whatsappBtn.style.textDecoration = "none";
    document.body.appendChild(whatsappBtn);
});
