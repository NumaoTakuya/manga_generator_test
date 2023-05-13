export {};

declare global {
  interface Array<T> {
    lastElem(): T;
  }
}

Array.prototype.lastElem = function () {
  return this[this.length - 1];
};
