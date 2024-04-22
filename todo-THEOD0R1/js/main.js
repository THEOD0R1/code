import { ThingsToDo } from "../models/toDo";
import "./../scss/style.scss";

import {
  completedToDoList,
  createHtmlForCompletedToDoList,
  createToDoCompleted,
  title,
  toDoDescription,
} from "./htmlForToDoList";

window.onload = () => {
  createHtml(toDoList);

  document
    .querySelector("#submitToDoList")
    .addEventListener("submit", addNewToDoList);
};

const a = new ThingsToDo("Städa", "Dammsug och våttorka mitt rum");
const b = new ThingsToDo("Träna", "Gå till gymmet och träna ben");
const c = new ThingsToDo("Plugga", "Gör klart todo");

let toDoList = [a, b, c];

const toDosContainerParen = document.querySelector("#toDoList");

const toDosContainer = document.createElement("ol");
toDosContainerParen.appendChild(toDosContainer);

const createHtml = (toDo) => {
  toDosContainer.innerHTML = "";

  for (let i = 0; i < toDo.length; i++) {
    const name = title(toDo[i]);

    const description = toDoDescription(toDo[i]);

    const toDoContainer = document.createElement("li");
    toDosContainer.appendChild(toDoContainer);

    const deletButton = document.createElement("button");
    deletButton.className = "fa fa-times-circle-o";
    deletButton.classList.add("buttonIcon");

    deletButton.addEventListener("click", () => {
      deletTodo(i);
    });

    const toDoCompleted = createToDoCompleted(i, toDo[i], createHtml, toDoList);

    const deletAndCompletedContainer = document.createElement("article");
    deletAndCompletedContainer.className = "delCompContainer";

    const descriptionContainer = document.createElement("article");
    descriptionContainer.className = "descriptionContainer";

    const buttonContainer = document.createElement("article");
    buttonContainer.className = "upDownContainer";

    const buttonUp = document.createElement("button");
    buttonUp.addEventListener("click", () => {
      moveToDo(i, Number(i - 1));
    });
    buttonUp.className = "fa-solid fa-chevron-up";
    buttonUp.classList.add("buttonIcon");

    const buttonDown = document.createElement("button");
    buttonDown.addEventListener("click", () => {
      moveToDo(i, Number(i + 1));
    });
    buttonDown.className = "fa-solid fa-chevron-down";
    buttonDown.classList.add("buttonIcon");

    toDoContainer.appendChild(deletAndCompletedContainer);

    deletAndCompletedContainer.appendChild(toDoCompleted);
    deletAndCompletedContainer.appendChild(deletButton);

    descriptionContainer.appendChild(name);
    descriptionContainer.appendChild(description);

    toDoContainer.appendChild(descriptionContainer);

    toDoContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonUp);
    buttonContainer.appendChild(buttonDown);
  }
  createHtmlForCompletedToDoList(completedToDoList, toDoList, createHtml);
  localStorageToDoList();
};

const moveToDo = (fromPostion, toPostion) => {
  const from = toDoList.splice(fromPostion, 1)[0];

  toDoList.splice(toPostion, 0, from);
  //up arrow cant go down on the top
  if (fromPostion === 0 && toPostion === 0 - 1) {
    return;
  }

  createHtml(toDoList);
};
const addNewToDoList = (e) => {
  e.preventDefault();

  const nameUserInput = document.querySelector("#nameUserInput").value;
  const descriptionUserInput = document.querySelector(
    "#descriptionUserInput"
  ).value;

  const newObjectTolist = new ThingsToDo(nameUserInput, descriptionUserInput);

  toDoList.push(newObjectTolist);

  document.querySelector("#nameUserInput").value = "";
  document.querySelector("#descriptionUserInput").value = "";

  createHtml(toDoList);
};

const deletTodo = (i) => {
  toDoList.splice(i, 1);
  createHtml(toDoList);
};

const localStorageToDoList = () => {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
};
const getlocalStorage = JSON.parse(localStorage.getItem("toDoList") || "[]");

toDoList = getlocalStorage; //saving the todo list in localStorage
