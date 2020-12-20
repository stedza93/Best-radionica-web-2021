let students;
function listStudents() {
  fetch(
    "https://jsonblob.com/api/jsonBlob/d06c1bf3-42bd-11eb-9756-91736363b72a"
  )
    .then((res) => res.json())
    .then((res) => {
      students = res;
      let output = "";
      students.forEach((student) => {
        output += `<ul>
              <li>Ime: ${student.name}</li>
              <li>Prezime: ${student.lastname}</li>
              </ul>`;
      });
      document.getElementById("studentList").innerHTML = output;
    });
}
listStudents();

const addForm = document.getElementById("myForm");
addForm.addEventListener("submit", addStudent);

// PUT METODA
function putBlob(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  console.log(name, surname);
  let data = [...students, { name: name, lastname: surname }];
  let url =
    "https://jsonblob.com/api/jsonBlob/d06c1bf3-42bd-11eb-9756-91736363b72a";
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      listStudents();
    })
    .catch((error) => console.log(error));
}

// POST METODA
function addStudent(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  console.log(name, surname);
  let data = [{ name, surname }];
  fetch("https://jsonblob.com/api/jsonBlob", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      redirect: "follow",
    },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      console.log(res);
      let blobUrl = res.headers.get("Location");
      console.log(blobUrl);
    })
    .catch(function (error) {
      console.log(error);
    });
}
