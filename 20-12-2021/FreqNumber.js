function freqNumber(arr,x){
  if(arr.length!=0){
      var count=0;
      for(let i=0;i<arr.length;i++){
          if(arr[i]==x){
              count++;
          }
      }
  }
  return count;
}
var arr=[1,1,2,2,4,5,5,6,6,6,6,9,10,11];
var x=6;
console.log(freqNumber(arr,x))