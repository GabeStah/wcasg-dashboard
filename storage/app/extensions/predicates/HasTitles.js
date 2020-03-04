const nodes = document.querySelectorAll(
  [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ].join(', ')
);

return !(!nodes || nodes.length === 0);