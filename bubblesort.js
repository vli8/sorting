function bubbleSort(arr){
  let isSwapped = false;
  while(!isSwapped){
    isSwapped = true;
    for(let i = 0; i < arr.length; i++){
      if(arr[i]> arr[i+1]){
        const temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        isSwapped = false;
      }
    }
  }
  return arr;
}
