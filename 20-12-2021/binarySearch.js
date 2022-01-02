
function binarySearch(arr,target){
  var s=0,
  l=arr.length-1,
  mid = Math.floor(s+(l-s)/2);
  while(arr[mid]!= target && s<l){
    if(target<arr[mid]){
      l=mid-1;
    }else if(target>arr[mid]){
      s=mid+1;
    }
    mid=Math.floor(s+(l-s)/2);
  }
  return (arr[mid]!=target)? -1: mid;
}
var arr=[-1,0,3,5,9,12];
var target=5;
console.log(binarySearch(arr,target));
