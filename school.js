// problem 10
let school = require ('./object')
function countCalculation(school) {
  let {
    departments: {
      math: { teachers: mathTeachersCount, students: mathStudentsCount },
      history: { teachers: historyTeachersCount, students: historyStudentsCount },
    },
  } = school;
  return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
}
console.log(countCalculation(school));
// problem 11
function findTopStudent(school, courseName){
  let { students } = school;
  let topStudent = students[0];

  students.forEach((student) => {
    if (student.scores[courseName]>topStudent.scores[courseName]){
      topStudent = student;
    }
  });
  return topStudent;
}

console.log(findTopStudent(school, 'math'));

// problem 12

function addNewDept (school ,addNewDept){
  let updatedDepartments ={...school.departs,...newDeparts};
  return {...school,departments: updatedDepartments};
  }
  const newDeparts ={ art : {teachers:2,students:50}};
  console.log(addNewDept(school,newDeparts));


// problem 14
function generateGreeting(name ="", language = "English"){
  const greetings ={
    English :"Hello",
    Spanish : "¡Hola",
    French : "Bonjour"
  };
  const greeting =greetings[language] || greetings.English;
  return `${greeting},${name}`;
}
console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"







