function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Создается рандомное число, макс-мин вкл
}
console.log("Random", getRandomIntInclusive(-10, 10));

const arrMaker = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(getRandomIntInclusive(-10, 10));
    }
    console.log("Array", arr);
    return arr;
} //Создается массив из 10 чисел
const arr = arrMaker();

const Max = () => {
    let max = Math.max.apply(null, arr);
    return max;
}
const max = Max();
console.log("Max", max);

const Min = () => {
    let min = Math.min.apply(null, arr);
    return min;
}
const min = Min();
console.log("Min", min);

// const Sum = () => {
//     let s = 0;
//     const resultSum = arr.reduce((acc, item) => {
//         return acc + item;
//     }, 0)
//     return resultSum;
// }
// console.log("Сумма", Sum());

const Sum = () => {
    let s = 0;
    // 1 вариант:
    // for(let i = 0; i < arr.length; i++){
    // s += arr[i];
    // }
    // 2 вариант:
    // arr.map(()=>{})
    // arr.map((item)=>{s+=item})
    // 3 вариант:
    const resultSum = arr.reduce((acc, item) => {
        return acc + item;
    }, 0)
    return resultSum;
}
console.log("Сумма", Sum());

const counter = () => {
    document.getElementById('container').innerHTML = "";
    const par = document.createElement("p"); //"p" - параграф
    par.innerText = `Случайные числа: ${arr}`;
    document.getElementById('container').appendChild(par);

    const par2 = document.createElement("p"); //"p" - параграф
    par2.innerText = `Максимум: ${max}`;
    document.getElementById('container').appendChild(par2);

    const NewMin = Min();
    const par3 = document.createElement("p"); //"p" - параграф
    par3.innerText = `Минимум: ${NewMin}`;
    document.getElementById('container').appendChild(par3);

    // const NewAver = Average();
    // const par4 = document.createElement("p"); //"p" - параграф
    // par4.innerText = `Среднее арифметическое: ${NewAver}`;
    // document.getElementById('container').appendChild(par4);

    const NewSum = Sum();
    const par5 = document.createElement("p"); //"p" - параграф
    par5.innerText = `Сумма: ${NewSum}`;
    document.getElementById('container').appendChild(par5);
}


document.getElementById('button').onclick = () => counter(); //кнопка+функция