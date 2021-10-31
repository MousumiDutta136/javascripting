//to complete a function called smartGarbage(trash, bins), which will be responsible for increasing the garbage count 
//for waste, recycling, or compost depending on what trash is submitted.

function smartGarbage(trash, bins){
  var garbageType = { waste : bins.waste, 
                      recycling : bins.recycling, 
                      compost : bins.compost

                    }
  
  if (trash === "waste"){
    garbageType.waste += 1;
  } else if(trash === "recycling"){
    garbageType.recycling += 1;
  } else if(trash === "compost"){
    garbageType.compost += 1;
  }
  return garbageType;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
