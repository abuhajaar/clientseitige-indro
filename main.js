// Produkte definieren
const products = [
  { id: 1, name: "Europe", price: 14.99 },
  { id: 2, name: "Asia", price: 10.99 },
  { id: 3, name: "Afrika", price: 18.99 },
  { id: 4, name: "Amerika", price: 20.99 },
  { id: 5, name: "Australia", price: 12.99 },
];

// Produkte in das Produkt-Listenelement einfügen
const productList = document.getElementById("product-list");
products.forEach((product) => {
  const li = document.createElement("li");
  li.textContent = `${product.name} - ${product.price.toFixed(2)} €/Kg`;
  productList.appendChild(li);
});

// Bestellung aufgeben

// keterangan form
const orderForm = document.getElementById("order-form");
const productSelect = document.getElementById("product-select");

products.forEach((product) => {
  const option = document.createElement("option");

  option.value = product.id;
  option.textContent = `${product.name} - ${product.price.toFixed(2)} €`;
  productSelect.appendChild(option);
});
const orderList = document.getElementById("order-list");

// Fungsi Submit // Daten umwandlung // Termasuk Event
orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productId = parseInt(productSelect.value);
  console.log(productId);
  if (productId !== 1) {
    const quantity = parseInt(document.getElementById("quantity-input").value);
    const product = products.find((p) => p.id === productId);
    const li = document.createElement("li");

    li.textContent = `${quantity}x ${product.name} - ${(
      product.price * quantity
    ).toFixed(2)} €`;
    orderList.appendChild(li);
    openPopup()
  } else {
    alert("sedang tidak menerima pesanan");
  }
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
