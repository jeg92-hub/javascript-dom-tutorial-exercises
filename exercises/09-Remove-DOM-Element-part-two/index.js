let ulElement = document.querySelector('#parentLi');
let childs = ulElement.childNodes;
let secondChild = childs[3];
ulElement.removeChild(secondChild);

