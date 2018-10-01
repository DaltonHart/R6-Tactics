var db = require("./models");
const mongoose = require('mongoose');

var abilityList = [
  {
    name: 'Evil Eye',
    uses: 2,
    img: '/images/evileye.png',
    desc: 'Maestro uses a remote-controlled turret firing high-energy laser beams. Once affixed to the floor or wall, Maestro can remote-surveil and provide overwatch in a location through the swivel-mounted camera. When the camera device breaks open to fire a laser beam the core is exposed to damage. Otherwise, the turret is unaffected by bullets and melee. Lastly, Evil Eye can see through smoke.',
    _id: mongoose.Types.ObjectId('evileye00000'),
  },
  {
    name: 'Exothermic Charge',
    uses: 2,
    img: '/images/na',
    desc: 'Thermite is cabable of creating large breaching points through reinforcments. His Exothermic charge will easily cut through defenses and let your team enter the objective.',
    _id: mongoose.Types.ObjectId('exothermicch'),
  },
  {
    name: 'Prisma',
    uses: 3,
    img: '/images/evileye.png',
    desc: 'Prisma projects holograms identical to Alibi in an idle position. If you shoot or touch the holograms, you’ll be marked and pinged for the next few seconds. If Prisma is deployed outside, a false “Defender Outside” warning is triggered for Attackers. To add an element of surprise, Prisma conceals the identity of any Defender who ventures outside. Any bullet, melee, or explosives damages Prisma, and will shoot through the hologram. Be careful not to stand too close.',
    _id: mongoose.Types.ObjectId('prisma000000'),
},
{
  name: 'ERC-7',
  uses: 20,
  img: '/images/evileye.png',
  desc: 'The ERC-7 uses Diminished Reality technology to remove perceivable stimuli from its direct environment. Vigil carries a prototype in his backpack, which scans surrounding electronic devices and wipes his image from any cameras in view.',
  _id: mongoose.Types.ObjectId('erc700000000'),
},
{
  name: 'Grzmot Mine',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'Inspired by the 1939 anti-tank Polish grenades used by the iconic Cichociemny during WWII, the sticky Grzmot mines can be anchored on surfaces, impairing hearing and causing a dizzying effect.',
  _id: mongoose.Types.ObjectId('grzmotmine00'),
},
{
  name: 'Gu',
  uses: 8,
  img: '/images/evileye.png',
  desc: 'Gu mines were inspired by the sharp punji sticks used during the Vietnam War. Rubbed with toxic plants or feces, the stakes served to slow down enemy troops by causing severe infections in their camp.',
  _id: mongoose.Types.ObjectId('gu0000000000'),
},
{
  name: 'Black Mirror',
  uses: 2,
  img: '/images/evileye.png',
  desc: 'A specialized laminated glass, which when deployed with oxyacetylene can carve out a one-way mirror on any wall. If the air pressure is disrupted, however, the glass is ejected and creates a daring opening for both defenders and attackers.',
  _id: mongoose.Types.ObjectId('blackmirror0'),
},
{
  name: 'Yokai',
  uses: 2,
  img: '/images/evileye.png',
  desc: 'Equipped with an acoustic hailing device, this signature drone can fire ultrasonic bursts that disorient all targets in a given perimeter. Yokai also transmits a video feed to Echo, who keeps his immediate perimeter secure.',
  _id: mongoose.Types.ObjectId('yokai0000000'),
},
{
  name: 'Luison',
  uses: 20,
  img: '/images/evileye.png',
  desc: 'The Luison is wrapped in a rock-based mineral fiber to both insulate and soundproof the silencer. This weapon allows Caveira to incapacitate her target discreetly and conduct an interrogation.',
  _id: mongoose.Types.ObjectId('luison000000'),
},
{
  name: 'Black Eye',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'Encased in a tinted silicone ball, coated in micro-suction cups, the quick deploy camera maintains a clear view thanks to the internal gyroscope that dictates the angle of the lens. The suction cups allow the camera to adhere to any surface, while the gyroscope mounted lens stabilises the camera angle and focus. The live video feed is available to all operators.',
  _id: mongoose.Types.ObjectId('blackeye0000'),
},
{
  name: 'Welcome Mat',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'The rubber mat and concealed metal jaws are bolted in place. When the pressure plate is engaged, two sets of jaws at ankle and shin height deploy, locking the person in place. Requires two people to release the jaws and reset the trap.',
  _id: mongoose.Types.ObjectId('welcomemat00'),
},
{
  name: 'Signal Disruptor',
  uses: 4,
  img: '/images/evileye.png',
  desc: 'He brings with him a Signal Disruptor from his former career, which allows Chandar to jam all communications in a set area, preventing remote detonations and the use of drones. The GC90 “Moni”, blocks the signal from a remote detonator or control from reaching any device within range.',
  _id: mongoose.Types.ObjectId('signaldisrup'),
},
{
  name: 'Remote Gas Grenade',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'He uses a remote detonated dispersal mine filled with a gas of disclosed contents to impede hostile advances.',
  _id: mongoose.Types.ObjectId('remotegasgrn'),
},
{
  name: 'Armor Panel',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'He brings an expertise in defense and reinforcement to Rainbow squad, ever ready to deploy his signature reinforced barricades.',
  _id: mongoose.Types.ObjectId('armorpanel00'),
},
{
  name: 'Heart Beat Sensor',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'Moving from the lab to active duty in 2010, his ability to read people made him a natural negotiator. He wields a heartbeat sensor capable of detecting enemies or allies at a distance.',
  _id: mongoose.Types.ObjectId('heartbeatsen'),
},
{
  name: 'Stim Pistol',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'A volunteer for Doctors Without Borders and medical officer for the Brigade des Forces Speciales Terre, he is a proficient field medic who carries a Stim Pistol allowing him to revive downed teammates from a distance.',
  _id: mongoose.Types.ObjectId('stimpistol00'),
},
{
  name: 'Armor Pack',
  uses: 1,
  img: '/images/evileye.png',
  desc: "Rook can greatly improve his team's survival by dropping his Armor Pack: each R1N Rhino Armor plate will increase the chances of the wearer to drop in DBNO when shot instead of being killed.",
  _id: mongoose.Types.ObjectId('armorpack000'),
},
{
  name: 'Active Defense System',
  uses: 3,
  img: '/images/evileye.png',
  desc: 'He can secure areas against airborne explosives using his active defense system or "Magpie", capable of neutralizing any projectiles on approach.',
  _id: mongoose.Types.ObjectId('activedefens'),
},
{
  name: 'Shock Wire',
  uses: 4,
  img: '/images/evileye.png',
  desc: 'Bandit can place his High-tension charges on all metallic gadgets, which include barbed wire, reinforced walls and deployable shields.',
  _id: mongoose.Types.ObjectId('shockwire000'),
},
{
  name: 'Mounted LMG',
  uses: 1,
  img: '/images/evileye.png',
  desc: 'During operations, he deploys a signature vintage mounted machine gun that he has restored and maintained with loving care.',
  _id: mongoose.Types.ObjectId('mountedlmg00'),
},
{
  name: 'Entry Denial Device',
  uses: 5,
  img: '/images/evileye.png',
  desc: 'This expert in lures and traps carries into battle a trap equipped with a laser trip for windows and doors certain to impede any foe (or friend) caught in its blast.',
  _id: mongoose.Types.ObjectId('entrydeniald'),
},
{
  name: 'CCE SHIELD',
  uses: 1,
  img: '/images/evileye.png',
  desc: 'Clash is the first defender with a shield. The CCE Shield is her primary weapon; she can swap to her secondary at any time, but to do so, she needs to put her shield away first. Her bulletproof extendable shield has the ability to slow down opponents by using a high voltage Charged Field Generator (CFG) that emanates directly in front of the shield in a cylindrical shape. Opponents caught in the CFG also sustain low damage over time. Effective use of the shield allows Clash to block entry points, and to prevent or delay a push by the Attackers.',
  _id: mongoose.Types.ObjectId('CCESHIELD000'),
},
]

db.Ability.remove({},(err, ability) =>{
    db.Ability.create(abilityList, (err, abilities) =>{
      if (err) { return console.log('ERROR', err); }
      console.log("created", abilities.length);
      process.exit();
    });
  });