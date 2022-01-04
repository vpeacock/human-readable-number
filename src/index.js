const NumbersUpTo19 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const dozens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
  let numLength = (number + '').length;
  let hundred;
  let dozen;
  let unit;

  if (number >= 0 && number <= 19) {
    return NumbersUpTo19[number];
  }

  if (number >= 20 && number <= 99) {
    dozen = +(number + '')[0];
    unit = +(number + '')[1];
    if (unit === 0) {
      return `${dozens[dozen]}`;
    } else {
      return `${dozens[dozen]} ${NumbersUpTo19[unit]}`;
    }
  }

  if (numLength === 3 && number >= 100 && number <= 999) {
    let checkNum = +(number + '').slice(1);

   
    hundred = +(number + '')[0];
    dozen = +(number + '')[1];
    unit = +(number + '')[2];
    if (dozen === 0 && unit === 0) {
        return `${NumbersUpTo19[hundred]} hundred`;
      }else if (unit === 0 && checkNum > 19) {
        return `${NumbersUpTo19[hundred]} hundred ${dozens[dozen]}`;
      } else if (dozen >= 0 && checkNum < 20) {

        return `${NumbersUpTo19[hundred]} hundred ${NumbersUpTo19[checkNum]}`;
      }  else if (dozen >= 0 && checkNum > 19) {
        return `${NumbersUpTo19[hundred]} hundred ${dozens[dozen]} ${NumbersUpTo19[unit]}`
      }

  }
}