function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseByRank(n) {
  var nodes = document.querySelectorAll('.ranked-list li');
  for(var i = 0; i < nodes.length; i++) {
    parseInt(nodes[i].innerHTML) + n;
  }
}

function deepestChild() {

}
