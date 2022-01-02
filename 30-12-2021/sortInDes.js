let MAX_CHAR = 26;
	function sortString(str)
	{
	let charCount = new Array(MAX_CHAR);
		for(let i = 0; i < charCount.length; i++)
		{
			charCount[i] = 0;
		}
for (let i = 0; i < str.length; i++)
		{
			charCount[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
		}
for (let i = MAX_CHAR - 1; i >= 0; i--)
		{
			for (let j = 0; j < charCount[i]; j++)
			{
				console.log(String.fromCharCode ('a'.charCodeAt(0) + i));
			}
		}
	}
	let s = "Good morning";
	sortString(s);
		
	
