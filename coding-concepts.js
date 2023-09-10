// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
console.log(cohort.split(""))

// a) Your answer: "F" "o" "x" "t" "r" "o" "t" "2" "0" "2" "3"
// b) Verify and explain: The terminal determined that my prediction was correct. This is because the command .split will seperate each letter apart from eachother that is within the string. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello Anabella LEARN Student
// b) Verify and explain: The terminal determined that my prediction was incorrect. The terminal states that "undefined" is the output. Maybe this is caused by the lack of the definement of "(name)"?

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The terminal determined that my prediction was correct. This is because the command is asking each element in the array to transform into a number that is double its current value. While still maintaining its format within an array. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The terminal determined that my prediction was correct. This is because the command is requesting for each element in the array that is "even" to extract itself from the array. Leaving behind the "odd" numbers and maintaining its format of an array. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: ["Javascript", "Ruby"]
// b) Verify and explain: The terminal determined that my prediction was incorrect. My terminal states that "JavaScript" is the right output. This may be because the console log is looking specifically at -languages:["JavaScript", "Ruby"]- and ONLY requesting the element that is assigned to the index placement of [0]. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: The terminal determined that my prediction was correct - but missing a few pieces of information. I didn't realize the function was requesting outputs from each of the "this" statements. The curly brackets are needed to contain each of the 3 pieces of information determined by the "this" statements. 
