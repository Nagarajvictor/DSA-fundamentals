function reverse(s)
{
    
  
  let stc = [];
   
  let temp = "";
   
  for(let i = 0; i < s.length; i++)
  {
    if(s[i] == ' ')
    {
         
      stc.push(temp);
         
     temp = "";        
    }
    else
    {
      temp = temp + s[i];
    }
   
  }
   
  stc.push(temp);
   
  while(stc.length != 0)
  {
      
    temp = stc[stc.length - 1];
    console.log(temp);
    stc.pop();
  }
}
 
let s = "react javascript css html";
reverse(s);