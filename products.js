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
            name: "Red Bull ",
            description: "Energy Drink 750ml",
            price: 40,
            image: "https://m.media-amazon.com/images/I/71VLVwOaE2L.jpg"
        },
        {
            id: 4,
            name: "Red Bull Blue",
            description: "Energy Drink 750ml",
            price: 40,
            image: "https://5.imimg.com/data5/SELLER/Default/2023/5/307876249/BX/DL/YH/98405810/red-bull-energy-drink-250ml.jpg"
        }
    ],
    aeratedBeverages: [
        {
            id: 1,
            name: "Coca Cola",
            description: "Soft Drink 1.5L",
            price: 85,
            image: "https://rukminim2.flixcart.com/image/640/558/l3dcl8w0/aerated-drink/l/t/4/-original-imagegf8efekw8fv.jpeg?q=60&crop=false"
        },
        {
            id: 2,
            name: "Coka Cola Can",
            description: "Lemon Drink 300ml",
            price: 45,
            image: "https://www.ghirne.com/wp-content/uploads/2025/01/image-259575-1716368916.jpeg"
        },
        {
            id: 3,
            name: "Coca Cola Bottle",
            description: "Soft Drink 2.25L",
            price: 95,
            image: "https://rukminim2.flixcart.com/image/850/1000/l3dcl8w0/aerated-drink/9/g/a/-original-imagegf8gczcghfu.jpeg?q=90"
        },
        {
            id: 4,
            name: "Coca Cola Mini",
            description: "Drink 250mL",
            price: 65,
            image: "https://5.imimg.com/data5/SELLER/Default/2024/1/381040856/OH/ZA/YD/205189144/competitive-price-top-grade-coca-cola-330ml-cans-coca-cola-1-5l-bottle.png"
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