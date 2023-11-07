var firstName: string = "Eric";
// Task 2
console.log(`Hello ${firstName}, would you like to learn some Python today?`);

// Task 3
const toTitleCase = (str: string): string => {
    return str.toLowerCase().replace(/(^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}

var myName: string = "fahim raza";

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

var titleCase: string = toTitleCase(myName);
console.log(titleCase);

// Task 4
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);

// Task 5
var famous_person: string = "George Eliot";
var famous_person_message: string = "It is never too late to be what you might have been";
console.log(`${famous_person} once said, “${famous_person_message}”`);

// Task 7 & 8
console.log(6 + 2, '/addition of 8');
console.log(10 - 2, '/subtraction of 8');
console.log(2 * 4, '/multiplication of 8');
console.log(64 / 8, '/division of 8');

// Task 9
var favorite_number: number = 22;
var message_nineth: string = `My Favorite number is ${favorite_number}`;
console.log(message_nineth)

// Task 10 comments were added as far I think for all above tasks

// Task 11
const friendNames: string[] = ["Faizan", "Tahir", "Ahmed"];
friendNames.map((friendName) => {
    console.log(friendName, '===> task 11 friends names')
})

// Task 12
friendNames.map((friendName) => {
    let messageName: string = `Hello ${friendName}, how are you?`
    console.log(messageName, '===> task 12 friends greetings')
})


// Task 13
const transportationStatements: string[] = ["Faizan", "Tahir", "Ahmed"];
transportationStatements.map((statement) => {
    console.log(statement, '===> task 13 statemets')
})

// Task 14
const invitedGuests: string[] = ["Faizan", "Tahir", "Ahmed"];
console.log(invitedGuests, '/invited Guests')
invitedGuests.map((guestName) => {
    console.log(`Hello Mr.${guestName}, we have invited you to dinner. `, '===> task 14 guest invitations')
})

// Task 15
console.log("Tahir isn't coming")
invitedGuests.splice(1, 1, "Fahim")
console.log(invitedGuests, '/replaced Guest no.2')
invitedGuests.map((guestName) => {
    console.log(`Hello Mr.${guestName}, we have invited you to dinner.`, '===> task 15 changed guest invitations')
})

// Task 16
console.log("I just founded a bigger dinner table")
invitedGuests.unshift("Owais")
let middleIndex: number = Math.floor(invitedGuests.length / 2)
invitedGuests.splice(middleIndex, 0, "Ahsan")
invitedGuests.push("Danish")
invitedGuests.map((guestName) => {
    console.log(`Hello Mr.${guestName}, we have invited you to dinner.`, '===> task 16 added guest invitations')
})
console.log(invitedGuests, '/added Guests')

// Task 17
const popFromArray = (indexOfArray: number) => {
    console.log(`Hello Mr.${invitedGuests[indexOfArray]}, We are sorry we don't have space for now, so we will invite you later`)
    // can use both based on situation
    // invitedGuests.splice(indexOfArray, 1)
    invitedGuests.pop()
}

console.log("Really sorry, I can only invite two guests now");
popFromArray(invitedGuests.length - 1);
popFromArray(invitedGuests.length - 1);
popFromArray(invitedGuests.length - 1);
popFromArray(invitedGuests.length - 1);
invitedGuests.map((guestName) => {
    console.log(`Hello Mr.${guestName}, You are still invited`, '===> task 16 added guest invitations');
})
console.log(invitedGuests, '/two guests left');
popFromArray(invitedGuests.length - 1);
popFromArray(invitedGuests.length - 1);
console.log(invitedGuests, '===> all array empty');

// task 18
let placeNames: string[] = ["France", "USA", "Madrid", "Argentenia", "Canada"];
console.log(placeNames, '===> original order')
let alphabeticalOrder: string[] = placeNames.slice();
alphabeticalOrder.sort()
console.log(alphabeticalOrder, '===> alphabetical order')
console.log(placeNames, '===> original order')
let reverseAlphabeticalOrder: string[] = placeNames.slice();
reverseAlphabeticalOrder.sort((a, b) => {
    return b.localeCompare(a)
})
console.log(reverseAlphabeticalOrder, '===> alphabetical order')
console.log(placeNames, '===> original order')
placeNames.reverse();
console.log(placeNames, '===> reversed order')
placeNames.reverse();
console.log(placeNames, '===> back to original order')
placeNames.sort();
console.log(placeNames, '===> sorted order')
placeNames.sort((a, b) => {
    return b.localeCompare(a)
})
console.log(placeNames, '===> reverse alphabetical order')


// Task 19
console.log(`The guest I was inviting from Exercise 14 to 18 they are just ${invitedGuests.length}, because at the end we did the array empty :-)`)

// Task 20
let placeList: string[] = []
const createList = (stringToAdd: string) => {
    placeList.push(stringToAdd)
}

createList("Urdu")
createList("English")
createList("French")
createList("Chinese")
createList("Pashto")
createList("Balochi")
createList("Sindhi")
console.log(placeList, '===> List gets created')


// task 21

// task 22

// task 23
var travelMode: string = "car";
console.log("travel mode === 'car' ? I predict true")
console.log(travelMode === "car")
console.log("travel mode == 'car' ? I predict true")
console.log(travelMode == "car")
console.log("travel mode !== 'cars' ? I predict true")
console.log(travelMode !== "cars")
console.log("travel mode != 'Car' ? I predict true")
console.log(travelMode != "Car")
console.log("travel mode !== 'Car' ? I predict true")
console.log(travelMode !== "Car")

var vehicleAmount: number = 10;
console.log("Vehcile Amount === 8 ? I predict false")
console.log(vehicleAmount === 8)
console.log("Vehcile Amount !== 12 ? I predict false")
console.log(vehicleAmount !== 10)
console.log("Vehcile Amount > 10 ? I predict false")
console.log(vehicleAmount > 10)
console.log("Vehcile Amount < 5 ? I predict false")
console.log(vehicleAmount < 5)
console.log("Vehcile Amount == 15 ? I predict false")
console.log(vehicleAmount == 15)

// task 24
var stringTest: string = "fahim"
var stringTestUppercase: string = "FAHIM"
var numOne: number = 30
var numTwo: number = 40
var numThree: number = 40

console.log("String Test === fahim ? I predict true")
console.log(stringTest === "fahim")
console.log("String Test === Fahim ? I predict false")
console.log(stringTest === "Fahim")
console.log("String Test !== Fahim ? I predict true")
console.log(stringTest !== "Fahim")
console.log("String Test == Fahim ? I predict false")
console.log(stringTest == "Fahim")
console.log("String Test Uppercase .tolowercase() === fahim ? I predict true")
console.log(stringTest.toLowerCase() === "fahim")
console.log("String Test Uppercase .tolowercase() == Fahim ? I predict false")
console.log(stringTest.toLowerCase() == "Fahim")
console.log("numOne != numTwo ? I predict true")
console.log(numOne != numTwo)
console.log("numOne == numTwo ? I predict false")
console.log(numOne == numTwo)
console.log("numOne less then numTwo ? I predict true")
console.log(numOne < numTwo)
console.log("numOne greater then numTwo ? I predict false")
console.log(numOne > numTwo)
console.log("numTwo greater then or equal to numThree ? I predict true")
console.log(numTwo >= numThree)
console.log("numThree greater then or equal to 50 ? I predict false")
console.log(numThree >= 50)
console.log("numThree less then or equal to 50 ? I predict true")
console.log(numThree <= 50)
console.log("true && false ? I predict false")
console.log(true && false)
console.log("true || false ? I predict true")
console.log(true || false)
console.log("false && false ? I predict false")
console.log(false && false)
console.log("true && true ? I predict true")
console.log(true && true)
console.log("!(true && true) || false ? I predict false")
console.log(!(true && true) || false)
console.log("(true && true) || false ? I predict true")
console.log((true && true) || false)

var arrayToTest: string[] = ["abc", "ced", "fgh"]
console.log(arrayToTest, '/arrayyy')
console.log(arrayToTest.indexOf("abc") !== -1, '===> I predict true as abc is in the array')
// I tried includes function but it wasn't working :(
console.log(arrayToTest.indexOf("abcd") !== -1, '===> I predict false as abcd is not in the array')

// task 25
let alien_color: string = "green";
if (alien_color == "green") {
    console.log("Player just earned 5 points.")
}

// task 26
if (alien_color == "green") {
    console.log("Player just earned 5 points for shooting the alient.")
} else {
    console.log("Player just earned 10 points")
}

// task 27
if (alien_color == "green") {
    console.log("Player earned 5 points")
} else if (alien_color === "yellow") {
    console.log("Player earned 10 points")
} else if (alien_color === "red") {
    console.log("Player earned 15 points")
}

// task 28
var person_age = 19;
if (person_age < 2) {
    console.log("Person is a baby")
} else if (person_age >= 2 && person_age < 4) {
    console.log("Person is a toddler")
} else if (person_age >= 4 && person_age < 13) {
    console.log("Person is a Kid")
} else if (person_age >= 13 && person_age < 20) {
    console.log("Person is a Teenager")
} else if (person_age >= 20 && person_age < 65) {
    console.log("Person is an Adult")
} else {
    console.log("Person is an Elder")
}

// Task 29
var favorite_fruits: string[] = ["mango", "banana", "orange"]
if (favorite_fruits.indexOf("mango") !== -1) {
    console.log("You really like mango")
}
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like banana")
}
if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("You really like orange")
}
if (favorite_fruits.indexOf("peach") !== -1) {
    console.log("You really like peach")
}
if (favorite_fruits.indexOf("grapes") !== -1) {
    console.log("You really like grapes")
}

