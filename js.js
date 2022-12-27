// const container = document.querySelector(".js-container");
// console.log(container);
// container.addEventListener("click", onClick);
// function onClick(evt) {
//   //   console.log(evt.target.nodeName);для визначення чи button a,li,div ....
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   console.log(evt.target.textContent);
// }

// // // /**
// // //  *код добавити  кнопку
// // //  */

// const addBtn = document.querySelector(".js-add-btn");
// let labelCounter = 7;
// addBtn.addEventListener("click", onAddBtnClick);
// function onAddBtnClick() {
//   const btn = document.createElement("button");
//   btn.textContent = `кнопка ${labelCounter}`;
//   btn.type = "button";

//   container.appendChild(btn);
//   labelCounter += 1;
// }

// /**
// //  *код вибираємо і додаємо активну  кнопку
// //  */

// const listEl = document.querySelector(".js-tags");

// listEl.addEventListener("click", onClickBtnActive);

// let selectedTab = null;

// function onClickBtnActive(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveBtn = document.querySelector(".tags__btn--active");
//   //   if (currentActiveBtn) {
//   //     currentActiveBtn.classList.remove("tags__btn--active");
//   //   }
//   currentActiveBtn?.classList.remove("tags__btn--active");

//   const nexActtive = evt.target;
//   nexActtive.classList.add("tags__btn--active");
//   selectedTab = nexActtive.dataset.value;

//   console.log(selectedTab);
// }
/**
 * --------- закидує масив вибрані кнопки
 *
 */

// const listEl = document.querySelector(".js-tags");

// listEl.addEventListener("click", onClickActive);

// const selectedTabs = new Set();

// function onClickActive(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const btn = evt.target;
//   let isActive = btn.classList.contains("tags__btn--active");
//   const tag = btn.dataset.value;
//   console.log(isActive);
//   if (isActive) {
//     selectedTabs.delete(tag);
//   } else {
//     selectedTabs.add(btn.dataset.value);
//   }

//   btn.classList.toggle("tags__btn--active");

//   console.log(selectedTabs);
// }
console.log("привіт");
