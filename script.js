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

    // WhatsApp Widget
    (function() {
        var options = {
            whatsapp: "+27696757651",
            call_to_action: "Chat with us on WhatsApp!",
            position: "right"
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        document.getElementsByTagName('head')[0].appendChild(s);
    })();
});
