function Avatar()
{
	console.log("Avatar : PG-13");
}

function Chappie()
{
	console.log("Chappie : R ");

}

module.exports.avatar=Avatar;
module.exports.chappie=Chappie;
module.exports = function() 
{
	//this below statement is written dor creatimg new objects
	// for new users
	return{
	favMov : ""
   }
};
