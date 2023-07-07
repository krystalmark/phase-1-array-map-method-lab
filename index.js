const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials
}

// Assuming tutorials is a global variable containing the tutorial names

function titleCased() {
  return tutorials.map(function(tutorial) {
    // Split the tutorial name into an array of words
    var words = tutorial.split(' ');
  
    // Capitalize the first letter of each word and convert the rest to lowercase
    var titleCaseWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    // Join the title-cased words back into a single string
    var titleCasedTutorial = titleCaseWords.join(' ');
  
    return titleCasedTutorial;
  });
}

