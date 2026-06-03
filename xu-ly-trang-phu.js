function formatStorePrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

function getStoreCart() {
    return JSON.parse(localStorage.getItem('vibewear-cart')) || [];
}

function saveStoreCart(cart) {
    localStorage.setItem('vibewear-cart', JSON.stringify(cart));
}

function getCartSubtotal() {
    return getStoreCart().reduce(
        (total, item) => total + (item.salePrice || item.price) * item.quantity,
        0
    );
}

function renderCartPage() {
    const list = document.getElementById('cartPageItems');
    const total = document.getElementById('cartPageTotal');

    if (!list || !total) return;

    const cart = getStoreCart();

    if (cart.length === 0) {
        list.innerHTML =
            '<div class="store-card">Giỏ hàng đang trống. <a href="index.html#products">Quay lại mua sắm</a></div>';
        total.textContent = '0đ';
        return;
    }

    list.innerHTML = cart
        .map(
            (item, index) => `
                <div class="cart-page-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>Size: ${item.selectedSize || 'M'} - Số lượng: ${item.quantity}</p>
                        <p>${formatStorePrice((item.salePrice || item.price) * item.quantity)}</p>
                    </div>
                    <button onclick="removeCartPageItem(${index})">Xóa</button>
                </div>
            `
        )
        .join('');
    total.textContent = formatStorePrice(getCartSubtotal());
}

function removeCartPageItem(index) {
    const cart = getStoreCart();

    cart.splice(index, 1);
    saveStoreCart(cart);
    renderCartPage();
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    const subtotalElement = document.getElementById('checkoutSubtotal');
    const shippingElement = document.getElementById('checkoutShipping');
    const totalElement = document.getElementById('checkoutTotal');

    if (!subtotalElement || !shippingElement || !totalElement) return;

    const subtotal = getCartSubtotal();
    const shipping = subtotal >= 499000 || subtotal === 0 ? 0 : 30000;

    subtotalElement.textContent = formatStorePrice(subtotal);
    shippingElement.textContent = shipping === 0 ? 'Miễn phí' : formatStorePrice(shipping);
    totalElement.textContent = formatStorePrice(subtotal + shipping);
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const result = document.getElementById('contactMessageResult');

        if (!name || !email || !message) {
            result.textContent = 'Vui lòng nhập đầy đủ thông tin.';
            result.className = 'form-message error';
            return;
        }

        result.textContent = 'Cảm ơn bạn! Nội dung đã được ghi nhận.';
        result.className = 'form-message success';
        contactForm.reset();
    });
}

const checkoutForm = document.getElementById('checkoutForm');

if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('checkoutName').value.trim();
        const phone = document.getElementById('checkoutPhone').value.trim();
        const email = document.getElementById('checkoutEmail').value.trim();
        const address = document.getElementById('checkoutAddress').value.trim();
        const payment = document.querySelector('input[name="paymentMethod"]:checked');
        const result = document.getElementById('checkoutResult');

        if (!name || !phone || !email || !address || !payment) {
            result.textContent = 'Bạn cần nhập đủ thông tin và chọn phương thức thanh toán.';
            result.className = 'form-message error';
            return;
        }

        localStorage.removeItem('vibewear-cart');
        renderCheckoutSummary();
        result.textContent = `Đặt hàng giả thành công! Phương thức đã chọn: ${payment.value}.`;
        result.className = 'form-message success';
        checkoutForm.reset();
    });
}
renderCartPage();
renderCheckoutSummary();
