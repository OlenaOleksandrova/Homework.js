//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//     const userName = promt(`Enter your name`);

//     if (!userName) {
//         alert(`Not correct`)
//         return;
//     }
//     callback(userName);
//  }

// const greet = name => {
//     console.log(`Приіт $(name)`);

// }
// letMeSeeYourName(greet);

// console.log(`Enter your name`)

// #2 Напишіть дві функції makeProduct(name, price, callback) - приймає
// їмя та ціну товара, а також callback
// Функція створює об"єкт товару, додаючи йому унікальний
// ідентифікатор як id  і викликає callback
// передаючи йому створений об"экт.
// showProduct(product) - коллбек приймаючий об"єкт
// продукту і логірующий їх у консоль

const makeProduct = (name, price, callback) => {
    const product = {
        // name: name,
        // price: price
        name,
        price,
        id: Math.random()   }
       callback (product)

    }
 
const showProduct = (productName) => {
    console.log (productName)
 }

makeProduct (`iphone`, 1000, showProduct)
