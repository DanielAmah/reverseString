 'use strict'
 
	const reverseString = (string)=>  // create an arrow function reverseString with parameter string
	{
		const charList = string.split(""); // use the split method to covert the string to an array of characters
		const reverseList = charList.reverse(); // reverse the array using the reverse method
		const reverseWord = reverseList.join(""); // join the array back to a string to get the reverse string using the join method
		if(string === '') // check if parameter string is empty
		{
			return null; // return null
		}
		else if (string === reverseWord) // check if the original string is equal to reverse string
		{
			return true;           // return true
		}
		
		else {
		return reverseWord;      // return the reverse string if above two conditions are not met.
		}
		
	}
	
	module.exports = reverseString; 