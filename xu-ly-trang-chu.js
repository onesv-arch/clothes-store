// Product Data
const products = [
    {
        id: 1,
        name: 'Áo Thun Basic Trắng',
        category: 'Áo thun',
        gender: 'Unisex',
        price: 299000,
        salePrice: 249000,
        image: 'https://images.unsplash.com/photo-1630780565118-511258d74d08?w=600',
        rating: 4.5,
        colors: ['#FFFFFF', '#000000', '#808080'],
        sizes: ['S', 'M', 'L', 'XL'],
        badge: 'Sale'
    },
    {
        id: 2,
        name: 'Áo Sơ Mi Linen Trắng',
        category: 'Sơ mi',
        gender: 'Nữ',
        price: 459000,
        image: 'https://images.unsplash.com/photo-1630780564223-0aae7795126b?w=600',
        rating: 5,
        colors: ['#FFFFFF', '#F5E6D3'],
        sizes: ['S', 'M', 'L'],
        badge: 'Mới'
    },
    {
        id: 3,
        name: 'Hoodie Nâu Oversize',
        category: 'Áo khoác',
        gender: 'Nam',
        price: 549000,
        image: 'https://images.unsplash.com/photo-1615984259571-4d4d1084abbd?w=600',
        rating: 4.8,
        colors: ['#8B4513', '#000000', '#708090'],
        sizes: ['M', 'L', 'XL'],
        badge: 'Bán chạy'
    },
    {
        id: 4,
        name: 'Váy Đen Tối Giản',
        category: 'Váy',
        gender: 'Nữ',
        price: 599000,
        salePrice: 449000,
        image: 'https://images.unsplash.com/photo-1770918655078-600f74bc53c5?w=600',
        rating: 4.7,
        colors: ['#000000'],
        sizes: ['S', 'M', 'L'],
        badge: 'Sale'
    },
    {
        id: 6,
        name: 'Blazer Trắng Công Sở',
        category: 'Áo khoác',
        gender: 'Nữ',
        price: 799000,
        image: 'https://images.unsplash.com/photo-1776273920158-510b171e936f?w=600',
        rating: 4.9,
        colors: ['#FFFFFF', '#000000'],
        sizes: ['S', 'M', 'L', 'XL'],
        badge: 'Bán chạy'
    },
    {
        id: 9,
        name: 'Áo Thun Trắng Phối Đồ',
        category: 'Áo thun',
        gender: 'Nữ',
        price: 329000,
        image: 'https://images.unsplash.com/photo-1762764919554-cfd608ffc1a0?w=600',
        rating: 4.5,
        colors: ['#FFFFFF', '#F5E6D3'],
        sizes: ['S', 'M', 'L', 'XL'],
        badge: 'Bán chạy'
    },
    {
        id: 11,
        name: 'Blazer Đỏ Statement',
        category: 'Áo khoác',
        gender: 'Nữ',
        price: 949000,
        salePrice: 759000,
        image: 'https://images.unsplash.com/photo-1765044145286-2320351f2f03?w=600',
        rating: 4.9,
        colors: ['#DC143C', '#000000'],
        sizes: ['S', 'M', 'L'],
        badge: 'Sale'
    },
    {
        id: 12,
        name: 'Blazer Trắng Premium',
        category: 'Áo khoác',
        gender: 'Nữ',
        price: 1199000,
        image: 'https://images.unsplash.com/photo-1772987301731-2a66c92c6475?w=600',
        rating: 5,
        colors: ['#FFFFFF', '#F5E6D3'],
        sizes: ['S', 'M', 'L', 'XL'],
        badge: 'Mới'
    },
    {
        id: 13,
        name: 'Túi Tote Canvas Minimal',
        category: 'Phụ kiện',
        gender: 'Unisex',
        price: 259000,
        salePrice: 219000,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600',
        rating: 4.8,
        colors: ['#F5E6D3', '#000000'],
        sizes: ['One size'],
        badge: 'Sale'
    },
    {
        id: 14,
        name: 'Nón Baseball Đen Basic',
        category: 'Phụ kiện',
        gender: 'Unisex',
        price: 189000,
        image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600',
        rating: 4.6,
        colors: ['#000000', '#FFFFFF', '#808080'],
        sizes: ['One size'],
        badge: 'Bán chạy'
    },
    {
        id: 15,
        name: 'Thắt Lưng Da Nâu Vintage',
        category: 'Phụ kiện',
        gender: 'Unisex',
        price: 329000,
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600',
        rating: 4.7,
        colors: ['#8B4513', '#000000'],
        sizes: ['One size'],
        badge: 'Mới'
    },
    {
        id: 16,
        name: 'Kính Mát Gọng Đen',
        category: 'Phụ kiện',
        gender: 'Unisex',
        price: 279000,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600',
        rating: 4.9,
        colors: ['#000000', '#D4AF37'],
        sizes: ['One size'],
        badge: 'Mới'
    }
];

