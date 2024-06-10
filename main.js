// Add Fruit or Legumes

const addInput = document.getElementById('addInput');

const fruitsRadio = document.getElementById('fruitsRadio');
const legumesRadio = document.getElementById('legumesRadio');

const AddSpecificButton = document.getElementById('AddSpecificButton');
const AddGeneralButton = document.getElementById('AddGeneralButton');

const listFruits = document.getElementById('listFruits');
const listBoth = document.getElementById('listBoth');
const listLegumes = document.getElementById('listLegumes');

let fruitId = 3;
let bothId = 5;
let legumesId = 3;

AddSpecificButton.addEventListener('click', () => {
  if (addInput.value.length === 0) {
    alert('Please enter a name of fruit or legumes');
  } else {
    if (fruitsRadio.checked) {
      const element = `<li id="fruit${fruitId}">Fruits! - ${addInput.value}</li>`;

      listFruits.innerHTML += element;
      fruitId++;
    } else if (legumesRadio.checked) {
      const element = `<li id="fruit${legumesId}">Legumes! - ${addInput.value}</li>`;

      listLegumes.innerHTML += element;
      legumesId++;
    } else {
      alert('Select type please');
    }
  }
});

AddGeneralButton.addEventListener('click', () => {
  if (addInput.value.length === 0) {
    alert('Please enter a name of fruit or legumes');
  } else {
    if (fruitsRadio.checked) {
      const element = `<li id="fruit${bothId}">Fruits! - ${addInput.value}</li>`;

      listBoth.innerHTML += element;
      bothId++;
    } else if (legumesRadio.checked) {
      const element = `<li id="fruit${bothId}">Legumes! - ${addInput.value}</li>`;

      listBoth.innerHTML += element;
      bothId++;
    } else {
      alert('Select a type please');
    }
  }
});

// Search Fruit or Legume

const searchDeleteInput = document.getElementById('searchDeleteInput');

const searchButton = document.getElementById('searchButton');
const deleteButton = document.getElementById('deleteButton');

searchButton.addEventListener('click', () => {
  const elements = document.getElementsByTagName('li');
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.toLowerCase().includes(searchDeleteInput.value)) {
      elements[i].style.backgroundColor = 'red';
    }
  }
});

deleteButton.addEventListener('click', () => {
  const elements = document.getElementsByTagName('li');
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.toLowerCase().includes(searchDeleteInput.value)) {
      elements[i].remove();
    }
  }
});

// delete Fruit or Legume
