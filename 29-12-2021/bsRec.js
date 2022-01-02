
function binarySearchRecursion(arr,x,s,l){
 
  
  if (s > l) 
        return -1;
  
  let mid=Math.floor((s + l)/2);

  if (arr[mid]===x) 
       return mid;
 
    if(arr[mid] > x)
        return binarySearchRecursion(arr, x, s, mid-1);
    else
       return binarySearchRecursion(arr, x, mid+1,l);

  
 } ;
  var arr=[-1,0,3,5,9,12];
var x=9;
var s=0;
var l=arr.length-1;
console.log(binarySearchRecursion(arr,x,s,l));