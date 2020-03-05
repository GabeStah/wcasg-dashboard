const nodes = document.querySelectorAll(
  [
    'p',
    'span',
    'a',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ].join(', ')
);

if (!nodes || nodes.length === 0) return;

nodes.forEach(node => {
  node.style.setProperty('font-size', '18px');
});
