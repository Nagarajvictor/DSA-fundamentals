var str1="Nagaraj"
var str2=str1.toLowerCase().split("").reverse('').join("")
var n=str1.length;
var i=0;
   var j=0;
function palindrome(str1,str2,i,j){
   
   while(i<=n && j<=n){
      if(str1.charAt(i)==str2.charAt(j)){
         return palindrome(str1,str2,i+1,j+1)
      }else return false
      }
      return true
}
if(palindrome(str1,str2,i,j)){
   console.log("given string is palindrome")
}else{
   console.log("Given string is not a palindrome")
}