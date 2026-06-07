// Simple interaction logic for the cafe
document.querySelector('.cafe-btn').addEventListener('click', function() {
    alert("☕ Preparing your virtual brew... Enjoy your stay!");
    this.innerText = "Enjoying Coffee...";
    this.style.borderColor = "#8fbc8f";
    this.style.color = "#8fbc8f";
});

console.log("Syntax Tech Café system loaded.");
