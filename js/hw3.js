
// // Task 1

// // const apartment = {
// // imgUrl: "https://via.placeholder.com/640x480",
// // descr: "Spacious apartment in the city center",
// // rating: 4,
// // price: 2153,
// // tags: ["premium", "promoted", "top"]
// // };

// // 2

// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// //   tags: ["premium", "promoted", "top"],
// //   owner: {
// // name: "Henry",
// // phone: "982-126-1588",
// // email: "henry.carter@aptmail.com"
// //   }
// // };

// // 3

// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// //   tags: ["premium", "promoted", "top"],
// // };

// // // Change code below this line
// // const aptRating = apartment.rating;
// // const aptDescr = apartment.descr;
// // const aptPrice = apartment.price;
// // const aptTags = apartment.tags;
// // // Change code above this line

// // 4

// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// //   tags: ["premium", "promoted", "top"],
// //   owner: {
// //     name: "Henry",
// //     phone: "982-126-1588",
// //     email: "henry.carter@aptmail.com",
// //   },
// // };

// // // Change code below this line
// // const ownerName = apartment.owner.name;
// // const ownerPhone = apartment.owner.phone;
// // const ownerEmail = apartment.owner.email;
// // const numberOfTags = apartment.tags.length;
// // const firstTag = apartment.tags[0];
// // const lastTag = apartment.tags[numberOfTags - 1];
// // // Change code above this line

// // 5

// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// //   tags: ["premium", "promoted", "top"],
// // };

// // // Change code below this line
// // const aptRating = apartment["rating"];
// // const aptDescr = apartment["descr"];
// // const aptPrice = apartment["price"];
// // const aptTags = apartment["tags"];
// // // Change code above this line

// // 6

// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// //   tags: ["premium", "promoted", "top"],
// //   owner: {
// //     name: "Henry",
// //     phone: "982-126-1588",
// //     email: "henry.carter@aptmail.com",
// //   },
// // };
// // apartment.price = 5000;
// // apartment.rating = 4.7;
// // apartment.owner.name = "Henry Sibola";
// // apartment.tags.push("trusted");
// // // Change code below this line

// // 7

// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4.7,
// //   price: 5000,
// //   tags: ["premium", "promoted", "top", "trusted"],
// //   owner: {
// //     name: "Henry Sibola",
// //     phone: "982-126-1588",
// //     email: "henry.carter@aptmail.com",
// //   },
// // };
// // apartment.area = 60;
// // apartment.rooms = 3;
// // apartment.location = {country: "Jamaica", city: "Kingston"};
// // // Change code below this line

// // 8

// // const name = "Repair Droid";
// // const price = 2500;
// // const image = "https://via.placeholder.com/640x480";
// // const tags = ["on sale", "trending", "best buy"];

// // const product = {
// //   // Change code below this line
// //   name,
// //   price,
// //   image,
// //   tags
// //   // Change code above this line
// // };

// // 9

// // const emailInputName = "email";
// // const passwordInputName = "password";

// // const credentials = {
// //   // Change code below this line
// // [emailInputName]: "henry.carter@aptmail.com",
// // [passwordInputName]: "jqueryismyjam"

// //   // Change code above this line
// // };

// // 10

// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };
// // const keys = [];
// // const values = [];
// // for (const key in apartment) {
// //   keys.push(key);
// //   values.push(apartment[key]);
// // }
// // // Change code below this line

// // 11

// // const keys = [];
// // const values = [];
// // const advert = {
// //   service: "apt",
// // };
// // const apartment = Object.create(advert);
// // apartment.descr = "Spacious apartment in the city center";
// // apartment.rating = 4;
// // apartment.price = 2153;

// // for (const key in apartment) {
// //   // Change code below this line
// // if (apartment.hasOwnProperty(key))
// //   {keys.push(key);
// //   values.push(apartment[key]);}

// //   // Change code above this line
// // }

// // 12

// // function countProps(object) {
// //   let propCount = 0;
// //   // Change code below this line
// //   for (const keys in object) {
// // if (object.hasOwnProperty(keys)) {
// //   propCount += 1;
// // }}
// //   // Change code above this line
// //   return propCount;
// // }

