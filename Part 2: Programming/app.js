function isValidDNA(str) {
  const validChars = [...'CATG'];
  if (str.length < 0) return false;
  for (let i = 0; i < str.length; i++) {
    if (!validChars.includes(str[i])) {
      return false;
    }
  }
  return true;
}

function calcHammingDistance(dna1, dna2) {
  const d1 = isValidDNA(dna1);
  const d2 = isValidDNA(dna2);

  if (d1 == false || d2 == false) return;

  let mismatch = 0;
  for (let i = 0; i < dna1.length; i++) {
    if (dna1[i] != dna2[i]) {
      mismatch += 1;
    }
  }

  return mismatch;
}

function isSameLength(a, b) {
  return a.length != b.length ? false : true;
}

// Global variables
let isDNA1Valid = false;
let isDNA2Valid = false;

// DOM elements
const input1 = document.getElementById('DNA1');
const input2 = document.getElementById('DNA2');

const err1 = document.querySelector('.d1');
const err2 = document.querySelector('.d2');
const err3 = document.getElementById('calcErr');

const btn = document.getElementById('calc');
const result = document.getElementById('result');

// Event Listeners
input1.addEventListener('input', () => {
  input1.value = input1.value.toUpperCase();
  if (isValidDNA(input1.value) == false) {
    err1.textContent = '* Not a valid DNA String *';
    isDNA1Valid = false;
  } else {
    err1.textContent = '';
    isDNA1Valid = true;
  }
});

input2.addEventListener('input', () => {
  input2.value = input2.value.toUpperCase();
  if (isValidDNA(input2.value) == false) {
    err2.textContent = '* Not a valid DNA String *';
    isDNA2Valid = false;
  } else {
    err2.textContent = '';
    isDNA2Valid = true;
  }
});

btn.addEventListener('click', () => {
  result.textContent = '';
  if (err1.textContent != '' || err2.textContent != '') return;

  const dna1 = input1.value;
  const dna2 = input2.value;

  if (dna1.length <= 0 || dna2.length <= 0) {
    err3.classList.remove('hide');
    err3.textContent = '* Fill all input boxes *';
    result.classList.add('hide');
    return;
  } else {
    err3.classList.add('hide');
  }

  if (isSameLength(dna1, dna2) == false) {
    err3.textContent = '* Not Same length *';
    err3.classList.remove('hide');
    result.classList.add('hide');
    return;
  } else {
    err3.textContent = '';
  }

  err3.classList.add('hide');
  const difference = calcHammingDistance(dna1, dna2);
  result.classList.remove('hide');
  result.textContent = `Difference: ${difference}`;
});

// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
