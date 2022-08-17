/*
Գրել ֆունկցիա, որը որպես պարամետր կստանա string եւ կվերադարցնի՝ true
եթե string – ի տարրերը վերադասավորելով հնարավոր է ստանալ palindrome,
հակառակ դեպքում՝ false.
Example։ 'aabb' Expected Output: true
Example։ 'abbd' Expected Output: false
*/

let txt = "aaeeebb";

function palindrome(str){
    let obj = {};
    let odd = 0

    for(let i in str){
        if (obj[str[i]]) {
          obj[str[i]]++;
        } else {
          obj[str[i]] = 1;
        }
    }
    let values = Object.values(obj)
    values.forEach(el => el % 2 !== 0 ? odd++ : false)

    if(odd === 0 || odd === 1) return true;

    return false
}

console.log(palindrome(txt));