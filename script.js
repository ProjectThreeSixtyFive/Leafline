document.addEventListener("DOMContentLoaded", function() {
    console.log("The Willow Leaf site loaded successfully.");

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
    whatsappBtn.style.fontFamily = "Arial, sans-serif";
    whatsappBtn.style.fontSize = "14px";
    whatsappBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    whatsappBtn.style.transition = "transform 0.3s ease";
    
    whatsappBtn.addEventListener("mouseover", function() {
        whatsappBtn.style.transform = "scale(1.1)";
    });
    
    whatsappBtn.addEventListener("mouseout", function() {
        whatsappBtn.style.transform = "scale(1)";
    });
    
    document.body.appendChild(whatsappBtn);

    // Interactive Heading Animation
    const heading = document.querySelector("#main-heading");
    if (heading) {
        heading.style.transition = "color 0.5s ease, transform 0.5s ease";
        heading.addEventListener("mouseover", function() {
            heading.style.color = "#25D366";
            heading.style.transform = "scale(1.1)";
        });
        heading.addEventListener("mouseout", function() {
            heading.style.color = "black";
            heading.style.transform = "scale(1)";
        });
    }

    // Keyword Highlighting for Focused Sections
    const keywords = ["AI", "unemployment", "job development", "elder support", "CV assistance"];
    document.querySelectorAll("p").forEach(paragraph => {
        keywords.forEach(keyword => {
            const regex = new RegExp(`(\\b${keyword}\\b)`, "gi");
            paragraph.innerHTML = paragraph.innerHTML.replace(regex, "<span class='highlight'>$1</span>");
        });
    });
});
