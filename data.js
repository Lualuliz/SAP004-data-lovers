import data from "./data/lol/lol.js";
const lol = data.data;
console.log(lol);

export const filterBy = (lolObject, searchdTerm) => {
  const lolArray = Object.values(lolObject);

  return lolArray.filter((champion) => {
    return champion.name.toUpperCase().indexOf(searchdTerm.toUpperCase()) === 0;
  });
};

export const orderBy = (lolObject, param, ascending) => {
  const lolArray = Object.values(lolObject);

  return lolArray.sort((championA, championB) => {
    let a = "";
    let b = "";
    if (param === "armor") {
      a = championA.stats.armor;
      b = championB.stats.armor;
    } else if (param === "hp") {
      a = championA.stats.hp;
      b = championB.stats.hp;
    } else if (param === "mp") {
      a = championA.stats.mp;
      b = championB.stats.mp;
    } else if (param === "name") {
      a = championA.lol.name;
      b = championB.lol.name;
    }

    const ascendingOrder = a < b ? 1 : -1;
    const descendingOrder = ascendingOrder * -1;

    return ascending ? ascendingOrder : descendingOrder;
  });
};





