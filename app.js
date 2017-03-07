function place(Orderno)
{
	console.log ("Cosdtumer Order : ", Orderno);
	cookAnd(function(){
		console.log("Delivered food : ", Orderno);
	});
}

function cookAnd(call)
{
	setTimeout (call,5000);
};


//Simulate user request
place(1);
place(2);
place(3);
place(4);
place(5);
place(6);