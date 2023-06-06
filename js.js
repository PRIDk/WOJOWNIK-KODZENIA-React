// ---------- METODY ----------

// join() - ZWRACA stringa z tablicy (nie modyfikuje go, zwraca go zedytowanego do inej zmiennej)

// const users = ["Adam", "Maks"];
// const userString = users.join(" "); // w cudzysłowie jest separator
// console.log(userString); // "Adam Maks"

// concat() - ŁĄCZY tablicę z innym elementem i zwraca tablicę
// const users2 = ["Adam", "Maks"];
// const newUser2 = "edyta";
// const allUsers2 = users.concat(newUser2);
// console.log(allUsers2); // ["Adam", "Maks", "edyta"]

// operator spread - alternatywa dla concat
// const users3 = ["Adam", "Maks"];
// const allUsers3 = [...users3, "edyta"];
// console.log(allUsers3);
// ["Adam", "Maks", "Edyta"]

// map()
// const users4 = ["Adam", "Maks"];
// const usersFirstLetterToUpperCase = users.map((user) => user[0].toUpperCase())[ // user to cokolwiek, jak w petli, to iterator
//     ("A", "M")
// ];

// const numbers = [2, 3, 4];
// const doubleNumber = numbers.map((number) => number * 2);
// console.log(doubleNumber); // [4,6,8]

// forEach()
// const usersAge = [20, 21, 23, 43]; // tutaj mamy tyldę -vvv- nie apostrofy; tu jest wpisanie zmiennej
// usersAge.forEach(age => console.log(`W przyszłym roku użytkownik będzie miał ${age + 1} lat`))

// const usersAge2 = [20, 21, 23, 43];
// let usersTotalAge = 0;

// usersAge2.forEach(age => usersTotalAge += age);
// console.log(usersTotalAge);
// zmienna ma wartość 107
// const usersAge = [20, 21, 23, 43];

// const section = document.createElement("section");

// usersAge.forEach((age, index, array) => {
//     // taka kolejnosc w foreach jest tych elementow xd
//     section.innerHTML += (
//         `<h1> Użytkownik ${index + 1}</h1>
//         <p>wiek: ${age}</p>`
//     )
//     if (index === array.length - 1) {
//         document.body.appendChild(section);
//     }
// })

// filter() - przykład 1
// zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true

// const users = ["adam", "bogdan", "czarek", "darek"];

// const nameWith6Letters = users.filter(user => user.length === 6)
// console.log(nameWith6Letters);

// const nameWithLetterK = users.filter(user => {
//     return (
//         user.indexOf("k") > -1 // indexof wyszukuje element "k" w elemencie, jezeli cos zwroci to znaczy ze ma k w sobie
//                                // jezeli k nie wystepuje to zwraca -1 czyli false
//     )
// })
// console.log(nameWithLetterK);

// findindex()

const customers = [
    { name: "Adam", age: 67 },
    { name: "Basia", age: 27 },
    { name: "Marta", age: 17 },
];

const isUsersAdult = customers.findIndex(customer => customer.age < 18)
console.log(isUsersAdult);

//find() 

const firstAdultUser = customers.find(customer => customer.age >= 18)
console.log(firstAdultUser); // {name: "Adam", age: 67}