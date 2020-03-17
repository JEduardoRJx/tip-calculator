let body = document.querySelector('body')
let billAmountInput = document.querySelector('.amount')
let numOfPeopleInput = document.querySelector('.numofpeople')
let calcBtn = document.querySelector('.calc-btn')
let clearBtn = document.querySelector('.clear-btn')

window.addEventListener('load', handlePageLoad);


function handlePageLoad() {
  calcBtnStatus();
}

