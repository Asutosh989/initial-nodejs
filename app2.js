function User()
{
	this.name="";
	this.life=100;
	this.give = function (target)
	{
		target.life+=1;
		this.life-=1;
		console.log(this.name+ " gave life to " + target.name);
	}
}

var bucky=new User();
var Wendy= new User();
bucky.name="Bucky";
Wendy.name="Wendy";

bucky.give(Wendy);


console.log("Bucky" + bucky.life);
console.log("Wendy" + Wendy.life);

User.prototype.uppercut = function(target) {
	target.life-=3;
	console.log(this.name+ " just uppercutted " + target.name);
};

Wendy.uppercut(bucky);

console.log("Bucky" + bucky.life);
console.log("Wendy" + Wendy.life);

User.prototype.magic = 60;
console.log(bucky.magic);
console.log (Wendy.magic);