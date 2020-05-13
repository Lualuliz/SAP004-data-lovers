import data from './data/lol/lol.js';
const lol = data.data;
export const orderByza = () => {
  let lolkeys = Object.keys(lol);
  lolkeys = lolkeys.reverse();
  return lolkeys;
};

export const orderByaz = () => {
  let lolkeys = Object.keys(lol);
  return lolkeys;
};
export const orderByhp = () => {
  let valuesChamp = Object.values(lol);
  console.log(valuesChamp);
  let champions = valuesChamp.sort(numberCompareHp);
  let keys = [];
  champions.forEach(element => { keys.push(element.id)});
  console.log(keys);
  console.log (champions);
  return keys.reverse();
}
export const orderBymp = () => {
  let valuesChamp = Object.values(lol);
  console.log(valuesChamp);
  let champions = valuesChamp.sort(numberCompareMp);
  let keys = [];
  champions.forEach(element => { keys.push(element.id)});
  console.log(keys);
  console.log (champions);
  return keys.reverse();
}
export const orderByarmor = () => {
  let valuesChamp = Object.values(lol);
  console.log(valuesChamp);
  let champions = valuesChamp.sort(numberCompareArmor);
  let keys = [];
  champions.forEach(element => { keys.push(element.id)});
  console.log(keys);
  console.log (champions);
  return keys.reverse();
}
function numberCompareHp(a,b) {
  return a.stats.hp - b.stats.hp;
}
function numberCompareMp(a,b) {
  return a.stats.mp - b.stats.mp;
}
function numberCompareArmor(a,b) {
  return a.stats.armor - b.stats.armor;
}