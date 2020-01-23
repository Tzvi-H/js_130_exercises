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

function translate(rna = '') {
  let proteins = [];

  for (let index = 0; index < rna.length; index += 3) {
    let protein = CODON_TO_POLYPEPTIDE[rna.slice(index, index + 3)];

    if (protein === 'STOP') break;
    if (protein === undefined) throw new Error('Invalid codon');

    proteins.push(protein);
  }

  return proteins;
}

module.exports = translate;
