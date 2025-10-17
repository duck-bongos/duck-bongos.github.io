const textElement = document.getElementById('typewriter-text');
const fullText = "Hi there! I'm Dan.";

let charIndex = 0;
const typingSpeed = 70; // milliseconds per character

function typeWriter() {
    if (charIndex < fullText.length) {
        textElement.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start the typing effect when the page loads
window.onload = typeWriter;

