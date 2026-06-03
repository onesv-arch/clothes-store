const products = [
    {
        id: 1,
        name: 'Áo Thun Basic Trắng',
        category: 'Áo thun',
        gender: 'Unisex',
        price: 299000,
        salePrice: 249000,
        image: 'https://images.unsplash.com/photo-1630780565118-511258d74d08?w=900',
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
        image: 'https://images.unsplash.com/photo-1630780564223-0aae7795126b?w=900',
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
        image: 'https://images.unsplash.com/photo-1615984259571-4d4d1084abbd?w=900',
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
        image: 'https://images.unsplash.com/photo-1770918655078-600f74bc53c5?w=900',
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
        image: 'https://images.unsplash.com/photo-1776273920158-510b171e936f?w=900',
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
        image: 'https://images.unsplash.com/photo-1762764919554-cfd608ffc1a0?w=900',
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
        image: 'https://images.unsplash.com/photo-1765044145286-2320351f2f03?w=900',
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
        image: 'https://images.unsplash.com/photo-1772987301731-2a66c92c6475?w=900',
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
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900',
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
        image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=900',
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
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=900',
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
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900',
        rating: 4.9,
        colors: ['#000000', '#D4AF37'],
        sizes: ['One size'],
        badge: 'Mới'
    }
];

let selectedSize = '';
let selectedColor = '';
let quantity = 1;

const productDetail = document.getElementById('productDetail');
const breadcrumbName = document.getElementById('breadcrumbName');

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

function getProduct() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id')) || 1;
    return products.find(product => product.id === id);
}

function renderProduct() {
    const product = getProduct();

    if (!product) {
        productDetail.innerHTML = `
            <div class="detail-not-found">
                <h2>Không tìm thấy sản phẩm</h2>
                <a href="trang-chu.html" class="btn btn-primary">Quay về trang chủ</a>
            </div>
        `;
        return;
    }

    selectedSize = product.sizes[0];
    selectedColor = product.colors[0];
    breadcrumbName.textContent = product.name;
    document.title = `${product.name} - VIBEWEAR`;

    productDetail.innerHTML = `
        <div class="detail-gallery">
            <div class="detail-badge">${product.badge}</div>
            <img src="${product.image}" alt="${product.name}" class="detail-image">
        </div>
        <div class="detail-info-panel">
            <p class="detail-category">${product.category} / ${product.gender}</p>
            <h1 class="detail-title">${product.name}</h1>
            <p class="detail-desc">Thiết kế hiện đại, dễ phối đồ và phù hợp cho nhiều hoạt động hằng ngày của sinh viên.</p>
            <div class="detail-rating">${product.rating} / 5 sao</div>
            <div class="detail-price">
                <span class="detail-price-current">${formatPrice(product.salePrice || product.price)}</span>
                ${product.salePrice ? `<span class="detail-price-old">${formatPrice(product.price)}</span>` : ''}
                
            </div>
            <div class="detail-option">
                <h3>Chọn màu</h3>
                <div class="detail-colors">
                    ${product.colors
                        .map(color => `
                            <button
                                class="detail-color ${color === selectedColor ? 'active' : ''}"
                                style="background-color:${color}"
                                data-color="${color}"
                                onclick="selectColor('${color}')"
                                aria-label="Chọn màu ${color}">
                            </button>
                        `)
                        .join('')}
                </div>
            </div>
            <div class="detail-option">
                <h3>Chọn size</h3>
                <div class="detail-sizes">
                    ${product.sizes
                        .map(size => `
                            <button class="detail-size ${size === selectedSize ? 'active' : ''}" onclick="selectSize('${size}')">
                                ${size}
                            </button>
                        `)
                        .join('')}
                </div>
            </div>
            <div class="detail-option">
                <h3>Số lượng</h3>
                <div class="detail-quantity">
                    <button onclick="changeQuantity(-1)">-</button>
                    <span id="quantityValue">${quantity}</span>
                    <button onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            <button class="btn btn-primary detail-add-btn" onclick="addDetailToCart(${product.id})">Thêm vào giỏ hàng</button>
        </div>
    `;
}

function selectColor(color) {
    selectedColor = color;
    document
        .querySelectorAll('.detail-color')
        .forEach(btn => btn.classList.toggle('active', btn.dataset.color === color));
}

function selectSize(size) {
    selectedSize = size;
    document
        .querySelectorAll('.detail-size')
        .forEach(btn => btn.classList.toggle('active', btn.textContent === size));
}

function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta);
    document.getElementById('quantityValue').textContent = quantity;
}

function addDetailToCart(productId) {
    const product = products.find(item => item.id === productId);
    const cart = JSON.parse(localStorage.getItem('vibewear-cart')) || [];
    const existingItem = cart.find(
        item => item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity, selectedSize, selectedColor });
    }

    localStorage.setItem('vibewear-cart', JSON.stringify(cart));
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

renderProduct();