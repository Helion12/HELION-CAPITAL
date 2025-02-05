document.addEventListener("DOMContentLoaded", function() {
    // Chatbot simple
    const chatbotButton = document.createElement("button");
    chatbotButton.innerText = "💬 Besoin d'aide ?";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.bottom = "20px";
    chatbotButton.style.right = "20px";
    chatbotButton.style.background = "red";
    chatbotButton.style.color = "white";
    chatbotButton.style.padding = "10px 15px";
    chatbotButton.style.border = "none";
    chatbotButton.style.borderRadius = "5px";
    chatbotButton.style.cursor = "pointer";
    document.body.appendChild(chatbotButton);

    chatbotButton.addEventListener("click", function() {
        alert("Bonjour ! Comment pouvons-nous vous aider ?");
    });
});
