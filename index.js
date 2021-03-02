// Add your functions here
function map(arr, cb) {
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]))
  }
  return newArr
}

function reduce(arr, cb, starting) {
  let r = (!!starting) ? starting : arr[0]
  let i = (!!starting) ? 0 : 1
  
  for ( ; i < arr.length; i++) {
    r = cb(arr[i], r)
  }
  return r;
}