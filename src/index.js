const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startSwitchColor: document.querySelector('[data-action="start"]'),
  stopSwitchColor: document.querySelector('[data-action="stop"]'),

};
//let timerId = null;
//let isActive = false;
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
refs.startSwitchColor.addEventListener('click', () => {
  

  // if (isActive) {
  //   return;
  // };
    
  timerId = setInterval(() => {
    const randomColor = colors[Math.floor(Math.random )* colors.length];
       document.body.style.backgroundColor = randomColor;

   }, 1000);
  // //randomIntegerFromInterval();
});

refs.stopSwitchColor.addEventListener('click', () => {
  clearInterval(timerId);
  //isActive = false;
});


