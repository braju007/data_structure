function quickSort(arr){
    if(arr.length <=1){
      return arr;
    }
    let pivot = arr[0];
    const left = [];
    const right = [];
    for(let i=1; i<arr.length;i++){
      if(arr[i]<pivot){
        left.push(arr[i]);
      }else{
        right.push(arr[i])
      }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
  }
  
  const array = [5,3,7,9,6,1,0];
  console.log("Quick :", quickSort(array));
  // [0, 1, 3, 5, 6, 7, 9]
  