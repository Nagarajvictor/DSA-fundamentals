function fibonacci(n){
    if(n<2)
    return 1
    else{
        return fibonacci(n-2)+fibonacci(n-1)
    }
}
var n=10
for(let i=0;i<n;i++){
    console.log(fibonacci(i))
}