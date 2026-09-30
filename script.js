console.log("She Bakes website loaded successfully!");
function orderOnWhatsApp() {

    const phoneNumber = "917869113670";

    const message =
        "Hello She Bakes! I would like to place an order.";

    const whatsappURL =
        "https://api.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
function orderProduct(productName) {

    const phoneNumber = "917869113670";

    const message =
        "Hello She Bakes! I would like to order " +
        productName +
        ".";

    const whatsappURL =
        "https://web.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
function orderProductSize(productName, size, price) {

    const phoneNumber = "917869113670";

    const message =
        "Hello She Bakes! I would like to order " +
        productName +
        " - " +
        size +
        " (" +
        price +
        ").";

    const whatsappURL =
        "https://web.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
function showCategory(category, button) {

    // Hide all categories
    const categories = document.querySelectorAll(".menu-category");

    categories.forEach(function(item) {
        item.classList.remove("active");
    });


    // Show selected category
    const selectedCategory = document.getElementById(category);

    selectedCategory.classList.add("active");


    // Remove active from all buttons
    const buttons = document.querySelectorAll(".menu-tab");

    buttons.forEach(function(item) {
        item.classList.remove("active");
    });


    // Add active to clicked button
    button.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function() {

    const firstCategory = document.getElementById("cakes");

    firstCategory.classList.add("active");

});