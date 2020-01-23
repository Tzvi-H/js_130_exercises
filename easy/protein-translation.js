const CODON_TO_POLYPEPTIDE = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine', 
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP'	
}

function translate(rna) {
  const CODON_LENGTH = 3;
  let protein = [];
  if (!rna) return protein

  for (let index = 0; index < rna.length; index += CODON_LENGTH) {
    let polypeptide = CODON_TO_POLYPEPTIDE[rna.slice(index, index + CODON_LENGTH)];

    if (polypeptide === 'STOP') break;
    if (!polypeptide) throw new Error('Invalid codon');

    protein.push(polypeptide);
  }

  return protein;
}

module.exports = translate;
