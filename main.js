/* ===== Variables ===== */
const products = [
  {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    img: './images/product-1@3x.png',
    tag: '$3,999',
    price: 3999,
    quantity: 1
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    img: './images/product-2@3x.png',
    tag: '$1,299',
    price: 1299,
    quantity: 1
  }
]

/* ===== Nodes ===== */
const cartItems = document.getElementById('cart__items')

/* ===== Functions ===== */
// 1. 載入購物車商品
; (function () {
  products.forEach((product) => {
    cartItems.innerHTML += `
      <div class="cart__item" data-id="${product.id}">
        <img src="${product.img}" alt="product image" class="item__img">
        <div class="item__info">
          <div class="item__detail">
            <span class="item__name">${product.name}</span>
            <div class="item__quantity">
              <div class="item__quantity--btn item__quantity--minus">－</div>
              <span class="item__quantity--number">${product.quantity}</span>
              <div class="item__quantity--btn item__quantity--plus">＋</div>
            </div>
          </div>
          <span class="item__price" data-price="${product.price}">${product.tag}</span>
        </div>
      </div>
    `
  })
})()

/* ===== Event Listener ===== */
