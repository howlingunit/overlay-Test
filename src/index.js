import "./styles.css";

function eventListeners() {
  const buttons = document.querySelectorAll(".buttons");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", openNumb);
  }

  const overlay = document.querySelector("#overlay");
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}

function init() {
  const app = document.querySelector("#app");
  for (let i = 0; i < 51; i++) {
    const textElem = document.createElement("p");
    const boxElem = document.createElement("div");
    boxElem.classList.add("buttons");
    textElem.textContent = "random Numb: " + Math.floor(Math.random() * 200);
    boxElem.appendChild(textElem);
    app.appendChild(boxElem);
  }
  eventListeners();
}

function openNumb(e) {
  const overlay = document.querySelector("#overlay");
  const overContent = document.querySelector(".contentText");
  overlay.style.display = "flex";
  overContent.textContent = e.currentTarget.textContent;
}

init();
