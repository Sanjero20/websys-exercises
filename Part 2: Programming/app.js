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
