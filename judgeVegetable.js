//to judge the veggies by (in the case of a tomato, either redness or plumpness).

function judgeVegetable(veggies, characteristic){
  let range = [];  
  for(let i = 0; i < veggies.length; i++){

    range.push(veggies[i][characteristic]);      
  }
  let maxRed = Math.max(...range);
  let maxIndex = range.indexOf(maxRed);
  return veggies[maxIndex].submitter;  
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';


console.log(judgeVegetable(vegetables, metric));
