function encode(string) {
  let encodedString = '';
  let count = 1;

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (char === string[index + 1]) {
      count += 1;
    } else {
      if (count > 1) char = String(count) + char;

      encodedString += char;
      count = 1;
    }
  }

  return encodedString;
}

function decode(string) {
  let decodedString = '';
  let index = 0;

  while (index < string.length) {
    let char = string[index];

    if (Number(char)) {
      let indexStart = index;
      let numberLength = 1;
      while (true) {
        index += 1;
        let next = string[index];
        if (Number(next)) {
          numberLength += 1;
        } else {
          break;
        }
      }

      let count = Number(string.slice(indexStart, indexStart + numberLength));
      char = '';

      for (let current = 1; current <= count; current += 1) {
        char += string[index];
      }
    }

    decodedString += char;
    index += 1;
  }

  return decodedString;
}

module.exports = { encode, decode };