function avgOfNum(arr,n){
    if(n==1){
        return arr[n-1]
    }else{
        return ((avgOfNum(arr, n - 1) * (n - 1) + arr[n - 1]) / n)
    }
}
var arr=[5,6,7,8,9,2];
var n=arr.length-1;
console.log(avgOfNum(arr,n))
