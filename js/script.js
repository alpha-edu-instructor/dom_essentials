// 1st task
document.title = "Мой новый заголовок!";

// 2nd task
const divBlock = document.getElementById("main");
console.log(divBlock);

const firstParagraph = document.querySelector(".text");
console.log(firstParagraph);

const allItems = document.querySelectorAll("li");
console.log(allItems);

for (let i = 0; i < allItems.length; i++) {
  console.log(allItems[i].textContent);
}