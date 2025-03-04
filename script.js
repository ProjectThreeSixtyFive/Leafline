document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling effect
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Cursor effect
    document.addEventListener("mousemove", function(e) {
        let cursorEffect = document.createElement("div");
        cursorEffect.classList.add("cursor-effect");
        cursorEffect.style.left = `${e.clientX}px`;
        cursorEffect.style.top = `${e.clientY}px`;
        document.body.appendChild(cursorEffect);
        setTimeout(() => cursorEffect.remove(), 500);
    });

    // Text typing effect
    const typeEffect = (element, text, speed) => {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    };

    let headerText = document.querySelector("header h1");
    headerText.innerHTML = "";
    typeEffect(headerText, "Welcome to The Willow", 100);

    // Button hover animation
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // WhatsApp widget functionality
    let whatsappWidget = document.createElement("div");
    whatsappWidget.classList.add("whatsapp-widget");
    whatsappWidget.innerHTML = '<a href="https://wa.me/27696757651" target="_blank">Use Our LeafLine</a>';
    document.body.appendChild(whatsappWidget);
});
