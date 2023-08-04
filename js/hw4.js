// // // 1

// // // function makePizza() {
// // //   return "Your pizza is being prepared, please wait.";
// // // }
// // // // Change code below this line

// // // const result = makePizza();
// // // const pointer = makePizza;


// // // 2

// // // function deliverPizza(pizzaName) {
// // //   return `Delivering ${pizzaName} pizza.`;
// // // }

// // // function makePizza(pizzaName) {
// // //   return `Pizza ${pizzaName} is being prepared, please wait...`;
// // // }

// // // // Chande code below this line
// // // function makeMessage(pizzaName, callback) {
// // //   return callback(pizzaName);
// // // }

// // // console.log(makeMessage("Royal Grand", makePizza));
// // // console.log(makeMessage("Ultracheese", deliverPizza));

// // // 3

// // // function makePizza(pizzaName, callback) {
// // //   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// // //   callback(pizzaName);
// // // }

// // // makePizza("Royal Grand", function deliverPizza(pizzaName) {
// // //   console.log(`Delivering pizza ${pizzaName}.`);
// // // });
// // // // Change code below this line

// // // makePizza("Ultracheese", function eatPizza(pizzaName) {
// // //     console.log(`Eating pizza ${pizzaName}.`);
// // // });

// // // 4

// // const pizzaPalace = {
// //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
// //     order(pizzaName, makePizza, onOrderError) {
// //      for (const pizza of this.pizzas) {
// //          if (pizza === pizzaName) {
// //          return makePizza(pizzaName);
// //          }
// //      }
// //    return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// //   }
// // };
// // // Change code above this line


// // // Callback for onSuccess
// // function makePizza(pizzaName) {
// //   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// // }

// // // Callback for onError
// // function onOrderError(error) {
// //   return `Error! ${error}`;
// // }

// // // Method calls with callbacks
// // console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// // console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// // 5

// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;
// //   // Change code below this line

// //     orderedItems.forEach(element => {
// //         totalPrice += element;
// //     });
// // //   for (let i = 0; i < orderedItems.length; i += 1) {
// // //     totalPrice += orderedItems[i];
// // //   }

// //   // Change code above this line
// //     return totalPrice;
// // }
// // console.log(calculateTotalPrice([12, 85, 37, 4])) //  повертає 138
// // console.log(calculateTotalPrice([164, 48, 291]))  // повертає 503
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // 1116

// // 6

// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];
// //   // Change code below this line

// //     numbers.forEach(element => {
// //         if (element > value) {
// //             filteredNumbers.push(element)
// //         }
// //     });
// // //   for (let i = 0; i < numbers.length; i += 1) {
// // //     if (numbers[i] > value) {
// // //       filteredNumbers.push(numbers[i]);
// // //     }
// // //   }

// //   // Change code above this line
// //   return filteredNumbers;
// // }

// // console.log(filterArray([1, 2, 3, 4, 5], 3)) // повертає [4, 5]
// // console.log(filterArray([1, 2, 3, 4, 5], 4)) // повертає [5]
// // console.log(filterArray([1, 2, 3, 4, 5], 5)) // повертає []
// // console.log(filterArray([12, 24, 8, 41, 76], 38)) // повертає [41, 76]
// // console.log(filterArray([12, 24, 8, 41, 76], 20)) // повертає [24, 41, 76]

// // 7

// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];
// //   // Change code below this line

// //     firstArray.forEach(element => {
// //         if (secondArray.includes(element)) {
// //             commonElements.push(element)
// //         }
// //     });
// // //   for (let i = 0; i < firstArray.length; i += 1) {
// // //     if (secondArray.includes(firstArray[i])) {
// // //       commonElements.push(firstArray[i]);
// // //     }
// // //   }

// //   return commonElements;
// //   // Change code above this line
// // }

// // console.log(getCommonElements([1, 2, 3], [2, 4])) // повертає [2]
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) // повертає [1, 2]
// // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) // повертає [12, 27, 3]
// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // повертає [10, 30, 40]
// // console.log(getCommonElements([1, 2, 3], [10, 20, 30])) // повертає []

