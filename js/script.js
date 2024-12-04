// 1.a
const newSection = document.createElement("section");
newSection.className = "highlight";

// 1.b 
const newSecondHeading = document.createElement("h2");
newSecondHeading.textContent = "Динамический заголовок";

const newOrderedList = document.createElement("ol");
const items = ["Первый пункт", "Второй пункт", "Третий пункт"];

for (const item of items) {
  const newListItem = document.createElement("li"); // <li></li>
  newListItem.textContent = item; // 1. <li>Первый пункт</li> 2. <li>Второй пункт</li> 3. <li>Третий пункт</li>
  newOrderedList.append(newListItem);
}

newSection.append(newSecondHeading, newOrderedList);

// 1.c
const container = document.querySelector("#container");
container.append(newSection);

// 2.a
const myLink = document.getElementById("myLink");
// 2.b
myLink.textContent = "Перейти на Google";
// 2.c
myLink.href = "https://google.com";
// 2.d
myLink.setAttribute("target", "_blank");


// 3.a
const newFirstListItem = document.createElement("li");
newFirstListItem.textContent = "Новый первый пункт";
document.getElementById("myList").prepend(newFirstListItem);
// 3.b
const newLastListItem = document.createElement("li");
newLastListItem.textContent = "Новый последний пункт";
document.querySelector("#myList").append(newLastListItem);


// 4
const removableContainer = document.querySelector("#removableContainer");
const removableItems = removableContainer.querySelectorAll("p");
removableContainer.removeChild(removableItems[1]);