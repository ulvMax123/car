script.js
function orderCar(carName) {
    alert("You ordered: " + carName);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});
