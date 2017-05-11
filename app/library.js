 'use strict'
	const reverseString = (string)=>
	{
		const charList = string.split("");
		const reverseList = charList.reverse();
		const reverseWord = reverseList.join("");
		if(string === '')
		{
			return null;
		}
		else if (string === reverseWord)
		{
			return true;
		}
		
		else {
		return reverseWord;
		}
		
	}
	
	module.exports = reverseString;