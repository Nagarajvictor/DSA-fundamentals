	let MAX_CHAR = 26;
	function sortString(str)
	{
	let charCount = new Array(MAX_CHAR);
		charCount.fill(0);
for (let i = 0; i < str.length; i++)
      charCount[str[i].charCodeAt()-'a'.charCodeAt()]++;
for (let i=0;i<MAX_CHAR;i++){
			for (let j=0;j<charCount[i];j++)
				console.log(String.fromCharCode('a'.charCodeAt()+i) );
}
}
let s = "vgftyhnacb";
sortString(s);
	
	

