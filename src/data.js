import data from './data/lol/lol.js';
const lol = data.data;

export const filterBy = (lolObject,searchdTerm) =>{
  const lolArray = Object.values (lolObject)
  return lolArray.filter((champion) => {
    return champion.name.toUpperCase().indexOf(searchdTerm.toUpperCase()) === 0
  })
};

export const orderBy = (lolObject,param,ascending) =>{

  const lolArray = Object.values (lolObject)
  return lolArray.sort((championA,championB) =>{
    let a = ""
    let b = ""
    if (param === "armor"){

      a = championA.stats.armor
      b = championB.stats.armor
    } else if (param === "hp"){

      a = championA.stats.hp
      b = championB.stats.hp

    }else if (param === "mp"){

    a = championA.stats.mp
    b = championB.stats.mp
 }

 const ascendingOrder = a < b ? 1 : b < a ? -1 : 0
 const descendingOrder = ascendingOrder * -1

 return ascending ? ascendingOrder : descendingOrder
  
  
   })
  };




/*
export const filterData = () => {
  let lolkeys = Object.keys(lol);
  lolkeys = lolkeys.reverse();
  return lolkeys;
};


function numberCompareHp(a,b) {
  return a.stats.hp - b.stats.hp;
}
function numberCompareMp(a,b) {
  return a.stats.mp - b.stats.mp;
}
function numberCompareArmor(a,b) {
  return a.stats.armor - b.stats.armor;
}*/