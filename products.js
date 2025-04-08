// Product data
const products = {
    energyDrinks: [
        {
            id: 1,
            name: "Red Bull",
            description: "Energy Drink 250ml",
            price: 125,
            image: "assets/redbull.png"
        },
        {
            id: 2,
            name: "Monster",
            description: "Energy Drink 500ml",
            price: 150,
            image: "assets/monster.png"
        },
        {
            id: 3,
            name: "Mountain Dew",
            description: "Energy Drink 750ml",
            price: 40,
            image: "assets/mountain-dew.png"
        }
    ],
    aeratedBeverages: [
        {
            id: 1,
            name: "Pepsi",
            description: "Soft Drink 1.5L",
            price: 85,
            image: "assets/pepsi.png"
        },
        {
            id: 2,
            name: "Sprite",
            description: "Lemon Drink 2L",
            price: 95,
            image: "assets/sprite.png"
        },
        {
            id: 3,
            name: "Coca Cola",
            description: "Soft Drink 2L",
            price: 95,
            image: "assets/coke.png"
        },
        {
            id: 4,
            name: "7 Up",
            description: "Lemon Drink 1.5L",
            price: 85,
            image: "assets/7up.png"
        }
    ]
};

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="product-card card">
                <div class="img-container">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0">₹${product.price}</span>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render products on the page
function renderProducts() {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;

    const currentPage = window.location.pathname;
    let productsToRender = [];

    if (currentPage.includes('energy-drinks')) {
        productsToRender = products.energyDrinks;
    } else if (currentPage.includes('aerated-beverages')) {
        productsToRender = products.aeratedBeverages;
    }

    productsContainer.innerHTML = productsToRender
        .map(product => createProductCard(product))
        .join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Cart functionality
let cart = [];

function addToCart(productId) {
    const currentPage = window.location.pathname;
    let productList = currentPage.includes('energy-drinks') ? products.energyDrinks : products.aeratedBeverages;
    
    const product = productList.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        // Show success message
        alert(`${product.name} added to cart!`);
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = `(${cart.length})`;
    }
} 