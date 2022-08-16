/*
Գրել ֆունկցիա, որը որպես պարամետր կստանա մատրից եւ մատրիցին
կավելացնի աստղանիշներով ( * ) border։
Example։ ['asd',
' qwe']
Expected Output: ['*****',
'* asd *',
'* qwe *',
'*****']
*/

let arr = ["asd", "qwe"];

function border(arr){
    let str = "";
    for (let i in arr[0]) {
      str += "*";
    }

    arr.push(str);
    arr.unshift(str);

    let newArr = arr.map((el) => {
      return "*" + el + "*";
    });
    return newArr;
}

console.log(border(arr));