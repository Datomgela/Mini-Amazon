const btn = document.getElementById("btnm");
const text = document.getElementById("txt");
const btn2 = document.getElementById("btnm-2");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

let item = 0;
let cartTotalAmount = 0;

btn.addEventListener("click", function () {
    item++;
    updateCart();
    console.log("User has bought: " + item);
});

btn2.addEventListener("click", function () {
    item = 0;
    cartTotalAmount = 0;
    updateCart();
    console.log("User canceled the purchase.");
    alert("You canceled the purchase.");
});

function updateCart() {
    text.textContent = "Your product is in cart: " + item;
    cartItemsContainer.innerHTML = "";

    for (let i = 0; i < item; i++) {
        const li = document.createElement("li");
        li.textContent = "Product " + (i + 1) + ": $8.99";
        cartItemsContainer.appendChild(li);
    }

    cartTotalAmount = item * 8.99;
    cartTotal.textContent = "$" + cartTotalAmount.toFixed(2);
}

checkoutBtn.addEventListener("click", function () {
    alert("Checkout completed. Total amount: $" + cartTotalAmount.toFixed(2));
});