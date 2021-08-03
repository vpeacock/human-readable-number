const arrNumbersUpTo19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


const findNumberUpTo19 = (number) => {
 return arrNumbersUpTo19[number];
}

const findDozensUnits = (number) => {
  let tmp = number + '';
  let dozenСhar = tmp.slice(0, 1);
  let unitChar = tmp.slice(1);

  if(unitChar === '0'){
    return dozens[dozenСhar];
  }else{
    return dozens[dozenСhar] + ' ' + arrNumbersUpTo19[unitChar];;
  }  
}

module.exports = function toReadable (number) {
  if (number <= 19) {
    return findNumberUpTo19(number);
  }

  if (number >= 20 && number <= 99) {
    return findDozensUnits(number);
  }

  if (number >= 100 && number <= 999) {
    let tmp = number + '';
    let hundredСhar = +tmp[0];
    let dozenСhar = +tmp.slice(1, 3)

    if (dozenСhar === 0){
      return findNumberUpTo19(hundredСhar) + ' hundred';
    }else if (dozenСhar < 20) {
      return findNumberUpTo19(hundredСhar) + ' hundred '+ findNumberUpTo19(dozenСhar);
    } else if(dozenСhar >= 20)  {
      return findNumberUpTo19(hundredСhar) + ' hundred '+ findDozensUnits(dozenСhar);
    }
  }
}



