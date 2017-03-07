var Buck = 
{
	printFirst:function()
	{
		console.log ("My name is Buck");
		console.log(this===Buck);
	}
};

Buck.printFirst();

function doworth()
{
	console.log ("My name is Buck");
	console.log(this===Buck);
	console.log(this===global);
}

doworth();