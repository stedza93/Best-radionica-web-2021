// GET TEXT

// function getText() {
//   fetch("./test.txt")
//     .then((res) => res.text())
//     .then((res) => {
//       document.body.innerHTML = res;
//     });
// }
// getText();

// GET JSON
function getJson() {
  fetch("./test.json")
    .then((res) => res.json())
    .then((res) => {
      let output = "";
      res.forEach((student, index) => {
        output += `<ul>
                       <li>Ime: ${student.name}</li>
                       <li>Prezime: ${student.lastname}</li>
                       </ul>`;
      });
      document.getElementById("studentList").innerHTML = output;
    });
}
getJson();
