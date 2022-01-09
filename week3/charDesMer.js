let maxChar = 26;
function sortString(str)
{
let letters=new Array(maxChar);
    for(let i=0;i<maxChar;i++)
    {
        letters[i]=0;
    }
    for(let x=0;x<str.length;x++)
    {
            letters[str[x].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
   for (let i = 0; i < maxChar; i++) {
            for (let j = 0; j < letters[i]; j++) {
                console.log(String.fromCharCode 
                (i + 'a'.charCodeAt(0)));
            }
        }
    }
sortString("geeksforgeeks"); 