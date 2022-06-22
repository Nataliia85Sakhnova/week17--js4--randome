function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
console.log(getRandomIntInclusive(-10, 10));

document.getElementById('button').onclick = () => {
    document.getElementById('container').innerText = (getRandomIntInclusive(-10, 10));
}; //кнопка+функция

// let arr = [];
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// arr.push(Math.round(Math.random() * 10));
// console.log(arr);

// let i = 0;
// while(i <= 10 && i >= -10)
// while (arr.length < 11) { // выводит 0, затем 1, затем 2
// arr.push(Math.round(Math.random() * 10))
// arr.push(Math.round(Math.random() * 10))

// начало	let i = 0	Выполняется один раз при входе в цикл
// условие	i < 3	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
// тело	alert(i)	Выполняется снова и снова, пока условие вычисляется в true.
// шаг	i++	Выполняется после тела цикла на каждой итерации перед проверкой условия.

// В целом, алгоритм работы цикла выглядит следующим образом:
// Выполнить *начало*
// → (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
// → (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
// → (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
// → ...

// for (let i = 0; i < 10; i++) {
//     if (arr.length != 10) {

//         Math.round(Math.random() * 10)

//         arr.push(i);
//         console.log(arr)
//     }
// }