// State
let cart = [];
let searchQuery = '';
let selectedCategory = 'Tất cả';
let selectedGender = 'Tất cả';
let selectedSize = 'Tất cả';
let sortBy = 'newest';

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const genderFilter = document.getElementById('genderFilter');
const sizeFilter = document.getElementById('sizeFilter');
const sortBySelect = document.getElementById('sortBy');
const productGrid = document.getElementById('productGrid');
const activeFiltersDiv = document.getElementById('activeFilters');
const noResults = document.getElementById('noResults');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartCount = document.getElementById('cartCount');
const cartCountDrawer = document.getElementById('cartCountDrawer');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const quickViewModal = document.getElementById('quickViewModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');

// Initialize
function init() {
    loadCartFromStorage();
    renderProducts();
    updateCartUI();
    setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Filters
    categoryFilter.addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        renderProducts();
        updateActiveFilters();
    });

    genderFilter.addEventListener('change', (e) => {
        selectedGender = e.target.value;
        renderProducts();
        updateActiveFilters();
    });

    sizeFilter.addEventListener('change', (e) => {
        selectedSize = e.target.value;
        renderProducts();
        updateActiveFilters();
    });

    sortBySelect.addEventListener('change', (e) => {
        sortBy = e.target.value;
        renderProducts();
    });

    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Modal
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Newsletter
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // Mobile menu links
    const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const iconMenu = mobileMenuBtn.querySelector('.icon-menu');
            const iconClose = mobileMenuBtn.querySelector('.icon-close');
            iconMenu.style.display = 'block';
            iconClose.style.display = 'none';
        });
    });
}

// Mobile Menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    const iconMenu = mobileMenuBtn.querySelector('.icon-menu');
    const iconClose = mobileMenuBtn.querySelector('.icon-close');

    if (mobileMenu.classList.contains('active')) {
        iconMenu.style.display = 'none';
        iconClose.style.display = 'block';
    } else {
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
    }
}

function filterByCategory(category) {
    selectedCategory = category;
    categoryFilter.value = category;
    renderProducts();
    updateActiveFilters();
    scrollToProducts();
}

// Products
function renderProducts() {
    const filtered = filterProducts();
    const sorted = sortProducts(filtered);

    if (sorted.length === 0) {
        productGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    productGrid.innerHTML = sorted.map(product => createProductCard(product)).join('');
}

function filterProducts() {
    return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
        const matchesGender = selectedGender === 'Tất cả' || product.gender === selectedGender;
        const matchesSize = selectedSize === 'Tất cả' || product.sizes.includes(selectedSize);

        return matchesSearch && matchesCategory && matchesGender && matchesSize;
    });
}

function sortProducts(products) {
    const sorted = [...products];

    switch (sortBy) {
        case 'price-asc':
            sorted.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
            break;
        case 'price-desc':
            sorted.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
            break;
        case 'popular':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        default:
            break;
    }

    return sorted;
}

function createProductCard(product) {
    const badgeClass = product.badge === 'Sale' ? 'badge-sale' :
                       product.badge === 'Mới' ? 'badge-new' : 'badge-hot';
    const detailUrl = `chi-tiet-san-pham.html?id=${product.id}`;

    return `
        <div class="product-card">
            <div class="product-image-container">
                <a href="${detailUrl}">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </a>
                ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn btn-add-cart" onclick="addToCart(${product.id})">
                        Thêm vào giỏ
                    </button>
                    <a href="${detailUrl}" class="product-action-btn btn-quick-view product-detail-link">
                        Chi tiết
                    </a>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name"><a href="${detailUrl}">${product.name}</a></h3>
                <div class="product-rating">
                    ${createStars(product.rating)}
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `<div class="color-dot" style="background-color: ${color}"></div>`).join('')}
                </div>
                <div class="product-sizes">
                    ${product.sizes.map(size => `<span class="size-badge">${size}</span>`).join('')}
                </div>
                <div class="product-price">
                    ${product.salePrice ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
                    <span class="price-current">${formatPrice(product.salePrice || product.price)}</span>
                </div>
            </div>
        </div>
    `;
}

function createStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        const filled = i < Math.floor(rating);
        stars += `
            <svg class="star ${filled ? 'star-filled' : 'star-empty'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        `;
    }
    return stars;
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

// Active Filters
function updateActiveFilters() {
    const filters = [];

    if (selectedCategory !== 'Tất cả') filters.push(selectedCategory);
    if (selectedGender !== 'Tất cả') filters.push(selectedGender);
    if (selectedSize !== 'Tất cả') filters.push(`Size ${selectedSize}`);

    if (filters.length === 0) {
        activeFiltersDiv.innerHTML = '';
        return;
    }

    activeFiltersDiv.innerHTML = `
        ${filters.map(filter => `<span class="filter-chip">${filter}</span>`).join('')}
        <button class="clear-filters" onclick="clearFilters()">Xóa bộ lọc</button>
    `;
}

function clearFilters() {
    selectedCategory = 'Tất cả';
    selectedGender = 'Tất cả';
    selectedSize = 'Tất cả';

    categoryFilter.value = 'Tất cả';
    genderFilter.value = 'Tất cả';
    sizeFilter.value = 'Tất cả';

    renderProducts();
    updateActiveFilters();
}

// Cart Functions
function addToCart(productId, size = 'M', color = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const selectedColor = color || product.colors[0];
    const existingItem = cart.find(
        item => item.id === productId && item.selectedSize === size && item.selectedColor === selectedColor
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            selectedSize: size,
            selectedColor: selectedColor
        });
    }

    saveCartToStorage();
    updateCartUI();
    openCart();
}

function updateQuantity(productId, size, color, delta) {
    const item = cart.find(
        item => item.id === productId && item.selectedSize === size && item.selectedColor === color
    );

    if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        saveCartToStorage();
        updateCartUI();
    }
}

function removeFromCart(productId, size, color) {
    cart = cart.filter(
        item => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
    );
    saveCartToStorage();
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);

    cartCount.textContent = totalItems;
    cartCountDrawer.textContent = totalItems;
    cartTotal.textContent = formatPrice(totalPrice);

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Giỏ hàng trống</div>';
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => createCartItem(item)).join('');
        cartFooter.style.display = 'block';
    }
}

function createCartItem(item) {
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-details">Size: ${item.selectedSize}</p>
                <div class="cart-item-details">
                    <span class="cart-item-color" style="background-color: ${item.selectedColor}"></span>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.selectedSize}', '${item.selectedColor}', -1)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.selectedSize}', '${item.selectedColor}', 1)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.selectedSize}', '${item.selectedColor}')">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="cart-item-price">
                ${formatPrice((item.salePrice || item.price) * item.quantity)}
            </div>
        </div>
    `;
}

function openCart() {
    cartDrawer.classList.add('active');
}

function closeCart() {
    cartDrawer.classList.remove('active');
}

// LocalStorage
function saveCartToStorage() {
    localStorage.setItem('vibewear-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('vibewear-cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

// Quick View Modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalBody.innerHTML = `
        <div>
            <img src="${product.image}" alt="${product.name}" class="modal-image">
        </div>
        <div class="modal-info">
            <p class="modal-category">${product.category}</p>
            <h3 class="modal-title">${product.name}</h3>
            <div class="modal-rating">
                ${createStars(product.rating)}
                <span class="rating-text">(${product.rating})</span>
            </div>
            <div class="modal-price">
                ${product.salePrice ? `<span class="modal-price-original">${formatPrice(product.price)}</span>` : ''}
                <span class="modal-price-current">${formatPrice(product.salePrice || product.price)}</span>
            </div>
            <div class="modal-section">
                <p class="modal-section-title">Màu sắc:</p>
                <div class="modal-colors">
                    ${product.colors.map(color => `
                        <div class="modal-color" style="background-color: ${color}"></div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-section">
                <p class="modal-section-title">Kích cỡ:</p>
                <div class="modal-sizes">
                    ${product.sizes.map(size => `
                        <button class="modal-size">${size}</button>
                    `).join('')}
                </div>
            </div>
            <button class="btn btn-primary btn-full" onclick="addToCartFromModal(${product.id})">
                Thêm vào giỏ hàng
            </button>
        </div>
    `;

    quickViewModal.classList.add('active');
}

function closeModal() {
    quickViewModal.classList.remove('active');
}

function addToCartFromModal(productId) {
    addToCart(productId);
    closeModal();
}

// Newsletter
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = emailInput.value;

    if (email && email.includes('@')) {
        alert('Cảm ơn bạn đã đăng ký!');
        emailInput.value = '';
    }
}

// Scroll to Products
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
