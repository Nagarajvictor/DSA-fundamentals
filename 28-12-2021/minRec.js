function minRec(arr,n){
    if(n==1){
        return arr[0];
    }
    return Math.min(arr[n-1],minRec(arr,n-1))
}
var arr=[10,2,-1,4,-4]
var n=arr.length
console.log(minRec(arr,n))