// // 8

// // Change code below this line

// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   // Change code above this line
// //   return quantity * pricePerItem;
// // }

// // console.log(calculateTotalPrice(5, 100)) // повертає 500
// // console.log(calculateTotalPrice(8, 60))  //повертає 480
// // console.log(calculateTotalPrice(3, 400)) // повертає 1200


// // 9

// // // Change code below this line
// // const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // // Change code above this line

// // console.log(calculateTotalPrice(5, 100));
// // console.log(calculateTotalPrice(8, 60));
// // console.log(calculateTotalPrice(3, 400));

// // 10

// // Change code below this line
// // const calculateTotalPrice = (orderedItems) => {
// //   let totalPrice = 0;

// //   orderedItems.forEach(item => {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }
// // // Change code above this line

// // console.log(calculateTotalPrice([12, 85, 37, 4])) // повертає 138
// // console.log(calculateTotalPrice([164, 48, 291]))  //повертає 503
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]))  //повертає 1116

// // 11

// // Change code below this line
// // const filterArray = (numbers, value) => {
// //   const filteredNumbers = [];

// //   numbers.forEach(number => {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   // Change code above this line
// //   return filteredNumbers;
// // }

// // console.log(filterArray([1, 2, 3, 4, 5], 3)) // повертає [4, 5]
// // console.log(filterArray([1, 2, 3, 4, 5], 4)) // повертає [5]
// // console.log(filterArray([1, 2, 3, 4, 5], 5)) // повертає []
// // console.log(filterArray([12, 24, 8, 41, 76], 38)) // повертає [41, 76]
// // console.log(filterArray([12, 24, 8, 41, 76], 20)) // повертає [24, 41, 76]


// // 12

// // Change code below this line
// // const getCommonElements = (firstArray, secondArray) => {
// //   const commonElements = [];

// //   firstArray.forEach(element => {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });

// //   // Change code above this line
// //   return commonElements;
// // }

// // console.log(getCommonElements([1, 2, 3], [2, 4])) // повертає [2]
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) // повертає [1, 2]
// // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) // повертає [12, 27, 3]
// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // повертає [10, 30, 40]
// // console.log(getCommonElements([1, 2, 3], [10, 20, 30])) // повертає []


// // 13

// // function changeEven(numbers, value) {
// //   // Change code below this line
// //     const newArr = [];
// //     numbers.forEach(element => {
 
// //         if (element % 2 === 0) {
// //       element = element + value;
// //     }
// //         newArr.push(element);
    
// //     });
// //     return newArr;
// // //   for (let i = 0; i < numbers.length; i += 1) {
// // //     if (numbers[i] % 2 === 0) {
// // //       numbers[i] = numbers[i] + value;
// // //     }
// // //   }
// //   // Change code above this line
// // }

// // console.log(changeEven([1, 2, 3, 4, 5], 10)) // повертає новий масив [1, 12, 3, 14, 5]
// // console.log(changeEven([2, 8, 3, 7, 4, 6], 10)) // повертає новий масив [12, 18, 3, 7, 14, 16]
// // console.log(changeEven([17, 24, 68, 31, 42], 100)) // повертає новий масив [17, 124, 168, 31, 142]
// // console.log(changeEven([44, 13, 81, 92, 36, 54], 100)) // повертає новий масив [144, 13, 81, 192, 136, 154]


// // 14

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // // Change code below this line
// // const planetsLengths = planets.map(planet => planet.length);

// // console.log(planetsLengths);

// // 15

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];
// // // Change code below this line

// // const titles = books.map(book => book.title);

// // console.log(titles);

// // 16

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism"],
// //   },
// // ];
// // // Change code below this line

// // const genres = books.flatMap(book => book.genres);

// // console.log(genres);

// // 17

// // // Change code below this line
// // const getUserNames = users => {
// //   return  users.map(user => user.name)
// // };

// //   // Change code above this line
// // console.log(getUserNames());

