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


//! 2. Что такое контекст this.Как работает call, bind, apply
//
function hello2() {
	console.log('Hello ', this)
}

const person2 = {
	name: 'Geradot',
	age: 42,
	sayHello: hello2,
	//? bind() позволяет привязывать другой контекст
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
//
person2.logInfo() // контекст person2
person2.logInfo.bind(lena2)() // контекст lena2. bind() возвращает новую функцию поэтому нужно в конце поставить скобки


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

