const nodes = document.querySelectorAll('body');

if (!nodes || nodes.length === 0) return;

nodes.forEach(node => {
  node.style.setProperty('-webkit-transform:rotateY', '180deg');
  node.style.setProperty('-moz-transform:rotateY', '180deg');
  node.style.setProperty('-o-transform:rotateY', '180deg');
  node.style.setProperty('-ms-transform:rotateY', '180deg');
});
