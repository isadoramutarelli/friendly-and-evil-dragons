const Dragon = require("./dragon");

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals,friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;

    }

    hasLifeGoals(){
        for(let lifeGoal of this.lifeGoals){
            console.log(`${this.name} like to ${lifeGoal}`);
        }
    }

    helpsPeople(){
        return `${this.name}  helprs their friend ${this.friend}`;

    }

}

const puff = new FriendlyDragon(
    "Puff",
    "green",
    [
      "live by the sea",
      "frolick in the autumn mist",
      "help small children"
    ],
    "Jackie Paper"
  );
  console.log(puff);
  console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
  puff.hasLifeGoals();
  console.log(puff.helpsPeople());



module.exports = FriendlyDragon;


/* try{
    module.exports = FriendlyDragon;
} catch{
    module.exports = null;
} */
