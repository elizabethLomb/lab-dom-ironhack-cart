function deleteItem(e) {
  e.currentTarget.parentElement.parentElement.remove();
}

function getPriceByProduct(itemNode) {
  return Number(itemNode.querySelector(".price").innerText);
}

function updatePriceByProduct(productPrice, index) {
  const quantities = document.getElementsByClassName("quantity");
  const quantity = Number(quantities[index].value);
  const finalPrices = document.getElementsByClassName("final-price");
  finalPrices[index].innerText = productPrice * quantity;
}

function getTotalPrice() {
  const products = document.getElementsByClassName("main");

  for (let i = 0; i < products.length; i++) {
    const price = getPriceByProduct(products[i]);
    updatePriceByProduct(price, i);

  }


  const priceElements = document.getElementsByClassName("final-price");
  let acc = 0;
  for (let i = 0; i < priceElements.length; i++) {
    acc += Number(priceElements[i].innerText);
  }
  document.getElementsByClassName("total-price")[0].innerText = acc;
}


function createQuantityInput() {

}

function createDeleteButton() {
  const button = document.createElement("button")
  button.setAttribute()
}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
 const div = document.createElement("div")
 const qtyVal = document.getElementById("new-qty").value
 const product = document.getElementById("new-product").value
 
 

}
function createMain (){
  const newMainDiv = document.createElement("div")
  const newMainSpan =document.createElement("span")
  const newMainLabel = document.createElement("label")
  const newMainInput = document.createElement("input")
  const newMainButton = document.createElement("button")

}
function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  createItemButton.addEventListener("click", createNewItemRow)


  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};