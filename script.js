'use strict';

/* УРОК 1 */ /*
var leftBorderWidth = 1; // формат КамэлКейс. Создаётся в момент загрузки скрипта. Назначается во время объявления.
let second = 2; // зона видимости. создаётся в момент объявления
const Pi = 3.14; // Константа работает также как let, но её нельзя изменить. НО обходными путями может изменить
console.log(second);
*/

/* УРОК 2 */  /*
//В JS cуществует 7 типов данных 

//1 тип: числовые значения
var number = 5;
console.log(4/0); // Infinity
console.log('строка'*9); // Nan Not a number

//2 тип: Строка
//разницы между "" '' - нет. А вот `` эти кавычки отличаются.
var string = "Привет";

//3 тип: Символ (используется редко)
var sym = Symbol();

//4 тип: boolean;
var boolean = true;

//5 тип: null - чего то в коде не существует
//console.log(sumfing); // null

//6 тип: undefined - существует, но ничего не присвоено
let something;
console.log(something) // undefined

//7 тип данных: Объект. Коллекция данных. Комплексный тип.
// Методы - функции, свойства - переменные.
let persone = {
    name: "John",
    age: 25,
    isMarrieed: false
}
//2 способа добраться до свойств объекта
console.log(persone.name);//1 через точку
console.log(persone["name"]);// через []

//частный случай объектов - массив. Хранение данных по порядку
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

//1ое значение массива = 0
console.log(arr[2]);

// Косые кавычки - `строка` - 
const obj = {
    name: 'Alex'
};

const arr = [5,1,2,4];
// функции - тоже объекты

*/


/* УРОК 3 */ /* //Динамическая типизация - пеобразование одник типов данных в другие
// - to String

// 1) String(null); команда устарела.
console.log(typeof(String(4)));

//конкетинация превращение
console.log(typeof('ww' + 5 + false)); // строка
let str = "" + 5; // строка.

//Применение - создание URL
console.log('https://evgpro.ru/' + 5);


// - to Number

// 1) Number('5'); - пользуются ещё реже
console.log(typeof(Number('5')));

// 2) унарный плюс - поставить + перед любым типом данных.
console.log(typeof(+'5'));
console.log(7 + +'5');

//3)
console.log(typeof(parseInt('15px', 10)));

// Всё, что получаем от пользователя - тип данных строка.
//let answer  =  promt("Hello?", ''); // Строка
//let answer2 = +promt("Hello?", ''); // Число

//Логическое преобразование.

//false: 0, '', null, undefined, NaN 
//true: ' ' - всё остальное

// 1) способ
let swithcher = null;

if (swithcher){
    console.log("Workilng...");
}

swithcher = 1;

if (swithcher){
    console.log("Workilng...");
}

// 2) способ
console.log(typeof(Boolean('5')));
// 3) способ
console.log(typeof(!!'5'));
*/






/* УРОК 4 */ //Общение с пользователем.

//alert("Hello, word"); // модальное окно. Все скрипты останавливаются пока не нажмём оК

//confirm("Ты здесь?"); // Выбор Ок и Отмена

//let answer = confirm("Ты здесь?");
//console.log(answer); // true / false

// let answer = prompt("Есть ли Вам 18?", "Да");
// console.log(answer); // true / false
// console.log(typeof(answer)); // тип данных




/* УРОК 5 */ /* Операторы */ /*

// если перед строкой поставить +то она станет числом

//let answer = +prompt("Что превратить в число?", "");
//console.log(answer); // true / false

//Инкремент Декремент

let incr = 10,
    decr = 10;

//incr++; // префиксная форма
//decr--; // префиксная форма

console.log(incr++ + " " + decr--); // префиксная форма
console.log(incr + " " + decr); // вывод переменных
console.log(++incr + " " + decr--); // постфиксная форма

// % остаток от деления 2х чисел

console.log(5%2);

// = - присванивание
// == проверка на равентсво
// === строгая проверка по типам данных

console.log("2" == 2); // true
console.log("2" === 2);// false

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose); // логический оператор И
console.log(!isChecked || !isClose); // логический оператор ИЛИ
//  ! - отрицания
*/





/* УРОК 5-6 */ /* GitHub */
// Установить git
// git status
// git -A
// git commit -a -m "третий комит"
// GitKraken - отоброжение репозитория