// // 18

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     skills: ["adipisicing", "irure", "velit"],
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     skills: ["ex", "culpa", "nostrud"],
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     skills: ["non", "amet", "ipsum"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["lorem", "veniam", "culpa"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];
// // // Change code below this line
// // const getUserEmails = users => {
// //     return users.map(userEmail => userEmail.email);

// //   };
// //   // Change code above this line
// // console.log(getUserEmails(users));

// // 19

// // const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // // Change code below this line

// // const evenNumbers = numbers.filter(number => number % 2 === 0);
// // const oddNumbers = numbers.filter(number => number % 2);

// // console.log(evenNumbers);
// // console.log(oddNumbers);

// // 20

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction", "mysticism"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism", "adventure"],
// //   },
// // ];
// // // Change code below this line
// // const allGenres = books.flatMap(gener => gener.genres);
// // const uniqueGenres = allGenres.filter((unique, index, arr) => arr.indexOf(unique) === index);

// // console.log(allGenres);
// // console.log(uniqueGenres);

// // 21

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];

// // const MIN_RATING = 8;
// // const AUTHOR = "Bernard Cornwell";
// // // Change code below this line

// // const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// // const booksByAuthor = books.filter(book => book.author === AUTHOR);

// // console.log(topRatedBooks);
// // console.log(booksByAuthor);

// // 22

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female"
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male"
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female"
// //   }
// // ]
// // // Change code below this line
// // const getUsersWithEyeColor = (users, color) => {
// //     return users.filter(user => user.eyeColor === color);

// // };
// // // Change code above this line

// // console.log(getUsersWithEyeColor(users, "brown"));

// // 23

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //     age: 24
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //     age: 21
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //     age: 27
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //     age: 38
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //     age: 39
// //   }
// // ]


// // // Change code below this line
// // const getUsersWithAge = (users, minAge, maxAge) => {
// //     return users.filter(({age}) => age >= minAge && age <= maxAge);

// // };
// // // Change code above this line

// // console.log(getUsersWithAge(users, 30, 40));

// // 24

// // Change code below this line
// // const getUsersWithFriend = (users, friendName) => {
// //     return users.filter(({ friends }) => friends.includes(friendName));
// // };
// // // Change code above this line

// // console.log(getUsersWithFriend(users, "Briana Decker"));


// // 25

// // // Change code below this line
// // const getFriends = (users) => {
// //     const userFriends = users.flatMap(user => user.friends);
// // return userFriends.filter((uniqueFrend, index, arr) => arr.indexOf(uniqueFrend) === index)
// // };
// // // Change code above this line

// // console.log(getFriends(users));

// // 26

// // Change code below this line
// // const getActiveUsers = (users) => {
// //     return users.filter(user => user.isActive === true);
// // };
// // // Change code above this line

// // console.log(getActiveUsers(users));

// // 27

// // // Change code below this line
// // const getInactiveUsers = (users) => {
// //    return users.filter(user => user.isActive === false);
// // };
// // // Change code above this line

// // console.log(getInactiveUsers(users));

// // 28

// // const books = [
// //   {
// //     title: 'The Last Kingdom',
// //     author: 'Bernard Cornwell',
// //     rating: 8.38,
// //   },
// //   {
// //     title: 'Beside Still Waters',
// //     author: 'Robert Sheckley',
// //     rating: 8.51,
// //   },
// //   {
// //     title: 'The Dream of a Ridiculous Man',
// //     author: 'Fyodor Dostoevsky',
// //     rating: 7.75,
// //   },
// //   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// // ];
// // const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// // const AUTHOR = 'Robert Sheckley';
// // // Change code below this line

// // const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// // const bookByAuthor = books.find(book => book.author === AUTHOR);

// // console.log(bookWithTitle);
// // console.log(bookByAuthor);

// // 29

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // // Change code below this line
// // const getUserWithEmail = (users, email) => {
// //     return users.find(user => user.email === email);
// // };
// // // Change code above this line

// // 30

// // const firstArray = [26, 94, 36, 18];
// // const secondArray = [17, 61, 23];
// // const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // // Change code below this line