// Task 30
var user_names: string[] = ["admin", "fahim", "imran", "shakeel", "zahid", "siddiq"]
user_names.map((username) => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
})

// Task 31
user_names.length = 0
if (user_names.length === 0) {
    console.log("We need to find some users!")
}

// Task 32
let current_users: string[] = ["john", "mona", "lisa", "mathew", "david"]
let new_users: string[] = ["ashfaq", "david", "mathew", "hanif", "hammad"]

new_users.map((newusername) => {
    let findIndex = -1
    // tried findIndex but didn't worked good :(
    for (let i = 0; i < current_users.length; i++) {
        if (current_users[i].toLowerCase() === newusername.toLowerCase()) {
            findIndex = i;
            break;
        }
    }
    if (findIndex !== -1) {
        console.log(`${newusername} will need to enter a new username`)
    } else {
        console.log(`${newusername} is available`)
    }
})


// Task 33
var all_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
all_numbers.map((num) => {
    if (num === 1) {
        console.log("1st")
    } else if (num === 2) {
        console.log("2nd")
    } else if (num === 3) {
        console.log("3rd")
    } else if (num === 3) {
        console.log(`${num}th`)
    }
})

// Task 34
let pizza_flavors: string[] = ["pepperoni", "cheese", "margherita"]
for (let i = 0; i < pizza_flavors.length; i++) {
    console.log(`I like ${pizza_flavors[i]} pizza`)
}

