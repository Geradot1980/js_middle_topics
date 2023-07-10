'use strict'
//условные обозначения
// обычный кометн
//! Тема
//todo Топик
//? пример пояснение
//*


//! 1. Что такое prototype.JavaScript Prototype
// Прототип это определенный объект присутствующий у родительских элементов,
// с помощью которого мы можем Я
// Набор свойств и методов существующих в прототипе которые присуще всем и их можно расширять
/* 
const person1 = new Object({
	name: 'Maxim',
	age: 25,
	greet: function () {
		console.log('Greet')
	}
})

// Добавляем метод в прототип объекта
Object.prototype.sayHello = function () {
	console.log('Hello!')
}

// создаем объект lena1 прототипом которого будет person1, объект будет пустой, но будет содержать все поля от person1
const lena1 = Object.create(person1)
lena1.name = 'Elena' 
*/

//! 2. Что такое контекст this.Как работает call, bind, apply
/* 
function hello2() {
	console.log('Hello ', this)
}

const person2 = {
	name: 'Geradot',
	age: 42,
	sayHello: hello2,
	//todo bind() позволяет привязывать другой контекст
	sayHelloWindow: hello2.bind(window),
	logInfo: function () {
		console.log(`Name is ${this.name}`)
		console.log(`Age is ${this.age}`)
	}
}
//? window.hello2()  // контекст будет window
//? person2.hello2()  // контекст будет person2
//? у стрелочных функций контекст будет window

//? Пример
const lena2 = {
	name: 'Elena',
	age: 32
}
person2.logInfo() //  -> Name is Geradot, Age is 42 (контекст person2)
person2.logInfo.bind(lena2)() // -> Name is Elena, Age is 32  (контекст lena2. bind() возвращает новую функцию поэтому нужно в конце поставить скобки)
//? Если у функции с привязанным контекстом есть параметры то их можно передать .bind(context)(params) или .bind(context, params)()

//todo Метод call()
// работает также как и bind но вызывает функцию сразу, а не возвращает новую функцию значит дополнительные скобки не нужны .call(context, params).

//todo Метод apply()
// всегда предаем 2 параметра в отличии от call. Второй параметр это массив из аргументов передающихся в функцию, а в call и bind параметры перечисляются через запятую.	.apply(context, [params]).

//? Пример работы контекста и прототипов
const array = [1, 2, 3, 4, 5]
// реализовываем функцию которая будет умножать массив на заданное число через протатипы
Array.prototype.multBy = function (n) {
	return this.map(i => i * n)
}
console.log(array.multBy(5)) // [5, 10, 15, 20, 25]
 */

//! 3.Что такое замыкания. Как они работают (+ примеры)
// Замыание это функция внутри другой функции позволяющая делать глобальные переменные для каждого вызова, а также замыкать переменные внутри функций
/*
//? Пример 31: Пишем свой bind
function logPerson3() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person31 = { name: 'One', age: 1, job: 'Front' }
const person32 = { name: 'Two', age: 2, job: 'Back' }

function bind3(context, fn) {
	return function (...args) {
		fn.apply(context, args)
	}
}
 bind3(person31, logPerson3)() // Person: One, 1, Front
 bind3(person32, logPerson3)() // Person: Two, 2, Back

//? Пример 32:
function incrementBy3(n) {

	let x = 0 // создаем замкнутую глобальную переменную
	return function () {
		x += n
		console.log(x)
	}
}

const inBy1 = incrementBy3(1)
const inBy10 = incrementBy3(10)


inBy1() //1
inBy1() //2
inBy1() //3

inBy10() //10
inBy10() //20
inBy10() //30
 */

//! 4. Все о Spread и Rest

/* const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
	Moscow: 20,
	SaintPetersburg: 8,
	Kazan: 5,
	Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
	Moscow: 26,
	Berlin: 10,
	Praha: 3,
	Paris: 2
}
*/
//todo Spread ... (разворачивает массив, так же работает с объектом)
/* 
// 1. Простой способ сделать копию массива/объекта
// 2. Объединение нескольких массивов/объектов в один
// 3. Позволяет массивы передовать как последовательности
// 4. С результатами querySelectorAll работать как с массивами Пример 43
//console.log(citiesRussia) //-> ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
//console.log(...citiesRussia) // -> Москва Санкт-Петербург Казань Новосибирск

//? Пример 41. Объединение массивов в один массив
const allCities = [...citiesRussia, ...citiesEurope]
// console.log(allCities) //-> ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Берлин', 'Прага', 'Париж']

//? Пример 42. Работа с объектами
// console.log({ ...citiesRussiaWithPopulation }) // клон объекта
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation }) // объединение объектов

//? Пример 43. С результатами querySelectorAll работать как с массивами
const divs4 = document.querySelectorAll('div') // метода map нету
const nodes4 = [...divs4] // есть все методы массивов
 */
