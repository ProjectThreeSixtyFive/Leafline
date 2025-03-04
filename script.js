document.addEventListener("DOMContentLoaded", function() {
    console.log("The Willow site loaded successfully.");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Cursor movement effects
    document.body.addEventListener("mousemove", function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
    });

    // Adding floating willow tree symbols
    for (let i = 0; i < 10; i++) {
        let willowLeaf = document.createElement("div");
        willowLeaf.classList.add("willow-leaf");
        willowLeaf.style.left = Math.random() * 100 + "vw";
        willowLeaf.style.animationDuration = (Math.random() * 5 + 5) + "s";
        document.body.appendChild(willowLeaf);
    }

    // WhatsApp Widget
    (function() {
        var options = {
            whatsapp: "+27696757651",
            call_to_action: "Use our LeafLine - Chat with us on WhatsApp!",
            position: "right"
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        document.getElementsByTagName('head')[0].appendChild(s);
    })();
});
