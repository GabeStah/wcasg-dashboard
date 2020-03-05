const nodes = document.querySelectorAll(
  [
    'div',
    'li',
    'input',
    'span'
  ].join(', ')
);

if (!nodes || nodes.length === 0) return;

nodes.forEach(node => {
  node.style.setProperty('background-color', '#50CCFA');
});
