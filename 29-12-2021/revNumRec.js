function revNumber(num,res){
    if(num>0){
        return revNumber(parseInt(num / 10), res * 10 + (num % 10));
    }
    return res;
}
var num=5678;
var res=0;
console.log(revNumber(num,res))