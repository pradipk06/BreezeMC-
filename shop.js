let cart = [];
function addToCart(name, price) {
  const idx = cart.findIndex(item => item.name === name);
  if (idx !== -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}
function removeFromCart(index) {
  cart[index].qty -= 1;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  renderCart();
}
function renderCart() {
  const cartUl = document.getElementById('cart');
  const cartTotalSpan = document.getElementById('cartTotal');
  cartUl.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} × ${item.qty} – ₹${item.price * item.qty} <button onclick="removeFromCart(${idx})" class="remove-btn">Remove</button>`;
    cartUl.appendChild(li);
  });
  cartTotalSpan.textContent = total;
}
window.onload = renderCart;
// Demo payment handlers
function payWithPaytm() {
  if (cart.length === 0) return alert("Cart is empty!");
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  alert("Paytm Payment for ₹" + total + " (integrate with backend)");
}
function payWithPhonePe() {
  if (cart.length === 0) return alert("Cart is empty!");
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  alert("PhonePe Payment for ₹" + total + " (integrate with backend)");
}