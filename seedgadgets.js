var db = require("./models");

var gadgetList = [
{
  name: 'Breach Charge' ,
  description: 'The Breach Charge is one of the basic Gadgets in Rainbow Six. Used by attackers the charge allows you to breach walls that would be otherwise impassable except by shooting through them. However it cannot break reinforcements.',
  assignment: 'Attack',
  _id: '1',
  uses: 3,
},
// {
//   name: 'Frag Grenade' ,
//   description: 'The Frag Grenade is a throwable explosive used by select operators. Its high damage allows for easy kills from a distance and can destroy several operator gadgets. This type of grenade can be held for a short time until throw to shorten the detonation.',
//   assignment: 'Attack',
// },
// {
//   name: 'Smoke Grenade' ,
//   description: 'The Smoke Grenade is a great tool used by attackers to provide cover as they push towards the objective.',
//   assignment: 'Attack',
// },
// {
//   name: 'Stun Grenade' ,
//   description: 'The Stun Grenade is used by select attcking operators to blind and disorient defending operators. This tool is used well in an aggressive push towards the objective.',
//   assignment: 'Attack',
// },
// {
//   name: 'Claymore' ,
//   description: 'The Claymore is a deadly trap that can be set by attacking operators. This device is motion detected and sets off an explosion when triggered. Depending on the health of the defense operator it will either down or straight out kill them upon detonation.',
//   assignment: 'Attack',
// },
// {
//   name: 'Barbed Wire' ,
//   description: 'Barbed Wire is a simple tool designed to slow down attacking operators. The noise it makes when traversed is also a tell of where attackers may be coming from. It is commonly used in important choke points to give defenders a tactical advantage. Due to its large coverage area it is often times hiding a trap or two underneath as well.',
//   assignment: 'Defense',
// },
// {
//   name: 'Bulletproof Camera' ,
//   description: 'The Bulletproof Camera is a wall mounted camera that can not be destroyed by shooting it. An attacking operator can however destroy it by either hitting it with an explosive or melee.',
//   assignment: 'Defense',
// },
// {
//   name: 'Deployable Shield' ,
//   description: 'The Deployable Shield is a crouch sized cover that can be placed in strategic locations to protect defenders from incomming damage. It is often used to create choke points and hiding locations. This shield can be destroyed by explosives.',
//   assignment: 'Defense',
// },
// {
//   name: 'Nitro Cell' ,
//   description: 'The Nitro Cell is a thowable explosive that can be detonated at will of the owning defense operator. It is a deadly device that will kill enemies within range. It can also be thrown onto surfaces to create traps. Attacking opperators will be able to hear it due to a beeping sound it makes.',
//   assignment: 'Defense',
// },
// {
//   name: 'Impact Grenade' ,
//   description: 'Impact Grenades are used by defending operators. These small explosive devices although do less damage then their counterparts they are effective devices for creating rotation holes and surprising attacking operators.',
//   assignment: 'Defense',
// },

]

 

db.Gadget.remove({},(err, gadgets) =>{
    db.Gadget.create(gadgetList, (err, gadgets) =>{
      if (err) { return console.log('ERROR', err); }
      console.log("all gadgets:", gadgets);
      console.log("created", gadgets.length);
      process.exit();
    });
  });