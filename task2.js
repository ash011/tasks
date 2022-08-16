/*
Գրել ֆունկցիա, , որը որպես պարամետր կստանա թվերի զանգված եւ կգտնի
համապատասխանաբար երկրորդ ամենափոքր եւ երկրորդ ամենամեծ թվերը:
Example array : [1,2,3,4,5]
Expected Output : 2,4
*/

let arr = [1, 2, 3, 4, 5];

function secondNum(arr) {
  let secondMin = arr.sort((a, b) => (a > b ? 1 : -1))[1];
  let secondMax = arr.sort((a, b) => (a > b ? -1 : 1))[1];

  return [secondMin, secondMax]
}

console.log(secondNum(arr));