//todo Rest ... (собирает все параметры в массив или объект)

const numbers4 = [1, 2, 3, 4, 5, 6, 7]
function sum4(a, b, ...rest) {
	return a + b + rest.reduce((a, i) => a + i, 0)
}
// console.log(sum4(...numbers4))

const person4 = {
	name: 'Alex',
	age: 33,
	city: 'Moscow',
	country: 'Russia'
}
const { name, age, ...address } = person4
// console.log(name, age, address)

//! 5. Деструктуризациия 
{//
}

//! 6. Асинхронность.Что такое Event Loop. JS SetTimeout 0

{//
}

//! 7. Promise. Что это, как работает

// resolve - функция вызывается тогда когда успешно законченна асинхронная операция
// reject - функция вызывается тогда когда НЕ успешно законченна асинхронная операция

/* const p7 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Preparing data...')
		const beckendData = {
			server: 'aws',

			port: 2000,
			status: 'OK'
		}
		// данные из промиса можно передавать через параметры resolve, пример beckendData
		resolve(beckendData) // Вызывая эту функцию мы говорим промису что он завершил свое выполнение
	}, 2000)
}) */


/* p7.then(data => { // data это параметр из resolve
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			resolve(data)
		}, 2000)
	})
})
	.then(clientData => {
		console.log('cliendDAta ', clientData)
		clientData.fromPromise = true
		return clientData // следующий then будет работать с этой датой
	})
	.then(data => {
		console.log({ data })
	})
	.catch(err => {
		console.error('Error: ', err)  // вызов обработчика ошибок
	})
	.finally(() => { console.log('OK All') }) // Секция которая выполняется всегда
 */
/* 
 //? Примеры применения промисов
const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
}
sleep(2000).then(() => console.log('After 2 seconds'))
sleep(3000).then(() => console.log('After 3 seconds'))


//? Примеры применения 
Promise.all([sleep(2000), sleep(4000)]) // сработает после выполнения всех промисов
	.then(() => console.log('promise.all'))

Promise.race([sleep(2000), sleep(4000)])// сработает после выполнения первого промиса
	.then(() => console.log('promise.race')) */


//! 9. Как работает Async, Await.Работа с сервером c fetch
const delay = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
}

//! 8. Объекты с Object.create. Что такое getters, setters
//Создание объектов = Object.create({прототип},{указываем определенные поля для данного объекта})
// По умолчанию ключи не имеют нужные отрибуты для записи и итераций
/*
const person8 = Object.create({
	calcAge() {
		new Date().getFullYear() - this.birthYear
	}
}, {
	// так выглядит задание полей.
	name: {
		value: 'Gera',
		enumerable: true, // позваляет видеть поле в циклах
		writable: true, // позволяет перезаписывать значение в дальнейшем
		configurable: true, // разрешение на удаление ключа
	},
	birthYear: {
		value: '1980',
		enumerable: true, // позваляет видеть поле в циклах
		writable: true, // позволяет перезаписывать значение в дальнейшем
		configurable: true, // разрешение на удаление ключа},
	},
	age: {
		get() {
			return new Date().getFullYear() - this.birthYear
		},
		set(value) {
			document.body.style.background = 'green'
			console.log('Set value', value)
		}
	}
}
)
console.log(person8) // вызов гетера
console.log(person8.age = 10) // вызов гетера
console.log(person8.age) // вызов сетера

// для переборки ключей в объекте минуя прототип нужно использовать условие hasOwnProperty
for (const key in person8) {
	if (person8.hasOwnProperty.call(person8, key)) {
		console.log(`person8.${key} = ${person8[key]}`)
	}
}*/


//!
{//
}

//!
{//
}

//!
{//
}

//!
{//
}

//!
{//
}

//!
{//
}

