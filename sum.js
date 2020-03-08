function sum(a, b) {
  return a + b;
}
module.exports = sum;



exports.createElement = (type ,text , className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
}
