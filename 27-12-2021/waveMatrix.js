var arr=[[1,2,3,4],[5,6,7,8,],[9,10,11,12],[13,14,15,16]];
const waveMatrix=arr=>{
    var n=arr.length;
    var m=arr[0].length;
    var i,j;
    for(j=0;j<m;j++){
       if(j%2==0){
           for(i=0;i<n;i++){
               console.log(arr[i][j])
           }
       }else{
        for(i=n-1;i>=0;i--){
            console.log(arr[i][j])
        }
    }
    }
}
waveMatrix(arr);