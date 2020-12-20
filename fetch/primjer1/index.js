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
// function getJson() {
//   fetch("./test.json")
//     .then((res) => res.json())
//     .then((res) => {
//       let output = "";
//       res.forEach((student, index) => {
//         output += `<ul>
//                        <li>Ime: ${student.name}</li>
//                        <li>Prezime: ${student.lastname}</li>
//                        </ul>`;
//       });
//       document.getElementById("studentList").innerHTML = output;
//     });
// }
// getJson();

function getRickAndMortyChar() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((res) => listAllChar(res.results));
}
getRickAndMortyChar();
function listAllChar(chars) {
  console.log(chars);
  let output = "";
  chars.forEach((element) => {
    output += `<div class="card" style="width: 18rem;">
      <img src=${element.image} class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Name: ${element.name}</p>
        <p class="card-text">Species: ${element.species}</p>
      </div>
    </div>`;
  });
  document.getElementById("studentList").innerHTML = output;
}
