// 🛒 Carrito de compras
let cart = [];

// 📌 Función para agregar productos al carrito
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
    alert(`✅ ${productName} ha sido añadido al carrito.`);
}

// 📌 Función para actualizar la vista del carrito
function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach((item) => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("cart-count").textContent = cart.length; // Actualizar contador
}

// 📌 Función para realizar el pago
function checkout() {
    if (cart.length === 0) {
        alert("⚠ El carrito está vacío.");
        return;
    }
    alert("🎉 Compra realizada con éxito. Total: $" + document.getElementById("total").textContent);
    cart = [];
    updateCart();
    cartModal.style.display = "none"; // Cerrar modal después de pagar
}

// 🎨 Modal del carrito
const cartModal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const closeModal = document.querySelector(".close");

// 📌 Mostrar el modal cuando se hace clic en el botón del carrito
cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

// 📌 Cerrar el modal cuando se hace clic en la "X"
closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// 📌 Cerrar el modal si se hace clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

// 🔄 Smooth Scroll para los enlaces del navbar
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

function viewDetails(name, price, img, description) {
    const url = `producto.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}&description=${encodeURIComponent(description)}`;
    window.location.href = url;
}

function updateCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += parseFloat(item.price);
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("cart-count").textContent = cart.length;
}

