const btn = document.querySelector('.btn')
const errortext = document.querySelectorAll('.errortext')
const inputall = document.querySelectorAll('.inputall')

const dayValue = parseInt(document.getElementById('day').value)
const monthValue = parseInt(document.getElementById('month').value)
const yearValue = parseInt(document.getElementById('year').value)

btn.addEventListener('click', () => {
  inputall.forEach(input => {
    if (input.value == '') {
      addErrorState(input)
    }

  })
})

inputall.forEach(input => {
  input.addEventListener('keyup', () => {
    if (input.value !== '') {
      removeErrorState(input)
    }

  })
})

const error2 = document.querySelectorAll('.error2')
btn.addEventListener('click', () => {

  console.log(dayValue)

  // if(dayValue < 0 || dayValue > 31){
  //   const err2 = day.closest('.inputs').querySelector('.error2')
  //   console.log('value detected')
  // }
})


//! helper functions
function addErrorState(input) {
  const label = input.previousElementSibling
  const span = input.nextElementSibling
  span.classList.add('show')
  label.classList.add('error')
  input.classList.add('border')
}

function removeErrorState(input) {
  const span = input.nextElementSibling
  span.classList.remove('show')
  const label = input.previousElementSibling
  label.classList.remove('error')
  input.classList.remove('border')
}

function addErr2() {
  if(dayValue < 0 || dayValue > 31){
    const err2 = day.closest('.inputs').querySelector('.error2')
    err2.classList.add('show')
  }
}




  document.querySelector('.btn').addEventListener('click', function () {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; 
    const year = parseInt(document.getElementById('year').value);

  
    const inputDate = new Date(year, month, day);
    const currentDate = new Date();

    if (isNaN(inputDate) || inputDate > currentDate) {
      alert("Please enter a valid past date.");
      return;
    }

    let years = currentDate.getFullYear() - inputDate.getFullYear();
    let months = currentDate.getMonth() - inputDate.getMonth();
    let days = currentDate.getDate() - inputDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    document.querySelector('.yearresult').textContent = years;
    document.querySelector('.monthresult').textContent = months;
    document.querySelector('.dayresult').textContent = days;
  });
