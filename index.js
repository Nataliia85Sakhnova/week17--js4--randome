function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Создается рандомное число, макс-мин вкл
}
console.log(getRandomIntInclusive(-10, 10));

const arrMaker = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(getRandomIntInclusive(-10, 10));
    }
    console.log(arr);
    return arr;
} //Создается массив из 10 чисел
const arr = arrMaker(); // теперь работаем с этой переменной
console.log(arr);


const Max = () => {
    let max = Math.max(arr);
    console.log(max);
    return max;
}
const max = Max();
console.log(max);

const Min = () => {
    let min = Math.min.apply(arrMaker);
    console.log(max);
}

const Average = () => {
    let aver = arrMaker
}

const counter = () => {
    document.getElementById('container').innerHTML = "";
    const par = document.createElement("p"); //"p" - параграф
    par.innerText = `Случайные числа: ${arr}`;
    document.getElementById('container').appendChild(par);

    const NewMax = Max();
    par.innerText = `Максимум: ${max}`;
    document.getElementById('container').appendChild(par);
    
    // const NewMin = Min();
    // par.innerText = `Минимум: ${NewMin}`;
    // document.getElementById('container').appendChild(par);

    // const NewAver = Average();
    // par.innerText = `Среднее арифметическое: ${NewMin}`;
    // document.getElementById('container').appendChild(par);
}


document.getElementById('button').onclick = () => counter(); //кнопка+функция
