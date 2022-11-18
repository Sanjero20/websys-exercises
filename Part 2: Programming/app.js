function isValidDNA(str) {
  const validChars = [...'CATG'];
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

const input1 = document.getElementById('DNA1');
const input2 = document.getElementById('DNA2');

const err1 = document.querySelector('.d1');
const err2 = document.querySelector('.d2');

const btn = document.getElementById('calc');

input1.addEventListener('input', () => {
  input1.value = input1.value.toUpperCase();
  if (isValidDNA(input1.value) == false) {
    err1.textContent = '* Not a valid DNA String *';
  } else {
    err1.textContent = '';
  }
});

input2.addEventListener('input', () => {
  input2.value = input2.value.toUpperCase();
  if (isValidDNA(input2.value) == false) {
    err2.textContent = '* Not a valid DNA String *';
  } else {
    err2.textContent = '';
  }
});

btn.addEventListener('click', () => {});