// // const eachElementInFirstIsEven = firstArray.every(first => first % 2 === 0);
// // const eachElementInFirstIsOdd = firstArray.every(first => first % 2);

// // const eachElementInSecondIsEven = secondArray.every(second => second % 2 === 0);
// // const eachElementInSecondIsOdd = secondArray.every(second => second % 2);

// // const eachElementInThirdIsEven = thirdArray.every(third => third % 2 === 0);
// // const eachElementInThirdIsOdd = thirdArray.every(third => third % 2);

// // console.log(eachElementInFirstIsEven);
// // console.log(eachElementInFirstIsOdd);
// // console.log(eachElementInSecondIsEven);
// // console.log(eachElementInSecondIsOdd);
// // console.log(eachElementInThirdIsEven);
// // console.log(eachElementInThirdIsOdd);


// // 31

// // Change code below this line
// // const isEveryUserActive = (users) => {
// //     return users.every(user => user.isActive);
// // };
// // // Change code above this line

// // console.log(isEveryUserActive(users));


// // 32

// // const firstArray = [26, 94, 36, 18];
// // const secondArray = [17, 61, 23];
// // const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // // Change below this line

// // const anyElementInFirstIsEven = firstArray.some(first => first % 2 === 0);
// // const anyElementInFirstIsOdd = firstArray.some(first => first % 2);

// // const anyElementInSecondIsEven = secondArray.some(second => second % 2 === 0);
// // const anyElementInSecondIsOdd = secondArray.some(second => second % 2);

// // const anyElementInThirdIsEven = thirdArray.some(third => third % 2 === 0);
// // const anyElementInThirdIsOdd = thirdArray.some(third => third % 2);

// // 33

// // Change code below this line
// // const isAnyUserActive = users => {
// //    return users.some(user => user.isActive);
// // };
// // // Change code above this line

// // console.log(isAnyUserActive(users));


// // 34

// // const players = {
// //   mango: 1270,
// //   poly: 468,
// //   ajax: 710,
// //   kiwi: 244
// // };
// // const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // // Change code below this line

// // const totalPlayTime = playtimes.reduce((player, time) => {
// //     return player + time;
// // });

// // // Change code above this line
// // const averagePlayTime = totalPlayTime / playtimes.length;

// // console.log(totalPlayTime);
// // console.log(averagePlayTime);

// // 35

// // const players = [
// //   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
// //   { name: "Poly", playtime: 469, gamesPlayed: 2 },
// //   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
// //   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// // ];
// // // Change code below this line

// // const totalAveragePlaytimePerGame = players.reduce((time, player) => {return player.playtime/player.gamesPlayed + time}, 0);

// // console.log(totalAveragePlaytimePerGame);

// // 36

// // // Change code below this line
// // const calculateTotalBalance = users => {
// //     return users.reduce((startBalance, userBalance) => {
// //     return startBalance + userBalance.balance
// //    }, 0)
// // };
// // // Change code above this line

// // console.log(calculateTotalBalance(users));

// // 37

// // // Change code below this line
// // const getTotalFriendCount = users => {
// //     let totalFriend = users.reduce((startFriend, friend) =>
// //         {startFriend.push(...friend.friends)
// //         return startFriend;
// //     }, []);
// //     return totalFriend.length;
// // };
// // // Change code above this line

// // console.log(getTotalFriendCount(users));

// // 38

// // const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // const authors = [
// //   "Tanith Lee",
// //   "Bernard Cornwell",
// //   "Robert Sheckley",
// //   "Fyodor Dostoevsky",
// // ];
// // // Change code below this line

// // const ascendingReleaseDates = [...releaseDates].sort();

// // const alphabeticalAuthors = [...authors].sort();

// // console.log(ascendingReleaseDates);
// // console.log(alphabeticalAuthors);

// // 39

// // const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // // Change code below this line

// // const ascendingReleaseDates = [...releaseDates].sort((start, end) => start - end);

// // const descendingReleaseDates = [...releaseDates].sort((start, end) => end - start);

