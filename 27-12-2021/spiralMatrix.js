var arr=[[1,2,3,4],[5,6,7,8,],[9,10,11,12],[13,14,15,16]];
function spiralMatrix(arr){    
var t=0;
    var l=0;
    var b=arr.length-1;
    var r=arr[0].length-1;
    var dir=0;
    var i
    while(t<=b && l<=r){
        if(dir==0){
            for(i=l;i<=r;i++)
                console.log(arr[t][i])
             t++
        }else if(dir==1){
            for(i=t;i<=b;i++)
                console.log(arr[i][r])
             r--
        }else if(dir==2){
            for(i=r;i>=l;i--)
                console.log(arr[b][i])
             b--
        }else if(dir==3){
            for(i=b;i>=t;i--)
                console.log(arr[i][l])
            l++
            }
        dir=(dir+1)%4;
    }
}
spiralMatrix(arr);

