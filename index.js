function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback) {
  let names = ['chris', 'sarah'];
  names.forEach(callback);
  return names
}

function doToArray(array, callback) {
  array.forEach(callback);
}



//array = [1,2,3,4]
//iterativeLog(array)
