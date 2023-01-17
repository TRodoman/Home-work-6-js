
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

const animal = new Animal();

console.log(animal.makeNoise());

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

class Vet {
  constructor(animals) {
    this.animals = animals;
  }

  main() {
    const animals = [dog, cat, horse];

    for (let i = 0; i < animals.length; i++) {
               return animals; 
    }
  }
}

const vet = new Vet();

console.log(vet.main());