// // 13

// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };
// // const values = [];
// // // Change code below this line
// // const keys = Object.keys(apartment);
// // for (let key of keys) {
// //   values.push(apartment[key]);
// // }

// // 14

// // function countProps(object) {
// //   // Change code below this line
// //   let propCount = 0;
// // const keys = Object.keys(object);
// //   propCount = keys.length;

// //   return propCount;
// //   // Change code above this line
// // }

// // 15

// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };
// // // Change code below this line
// // const keys = Object.keys(apartment);
// // const values = Object.values(apartment);

// // 16

// // function countTotalSalary(salaries) {
// //   let totalSalary = 0;
// //   // Change code below this line
// // const salary = Object.values(salaries);
// //   for (let oneSalary of salary) {
// //     totalSalary += oneSalary;
// //   }
// //   // Change code above this line
// //   return totalSalary;
// // }

// // 17

// // const colors = [
// //   { hex: "#f44336", rgb: "244,67,54" },
// //   { hex: "#2196f3", rgb: "33,150,243" },
// //   { hex: "#4caf50", rgb: "76,175,80" },
// //   { hex: "#ffeb3b", rgb: "255,235,59" },
// // ];

// // const hexColors = [];
// // const rgbColors = [];
// // // Change code below this line
// // for (const color of colors) {
// //   hexColors.push(color.hex);
// //   rgbColors.push(color.rgb)
// // }

// // 18

// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // function getProductPrice(productName) {
// //   // Change code below this line
// // for (let prodName of products) {
// //     if (prodName.name === productName) {
// //       return prodName.price;
// //     }
// //   }
// //     return null;

// //   // Change code above this line
// // }

// // 19

// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // function getAllPropValues(propName) {
// //   // Change code below this line
// // let productsValues = []
// //   for (let value of products) {
// //     if (value.hasOwnProperty(propName)) {
// //       productsValues.push(value[propName]);
// //     }
// //   }
// // return productsValues


// //   // Change code above this line
// // }

// // 20

// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // function calculateTotalPrice(productName) {
// //   // Change code below this line
// // for (const product of products) {
// //   if (product.name === productName) {
// //     return product.price * product.quantity;
// //   }
// //   }
// //   return 0;


// //   // Change code above this line
// // }

// // 21

// // const highTemperatures = {
// //   yesterday: 28,
// //   today: 26,
// //   tomorrow: 33,
// // };
// // // Change code below this line

// // const {yesterday, today, tomorrow} = highTemperatures;

// // // Change code above this line
// // const meanTemperature = (yesterday + today + tomorrow) / 3;

// // 22

// // const highTemperatures = {
// //   yesterday: 28,
// //   today: 26,
// //   tomorrow: 33,
// // };
// // // Change code below this line

// // const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // // Change code above this line
// // const meanTemperature = (yesterday + today + tomorrow) / 3;

// // 23

// // const highTemperatures = {
// //   yesterday: 28,
// //   today: 26,
// //   tomorrow: 33,
// // };
// // // Change code below this line

// // const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


// // // Change code above this line
// // const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// // 24

// // const colors = [
// //   { hex: "#f44336", rgb: "244,67,54" },
// //   { hex: "#2196f3", rgb: "33,150,243" },
// //   { hex: "#4caf50", rgb: "76,175,80" },
// //   { hex: "#ffeb3b", rgb: "255,235,59" },
// // ];

// // const hexColors = [];
// // const rgbColors = [];
// // // Change code below this line

// // for (const {hex, rgb} of colors) {
// //   hexColors.push(hex);
// //   rgbColors.push(rgb);
// // }

// // 25

// // const forecast = {
// //   today: {
// //     low: 28,
// //     high: 32,
// //     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// //   },
// //   tomorrow: {
// //     low: 27,
// //     high: 31,
// //   },
// // };
// // // Change code below this line

// // const {today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }} = forecast;


// // 26

// // // Change code below this line
// // function calculateMeanTemperature(forecast) {
// //   const { today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}
// //   } = forecast;

// //   // Change code above this line
// //   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// // }

