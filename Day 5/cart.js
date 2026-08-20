const cartContainer = document.getElementById("cart-container");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {

    cartContainer.innerHTML = "<h2>Your cart is empty</h2>";

} else {

    cart.forEach((product, index) => {

        const div = document.createElement("div");

        // Image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;

        // Title
        const title = document.createElement("h2");
        title.innerText = product.title;

        // Price
        const price = document.createElement("h3");
        price.innerText = `$${product.price}`;

        // Quantity
        const quantity = document.createElement("p");
        quantity.innerText = `Quantity: ${product.quantity}`;

        // Total price
        const total = document.createElement("p");
        total.innerText = `Total: $${product.price * product.quantity}`;

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        removeBtn.addEventListener("click", () => {

            cart.splice(index, 1);

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            location.reload();
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quantity);
        div.appendChild(total);
        div.appendChild(removeBtn);

        cartContainer.appendChild(div);
    });
}