console.log("I like pizzas so much \nI usually buy pizza when I have enough money and enough time to eat \nPizzas are good for parties and healthy aswell \nI really love pizza.")

// Task 35
var all_animals: string[] = ["birds", "bat", "insects"]
for (let i = 0; i < all_animals.length; i++) {
    console.log(`A ${all_animals[i]} would fly very good`)
}
console.log(`Any of these animals would fly very good`)

// Task 36 & 37
function make_shirt(size: string = "Large", message: string = "I love Typescript") {
    console.log(`T-Shirt of ${size} size, and it needs to print '${message}' at it`)
}

make_shirt()
make_shirt("Medium")
make_shirt("Small", "Print at the back")



// Task 38
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`)
}

describe_city("Karachi")
describe_city("Islamabad")
describe_city("Borne", "Netherlands")


// Task 39
function city_country(city: string, country: string) {
    console.log(`"${city}, ${country}"`)
}

city_country("Karachi", "Pakistan")
city_country("Islamabad", "Pakistan")
city_country("Borne", "Netherlands")

// Task 40
interface MyObject {
    artist_name: string;
    album_title: string;
    number_of_tracks?: number;
}

function make_album(artist_name: string, album_title: string, number_of_tracks?: number) {
    let obj: MyObject = {
        artist_name,
        album_title
    }
    if (number_of_tracks) {
        obj.number_of_tracks = number_of_tracks
    }
    console.log(obj)
    return obj;
}

make_album("abc artist", "abc title")
make_album("def artist", "def title")
make_album("ghi artist", "ghi title", 10)

// Task 41
let magicians_array: string[] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"]

function show_magicians(array: string[]) {
    array.map((t) => {
        console.log(t, '===> magician name')
    })
}

show_magicians(magicians_array)

// Task 42

function make_great(array: string[]) {
    array.map((ar, ind) => {
        array[ind] = `The Great Magician ${ar}`
    })
}

make_great(magicians_array)
console.log(magicians_array, "===> Added The Great")

// Task 43

// Task 44
function sandwich_summary(items: string[]) {
    items.forEach((summary) => {
        console.log(summary)
    })
}

var itemsOne: string[] = ["Chicken", "Abc Item", "Ced Item"]
var itemsSecond: string[] = ["Bread", "Egg", "Beef"]
var itemsThird: string[] = ["Xyz", "Egg", "Chicken"]

sandwich_summary(itemsOne)
sandwich_summary(itemsSecond)
sandwich_summary(itemsThird)