// // 27

// // const scores = [89, 64, 42, 17, 93, 51, 26];
// // // Change code below this line
// // const bestScore = Math.max(...scores);
// // const worstScore = Math.min(...scores);

// // 28

// // const firstGroupScores = [64, 42, 93];
// // const secondGroupScores = [89, 14, 51, 26];
// // const thirdGroupScores = [29, 47, 18, 97, 81];
// // // Change code below this line
// // const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// // const bestScore = Math.max(...allScores);
// // const worstScore = Math.min(...allScores);

// // 29

// // const defaultSettings = {
// //   theme: "light",
// //   public: true,
// //   withPassword: false,
// //   minNumberOfQuestions: 10,
// //   timePerQuestion: 60,
// // };
// // const overrideSettings = {
// //   public: false,
// //   withPassword: true,
// //   timePerQuestion: 30,
// // };
// // // Change code below this line
// // const finalSettings = {...defaultSettings, ...overrideSettings};

// // 30

// // function makeTask(data) {
// //   const completed = false;
// //   const category = "General";
// //   const priority = "Normal";
// //   // Change code below this line
 
// //   // const { text = (), category, priority } = data;
// //   const obj = { category, priority, ...data, completed };
 
// //   return obj;
// //   // Change code above this line
// // }

// // console.log(makeTask({})) // повертає { category: "General", priority: "Normal", completed: false }
// // console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })) // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// // console.log(makeTask({ category: "Finance", text: "Take interest" })) // повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// // console.log(makeTask({ priority: "Low", text: "Choose shampoo" })) // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// // console.log(makeTask({ text: "Buy bread" })) // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// // 31

// // // Change code below this line
// // function add(...args) {
// //   let argsSum = 0;
// //   for (const arg of args) {
// //     argsSum += arg
// //   }
// //   return argsSum
// //   // Change code above this line
// // }

// //  console.log(add(15, 27)) // повертає 42
// // console.log(add(12, 4, 11, 48)) // повертає 75
// // console.log(add(32, 6, 13, 19, 8)) // повертає 78
// // console.log(add(74, 11, 62, 46, 12, 36)) // повертає 241

// // 32

// // // Change code below this line
// // function addOverNum(firstNumber, ...args) {
// //   let total = 0;

// //   for (const arg of args) {
// //     if (arg > firstNumber)
// //     total += arg;
// //   }

// //   return total;
// //   // Change code above this line
// // }

// // console.log(addOverNum(50, 15, 27)) // повертає 0
// // console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)) // повертає 71
// // console.log(addOverNum(15, 32, 6, 13, 19, 8)) // повертає 51
// // console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)) // повертає 218


// // 33

// // // Change code below this line
// // function findMatches(firstArr, ...args) {
// //   const matches = []; // Don't change this line
// // for (const arg of args) {
// //   if (firstArr.includes(arg))
// //     matches.push(arg)
// // }
// //   // Change code above this line
// //   return matches;
// // }

// // console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)) // повертає [1, 2]
// // console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)) // повертає [17, 89, 2]
// // console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)) // повертає [24, 9, 41]
// // console.log(findMatches([63, 11, 8, 29], 4, 7, 16)) // повертає []

// // 34

// // const bookShelf = {
// //   // Change code below this line
// //   books: ["The last kingdom", "The guardian of dreams"],
// //   getBooks() {
// //     return "Returning all books";
// //   },
// //   addBook(bookName) {
// //     return `Adding book ${bookName}`;
// //   },
// //   removeBook(bookName) {
// //     return `Deleting book ${bookName}`;
// //   },
// //   updateBook(oldName, newName) {
// //     return `Updating book ${oldName} to ${newName}`
// //   }
// //   // Change code above this line
// // };

// // console.log(bookShelf.removeBook("Red sunset"));
// // console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// // 35

// // const bookShelf = {
// //   books: ["The last kingdom", "Haze", "The guardian of dreams"],
// //   updateBook(oldName, newName) {
// //     // Change code below this line
// //     const bookIndex = this.books.indexOf(oldName);
// //     this.books.splice(bookIndex, 1, newName);
// //     // Change code above this line
// //   },
// // };

