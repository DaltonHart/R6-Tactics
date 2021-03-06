const mongoose = require('mongoose');

module.exports = [
  // defenders
  {
    name: 'Evil Eye',
    uses: 2,
    image: '/files/abilities/evileye.png',
    description:
      'Maestro uses a remote-controlled turret firing high-energy laser beams. Once affixed to the floor or wall, Maestro can remote-surveil and provide overwatch in a location through the swivel-mounted camera. When the camera device breaks open to fire a laser beam the core is exposed to damage. Otherwise, the turret is unaffected by bullets and melee. Lastly, Evil Eye can see through smoke.',
    _id: mongoose.Types.ObjectId('evileye00000')
  },
  {
    name: 'Prisma',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'Prisma projects holograms identical to Alibi in an idle position. If you shoot or touch the holograms, you’ll be marked and pinged for the next few seconds. If Prisma is deployed outside, a false “Defender Outside” warning is triggered for Attackers. To add an element of surprise, Prisma conceals the identity of any Defender who ventures outside. Any bullet, melee, or explosives damages Prisma, and will shoot through the hologram. Be careful not to stand too close.',
    _id: mongoose.Types.ObjectId('prisma000000')
  },
  {
    name: 'ERC-7',
    uses: 20,
    image: '/files/abilities/evileye.png',
    description:
      'The ERC-7 uses Diminished Reality technology to remove perceivable stimuli from its direct environment. Vigil carries a prototype in his backpack, which scans surrounding electronic devices and wipes his image from any cameras in view.',
    _id: mongoose.Types.ObjectId('erc700000000')
  },
  {
    name: 'Grzmot Mine',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'Inspired by the 1939 anti-tank Polish grenades used by the iconic Cichociemny during WWII, the sticky Grzmot mines can be anchored on surfaces, impairing hearing and causing a dizzying effect.',
    _id: mongoose.Types.ObjectId('grzmotmine00')
  },
  {
    name: 'Gu',
    uses: 8,
    image: '/files/abilities/evileye.png',
    description:
      'Gu mines were inspired by the sharp punji sticks used during the Vietnam War. Rubbed with toxic plants or feces, the stakes served to slow down enemy troops by causing severe infections in their camp.',
    _id: mongoose.Types.ObjectId('gu0000000000')
  },
  {
    name: 'Black Mirror',
    uses: 2,
    image: '/files/abilities/evileye.png',
    description:
      'A specialized laminated glass, which when deployed with oxyacetylene can carve out a one-way mirror on any wall. If the air pressure is disrupted, however, the glass is ejected and creates a daring opening for both defenders and attackers.',
    _id: mongoose.Types.ObjectId('blackmirror0')
  },
  {
    name: 'Yokai',
    uses: 2,
    image: '/files/abilities/evileye.png',
    description:
      'Equipped with an acoustic hailing device, this signature drone can fire ultrasonic bursts that disorient all targets in a given perimeter. Yokai also transmits a video feed to Echo, who keeps his immediate perimeter secure.',
    _id: mongoose.Types.ObjectId('yokai0000000')
  },
  {
    name: 'Luison',
    uses: 20,
    image: '/files/abilities/evileye.png',
    description:
      'The Luison is wrapped in a rock-based mineral fiber to both insulate and soundproof the silencer. This weapon allows Caveira to incapacitate her target discreetly and conduct an interrogation.',
    _id: mongoose.Types.ObjectId('luison000000')
  },
  {
    name: 'Black Eye',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'Encased in a tinted silicone ball, coated in micro-suction cups, the quick deploy camera maintains a clear view thanks to the internal gyroscope that dictates the angle of the lens. The suction cups allow the camera to adhere to any surface, while the gyroscope mounted lens stabilises the camera angle and focus. The live video feed is available to all operators.',
    _id: mongoose.Types.ObjectId('blackeye0000')
  },
  {
    name: 'Welcome Mat',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'The rubber mat and concealed metal jaws are bolted in place. When the pressure plate is engaged, two sets of jaws at ankle and shin height deploy, locking the person in place. Requires two people to release the jaws and reset the trap.',
    _id: mongoose.Types.ObjectId('welcomemat00')
  },
  {
    name: 'Signal Disruptor',
    uses: 4,
    image: '/files/abilities/evileye.png',
    description:
      'He brings with him a Signal Disruptor from his former career, which allows Chandar to jam all communications in a set area, preventing remote detonations and the use of drones. The GC90 “Moni”, blocks the signal from a remote detonator or control from reaching any device within range.',
    _id: mongoose.Types.ObjectId('signaldisrup')
  },
  {
    name: 'Remote Gas Grenade',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'He uses a remote detonated dispersal mine filled with a gas of disclosed contents to impede hostile advances.',
    _id: mongoose.Types.ObjectId('remotegasgrn')
  },
  {
    name: 'Armor Panel',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'He brings an expertise in defense and reinforcement to Rainbow squad, ever ready to deploy his signature reinforced barricades.',
    _id: mongoose.Types.ObjectId('armorpanel00')
  },
  {
    name: 'Heart Beat Sensor',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'Moving from the lab to active duty in 2010, his ability to read people made him a natural negotiator. He wields a heartbeat sensor capable of detecting enemies or allies at a distance.',
    _id: mongoose.Types.ObjectId('heartbeatsen')
  },
  {
    name: 'Stim Pistol',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'A volunteer for Doctors Without Borders and medical officer for the Brigade des Forces Speciales Terre, he is a proficient field medic who carries a Stim Pistol allowing him to revive downed teammates from a distance.',
    _id: mongoose.Types.ObjectId('stimpistol00')
  },
  {
    name: 'Armor Pack',
    uses: 1,
    image: '/files/abilities/evileye.png',
    description:
      "Rook can greatly improve his team's survival by dropping his Armor Pack: each R1N Rhino Armor plate will increase the chances of the wearer to drop in DBNO when shot instead of being killed.",
    _id: mongoose.Types.ObjectId('armorpack000')
  },
  {
    name: 'Active Defense System',
    uses: 3,
    image: '/files/abilities/evileye.png',
    description:
      'He can secure areas against airborne explosives using his active defense system or "Magpie", capable of neutralizing any projectiles on approach.',
    _id: mongoose.Types.ObjectId('activedefens')
  },
  {
    name: 'Shock Wire',
    uses: 4,
    image: '/files/abilities/evileye.png',
    description:
      'Bandit can place his High-tension charges on all metallic gadgets, which include barbed wire, reinforced walls and deployable shields.',
    _id: mongoose.Types.ObjectId('shockwire000')
  },
  {
    name: 'Mounted LMG',
    uses: 1,
    image: '/files/abilities/evileye.png',
    description:
      'During operations, he deploys a signature vintage mounted machine gun that he has restored and maintained with loving care.',
    _id: mongoose.Types.ObjectId('mountedlmg00')
  },
  {
    name: 'Entry Denial Device',
    uses: 5,
    image: '/files/abilities/evileye.png',
    description:
      'This expert in lures and traps carries into battle a trap equipped with a laser trip for windows and doors certain to impede any foe (or friend) caught in its blast.',
    _id: mongoose.Types.ObjectId('entrydeniald')
  },
  {
    name: 'CCE SHIELD',
    uses: 1,
    image: '/files/abilities/evileye.png',
    description:
      'Clash is the first defender with a shield. The CCE Shield is her primary weapon; she can swap to her secondary at any time, but to do so, she needs to put her shield away first. Her bulletproof extendable shield has the ability to slow down opponents by using a high voltage Charged Field Generator (CFG) that emanates directly in front of the shield in a cylindrical shape. Opponents caught in the CFG also sustain low damage over time. Effective use of the shield allows Clash to block entry points, and to prevent or delay a push by the Attackers.',
    _id: mongoose.Types.ObjectId('CCESHIELD000')
  },
  // attackers
  {
    name: 'Exothermic Charge',
    uses: 2,
    image: '/files/abilities/na',
    description:
      'Thermite is cabable of creating large breaching points through reinforcments. His Exothermic charge will easily cut through defenses and let your team enter the objective.',
    _id: mongoose.Types.ObjectId('exothermicch')
  },
  {
    name: 'THE CABER',
    uses: 25,
    image: '/files/abilities/na',
    description:
      'Sledge is the operator to choose for quick and relatively silent destruction. His breaching hammer can be used to quickly go through multiple destructible walls, floors and barricades.',
    _id: mongoose.Types.ObjectId('THECABER0000')
  },
  {
    name: 'EMP Grenade',
    uses: 3,
    image: '/files/abilities/na',
    description:
      "The EMP Grenade gives Thatcher a means to destroy or disable any Defender's electronic gadgets from afar. When tossed, they will let out an electromagnetic pulse after a few seconds, either destroying or disabling defender gadgets caught within its 5-meter radius.",
    _id: mongoose.Types.ObjectId('EMPGRENADE00')
  },
  {
    name: 'Breaching Rounds',
    uses: 2,
    image: '/files/abilities/na',
    description:
      'Ash comes equipped with the M120 CREM. It can shoot up to two Breaching Rounds, which will burrow into a surface and detonate automatically.',
    _id: mongoose.Types.ObjectId('BREACHINGROU')
  },
  {
    name: 'Shock Drone',
    uses: 2,
    image: '/files/abilities/na',
    description:
      'Ash comes equipped with the M120 CREM. It can shoot up to two Breaching Rounds, which will burrow into a surface and detonate automatically.',
    _id: mongoose.Types.ObjectId('SHOCKDRONE00')
  },
  {
    name: 'Extendable Shield',
    uses: 1,
    image: '/files/abilities/na',
    description:
      'A Heavy Armored Operator, Montagne comes equipped with his Extendable Shield, "Le Roc", which can fully cover him from head-to-toe while standing, providing extra protection that no other shield in the game offers. This also allows him to be the ultimate point-man, blocking enemy bullets as allies attack from his protection.',
    _id: mongoose.Types.ObjectId('EXTENDABLESH')
  },
  {
    name: 'Flip Sight',
    uses: 1,
    image: '/files/abilities/na',
    description:
      "Glaz's unique gadget is an HDS Flip Sight for his OTs-03 marksman rifle. Whilst Aiming Down Sights with it, it also comes with a Thermal Feedback System which can outline long-range marks even through smoke for easier shooting.",
    _id: mongoose.Types.ObjectId('FLIPSIGHT000')
  },
  {
    name: 'Cluster Charge',
    uses: 1,
    image: '/files/abilities/na',
    description:
      'Fuze carries three APM-6 "Matryoshka" Cluster Charges capable of clearing rooms by deploying five sub-grenades through destructible structures such as walls, floors, and windows.',
    _id: mongoose.Types.ObjectId('CLUSTERCHARG')
  },
  {
    name: 'Flash Shield',
    uses: 4,
    image: '/files/abilities/na',
    description:
      "Blitz's unique gadget is the G52-Tactical Shield, which comes with three rows of flash charges that blind anyone facing the Shield. Unlike other Shield Operators, Blitz can also wield his shield up while sprinting.",
    _id: mongoose.Types.ObjectId('FLASHSHIELD0')
  },
  {
    name: 'Electronics Detector',
    uses: 1,
    image: '/files/abilities/na',
    description: `IQ's unique gadget is the RED Mk III "Spectre", which can locate any electronic device in the immediate vicinity.`,
    _id: mongoose.Types.ObjectId('ELECTRONICSD')
  },
  {
    name: 'Skeleton Key',
    uses: 21,
    image: '/files/abilities/na',
    description: `Buck's unique gadget is an under-barrel mounted shotgun known as the "Skeleton Key", otherwise designated as the SK 4-12. This shotgun has a higher destructive potential than any of the other known shotguns`,
    _id: mongoose.Types.ObjectId('SKELETONKEY0')
  },
  {
    name: 'Rifle Shield',
    uses: 2,
    image: '/files/abilities/na',
    description: `Blackbeard's unique gadgets are his two Transparent Armored Rifle-Shields. These shields protect his head from a few bullets, allowing a higher survivability rate at the cost of mobility and recoil control.`,
    _id: mongoose.Types.ObjectId('RIFLESHIELD0')
  },
  {
    name: 'Tactical Crossbow',
    uses: 4,
    image: '/files/abilities/na',
    description: `Capitão's unique gadget is a Tactical Crossbow that can fire Asphyxiating Bolts, which will burn oxygen within a certain radius, as well as Micro Smoke grenades, that can mask positions and team movements.`,
    _id: mongoose.Types.ObjectId('TACTICALCROS')
  },
  {
    name: 'X-KAIROS Launcher',
    uses: 3,
    image: '/files/abilities/na',
    description: `Hibana's unique gadget is the X-KAIROS Launcher, which can fire explosive pellets that can be remotely detonated simultaneously and can pierce reinforced walls.`,
    _id: mongoose.Types.ObjectId('XKAIROS00000')
  },
  {
    name: 'Footprint Tracker',
    uses: 1,
    image: '/files/abilities/na',
    description: `Jackal's unique gadget is the Eyenox Model III, which can track enemy footprints and can identify its targets. When scanned the target will be tracked for all allies to see.`,
    _id: mongoose.Types.ObjectId('EYENOXMODEL3')
  },
  {
    name: 'Candela',
    uses: 3,
    image: '/files/abilities/na',
    description: `Ying comes equipped with her Candelas, specialized timed explosives which can either be thrown or anchored onto a deployable surface to shoot out six flash charges into an area.`,
    _id: mongoose.Types.ObjectId('CANDELA00000')
  },
  {
    name: 'KS79 Lifeline',
    uses: 6,
    image: '/files/abilities/na',
    description: `Zofia's KS79 LIFELINE can fire Impact Grenades and Proximity Concussion Grenades. She has 2 Impact Grenades and 4 Concussion Grenades. The LIFELINE is set to Impact Grenades on spawn and Zofia is able to switch between ammunition types on the fly using the fire mode key`,
    _id: mongoose.Types.ObjectId('KS79LIFELINE')
  },
  {
    name: 'Logic Bomb',
    uses: 2,
    image: '/files/abilities/na',
    description: `Dokkaebi comes equipped with her Ballistic Armor Military Laptop, Logic Bomb. This device can upload a virus into the Defenders' phones and cause them to ring incessantly until they reset it manually. If a Defender is killed and Dokkaebi is with the Attackers, she can hack these phones to gain access to their CCTV feeds.`,
    _id: mongoose.Types.ObjectId('LOGICBOMB000')
  },
  {
    name: 'EE-ONE-D',
    uses: 2,
    image: '/files/abilities/na',
    description: `Lion comes with his EE-ONE-D, which flies up above the map to scan for enemy movement at his command. If a Defender moves their footing, the drone will detect that movement and paint them in a red outline for Attackers to see, even through walls.`,
    _id: mongoose.Types.ObjectId('EEONED000000')
  },
  {
    name: 'Adrenal Surge',
    uses: 3,
    image: '/files/abilities/na',
    description: `Finka comes equipped with her specially-designed nanobots. Having them injected into each of her teammates prior to each mission, her Adrenal Surge allows affected allies to gain a temporary boost in health and a reduction in recoil, on top of other small benefits.`,
    _id: mongoose.Types.ObjectId('ADRENALSURGE')
  },
  {
    name: 'Breaching Torch',
    uses: 5,
    image: '/files/abilities/na',
    description: `Maverick comes equipped with his Exothermic-S "Suri" Torch. It can make holes in any breachable surface, including Reinforced Walls, creating new lines of sight silently.`,
    _id: mongoose.Types.ObjectId('BREACHINGTOR')
  }
];
