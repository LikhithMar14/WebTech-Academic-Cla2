// Menu data with more vegetarian items
const menuItems = [
    {
        id: 1,
        name: "Paneer Tikka Masala",
        price: 280,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
        description: "Grilled cottage cheese cubes in spiced tomato-based curry",
        category: "vegetarian"
    },
    {
        id: 2,
        name: "Dal Makhani",
        price: 220,
        image: "https://images.pexels.com/photos/12737916/pexels-photo-12737916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Creamy black lentils slow-cooked with butter and spices",
        category: "vegetarian"
    },
    {
        id: 3,
        name: "Masala Dosa",
        price: 180,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80",
        description: "Crispy rice crepe filled with spiced potato mixture",
        category: "vegetarian"
    },
    {
        id: 4,
        name: "Palak Paneer",
        price: 260,
        image: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?auto=format&fit=crop&w=800&q=80",
        description: "Cottage cheese cubes in creamy spinach gravy",
        category: "vegetarian"
    },
    {
        id: 5,
        name: "Chole Bhature",
        price: 200,
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        description: "Spiced chickpea curry served with fluffy fried bread",
        category: "vegetarian"
    },
    {
        id: 6,
        name: "Veg Biryani",
        price: 250,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        description: "Fragrant rice dish with mixed vegetables and aromatic spices",
        category: "vegetarian"
    },
    {
        id: 7,
        name: "Aloo Gobi",
        price: 180,
        image: "https://media.istockphoto.com/id/450469817/photo/gobi-aloo-indian-curry-dish.jpg?s=612x612&w=0&k=20&c=LMIAbZLAXXRVCPRb8dwvtp23y_RPyRLAp0UuOW4DmDc=",
        description: "Potato and cauliflower curry with Indian spices",
        category: "vegetarian"
    },
    {
        id: 8,
        name: "Malai Kofta",
        price: 290,
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80",
        description: "Vegetable dumplings in rich creamy gravy",
        category: "vegetarian"
    },
    {
        id: 9,
        name: "Vegetable Samosa",
        price: 120,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        description: "Crispy pastry filled with spiced potatoes and peas",
        category: "vegetarian"
    },
    {
        id: 10,
        name: "Bhindi Masala",
        price: 190,
        image: "https://www.anveshan.farm/cdn/shop/articles/BhindiMasala.jpg?v=1690790485",
        description: "Okra cooked with onions and Indian spices",
        category: "vegetarian"
    },
    {
        id: 11,
        name: "Vegetable Jalfrezi",
        price: 230,
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=800&q=80",
        description: "Mixed vegetables in a spicy tomato-based curry",
        category: "vegetarian"
    },
    {
        id: 12,
        name: "Mushroom Masala",
        price: 240,
        image: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg",
        description: "Mushrooms cooked in rich, aromatic gravy",
        category: "vegetarian"
    },
    {
        id: 13,
        name: "Paneer Butter Masala",
        price: 290,
        image: "data:image/jpeg;base64,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",
        description: "Cottage cheese in rich, creamy tomato gravy",
        category: "vegetarian"
    },
    {
        id: 14,
        name: "Veg Manchurian",
        price: 210,
        image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80",
        description: "Deep-fried vegetable balls in Indo-Chinese sauce",
        category: "vegetarian"
    },
    {
        id: 15,
        name: "Kadai Paneer",
        price: 270,
        image: "https://media.istockphoto.com/id/1085155140/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=Wlj8KQz4vj29zclmNX-xMDSXMYMZfKPT62uX7FUmY9I=",
        description: "Cottage cheese and bell peppers in spicy gravy",
        category: "vegetarian"
    },
    {
        id: 16,
        name: "Pav Bhaji",
        price: 180,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
        description: "Spiced vegetable mash served with buttered bread",
        category: "vegetarian"
    },
    {
        id: 17,
        name: "Vegetable Korma",
        price: 240,
        image: "https://images.unsplash.com/photo-1631452180887-2236f3c14848?auto=format&fit=crop&w=800&q=80",
        description: "Mixed vegetables in mild, creamy coconut curry",
        category: "vegetarian"
    },
    {
        id: 18,
        name: "Rajma Masala",
        price: 200,
        image: "https://images.unsplash.com/photo-1626500155534-d4c3a7564fd6?auto=format&fit=crop&w=800&q=80",
        description: "Red kidney beans in thick, spiced gravy",
        category: "vegetarian"
    },
    {
        id: 19,
        name: "Aloo Matar",
        price: 190,
        image: "https://images.unsplash.com/photo-1617692855098-40885dca3377?auto=format&fit=crop&w=800&q=80",
        description: "Potatoes and green peas curry",
        category: "vegetarian"
    },
    {
        id: 20,
        name: "Vegetable Pulao",
        price: 220,
        image: "https://images.unsplash.com/photo-1563379091193-00766c104204?auto=format&fit=crop&w=800&q=80",
        description: "Fragrant rice cooked with mixed vegetables",
        category: "vegetarian"
    }
];

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Pagination and search state
let currentPage = 1;
const itemsPerPage = 8;
let filteredItems = [...menuItems];

// DOM Elements
const menuContainer = document.getElementById('menuItems');
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const cartItemsContainer = document.getElementById('cartItems');
const cartCountElement = document.getElementById('cartCount');
const cartTotalElement = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const paginationContainer = document.getElementById('pagination');

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    renderMenu();
    renderPagination();
});

// Render pagination
function renderPagination() {
    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage - 1}">&laquo;</a>
        </li>
    `;
    
    // Page numbers
    for (let i = 1; i <= pageCount; i++) {
        paginationHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>
        `;
    }
    
    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === pageCount ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage + 1}">&raquo;</a>
        </li>
    `;
    
    paginationContainer.innerHTML = paginationHTML;
    
    // Add click events to pagination buttons
    paginationContainer.querySelectorAll('.page-link').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newPage = parseInt(e.target.dataset.page);
            if (!isNaN(newPage) && newPage !== currentPage && newPage > 0 && newPage <= pageCount) {
                currentPage = newPage;
                renderMenu();
                renderPagination();
                // Scroll to top of menu section
                document.getElementById('menuSection').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function renderMenu() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = filteredItems.slice(startIndex, endIndex);
    
    menuContainer.innerHTML = pageItems.map(item => `
        <div class="col-md-6 col-lg-3">
            <div class="card menu-item h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title h5">${item.name}</h3>
                    <p class="card-text flex-grow-1">${item.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div class="price">₹${item.price.toFixed(2)}</div>
                        <button class="btn btn-primary" onclick="addToCart(${item.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const cartItem = cart.find(item => item.id === itemId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function renderCart() {
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h3 class="h6 mb-1">${item.name}</h3>
                <p class="mb-0">₹${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="d-flex align-items-center gap-2">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = total.toFixed(2);
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== itemId);
    } else {
        const item = cart.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
        }
    }

    updateCart();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = count;
}

// Event Listeners
document.getElementById('cartBtn').addEventListener('click', () => {
    renderCart();
    cartModal.show();
});

checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your order!');
    cart = [];
    updateCart();
    cartModal.hide();
});

// Initial render
renderMenu();
renderPagination();
updateCartCount();
