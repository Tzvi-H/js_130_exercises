function encode(string) {
  let encodedString = '';
  let count = 1;

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    let nextChar = string[index + 1];

    if (char === nextChar) {
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
  
}

module.exports = { encode, decode };