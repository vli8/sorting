function split(arr){
  if (arr.length === 0){
    return [];
  } else if (arr.length === 1){
    return arr;
  }
  let middle = Math.floor((arr.length + 1) / 2)
  return [arr.slice(0, middle),arr.slice(middle)];
}
