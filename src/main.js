import data from "./data/lol/lol.js";
import { filterBy } from "./data.js";
import { orderBy } from "./data.js";

const lol = data.data;

const lolList = document.getElementById("lol-list");

const renderLol = (lol) => {
  const template = document.getElementById("lol-template");
  const card = template.content.querySelector(".card");
  const championsName = card.querySelector(".name");
  const championsImage = card.querySelector(".img");
  const championsArmor = card.querySelector(".armor");
  const championsMP = card.querySelector(".MP");
  const championsHP = card.querySelector(".HP");

  championsName.textContent = lol.name;
  championsArmor.textContent = "Armor:" + lol.stats.armor;
  championsMP.textContent = "MP:" + lol.stats.mp;
  championsHP.textContent = "HP:" + lol.stats.hp;
  championsImage.setAttribute("src", lol.img);
  const clonedTemplate = document.importNode(template.content, true);
  lolList.appendChild(clonedTemplate);
};

const renderChampions = (lolData) => {
  const lolArray = Object.values(lolData);
  lolArray.forEach(renderLol);
};
renderChampions(lol);

const filterByNameInput = document.getElementById("filter-by-name");

const renderSearchByName = () => {
  const search = filterByNameInput.value;
  const result = filterBy(lol, search);
  lolList.innerHTML = "";
  renderChampions(result);
};

const sortInput = document.getElementById("sort");

const renderOrderBy = () => {
  const searchValue = sortInput.value;
  const [order, param] = searchValue.split("-");
  const isAscending = order === "ascending";
  const result = orderBy(lol, param, isAscending);

  lolList.innerHTML = "";
  renderChampions(result);
};

sortInput.addEventListener("change", renderOrderBy);
filterByNameInput.addEventListener("keyup", renderSearchByName);
