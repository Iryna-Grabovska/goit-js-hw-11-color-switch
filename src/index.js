const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const startSwitchColor = document.querySelector('[data-action="start"]')
console.log(startSwitchColor);
const stopSwitchColor = document.querySelector('[data-action="stop"]')

console.log(stopSwitchColor);
colorStart.addEventListener('click', onStart);
colorStop.addEventListener('click', onStop);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};