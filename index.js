const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
let finalArray = [];
function titleCased() {
  for (const element of tutorials) {
    let testArray = [];
    let index = 0;
    const sepArray = element.split(" ");
    const mappedChar = sepArray.map((word) => {
      const upperCaseChar = word.charAt(0).toUpperCase();
      testArray.push(upperCaseChar + sepArray[index].substr(1));
      index = index + 1;
    });
    const sentencesForArray = testArray.join(" ");
    finalArray.push(sentencesForArray);
  }
  return finalArray;
}
