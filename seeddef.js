var db = require("./models");

  var defopsList = [
    {
    name : 'Maestro',
    badge: '/images/maestrobadge.png',
    img: '/images/maestro.png',
    bio: 'Maestro is oldest in a family of eight children. He grew up in Rome, but attended the Military Academy of Modena at 18. He then joined the Carabinieri and earned a spot as an Explorer Paratrooper in the 1st Paratrooper Regiment known as Tuscania.',
    ability : { 
      _id: "evileye00000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'Alda 5.56',
        img : '/images/ALDA556.png',
      },
      pri2 : {
        name : 'ACS 12',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Keratos 357 Pistol',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'Bailiff 410 Pistol',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "deployshield",
        ref: "Gadget"
        },
      { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
  ],
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'G.I.S',
  },
  {
    name : 'Alibi',
    badge: '/images/alibibadge.png',
    img: '/images/alibi.png',
    bio: 'Alibi was born in Tripoli, Libya and immigrated with her family when she was three years old. Her father managed a small ordnance manufacturer, using his contacts to open up exports.',
    ability : { 
      _id: "prisma000000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'MX4 Storm',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'ACS 12',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Keratos 357 Pistol',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'Bailiff 410 Pistol',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "impacgrenade",
        ref: "Gadget"
      },
      { 
        _id: "deployshield",
        ref: "Gadget"
      },
    ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'G.I.S',
  },
  {
    name : 'Vigil',
    badge: '/images/vigilbadge.png',
    img: '/images/vigil.png',
    bio: 'Chul Kyung Hwa spent months on the run in Asia as a child. He lost his family during the flight before finding asylum in South Korea. As an adult, he enlisted in the ROK Navy and later earned a berth in the ROKN UDT/SEALs, becoming so highly skilled that the 707th Special Mission Battalion handpicked him as an operator. His ERC-7 backpack enables him to vanish from live feeds.',
    ability : { 
      _id: "erc700000000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'K1A',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'BOSG.12.2',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'C75 Auto',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'SMG-12',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "impacgrenade",
        ref: "Gadget"
        },
        { 
        _id: "bullpfcamera",
        ref: "Gadget"
        },
    ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'S.M.B.',
  },
  {
    name : 'Ela',
    badge: '/images/elabadge.png',
    img: '/images/ela.png',
    bio: 'Elzbieta Bosak is the newest addition to Team Rainbow. Nicknamed Ela, this driven 30-year-old has had an unconventional progression. Having quickly risen among Poland’s Special Forces, she was deployed in six countries and active in Iraq for seven years.Her exploits should come as no surprise, considering that she is the youngest daughter of Jan Bosak, a former commander of Poland’s counter-terrorism unit GROM. Despite this legacy, Ela is not the stiff soldier one would expect. Ela experienced some difficulties while attending a military high school. She was bullied constantly due to the special attention she received as the GROM Commander’s daughter.',
    ability : { 
      _id: "grzmotmine00",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'Scorpion EVO 3 A1',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'BOSG.12.2',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'RG15',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'NA',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
    ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'GROM',
  },
  {
    name : 'Lesion',
    badge: '/images/lesionbadge.png',
    img: '/images/lesion.png',
    bio: 'Born in Junk Bay, Liu Tze Long, codenamed Lesion, was raised by his father, who worked for a ship breaking company. During these years, Lesion would stay at the shipyard, and help him dismantle obsolete ships for scrapping. Crumbling with debts after his father was injured, Lesion took on various hazardous jobs in demolition until he found an opportunity for mine clearance duty. Demonstrating a natural calm while handling highly corrosive substances, he joined the Explosive Ordnance Disposal Bureau. He is a known expert in chemical, biological, radiological and nuclear (CBRN) terrorist threats.',
    ability : { 
      _id: "gu0000000000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'SIX12 SD',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'T-5 SMG',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Q-929',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'NA',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "impacgrenade",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
      ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SDU',
  },
  {
    name : 'Mira',
    badge: '/images/mirabadge.png',
    img: '/images/mira.png',
    bio: 'Elena María Álvarez was born in Retiro, Madrid, where she learned to spot and fix mechanical defects on automobile engines. Demonstrating solid physical endurance and a stubborn need to prove her worth, Álvarez later joined the Grupo Especial de Operaciones (G.E.O.). Her wide-ranging knowledge of vehicles made her an expert in the ballistic field, which she uses to develop and test bulletproof materials.',
    ability : { 
      _id: "blackmirror0",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'Vector .45 ACP',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'ITA12L',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'ITA12S',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'USP40',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "nitrocell000",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
      ],
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'GEO',
  },
  {
    name : 'Echo',
    badge: '/images/echobadge.png',
    img: '/images/echo.png',
    bio: 'Known as a natural prodigy in robotics, Masaru Enatsu grew up in Suginami City, Tokyo, the birthplace of several animation studios and technology companies. Enticed to test his devices on the field, he joined the National Police Academy. Specialised in Recon operations, he was recruited by the Tokyo Metropolitan Police Department Special Unit before transferring to the Aichi Unit.',
    ability : { 
      _id: "yokai0000000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'SuperNova',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'MP5SD',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P229',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'Bearings 9',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
  ],
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'SAT',
  },
  {
    name : 'Caveira',
    badge: '/images/caveirabadge.png',
    img: '/images/caveira.png',
    bio: 'Known as a brutal interrogator, Taina “Caveira” Pereira’s makes for a fearless Operator on the field. Originally from a small town on the outskirts of São Paulo, her life could have taken a turn for the worst when she was arrested at 16 on robbery charges. Her promising profile allowed for an exception, giving her the option between entering a juvenile reformatory and working with BOPE.',
    ability : { 
      _id: "luison000000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'M12',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'SPAS-15',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Luison',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "impacgrenade",
        ref: "Gadget"
        },
        { 
        _id: "bullpfcamera",
        ref: "Gadget"
        },
      ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'BOPE',
  },
  {
    name : 'Valkyrie',
    badge: '/images/valkyriebadge.png',
    img: '/images/valkyrie.png',
    bio: 'While serving as a Naval Intelligence Officer, Castellano was chosen to be one of the first women admitted to SEALs training. Singularly focused and driven, she will do whatever it takes to accomplish the mission in the most seamless and effective way possible. She uses the “Black Eye”, a camera able to adhere to nearly any surface, while maintaining a clear view and providing her whole team with a live video feed. The quick deploy camera has proved incredibly useful for operations in situations with limited intel, gaining a much needed tactical advantage in close quarters or around blind spots.',
    ability : { 
      _id: "blackeye0000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'MPX',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'SPAS-12',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'D-50',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "nitrocell000",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
      ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'SEALS',
  },
  {
    name : 'Frost',
    badge: '/images/frostbadge.png',
    img: '/images/frost.png',
    bio: 'A combat systems officer, Tina Lin Tsang is a focused and meticulous planner. She uses the Sterling Mk2 LHT or “Welcome Mat”, a floor mounted, rubber and metallic spring loaded leg-hold trap that provides her with a non-lethal means of immobilising her prey. The sleek design of the “Welcome Mat” allows for seamless deployment in a variety of areas and environments without the need for extensive camouflage.',
    ability : { 
      _id: "welcomemat00",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'Super 90',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '9mm C1',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Mk1 9mm',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
        { 
        _id: "bullpfcamera",
        ref: "Gadget"
        },
      ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'JTF2',
  },
  {
    name : 'Mute',
    badge: '/images/mutebadge.png',
    img: '/images/mute.png',
    bio: "A veteran of Britain's Government Communications Headquarters (GCHQ) unit, Mark Chandar’s exceptional work as a signals intelligence (sigint) specialist has made him a valuable addition to Rainbow.",
    ability : { 
      _id: "signaldisrup",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'MP5K',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M590A1',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P226 MK 25',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "nitrocell000",
        ref: "Gadget"
        },
        { 
        _id: "bullpfcamera",
        ref: "Gadget"
        },
      ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SAS',
  },
  {
    name : 'Smoke',
    badge: '/images/smokebadge.png',
    img: '/images/smoke.png',
    bio: "Porter is a thrill seeker with very little regard for his personal safety. He is fearless in battle and can be a great asset for defensive maneuvers, however he seems to enjoy the havoc and chaos of war.",
    ability : { 
      _id: "remotegasgrn",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'FMG-9',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M590A1',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P226 MK 25',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'SMG-11',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "impacgrenade",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
    ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SAS',
  },
  {
    name : 'Castle',
    badge: '/images/castlebadge.png',
    img: '/images/castle.png',
    bio: "Miles Campbell holds a BA in Criminal Justice and is a former LAPD SWAT officer who went federal and is now an FBI SWAT veteran.",
    ability : { 
      _id: "armorpanel00",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'UMP-45',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M1014',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : '5.7 USG',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'M45 MEUSOC',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "nitrocell000",
        ref: "Gadget"
        },
        { 
        _id: "impacgrenade",
        ref: "Gadget"
        },
      ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'FBI SWAT',
  },
  {
    name : 'Pulse',
    badge: '/images/pulsebadge.png',
    img: '/images/pulse.png',
    bio: "Jack Estrada's work with the FBI biometrics program allowed him to blend his background in communications and biochemistry to a powerful effect.",
    ability : { 
      _id: "heartbeatsen",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'UMP-45',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M1014',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : '5.7 USG',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'M45 MEUSOC',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "nitrocell000",
        ref: "Gadget"
        },
        { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
      ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'FBI SWAT',
  },
  {
    name : 'Doc',
    badge: '/images/docbadge.png',
    img: '/images/doc.png',
    bio: "Kateb grew up in an affluent family, in Paris’ 16th arrondissement. At twenty, he abandoned a potentially prominent private medical practice in favor of a career with the French Defense Health Service. Gustave Kateb is cut from a rare cloth: a genuine altruist, a true believer in making the world a safer place for his fellow man.",
    ability : { 
      _id: "stimpistol00",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'SG-CQB',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'MP5',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'P90',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P9',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'LFP586',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
        { 
        _id: "bullpfcamera",
        ref: "Gadget"
        },
      ],
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'GIGN',
  },
  {
    name : 'Rook',
    badge: '/images/rookbadge.png',
    img: '/images/rook.png',
    bio: "Julien Nizan is the deliverer of the GIGN's famous trust exercise for new recruits: taking a bullet fired by one of your colleagues with only a small armor plate to protect you. He carries these same armor plates into combat, dropping them for his allies to reinforce their defenses. ",
    ability : { 
      _id: "armorpack000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'SG-CQB',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'MP5',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'P90',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P9',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'LFP586',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "impacgrenade",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
      ],
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'GIGN',
  },
  {
    name : 'Jager',
    badge: '/images/jagerbadge.png',
    img: '/images/jager.png',
    bio: "A veteran of GSG9 anti-piracy ops in the Indian Ocean, Marius Streicher has seen action as a helicopter operator and technology advisor.",
    ability : { 
      _id: "activedefens",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'M870',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '416-C Carbine',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P12',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'na',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
      ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'GSG9',
  },
  {
    name : 'Bandit',
    badge: '/images/banditbadge.png',
    img: '/images/bandit.png',
    bio: "A former undercover agent within the Hannover Hells Angels, Brunsmeier is known for taking obsolete items and repurposing them into weapons. He has cobbled together a device that can electrify barbed wires and barricades, and injure or destroy anything that comes into contact with it.",
    ability : { 
      _id: "shockwire000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'MP7',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M870',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P12',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'na',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "nitrocell000",
        ref: "Gadget"
        },
        { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
  ],
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'GSG9',
  },
  {
    name : 'Tachanka',
    badge: '/images/tachankabadge.png',
    img: '/images/tachanka.png',
    bio: "Alexsandr Senaviev is an iconoclast who came of age in a pre-glasnost red army family and has retained an interest in soviet machinery and weaponry.",
    ability : { 
      _id: "mountedlmg00",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'SASG-12',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '9x19VSN',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'GSh-18',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'PMM',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "barbedwire00",
        ref: "Gadget"
        },
        { 
        _id: "deployshield",
        ref: "Gadget"
        },
      ],
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'SPETSNAZ',
  },
  {
    name : 'Kapkan',
    badge: '/images/kapkanbadge.png',
    img: '/images/kapkan.png',
    bio: "Born and raised in Kovrov, Basuda is the son of factory workers. To escape a life in the factory, he enlisted with the Ministry of Internal Affairs and was sent to a small port town on the Barents Sea. Basuda became an avid hunter and trapper during his time in the Arctic Circle.",
    ability : { 
      _id: "prisma000000",
      ref: "Ability"
      },
    primaries : {
      pri1 : {
        name : 'SASG-12',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '9x19VSN',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'GSh-18',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'PMM',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : [
      { 
        _id: "nitrocell000",
        ref: "Gadget"
        },
        { 
        _id: "impacgrenade",
        ref: "Gadget"
        },
      ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SPETSNAZ',
  },
]

  db.Defop.remove({}, (err, defops) =>{
    db.Defop.create(defopsList, (err, defops) =>{
      if (err) { return console.log('ERROR', err); }
      console.log("created", defops.length, "defops");
      process.exit();
    });
  });