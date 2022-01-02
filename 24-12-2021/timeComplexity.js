//O(n)
let n= 3;
for (let i = 0; i < n; ++i) {
        console.log("Do Something Great");

}

//O(n^2)
function timeComplexity()
{
    let i, j;
    let n=2;
    for (i = 1; i <=n; i++)
        for (j = 1; j <=n; j++)
            console.log("Learn then Earn");
}
timeComplexity();

//O(nlogn)
function timeComplexity1()
{
    let i, j;
    let n=5;
    for (i = 1; i <= n; i++){
        for (j = 1; j <= Math.log(i); j++)
        {
            console.log("Be happy");
        }
    }    
}
timeComplexity1();

//O(log n)
let a= 5;
for (let i = 1; i < a; i *= 2) {
    console.log("live ur life");
}