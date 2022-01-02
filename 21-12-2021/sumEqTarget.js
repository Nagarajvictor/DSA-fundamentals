function sumEqTarget(arr,target){
    if(arr==null || arr.length==0){
        return null;
    }
    var i=0
    var j=arr.length-1;
    //finding the sum of target
    while(i<j){
        var x=arr[i]+arr[j]
        if(x<target)
          ++i;
        else if(x>target)
            j--  
        else
            return `[${i+1},${j+1}]`    
    }
}
var arr=[2,7,11,15];
var target=9;
console.log(sumEqTarget(arr,target));
var arr1=[2,3,4]
var target1=6;
console.log(sumEqTarget(arr1,target1))