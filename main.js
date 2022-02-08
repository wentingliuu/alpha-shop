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
const form = document.getElementById('form')
const formParts = form.querySelectorAll('.form__part')
const stepControl = document.getElementById('stepper')
const steps = stepControl.querySelectorAll('.step')
const btnPanel = document.querySelector('.form__btn')
const prevBtn = btnPanel.querySelector('.form__btn--previous')
const nextBtn = btnPanel.querySelector('.form__btn--next')

let currentStep = 0

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

// 2. 切換 step 順序 & 表單內容
function switchFormStep (e) {
  e.preventDefault()
  const thisStep = steps[currentStep]
  const nextStep = steps[currentStep + 1]
  const prevStep = steps[currentStep - 1]
  const thisPart = formParts[currentStep]
  const nextPart = formParts[currentStep + 1]
  const prevPart = formParts[currentStep - 1]

  if (e.target.classList.contains('form__btn--next')) {
    if (currentStep === 2) return
    thisStep.classList.toggle('active')
    thisStep.classList.toggle('checked')
    nextStep.classList.toggle('active')
    thisPart.classList.toggle('d-none')
    nextPart.classList.toggle('d-none')
    currentStep += 1
  } else if (e.target.classList.contains('form__btn--previous')) {
    thisStep.classList.toggle('active')
    prevStep.classList.toggle('checked')
    prevStep.classList.toggle('active')
    thisPart.classList.toggle('d-none')
    prevPart.classList.toggle('d-none')
    currentStep -= 1
  }

  switchBtnStyle()
}

// 3. 修改 button 寬度 & 文字內容
function switchBtnStyle () {
  console.log(currentStep)
  console.log(prevBtn)
  if (currentStep === 0) {
    prevBtn.setAttribute('disabled', true)
    nextBtn.classList.add('first-step')
  } else {
    prevBtn.removeAttribute('disabled')
    nextBtn.classList.remove('first-step')
  }

  if (currentStep === 2) {
    nextBtn.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步 &longrightarrow;'
  }
}

/* ===== Event Listener ===== */
btnPanel.addEventListener('click', switchFormStep)
