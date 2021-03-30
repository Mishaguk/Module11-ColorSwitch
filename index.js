const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  bodyColor: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
}
refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

 const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBackgroundColor = (color) => refs.bodyColor.style.backgroundColor = color;

let intervalColorSwitch = undefined;

function start() {
  intervalColorSwitch = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackgroundColor(colors[randomNumber]);
  }, 1000);

}
  
function stop() {
  clearInterval(intervalColorSwitch);
}
