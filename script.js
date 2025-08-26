const byteSize = (str) => {
  // write your code here
	
	 let abc = new Blob([str],
                { type: 'text/plain' });
	return abc.size
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
