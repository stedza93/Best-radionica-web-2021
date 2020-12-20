const students = [
  { name: "Jovan", lastname: "Jovanovic" },
  { name: "Marko", lastname: "Markovic" },
];

// PROMISES WITH .then & .catch

// function listAllStudents() {
//   let output = "";
//   students.forEach((student, index) => {
//     // console.log(student, index);
//     output += `<ul>
//              <li>Ime: ${student.name}</li>
//              <li>Prezime: ${student.lastname}</li>
//              </ul>`;
//   });
//   document.getElementById("studentList").innerHTML = output;
// }
// function addStudent() {
//   return new Promise(function (resolve, reject) {
//     const someError = false;
//     setTimeout(function () {
//       students.push({ name: "Ivan", lastname: "Ivanovic" });
//       if (someError) {
//         reject("Desila se greska");
//       } else {
//         resolve("FUNKCIJA JE ZAVRSENA uspjesno");
//       }
//     }, 2000);
//   });
// }
// addStudent()
//   .then((result) => {
//     console.log(result);
//     listAllStudents();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//PROMISES async/await

function listAllStudents() {
  let output = "";
  students.forEach((student, index) => {
    // console.log(student, index);
    output += `<ul>
               <li>Ime: ${student.name}</li>
               <li>Prezime: ${student.lastname}</li>
               </ul>`;
  });
  document.getElementById("studentList").innerHTML = output;
}
function addStudent() {
  return new Promise(function (resolve, reject) {
    const someError = false;
    setTimeout(function () {
      students.push({ name: "Ivan", lastname: "Ivanovic" });
      if (someError) {
        reject("Desila se greska");
      } else {
        resolve("FUNKCIJA JE ZAVRSENA uspjesno");
      }
    }, 1000);
  });
}

async function waitForStudentAdd() {
  const results = await Promise.all([addStudent(), addStudent(), addStudent()]);
  console.log(results);
  listAllStudents();
}
waitForStudentAdd();
