const parent_list = document.getElementById("parent_list");
const work = document.getElementById("work_list");
const button = document.getElementsByTagName("button")[0];
const input = document.getElementById("input");

function makenewwork() {
  if (input.value.trim() == "") {
    return;
  }
  const new_li = document.createElement("li");
  new_li.innerHTML = input.value + " " + '<input type="checkbox">';
  work.appendChild(new_li);
  input.value = "";
}

function deletepreviousone() {
  if (work.lastElementChild) {
    work.lastElementChild.remove();
  }
}

function reset() {
  work.innerHTML = "";
}

// Watch for any change inside the work list
work.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    event.target.closest('li').remove();
  }
});
//the to do list font hould have random color in each letter
//make the work text also have random colored text
