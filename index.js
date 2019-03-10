function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let allRankedLists = document.querySelectorAll('.ranked-list');

  for (let i=0, l=allRankedLists.length; i<l; i++) {
    let liChildren = allRankedLists[i].children;

    for (let j=0, m=liChildren.length; j < m; j++) {
      liChildren[j].innerHTML = parseInt(liChildren[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let child = document.querySelector('div#grand-node');
  while (child.children[0]) {
    child = child.children[0];
  }
  return child;
}
