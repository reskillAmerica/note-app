'use strict';

const getNoteId = () => {
  let noteObject = getExistingNotes();
  if (!noteObject) {
    return 1;
  }
  const array = Object.keys(noteObject);
  const num = array.map((key) => Number(key));
  return Math.max(...num) + 1;
};
function getExistingNotes() {
  let str = localStorage.getItem('notes');
  if (!str) {
    return null;
  }
  return JSON.parse(str);
}

const viewStringFromLocalStorage = (window.onload = () => {
  let str = localStorage.getItem('notes');
  str = JSON.parse(str);
  let valueArray = Object.values(str);
  let listContainer = document.getElementById('notes-list');
  valueArray.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    listContainer.appendChild(listItem);
  });
});
