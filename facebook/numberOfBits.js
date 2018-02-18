//Write a function that takes an unsigned integer and returns the number of 1 bits it has.

var numberOfBitsByManipulation = function(n) {
  let sum = 0;
  while (n != 0) {
    sum++;
    n &= (n - 1);
  }
  return sum;
};

console.log(numberOfBitsByManipulation(123));


var numberOfBitsByCount = (n)  => {
  let bits = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) != 0) {
      bits++;
    }
    mask <<= 1;
  }
  return bits;
};

console.log(numberOfBitsByCount(123));
