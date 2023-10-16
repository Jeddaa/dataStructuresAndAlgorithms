/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const leng = digits.length;
  if (leng == 0) {
    return 1;
  }
  const test = BigInt(digits.join('')) + 1n;
  digits = Array.from(String(test), Number);

  return digits
    
};