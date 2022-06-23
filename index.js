function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(-10, 10));

const arrMaker = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(getRandomIntInclusive(-10, 10));
    }
    console.log(arr);
}

const Max = () => {
    let max = Math.max(arrMaker);
    console.log(max);
}





document.getElementById('button').onclick = () => {
    document.getElementById('container').innerText = (getRandomIntInclusive(-10, 10));
}; //кнопка+функция

document.getElementById('button1').onclick = () => {
    document.getElementById('container1').innerText = (arrMaker());
}; //кнопка1+функция1

document.getElementById('Max-button').onclick = () => {
    document.getElementById('Max-container').innerText = (Max());
}; //кнопка1+функция1