let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elList = document.querySelector('.js-list');

elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let elItem = document.createElement('li');
  let elText = document.createElement("p")
  elItem.appendChild(elText)
  elItem.setAttribute('class', 'list-unstyled');
  elText.setAttribute(
    'class',
    'ms-1 p-2 rounded-circle bg-warning text-light'
  );

  elList.appendChild(elItem);
  
  let time = +elInput.value;
  
  elText.textContent = time
  console.log(time);
  let timeInterval = setInterval(() => {
    time--;
    elText.textContent = time;
  }, 1000);
  
  setTimeout(() => {
    clearInterval(timeInterval)
    elItem.innerHTML = ''
  }, time * 1000);
  

  elInput.value = '';
});
