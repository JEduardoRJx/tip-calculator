let body = document.querySelector('body');
let billAmountInput = document.querySelector('.amount');
let numOfPeopleInput = document.querySelector('.numofpeople');
let calcBtn = document.querySelector('.calc-btn');
let clearBtn = document.querySelector('.clear-btn');

window.addEventListener('load', handlePageLoad);
billAmountInput.addEventListener('keyup', calcBtnStatus);
numOfPeopleInput.addEventListener('keyup', calcBtnStatus);
calcBtn.addEventListener('click', calcTip);


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
  let billAmount = parseFloat(billAmountInput.value)
  let numOfPeople = parseFloat(numOfPeopleInput.value)
  let serviceRating = parseFloat(document.querySelector('select').value)
  let total = (billAmount * serviceRating) / numOfPeople;
  total = Math.round(total * 100) / 100
  total = total.toFixed(2)
  renderTip(total);
}