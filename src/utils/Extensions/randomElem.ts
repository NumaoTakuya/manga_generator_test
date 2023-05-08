export {};

declare global {
  interface Array<T> {
    randomElem(): T;
  }
}

Array.prototype.randomElem = function () {
  return this[Math.floor(Math.random() * this.length)];
};
