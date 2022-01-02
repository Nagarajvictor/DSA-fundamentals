function maxRec(arr,n){
    if(n==1){
        return arr[0];
    }
    return Math.max(arr[n-1],maxRec(arr,n-1))
}
var arr=[10,2,-1,4,-4]
var n=arr.length
console.log(maxRec(arr,n))