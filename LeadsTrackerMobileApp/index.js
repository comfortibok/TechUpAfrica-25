import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const fireBaseConfig = {
  databaseURL:
    "https://leads-tracker-c04d2-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(fireBaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "links");

const inputEl = document.getElementById("input-el");
const listSec = document.getElementById("list-section");
const ulEl = document.getElementById("ul-el");
const addBtn = document.getElementById("add-btn");
const delBtn = document.getElementById("del-btn");
const form = document.querySelector("form");

function track(links) {
  let listItems = "";
  for (let i = 0; i < links.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${links[i]}">
          ${links[i]}
        </a>
      </li>
    `;
  }
  listSec.classList.remove("list-section");
  listSec.classList.add("section");
  ulEl.innerHTML = listItems;
}

onValue(referenceInDB, function (snapshot) {
  if (snapshot.exists()) {
    const snapshotValues = snapshot.val();
    const links = Object.values(snapshotValues);
    track(links);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputElValue = inputEl.value.trim();
  push(referenceInDB, inputElValue);
  inputEl.value = "";
});

delBtn.addEventListener("click", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
  listSec.classList.remove("section");
  listSec.classList.add("list-section");
});
