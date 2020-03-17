let body = document.querySelector('body')
let billAmountInput = document.querySelector('.amount')
let numOfPeopleInput = document.querySelector('.numofpeople')
let calcBtn = document.querySelector('.calc-btn')
let clearBtn = document.querySelector('.clear-btn')

window.addEventListener('load', handlePageLoad);


function handlePageLoad() {
  calcBtnStatus();
}

function calcBtnStatus() {
  let billAmount = parseFloat(billAmountInput.value)
  let numOfPeople = parseFloat(numOfPeopleInput.value)
  if ( billAmount > 0 && numOfPeople > 0) {
    calcBtn.disabled = false;
    clearBtn.disabled = false
  } else {
    calcBtn.disabled = true;
    clearBtn.disabled = true;
  }
}