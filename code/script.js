// Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
// rate (ставка за день роботи), days (кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
// Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary(rate, days) {
    let salary = this.rate * this.days;
    return salary;
}
}

const worke1 = new Worker('Иван', 'Шевченко', 15, 22);
const worke2 = new Worker('Ольга', 'Кравченко', 18, 20);

document.write(`Заработная плата работника: ${worke1.name} ${worke1.surname} за декабрь составляет ${worke1.getSalary()}грн. ` + "<br />");
document.write(`Заработная плата работника: ${worke2.name} ${worke2.surname} за декабрь составляет ${worke2.getSalary()}грн.`);

// ----------------------------------------------------------------------------------------------------------

// Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
// який параметром приймає рядок, а повертає її в перевернутому вигляді,
// метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
// та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.

class MyString {
    constructor() {
    }
    reverse(str) {
        let reversStr = '';

        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }

    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }

}
const str = new MyString();

document.write(str.reverse('привет мир')+ '<br/>');
document.write(str.ucFirst('привет мир')+'<br/>');
document.write(str.ucWords('привет мир')+'<br/>');

// -------------------------------------------------------------------------------------

// Створіть клас Phone, який містить змінні number, model і weight.
// Створіть три екземпляри цього класу.
// Виведіть на консоль значення їх змінних.
// Додати в клас Phone методи: receiveCall, має один параметр - ім'я. Виводить на консоль повідомлення "Телефонує {name}".
// Метод getNumber повертає номер телефону. Викликати ці методи кожного з об'єктів.

class Phone {

  constructor(number, model, weight, name) {
    this.number = number;
    this.model = model;
    this.weight = weight;
    this.name = name;
  }

    receiveCall () {
    return `Телефонує ${this.name}`
  }

   getNumber() {
   return this.number;
}
}

const Phon1 = new Phone("+380501212121", "IPhone",  5, 'Оксана');
const Phon2 = new Phone("+380506652333", "Samsung", 6, 'Максим');
const Phon3 = new Phone("+380672445566", "Motorola", 7, 'Иван');

console.log(Phon1.number, Phon1.model, Phon1.weight);
console.log(Phon2.number, Phon2.model, Phon2.weight);
console.log(Phon3.number, Phon3.model, Phon3.weight);

console.log(`${Phon1.receiveCall()}:  ${Phon1.getNumber()}`);
console.log(`${Phon2.receiveCall()}:  ${Phon2.getNumber()}`);
console.log(`${Phon3.receiveCall()}:  ${Phon3.getNumber()}`);

// -------------------------------------------------------------------------

// Створити клас Car , Engine та Driver.
// Клас Driver містить поля - ПІБ, стаж водіння.
// Клас Engine містить поля – потужність, виробник.
// Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine.

// Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч".
// А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

class Driver {
  constructor(name, drivingExperience) {
    this.name = name;
    this.drivingExperience = drivingExperience;
  }
  toString() {
    return `Водій: ${this.name} <br/> Стаж водіння: ${this.drivingExperience}`;
  }
}

class Engine {
  constructor(power, automaker) {
    this.power = power;
    this.automaker = automaker;
  }
  toString() {
    return `Потужність двигуна: ${this.power} <br/> Виробник: ${this.automaker}`;
  }
}

class Car {
  constructor(brand, carClass, weight) {
    this.brand = brand;
    this.carClass = carClass;
    this.weight = weight;
  }

  start() {
    return "Поїхали";
  }
  stop() {
    return "Зупиняємося";
  }

  turnRight() {
    return "Поворот праворуч";
  }
  turnLeft() {
    return "Поворот ліворуч";
  }
  toString() {
    return `Марка автомобіля: ${this.brand} <br/> Клас автомобіля: ${this.carClass} <br/> Вага: ${this.weight} <br/>  ${engine.toString()} <br/> ${driver.toString()} <br/> `;
  }
}

const driver = new Driver("Петренко Сергій Сергійович", "10 років");
const engine = new Engine("800 л.с", "Mercedes-AMG");
const car = new Car("Mercedes-Benz", "G-класс", "2560 кг");

