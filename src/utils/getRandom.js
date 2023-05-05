import Point from "./classes/Point";

const getRandomPointOnUnitCircle = (angle) => {
  angle = angle ? angle : Math.random() * 2 * Math.PI;
  const x = Math.cos(angle);
  const y = Math.sin(angle);
  return new Point(x, y);
}

const getRandomFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomColor = () => {
  return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(
    0,
    255
  )})`;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandomPointOnUnitCircle, getRandomFromArray, getRandomColor, getRandomInt };
