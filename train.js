//Task G
function maxIndexFind(arr) {
    if (arr.length === 0) {
      return -1; 
    }
  
    let maxIndex = 0;
    let maxValue = arr[0]
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
        maxIndex = i;
      }
    } 
    return maxIndex;
  }
  
  let arr = [2, 4, 7, 15, 8, 10];
  console.log('max index topish:', maxIndexFind(arr));