document.write(car.toString() + "<br/>");
document.write(car.start() + "<br/>");
document.write(car.stop() + "<br/>");
document.write(car.turnRight() + "<br/>");
document.write(car.turnLeft() + "<br/>");

document.write('<hr>');
// // -----------------------------------------------------------------------------------------------------
// // Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
// // Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.

class Lorry extends Car {
  constructor(brand, carClass, weight, carrying) {
    super(brand, carClass, weight);
    this.carrying = carrying;
  }

  toString() {
    return `Марка вантажівки: ${this.brand} <br/> Клас автомобіля: ${this.carClass} <br/> Вага: ${this.weight} <br/> Вантажопідйомність кузова: ${this.carrying} <br/> ${lorryEngine.toString()} <br/> ${lorryDriver.toString()} <br/> `;
  }
}

const lorryDriver = new Driver("Власенко Иван Петрович", '35 років');
const lorryEngine = new Engine( "90 л.с", "Nissan");
const lorry = new Lorry( "Nissan atlas", "Truck", '2515 кг', '1.5 т');
document.write(lorry.toString());

document.write('<hr>');

class SportCar extends Car {
  constructor(brand, carClass, weight, speed) {
    super(brand, carClass, weight);
   this.speed = speed;
  }
  toString() {
    return `Марка автомобіля: ${this.brand} <br/> Клас автомобіля: ${this.carClass} <br/> Вага: ${this.weight} <br/> Гранична швидкість: ${this.speed} <br/> ${sportEngine.toString()} <br/> ${sportDriver.toString()} <br/> `;
  }
}

const sportDriver = new Driver("Орлов Петро Васильович", '27 років');
const sportEngine = new Engine('570 л.с', "Nissan");
const sportCar = new SportCar("Nissan GT-R", "Sport car (S)", 1740 , '315 км/ч');

document.write(sportCar.toString());

document.write('<hr>');

// ----------------------------------------------------------------------------------

// Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
// Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль
// "Така тварина спить".
// Dog, Cat, Horse перевизначають методи makeNoise, eat.
// Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.

// Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини,
// що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.

class Animal {
  constructor(food, location) {
    this.food = food;
    this.location = location;
  }
  makeNoise() {
    return "Животное говорит";
  }
  eat() {
    return "Животное ест";
  }
  sleep() {
    return "Животное спит";
  }
}

const animals = new Animal();

console.log(animals.makeNoise());



class Dog extends Animal {
  constructor(food, location, color) {
    super(food, location);
    this.color = color;
  }
  makeNoise() {
    return "Собака говорит Гав-гав-гав!!!!";
  }
  eat() {
    return "Собака ест";
  }
}
const dog = new Dog("Кость", "В будке", "черный");
console.log(dog);


class Cat extends Animal {
  constructor(food, location, name) {
    super(food, location);
    this.name = name;
  }
  makeNoise() {
    return "Кошка говорит Мя-я-я-у!!!!";
  }
  eat() {
    return "Кошка ест";
  }
}

const cat = new Cat("Молоко", "В доме", "Мурка");
console.log(cat);



class Horse extends Animal {
  constructor(food, location, weight) {
    super(food, location);
    this.weight = weight;
  }
  makeNoise() {
    return "Лощадь говорит И-го-го!!!!";
  }
  eat() {
    return `Лощадь ест ${horse.food}`;
  }
}
const horse = new Horse("Овес", "В конюшне", "420 кг");
console.log(horse);
console.log(horse.makeNoise());
console.log(horse.eat());

// -------------------------------------------------------
// Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини,
// що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.


class Vet {
  

  treatAnimal () {
    const allAnimal = [dog, cat, horse]
    
      for(let i = 0; i < allAnimal.length; i++){
        document.write(`food:  ${allAnimal[i].food}, location: ${allAnimal[i].location} <br/>`);
      }
  }
  
  main(){

    const animalName = ['Dog', 'Cat', 'Horse'];
    
    for(let i = 0; i < animalName.length; i++){
    
      document.write(`${animalName[i]} на приеме у ветеринара <br/>`);
    }
  }
  
}

const vet = new Vet();


console.log(vet.main());
console.log(vet.treatAnimal());













