const kLargest=arr=>{
    arr.sort((a,b)=>b-a)
    return arr[k];
}
var arr=[15,3,6,20,13];
var k=2;
console.log(kLargest(arr))