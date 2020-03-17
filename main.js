let body = document.querySelector('body');
let billAmountInput = document.querySelector('.amount');
let numOfPeopleInput = document.querySelector('.numofpeople');
let calcBtn = document.querySelector('.calc-btn');
let clearBtn = document.querySelector('.clear-btn');

window.addEventListener('load', handlePageLoad);
billAmountInput.addEventListener('keyup', calcBtnStatus);
numOfPeopleInput.addEventListener('keyup', calcBtnStatus);
calcBtn.addEventListener('click', calcTip);
clearBtn.addEventListener('click', clearInputs);

function handlePageLoad() {
  calcBtnStatus();
}

function calcBtnStatus() {
  let billAmount = parseFloat(billAmountInput.value);
  let numOfPeople = parseFloat(numOfPeopleInput.value);
  if ( billAmount > 0 && numOfPeople > 0) {
    calcBtn.disabled = false;
    clearBtn.disabled = false;
  } else {
    calcBtn.disabled = true;
    clearBtn.disabled = true;
  }
}

function calcTip() {
  let billAmount = parseFloat(billAmountInput.value);
  let numOfPeople = parseFloat(numOfPeopleInput.value);
  let serviceRating = parseFloat(document.querySelector('select').value);
  let total = (billAmount * serviceRating) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  renderTip(total);
}

function renderTip(total) {
  clearTip();
  body.insertAdjacentHTML('beforeend', `
  <div class='tip'> 
    <h1 class='tip'>TIP AMOUNT</h1>
    <h1 class='tip'>$${total} Each</h1>
  </div>
`);
}

function clearTip() {
  let sibiling = document.querySelector('.tip');
  if (sibiling) {
    sibiling.parentNode.removeChild(sibiling);
 }
}

function clearInputs() {
  let serviceRating = document.querySelector('select')
  serviceRating.value = '--';
  billAmountInput.value = '';
  numOfPeopleInput.value = '';
  calcBtnStatus();
  clearTip();
}