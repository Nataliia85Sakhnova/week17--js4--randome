//1. Случайное число
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Создается рандомное число, макс-мин вкл
}
console.log("Random", getRandomIntInclusive(-10, 10));

//2. Массив из 10 случайных чисел
const arrMaker = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(getRandomIntInclusive(-10, 10));
    }
    console.log("Array", arr);
    return arr;
}
const arr = arrMaker();

//3. Максимум
const Max = () => {
    let max = Math.max.apply(null, arr);
    return max;
}
const max = Max();
console.log("Max", max);

//4. Минимум
const Min = () => {
    let min = Math.min.apply(null, arr);
    return min;
}
const min = Min();
console.log("Min", min);

//5. Сумма
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
console.log("Sum", Sum());

//6. Среднее арифметическое
const aver = Sum() / arr.length;
console.log("Aver", aver);

// 7. Умножение
const Multi = () => {
    let m = 1;
    const resultMulti = arr.reduce((acc, item) => {
        return acc * item;
    }, 1)
    return resultMulti;
}
console.log("Multi", Multi());

const counter = () => {
    document.getElementById('container').innerHTML = "";

    const par1 = document.createElement("p"); //"p" - параграф
    par1.innerText = `Случайное число: ${arr}`;
    document.getElementById('container').appendChild(par1);

    const par = document.createElement("p"); //"p" - параграф
    par.innerText = `Случайные числа: ${arr}`;
    document.getElementById('container').appendChild(par);

    const par2 = document.createElement("p"); //"p" - параграф
    par2.innerText = `Максимум: ${max}`;
    document.getElementById('container').appendChild(par2);

    const par3 = document.createElement("p"); //"p" - параграф
    par3.innerText = `Минимум: ${min}`;
    document.getElementById('container').appendChild(par3);

    const par4 = document.createElement("p"); //"p" - параграф
    par4.innerText = `Среднее арифметическое: ${aver}`;
    document.getElementById('container').appendChild(par4);

    const par5 = document.createElement("p"); //"p" - параграф
    par5.innerText = `Сумма: ${Sum()}`;
    document.getElementById('container').appendChild(par5);

    const par6 = document.createElement("p"); //"p" - параграф
    par6.innerText = `Сумма: ${Multi()}`;
    document.getElementById('container').appendChild(par6);
}



document.getElementById('button').onclick = () => counter(); //кнопка+функция