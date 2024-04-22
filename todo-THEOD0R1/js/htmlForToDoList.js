export const title = (toDoList) => {
  const name = document.createElement("h4");
  name.innerHTML = toDoList.name;

  return name;
};

export const toDoDescription = (toDoList) => {
  const description = document.createElement("p");
  description.innerHTML = toDoList.description;

  return description;
};

export const createToDoCompleted = (i, toDo, createHtml, toDoList) => {
  const toDoCompleted = document.createElement("button");

  toDoCompleted.className = "fa fa-check-circle-o";
  toDoCompleted.classList.add("buttonIcon");

  toDoCompleted.addEventListener("click", () => {
    moveToCompletedToDoList(i, createHtml, toDoList);
  });

  createHtmlForCompletedToDoList(completedToDoList, toDoList, createHtml);

  return toDoCompleted;
};

export let completedToDoList = [];

const moveToCompletedToDoList = (i, createHtml, toDoList) => {
  completedToDoList.push(toDoList[i]);
  toDoList.splice(i, 1);

  createHtml(toDoList);

  createHtmlForCompletedToDoList(completedToDoList, toDoList, createHtml);
};

const completedContainersParent = document.querySelector("#notTodo");

const completedContainers = document.createElement("ul");
completedContainersParent.appendChild(completedContainers);

export const createHtmlForCompletedToDoList = (
  createCompletedToDoList,
  toDoList,
  createHtml
) => {
  completedContainers.innerHTML = "";

  for (let c = 0; c < createCompletedToDoList.length; c++) {
    const completedContainer = document.createElement("li");

    const completedName = document.createElement("h4");
    completedName.innerHTML = createCompletedToDoList[c].name;

    const completedDescription = document.createElement("p");
    completedDescription.innerHTML = createCompletedToDoList[c].description;

    const notDoneButton = document.createElement("button");
    notDoneButton.innerHTML = "Till backa";
    notDoneButton.className = "notDone";
    notDoneButton.addEventListener("click", () => {
      toDoList.push(completedToDoList[c]);
      completedToDoList.splice(c, 1);
      createHtmlForCompletedToDoList(completedToDoList, toDoList, createHtml);
      createHtml(toDoList);
    });

    const deletButtonCompelted = document.createElement("button");
    deletButtonCompelted.className = "fa fa-times-circle-o";
    deletButtonCompelted.classList.add("buttonIcon");
    deletButtonCompelted.classList.add("delButton");
    deletButtonCompelted.addEventListener("click", () => {
      deletCompeltedToDo(c, toDoList, createHtml);
    });
    const completedButtonContainer = document.createElement("div");
    completedButtonContainer.className = "completedButtons";

    completedContainers.appendChild(completedContainer);
    completedContainer.appendChild(completedName);
    completedContainer.appendChild(completedDescription);
    completedContainer.appendChild(completedButtonContainer);
    completedButtonContainer.appendChild(notDoneButton);
    completedButtonContainer.appendChild(deletButtonCompelted);
  }
  saveLocalStorageCompleted();
};

const deletCompeltedToDo = (c, toDoList, createHtml) => {
  completedToDoList.splice(c, 1);
  createHtmlForCompletedToDoList(completedToDoList, toDoList, createHtml);
};

const saveLocalStorageCompleted = () => {
  localStorage.setItem("completeList", JSON.stringify(completedToDoList));
};
const getCompltedListFromLS = JSON.parse(
  localStorage.getItem("completeList") || "[]"
);

completedToDoList = getCompltedListFromLS; //saving the completed todo list in localStorage (not working)
