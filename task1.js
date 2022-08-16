/*
1.Գրել ֆունկցիա, որը որպես պարամետր կստանա string եւ բոլոր բառերի առաջին
տառը կդարձնի մեծատառ։
Example string: 'lorem ipsum dolor sit amet'
Expected Output: 'Lorem Ipsum Dolor Sit Amet'
*/

let str = "lorem ipsum dolor sit amet";

function firsLetterUpperCase(txt){
    let textArr = txt.split(" ")
    let upperArr = textArr.map(el => el[0].toUpperCase() + el.slice(1))
    let upperTxt = upperArr.join(" ")
    return upperTxt;
}

console.log(firsLetterUpperCase(str));