// // console.log(ascendingReleaseDates);
// // console.log(descendingReleaseDates);

// // 40

// // const authors = [
// //   "Tanith Lee",
// //   "Bernard Cornwell",
// //   "Robert Sheckley",
// //   "Fyodor Dostoevsky",
// //   "Howard Lovecraft",
// // ];
// // // Change code below this line

// // const authorsInAlphabetOrder = [...authors].sort((alphabetStart, alphabetEnd) => alphabetStart.localeCompare(alphabetEnd));

// // const authorsInReversedOrder = [...authors].sort((alphabetStart, alphabetEnd) => alphabetEnd.localeCompare(alphabetStart));

// // console.log(authorsInAlphabetOrder);
// // console.log(authorsInReversedOrder);

// // 41

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];
// // // Change code below this line

// // const sortedByAuthorName = [...books].sort((alphabetStart, alphabetEnd) => alphabetStart.author.localeCompare(alphabetEnd.author));


// // const sortedByReversedAuthorName = [...books].sort((alphabetStart, alphabetEnd) => alphabetEnd.author.localeCompare(alphabetStart.author));


// // const sortedByAscendingRating = [...books].sort((minRating, maxRating) => maxRating.rating - minRating.rating);

// // const sortedByDescentingRating = [...books].sort((minRating, maxRating) => minRating.rating - maxRating.rating);

// // console.log(sortedByAuthorName);
// // console.log(sortedByReversedAuthorName);
// // console.log(sortedByAscendingRating);
// // console.log(sortedByDescentingRating);

// // 42

// // // Change code below this line
// // const sortByAscendingBalance = users => {
// //    return users.sort((startBalance, endBalance) => startBalance.balance - endBalance.balance)
// // };
// // // Change code above this line

// // 43

// // // Change code below this line
// // const sortByDescendingFriendCount = users => {
    
// //     return [...users].sort((start, end) => end.friends.length - start.friends.length);
  
// // };
// // // Change code above this line

// // console.log(sortByDescendingFriendCount(users));

// // 44

// // // Change code below this line
// // const sortByName = users => {
// // return [...users].sort((alphabetStart, alphabetEnd) => alphabetStart.name.localeCompare(alphabetEnd.name))
// // };
// // // Change code above this line

// // console.log(sortByName(users));

// // 45

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   {
// //     title: "The Dreams in the Witch House",
// //     author: "Howard Lovecraft",
// //     rating: 8.67,
// //   },
// // ];
// // const MIN_BOOK_RATING = 8;
// // // Change code below this line

// // const names = books.filter(book => book.rating >= MIN_BOOK_RATING)
// //     .map(bookAuthor => bookAuthor.author)
// //     .sort((alphabetStart, alphabetEnd) => alphabetStart.localeCompare(alphabetEnd));

// // console.log(names);


// // 46

// // // Change code below this line
// // const getNamesSortedByFriendCount = users => {
// //     return [...users].sort((minFriends, maxFriends) => minFriends.friends.length - maxFriends.friends.length).map(userName => userName.name);
// // };
// // // Change code above this line

// // console.log(getNamesSortedByFriendCount(users));

// // 47

// // // Change code below this line
// // const getSortedFriends = users => {
// //     return users.flatMap(friend => friend.friends).filter((friend, index, arr) => arr.indexOf(friend) === index).sort((alphabetStart, alphabetEnd) => alphabetStart.localeCompare(alphabetEnd));
// // };
// // // Change code above this line

// // console.log(getSortedFriends(users));


// // 48

// // // Change code below this line
// // const getTotalBalanceByGender = (users, gender) => {
    
// //     // return users.map(userGender => userGender.gender).filter(gender => gender === userGender).reduce((startBalance, userBalance) => startBalance + userBalance, 0);

// //     return users.filter(user => user.gender === gender).reduce((startBalance, userBalance) => startBalance + userBalance.balance, 0); 
    
// // };
// // // Change code above this line

// // console.log(getTotalBalanceByGender(users, "male"));
// // console.log(getTotalBalanceByGender(users, "female"));
