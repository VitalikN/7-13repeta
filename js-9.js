// const promise = new Promise((resole, reject) => {
//   const canFulFill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulFill) {
//       resole("виконується ");
//     }
//     reject("виконується з помилкою");
//   }, 1000);
// });

// promise.then(onResult, onError);

// function onResult(result) {
//   console.log("onFulfilled -> onFulfilled");
//   console.log(`✅${result}`);
// }
// function onError(error) {
//   console.log("onReject -> onReject");
//   console.log(`⛔️${error}`);
// }
// ---------------------------------------
// //
// const makeOrder = (dish) => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve("ваше замовлення");
//       }
//       reject("вибачте нема продуктів ");
//     }, DELAY);
//   });
// };

// makeOrder("булочка").then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log(result);
// }
// function onMakeOrderError(error) {
//   console.log(error);
// }
// -------------------
//
// -------------------
// const fetchPokemonById = (id) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
// };
// fetchPokemonById(4).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
// function onFetchSuccess(pokemon) {
//   console.log(pokemon.name);
//   console.log(pokemon);
// }
// function onFetchError(error) {
//   console.log(error);
// }
// -------------------
//
// -------------------

// const horses = ["Secretariat", "Eclipse", "West Australian", "Flying Fox"];

// const promise = horses.map(run);
// console.log(promise);

// console.log(
//   "%c заїзд розпочався, ставки не приймаються!",
//   "color: brown; font-size:16px"
// );
// Promise.race(promise).then(({ horses, time }) => {
//   console.log(
//     `%c переміг ${horses}, фінішував за ${time}`,
//     "color: green; font-size:16px"
//   );
// });
// Promise.all(promise).then(() => {
//   console.log(
//     "%c заїзд закінчився, ставки приймаються",
//     "color: blue; font-size:16px"
//   );
// });

// function run(horses) {
//   return new Promise((resolve, reject) => {
//     const time = getRandomTime(2000, 3500);
//     setTimeout(() => {
//       resolve({ horses, time });
//     }, time);
//   });
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
