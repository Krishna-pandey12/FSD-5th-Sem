let products = [];

const getProductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    products = data.products;

    const productsContainer = document.getElementById("products-container");

    products.slice(0, 10).forEach((product) => {

        const div = document.createElement("div");

        // Image
        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;

        // Title
        const title = document.createElement("h2");
        title.innerText = product.title;

        // Price
        const price = document.createElement("h3");
        price.innerText = `$${product.price}`;

        // Increment button
        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        // Decrement button
        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        // Quantity
        const addItemSpan = document.createElement("span");
        addItemSpan.innerText = "0";

        // Add elements
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(addItemSpan);
        div.appendChild(incrementBtn);

        productsContainer.appendChild(div);

        let counter = 0;

        // Increase quantity
        incrementBtn.addEventListener("click", () => {

            counter++;

            addItemSpan.innerText = counter;

            // Get existing cart
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if product already exists
            const existingProduct = cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {

                existingProduct.quantity = counter;

            } else {

                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.thumbnail,
                    quantity: counter
                });

            }

            // Save cart
            localStorage.setItem("cart", JSON.stringify(cart));

            console.log(cart);
        });

        // Decrease quantity
        decrementBtn.addEventListener("click", () => {

            if (counter > 0) {

                counter--;

                addItemSpan.innerText = counter;

                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                const existingProduct = cart.find(
                    (item) => item.id === product.id
                );

                if (existingProduct) {

                    existingProduct.quantity = counter;

                    // Remove product when quantity becomes 0
                    if (counter === 0) {
                        cart = cart.filter(
                            (item) => item.id !== product.id
                        );
                    }
                }

                localStorage.setItem("cart", JSON.stringify(cart));

                console.log(cart);
            }
        });
    });
};

getProductsData();