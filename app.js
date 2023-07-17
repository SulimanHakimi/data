let btn = document.getElementById("btn");
let removeBtn = document.getElementById("remove");
let dataG = document.getElementById("data");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let nameuser = document.getElementById("name");
let lastName = document.getElementById("lastname");
let age = document.getElementById("age");
let right = document.getElementById("right");
let left = document.getElementById("left");

let data = [
  {
    name: "suliman",
    lastname: "hakimi",
    age: 19,
    username: "suliman1",
    password: "hakimi@@@",
  },
  {
    name: "imran",
    lastname: "hakimi",
    age: 21,
    username: "imran1",
    password: "h344ns5",
  },
  {
    name: "saboor",
    lastname: "hakimi",
    age: 25,
    username: "saboor1",
    password: "sab00r123",
  },
  {
    name: "mirza",
    lastname: "hakimi",
    age: 53,
    username: "mirza@1",
    password: "hakimi123",
  },
];

function catchData() {
  nameuser.innerText = `Password: ${data[0].name}`;
  lastName.innerText = `Password: ${data[0].lastname}`;
  age.innerText = `Password: ${data[0].age}`;
  user.innerText = `UserName: ${data[0].username}`;
  pass.innerText = `Password: ${data[0].password}`;
}
catchData();
btn.addEventListener("click", () => {
  dataG.style.display = "block";
  btn.style.display = "none";
});
removeBtn.addEventListener("click", () => {
  dataG.style.display = "none";
  btn.style.display = "block";
});

right.addEventListener("click", () => {
  nameuser.innerText = `Password: ${data[1].name}`;
  lastName.innerText = `Password: ${data[1].lastname}`;
  age.innerText = `Password: ${data[1].age}`;
  user.innerText = `UserName: ${data[1].username}`;
  pass.innerText = `Password: ${data[1].password}`;
});
left.addEventListener("click", () => {
  nameuser.innerText = `Password: ${data[0].name}`;
  lastName.innerText = `Password: ${data[0].lastname}`;
  age.innerText = `Password: ${data[0].age}`;
  user.innerText = `UserName: ${data[0].username}`;
  pass.innerText = `Password: ${data[0].password}`;
});
