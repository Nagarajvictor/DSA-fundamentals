function sqrt(x){
    if(x==0 && x==1){
        return x;
    }
    let i=1,res=1;
    while(res<=x){
        i++;
        res=i*i;
    }
    return i-1;
}
var x=11;
console.log(sqrt(x));