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

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');



  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};