// // console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// // console.log(bookShelf.books);
// // console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// // console.log(bookShelf.books);

// // 36

// // const atTheOldToad = {
// //   // Change code below this line

// //   potions: [],

// //   // Change code above this line
// // };

// // console.log(atTheOldToad.potions);


// // 37

// // const atTheOldToad = {
// //   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// //   // Change code below this line
// //   getPotions() {
// //     return this.potions;
// // }
// //   // Change code above this line
// // };

// // console.log(atTheOldToad.potions);
// // console.log(atTheOldToad.getPotions());


// // 38

// // const atTheOldToad = {
// //   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// //   addPotion(potionName) {
// //     // Change code below this line
// //     this.potions.push(potionName);


// //     // Change code above this line
// //   },
// // };

// // console.log(atTheOldToad.addPotion("Invisibility"));
// // console.log(atTheOldToad.potions);
// // console.log(atTheOldToad.addPotion("Power potion"));
// // console.log(atTheOldToad.potions);

// // 39

// // const atTheOldToad = {
// //   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// //   removePotion(potionName) {
// //     // Change code below this line
// //     const potionIdx = this.potions.indexOf(potionName)
// //     this.potions.splice(potionIdx, 1);


// //     // Change code above this line
// //   },
// // };

// // console.log(atTheOldToad.removePotion("Dragon breath"));
// // console.log(atTheOldToad.potions);
// // console.log(atTheOldToad.removePotion("Speed potion"));
// // console.log(atTheOldToad.potions);

// // 40

// // const atTheOldToad = {
// //   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// //   updatePotionName(oldName, newName) {
// //     // Change code below this line
// // const potionIdx = this.potions.indexOf(oldName)
// //     this.potions.splice(potionIdx, 1, newName);

// //     // Change code above this line
// //   },
// // };

// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// // console.log(atTheOldToad.potions);
// // console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
// // console.log(atTheOldToad.potions);


// // 41

// // const atTheOldToad = {
// //   potions: [
// //     { name: "Speed potion", price: 460 },
// //     { name: "Dragon breath", price: 780 },
// //     { name: "Stone skin", price: 520 },
// //   ],
// //   // Change code below this line
  
// //   getPotions() {
// //     return this.potions;
// //   },
// //   addPotion(newPotion) {
// //     for (const potion of this.potions) {
// //       if (potion.name === newPotion.name) {
// //         return `Error! Potion ${newPotion.name} is already in your inventory!`;
// //       }
// //           this.potions.push(newPotion);
    
// //     }
// //     // if (this.potions.includes(newPotion)) {
// //     //   return `Error! Potion ${newPotion} is already in your inventory!`;
// //     // }

// //     // this.potions.push(newPotion);
// //   },
// //   removePotion(potionName) {
// //     for (let potion of this.potions) {
// //       if (potion.name === potionName) {
// //         const potionIndex = this.potions.indexOf(potion);

// //         if (potionIndex === -1) {
// //           return `Potion ${potionName} is not in inventory!`;
// //         }

// //         this.potions.splice(potionIndex, 1);
// //       }
// //     }
// //   },
// //   updatePotionName(oldName, newName) {
// //     for (let potion of this.potions) {
// //       if (potion.name === oldName) {
// //         potion.name = newName;
// //       }
// //     }
// //   },
// //   // Change code above this line
// // };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }  
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);

//         if (potionIndex === -1) {
//           return `Potion ${potionName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     // Change code above this line
//   }
// };




// // console.log(atTheOldToad.potions);
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); // додасть обєкт
// // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); // додасть обєкт
// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); // не змінюється
// // console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })); // не змінюється
// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); // "Error! Potion Dragon breath is already in your inventory!"
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })); // "Error! Potion Stone skin is already in your inventory!"
// // console.log(atTheOldToad.removePotion("Dragon breath")); // видаляє обєкт
// // console.log(atTheOldToad.removePotion("Speed potion")); // видаляє обєкт
// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // змінить name
// // console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")); // змінить name

// // console.log(atTheOldToad.potions);










// // // console.log(clg);

