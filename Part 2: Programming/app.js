const dna1 = '';
const dna2 = '';

function isValidDNA(str) {
  const validChars = [...'CATG'];
  for (let i = 0; i < str.length; i++) {
    if (!validChars.includes(str[i])) {
      return false;
    }
  }
  return true;
}

console.log(isValidDNA('ACGT'));
