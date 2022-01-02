function evenNoInDecreasing(n){
if(n%2==0 && n>=2){
    console.log(n)
    return evenNoInDecreasing(n-2)
}
}
evenNoInDecreasing(78)