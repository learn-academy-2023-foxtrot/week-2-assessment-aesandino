// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

const multipliedByThree = [6, 7, 8, 9, 10, 24, 27, 30, 33, 36].map((number) => number * 3)
console.log(multipliedByThree)


// Pseudo code:
// name of function: multipliedByThree
// input: a combination of both arrays, creating one array that contains all elements of each array
// output: one array that transforms each number/element to a new version of itself that is multiplied by 3
// process: By defining the command that the function needs to apply to each element (multlipiedByThree) and then using the ".map" high order function method to ensure that the command affects each element in the array while still creating an output that results in an array of numbers. 


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

describe("maybeDivisibleByThree", () => {
    it("determine if the number stated is divisible by three", () => {
        expect(maybeDivisibleByThree("yes")).toEqual("is divisible by three")
        expect(maybeDivisibleByThree("no")).toEqual("is not divisible by three")
    })
})

const maybeDivisibleByThree = (string) => {
    if (string === "yes") {
        return "15 is divible by three", "0 is divisible by three"
    } else if (string === "no") {
        return "-7 is not divisible by three"
    }
}
})

// Pseudo code:
// name of function: maybeDivisibleByThree
// input: 3 objects as an argument
// output: 3 strings that determine if the arguments listed are divible by 3 or not. 
// process: following the steps provided in the syllabus to create a test with arguments

// NOTES: This one has failed too. I thought that by setting up the arguments I could get the desired outputs - maybe I've missed a step within the "const section". I believe I correctly organized the "describe, it, expect" portion of the test. The terminal says "error Command failed with exit code 1"

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

describe("allCaps", () => {
    it("capitalize the first letter of each string", () => {
        expect(greeter()).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew","Temperature", "Database", "Chopsticks", "Mango")
    })
})

const allCaps = () => {
    return "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database", "Chopsticks", "Mango"
}

// Pseudo code:
// name of function: allCaps
// input: 2 arrays - of multiple strings
// output: 2 arrays with the first letter of each string capitalized
// process: following the syllabus to create a jest test. 

// NOTES: I'm not sure what I'm doing wrong - the test failed the first time, as expected. But, once I added the "const section" the test still failed. There was an error with the "expected" and "recieved", I tried to remedy it as I noticed I had a random "(" along the strings - tested it again, still failed, but this time with "error Command failed with exit code 1."


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

describe("greeter", () => {
    it("returns a numerical value representing the index of the first vowel of each string", () => {
        expect(vowelTester1("learn")).toEqual("1")
        expect(vowelTester2("academy")).toEqual("0")
        expect(vowelTester3("challenges")).toEqual("2")
    })
})
const greeter = () => {
    return "1", "0", "2"
}

// Pseudo code:
// name of function: firstVow
// input: 3 strings
// output: a numerical value that represents the index placement of the first vowel in each string. 
// process: following the syllabus to create a jest test. 

// NOTES: My thought proccess was to define the output of each of the strings, but it failed. I'm not sure what I'm doing wrong - the terminal states: "error Command failed with exit code 1."
