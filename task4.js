/*
Գրել ֆունկցիա, որը որպես պարամետր կստանա երկու զանգված եւ կստուգի
նրանք նման են թե ոչ։
(Երկու զանգված կոչվում են նման, եթե զանգվածներից մեկում առավելագույնը մեկ զույգ տարրերի
դասավորությունը փոխելով կստացվի մյուս զանգվածը)
a = [1, 2, 3] , b = [2, 1, 3] - նման են
a = [1, 2, 2] , b = [2, 1, 1] - նման չեն
*/

let a = [1, 2, 3],
    b = [2, 1, 3];

function alikeArr(a, b){
    for(let key in a){
        let newArr = [...a];
        for(let i in newArr){
            newArr[i] = a[key]
            newArr[key] = a[i]
            if(JSON.stringify(newArr) == JSON.stringify(b)) return true;
            newArr = [...a]
        }
    }
    return false
}

console.log(alikeArr(a,b));