function encode(string) {
  let encodedString = '';
  let count = 1;

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (char === string[index + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        char = String(count) + char;
        count = 1;
      }

      encodedString += char;
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
      while (true) {
        index += 1;
        if (!Number(string[index])) break;
      }

      let count = Number(string.slice(indexStart, index));
      char = string[index].repeat(count);
    }

    decodedString += char;
    index += 1;
  }

  return decodedString;
}

module.exports = { encode, decode };