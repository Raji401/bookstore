let books = [
    { id: 1, name: "Java Basics", price: 300, purchased: false },
    { id: 2, name: "HTML Guide", price: 200, purchased: false },
    { id: 3, name: "JavaScript Mastery", price: 400, purchased: false }
];

let cart = [];

function showHome() {
    document.getElementById("home").classList.remove("hide");
    document.getElementById("cart").classList.add("hide");

    let html = "<h2>📚 Featured Books</h2>";

    books.forEach(book => {
        if (!book.purchased) {
            html += `
            <div class="book">
                <h3>${book.name}</h3>
                <p>Price: ₹${book.price}</p>
                <button onclick="addToCart(${book.id})">Add to Cart</button>
            </div>`;
        }
    });

    document.getElementById("home").innerHTML = html;
}

function addToCart(id) {
    let book = books.find(b => b.id === id);
    cart.push(book);
    alert("Added to Cart!");
}

function showCart() {
    document.getElementById("home").classList.add("hide");
    document.getElementById("cart").classList.remove("hide");

    let total = 0;
    let html = "<h2>🛒 Shopping Cart</h2>";

    cart.forEach((item, index) => {
        total += item.price;
        html += `
        <div class="book">
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
        </div>`;
    });

    html += `<h3>Total: ₹${total}</h3>
    <button onclick="checkout()">Checkout</button>`;

    document.getElementById("cart").innerHTML = html;
}

function removeItem(index) {
    cart.splice(index, 1);
    showCart();
}

function checkout() {
    cart.forEach(item => item.purchased = true);
    cart = [];
    alert("Order Successful!");
    showHome();
}

showHome();