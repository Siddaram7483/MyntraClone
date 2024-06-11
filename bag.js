// const CONVENIENCE_FEES=99;
// let bagItemObjects;
// onload();

// function onLoad(){
//   loadBagItemsobjects();
//   displayBagItems();
//   displayBagSummary();
// }
// function  displayBagSummary(){
//   let bagSummaryElement=document.querySelector('bag-summary');
//   let totalItem=bagItemObjects.length;
//   let totalMRP=0;
//   let totalDiscount=0;
//   bagItemObjects.forEach(bagItem =>{
//     totalMRP += bagItem.original_price - bagItem.current_price;
//   });

//   let finalPayment = totalMRP-totalDiscount+CONVENIENCE_FEES;

//   bagSummaryElement.innerHTML=`
//   <div class="bag-details-container">
//     <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
//     <div class="price-item">
//       <span class="price-item-tag">Total MRP</span>
//       <span class="price-item-value">₹${totalMRP}</span>
//     </div>
//     <div class="price-item">
//       <span class="price-item-tag">Discount on MRP</span>
//       <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
//     </div>
//     <div class="price-item">
//       <span class="price-item-tag">Convenience Fee</span>
//       <span class="price-item-value">₹99</span>
//     </div>
//     <hr>
//     <div class="price-footer">
//       <span class="price-item-tag">Total Amount</span>
//       <span class="price-item-value">₹${finalPayment}</span>
//     </div>
//   </div>
//   <button class="btn-place-order">
//     <div class="css-xjhrni">PLACE ORDER</div>
//   </button>`;
// }

// function loadBagItemObjects(){
//   console.log(bagItems);
//   bagItemObjects = bagItems.map(itemId=>{
//     for(let i=0; i< items.length;i++){
//       if(itemId==items[i].id){
//       return items[i];
//       }
//     }
//   });
//   console.log(bagItemObjects);

// }
// function displayBagItems(){
//   let containerElement = document.querySelector('.bag-items-container');
//   let innerHTML='';
//   bagItemObjects.forEach(bagItem => {
//     innerHTML += generateItemHTML(bagItem); 
//   });
//   containerElement.innerHTML = innerHTML;
// }
// function removeFromBag(itemId){
//   bagItems=bagItems.filter(bagItemId => bagItemId!=itemId);
//   localStorage.setItem('bagItems',JSON.stringify(bagItems));
//   loadBagItemObjects();
//   displayBagItems();
//   displayBagIcon();
//   displayBagSummary();
// }
// function generateItemHTML(item){
//   return `<div class="bag-items-container">
//       <div class="bag-item-img" src="${item.image}">
//       </div>
//     </div>
//     <div class="item-right-part">
//       <div class="${item.company}">ADIDAS
//       </div>
//       <div class="${item.item_name}">Men Printed polo coller Indian Cricket ODI jersey</div>
//       <div class="price-conatiner">
//         <span class="${item.current-price}">Rs. 999</span>
//         <span class="${item.original-price}">Rs. 999</span>
//         <span class="${item.discount_percentage}">(0% OFF)</span>
//       </div>
//       <div class="return-period">
//         <span class="${item.return_period}">14 Days</span>
//         Return Available
//       </div>
//       <div class="delivery-details">Delivery By
//         <span class="${item.delivery_date}">10 oct 2024</span>
//       </div>
//       <div class="remove-from-cart" onclick="removeFromBag${item.id}X</div>
// </div>`;
// }
const CONVENIENCE_FEES = 99;
let bagItemObjects;

window.onload = onLoad;

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItems = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${totalItems} Items)</div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹99</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
      </div>
    </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>`;
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem); 
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagItems();
  displayBagIcon();
  displayBagSummary();
}

function generateItemHTML(item) {
  return `
    <div class="bag-item">
      <div class="bag-item-img">
        <img src="${item.image}" alt="${item.item_name}">
      </div>
      <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs. ${item.current_price}</span>
          <span class="original-price">Rs. ${item.original_price}</span>
          <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${item.return_period}</span> Return Available
        </div>
        <div class="delivery-details">Delivery By <span class="delivery-date">${item.delivery_date}</span></div>
        <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
      </div>
    </div>`;
}
