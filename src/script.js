const modal = document.getElementById("modal");
const showModal = document.getElementById("optionsBtn");
const hideModal = document.getElementById("closeBtn");
const passDisplay1 = document.getElementById("boxOne");
const passDisplay2 = document.getElementById("boxTwo");

function toggleModal() {
  modal.classList.toggle("is-visible");
}

function windowOnClick(event) {
  if (
    event.target === document.querySelector("body") &&
    document.querySelector(".modal.is-visible")
  ) {
    toggleModal();
  }
}

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    toggleModal();
  }
});

showModal.addEventListener("click", toggleModal);
hideModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const randomArr = [];
let password1 = [];
let password2 = [];

const getPassword = document
  .getElementById("genBtn")
  .addEventListener("click", () => {
    for (let i = 0; i < characters.length; i++) {
      let randomChar =
        characters[Math.floor(Math.random() * characters.length)];
      randomArr.push(randomChar);
    }
    password1 = randomArr.splice(0, 15);
    password2 = randomArr.splice(0, 15);
    passDisplay1.textContent = password1.join("");
    passDisplay2.textContent = password2.join("");
  });

let cb = navigator.clipboard;

const copyBtnOne = document
  .getElementById("copyOne")
  .addEventListener("click", () => {
    handleCopy1Text();
  });

const copyBtnTwo = document
  .getElementById("copyTwo")
  .addEventListener("click", () => {
    handleCopy2Text();
  });

function handleCopy1Text() {
  passDisplay1.innerText
    ? cb.writeText(passDisplay1.innerText).then(() => alert("Password copied"))
    : cb.writeText(null);
}

function handleCopy2Text() {
  passDisplay2.innerText
    ? cb.writeText(passDisplay2.innerText).then(() => alert("Password copied"))
    : cb.writeText(null);
}
