const mongoose = require('mongoose');

module.exports = [
  {
    name: 'L85A2',
    image: '/files/weapons/L85A2.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('L85A2assultr')
  },
  {
    name: 'FMG-9',
    image: '/files/weapons/FMG9.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('fmg900000000')
  },
  {
    name: 'M590A1',
    image: '/files/weapons/M590A1B.jpg',
    assignment: 'primary',
    firemodes: ['Pump-Action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M590A1000000')
  },
  {
    name: 'P226 Mk 25',
    image: '/files/weapons/P226.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('p226mk250000')
  },
  {
    name: 'SMG-11',
    image: '/files/weapons/SMG11.jpg',
    assignment: 'secondary',
    firemodes: ['automatic'],
    type: 'Machine Pistol',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Extended Barrel'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SMG110000000')
  },
  {
    name: 'MP5K',
    image: '/files/weapons/MP5K.jpg',
    assignment: 'primary',
    firemodes: ['automatic', '3-round burst', 'Semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MP5K00000000')
  },
  {
    name: 'UMP45',
    image: '/files/weapons/UPM45.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round Burst'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Compensator',
      'Muzzle Brake',
      'Extended Barrrel'
    ],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('UMP450000000')
  },
  {
    name: 'M1014',
    image: '/files/weapons/M1014.jpg',
    assignment: 'primary',
    firemodes: ['Semi-automatic'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M10140000000')
  },
  {
    name: '5.7 USG',
    image: '/files/weapons/57USG.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('57usg0000000')
  },
  {
    name: 'M45 MEUSOC',
    image: '/files/weapons/M45MEUSOC.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M45MEUSOC000')
  },
  {
    name: 'SG-CQB',
    image: '/files/weapons/SGCQB.jpg',
    assignment: 'primary',
    firemodes: ['Pump-action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SGCQB0000000')
  },
  {
    name: 'MP5',
    image: '/files/weapons/MP5.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round Burst'],
    type: 'Submachine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MP5000000000')
  },
  {
    name: 'P90',
    image: '/files/weapons/P90.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Extended Barrel'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('P9O000000000')
  },
  {
    name: 'P9',
    image: '/files/weapons/P9.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('P90000000000')
  },
  {
    name: 'LFP586',
    image: '/files/weapons/LFP586.jpg',
    assignment: 'secondary',
    firemodes: ['Double-action'],
    type: 'Handgun',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('LFP586000000')
  },
  {
    name: '9×19VSN',
    image: '/files/weapons/9×19VSN.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Compensator'],
    grips: ['Vertical Grip', 'Anled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('9X19VSN00000')
  },
  {
    name: 'SASG-12',
    image: '/files/weapons/SASG-12.jpg',
    assignment: 'primary',
    firemodes: ['Semi-Automatic'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppessor'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SASG12000000')
  },
  {
    name: 'PMM',
    image: '/files/weapons/PMM.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('PMM000000000')
  },
  {
    name: 'Gsh-18',
    image: '/files/weapons/Gsh-18.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('GSH180000000')
  },
  {
    name: 'M870',
    image: '/files/weapons/M870.jpg',
    assignment: 'primary',
    firemodes: ['Pump-action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M87000000000')
  },
  {
    name: '416-C Carbine',
    image: '/files/weapons/416-C.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Assult Rifle',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Compensator',
      'Muzzle Brake',
      'Extended Barrel'
    ],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('416CCARBINE0')
  },
  {
    name: 'P12',
    image: '/files/weapons/P12.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('P12000000000')
  },
  {
    name: 'MP7',
    image: '/files/weapons/MP7.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Compensator'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MP7000000000')
  },
  {
    name: 'Super 90',
    image: '/files/weapons/Super90.jpg',
    assignment: 'primary',
    firemodes: ['Semi-Automatic'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SUPER9000000')
  },
  {
    name: '9mm C1',
    image: '/files/weapons/9mmC1.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Extended Barrel'],
    grips: ['Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('9MMC10000000')
  },
  {
    name: 'Mk1 9mm',
    image: '/files/weapons/Mk19mm.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MK19MM000000')
  },
  {
    name: 'MPX',
    image: '/files/weapons/MPX.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Compensator'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MPX000000000')
  },
  {
    name: 'SPAS-12',
    image: '/files/weapons/SPAS-12.jpg',
    assignment: 'primary',
    firemodes: ['Semi-Automatic'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SPAS12000000')
  },
  {
    name: 'D-50',
    image: '/files/weapons/D-50.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('D50000000000')
  },
  {
    name: 'M12',
    image: '/files/weapons/M12.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Extended Barrel'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M12000000000')
  },
  {
    name: 'SPAS-15',
    image: '/files/weapons/SPAS-15.jpg',
    assignment: 'primary',
    firemodes: ['Semi-Automatic'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SPAS15000000')
  },
  {
    name: '"Luison"',
    image: '/files/weapons/luison.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('LUISON000000')
  },
  {
    name: 'ALDA 5.56',
    image: '/files/weapons/ALDA556.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Light Machine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('ALDA55600000')
  },
  {
    name: 'ACS12',
    image: '/files/weapons/ACS12.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('ACS120000000')
  },
  {
    name: '"Bailiff 410"',
    image: '/files/weapons/Bailiff.jpg',
    assignment: 'secondary',
    firemodes: ['Double-action'],
    type: 'Handgun',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('BAILIFF41000')
  },
  {
    name: '"Keratos .357"',
    image: '/files/weapons/Keratos.jpg',
    assignment: 'secondary',
    firemodes: ['Double-action'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('KERATOS35700')
  },
  {
    name: 'Mx4 Storm',
    image: '/files/weapons/Mx4Storm.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight', 'Holographic Sight'],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Muzzle Brake',
      'Extended Barrel',
      'Compensator'
    ],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MX4STORM0000')
  },
  {
    name: 'SMG-12',
    image: '/files/weapons/SMG-12.jpg',
    assignment: 'secondary',
    firemodes: ['automatic'],
    type: 'Machine Pistol',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SMG120000000')
  },
  {
    name: 'K1A',
    image: '/files/weapons/K1A.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight', 'Holographic Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Compensator'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('K1A000000000')
  },
  {
    name: 'BOSG.12.2',
    image: '/files/weapons/BOSG-12-2.jpg',
    assignment: 'primary',
    firemodes: ['break-action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('BOSG12200000')
  },
  {
    name: 'C75 Auto',
    image: '/files/weapons/C75Auto.jpg',
    assignment: 'secondary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Machine Pistol',
    sights: [],
    barrels: ['Suppressor'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('C75AUTO00000')
  },
  {
    name: 'Scorpion EVO 3 A1',
    image: '/files/weapons/ScorpionEVO3A1.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight', 'Holographic Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Compensator'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SCORPIONEVO3')
  },
  {
    name: 'FO-12',
    image: '/files/weapons/FO-12.jpg',
    assignment: 'primary',
    firemodes: ['break-action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Extended Barrel'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('FO1200000000')
  },
  {
    name: '"RG15"',
    image: '/files/weapons/RG15.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('RG1500000000')
  },
  {
    name: 'SIX12 SD',
    image: '/files/weapons/SIX12SD.jpg',
    assignment: 'primary',
    firemodes: ['double-action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SIX12SD00000')
  },
  {
    name: 'T-5 SMG',
    image: '/files/weapons/T5SMG.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight', 'Holographic Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Compensator'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('T5SMG0000000')
  },
  {
    name: '"Q-929"',
    image: '/files/weapons/Q-929.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('Q92900000000')
  },
  {
    name: 'Vector .45 ACP',
    image: '/files/weapons/Vector45ACP.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '2-round burst'],
    type: 'Submachine Gun',
    sights: ['Red Dot Sight', 'Reflex Sight', 'Holographic Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake', 'Compensator'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('VECTOR45ACP0')
  },
  {
    name: 'ITA12L',
    image: '/files/weapons/ITA12L.jpg',
    assignment: 'primary',
    firemodes: ['Pump-Action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('ITA12L000000')
  },
  {
    name: 'ITA12S',
    image: '/files/weapons/ITA12S.jpg',
    assignment: 'secondary',
    firemodes: ['Pump-Action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('ITA12S000000')
  },
  {
    name: 'USP40',
    image: '/files/weapons/USP40.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('USP400000000')
  },
  {
    name: 'SuperNova',
    image: '/files/weapons/SuperNova.jpg',
    assignment: 'primary',
    firemodes: ['Pump-Action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SUPERNOVA000')
  },
  {
    name: 'MP5SD',
    image: '/files/weapons/MP5SD.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Submachine Gun',
    sights: [
      'Red Dot Sight',
      'Reflex Sight',
      'Holographic Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MP5SD0000000')
  },
  {
    name: 'P229',
    image: '/files/weapons/P229.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('P22900000000')
  },
  {
    name: 'Bearing 9',
    image: '/files/weapons/Bearing9.jpg',
    assignment: 'secondary',
    firemodes: ['automatic'],
    type: 'Machine Pistol',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('BEARING90000')
  },
  {
    name: 'CCE Shield',
    image: '/files/weapons/CCEShield.jpg',
    assignment: 'primary',
    firemodes: [],
    type: 'Balistic Shield',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: [],
    _id: mongoose.Types.ObjectId('CCESHIELD000')
  },
  {
    name: 'P-10C',
    image: '/files/weapons/P-10C.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('P10C00000000')
  },
  {
    name: 'SPSMG9',
    image: '/files/weapons/SPSMG9.jpg',
    assignment: 'secondary',
    firemodes: ['2-round Burst'],
    type: 'Machine Pistol',
    sights: [],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SPSMG9000000')
  },
  {
    name: 'AR33',
    image: '/files/weapons/AR33.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '2-round burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('AR3300000000')
  },
  {
    name: '556xi',
    image: '/files/weapons/556xi.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('556XI0000000')
  },
  {
    name: 'G36C',
    image: '/files/weapons/G36C.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('G36C00000000')
  },
  {
    name: 'R4-C',
    image: '/files/weapons/R4-C.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Compensator',
      'Muzzle Brake',
      'Extended Barrel'
    ],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('R4C000000000')
  },
  {
    name: '417',
    image: '/files/weapons/417.jpg',
    assignment: 'primary',
    firemodes: ['semi-automatic'],
    type: 'Marksmen Rifle',
    sights: ['Red Dot Sight', 'Holographic Sight', 'ACOG Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('417000000000')
  },
  {
    name: 'F2',
    image: '/files/weapons/F2.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('F20000000000')
  },
  {
    name: 'Extendable Shield',
    image: '/files/weapons/ExtendableShield.jpg',
    assignment: 'primary',
    firemodes: [],
    type: 'Balistic Shield',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: [],
    _id: mongoose.Types.ObjectId('EXTENDABLESH')
  },
  {
    name: 'OTs-03',
    image: '/files/weapons/OTs-03.jpg',
    assignment: 'primary',
    firemodes: ['semi-automatic'],
    type: 'Marksmen Rifle',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: ['Suppressor', 'Flash Hider', 'Muzzle Brake'],
    grips: [],
    underbarrel: [],
    _id: mongoose.Types.ObjectId('OTS030000000')
  },
  {
    name: 'Balistic Shield',
    image: '/files/weapons/BalisticShield.jpg',
    assignment: 'primary',
    firemodes: [],
    type: 'Balistic Shield',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: [],
    _id: mongoose.Types.ObjectId('BALISTICSHIE')
  },
  {
    name: '6P41',
    image: '/files/weapons/6P41.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Light Machine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('6P4100000000')
  },
  {
    name: 'AK-12',
    image: '/files/weapons/AK-12.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round Burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('AK1200000000')
  },
  {
    name: 'Flash Shield',
    image: '/files/weapons/FlashShield.jpg',
    assignment: 'primary',
    firemodes: [],
    type: 'Balistic Shield',
    sights: [],
    barrels: [],
    grips: [],
    underbarrel: [],
    _id: mongoose.Types.ObjectId('FLASHSHIELD0')
  },
  {
    name: 'AUG A2',
    image: '/files/weapons/AUGA2.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('AUGA20000000')
  },
  {
    name: '552 Commando',
    image: '/files/weapons/552Commando.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round Burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('552COMMANDO0')
  },
  {
    name: 'C8-SFW',
    image: '/files/weapons/C8-SFW.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '2-round burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Compensator',
      'Muzzle Brake',
      'Extended Barrel'
    ],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('C8SFW0000000')
  },
  {
    name: 'CAMRS',
    image: '/files/weapons/CAMRS.jpg',
    assignment: 'primary',
    firemodes: ['semi-automatic'],
    type: 'Marksmen Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('CAMRS0000000')
  },
  {
    name: 'MK17 CQB',
    image: '/files/weapons/MK17CQB.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Compensator',
      'Muzzle Brake',
      'Extended Barrel'
    ],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MK17CQB00000')
  },
  {
    name: 'SR-25',
    image: '/files/weapons/SR-25.jpg',
    assignment: 'primary',
    firemodes: ['semi-automatic'],
    type: 'Marksmen Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SR2500000000')
  },
  {
    name: 'PRB92',
    image: '/files/weapons/PRB92.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('PRB920000000')
  },
  {
    name: 'PARA-308',
    image: '/files/weapons/PARA-308.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Compensator',
      'Muzzle Brake',
      'Extended Barrel'
    ],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('PARA30800000')
  },
  {
    name: 'M249',
    image: '/files/weapons/M249.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Light Machine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Flash Hider', 'Compensator'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M24900000000')
  },
  {
    name: 'Type-89',
    image: '/files/weapons/Type-89.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('TYPE89000000')
  },
  {
    name: 'C7E',
    image: '/files/weapons/C7E.png',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('C7E000000000')
  },
  {
    name: 'PDW9',
    image: '/files/weapons/PDW9.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Submachine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('PDW900000000')
  },
  {
    name: 'SIX12',
    image: '/files/weapons/SIX12.jpg',
    assignment: 'primary',
    firemodes: ['double-action'],
    type: 'Shotgun',
    sights: ['Red Dot Sight', 'Holographic Sight', 'Reflex Sight'],
    barrels: [],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SIX120000000')
  },
  {
    name: 'T-95 LSW',
    image: '/files/weapons/T-95LSW.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Light Machine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('T95LSW000000')
  },
  {
    name: 'LMG-E',
    image: '/files/weapons/LMG-E.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Light Machine Gun',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('LMGE00000000')
  },
  {
    name: 'M762',
    image: '/files/weapons/M762.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M76200000000')
  },
  {
    name: 'MK 14 EBR',
    image: '/files/weapons/MK14EBR.jpg',
    assignment: 'primary',
    firemodes: ['semi-automatic'],
    type: 'Marksmen Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('MK14EBR00000')
  },
  {
    name: 'V308',
    image: '/files/weapons/V308.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('V30800000000')
  },
  {
    name: 'Spear .308',
    image: '/files/weapons/Spear308.jpg',
    assignment: 'primary',
    firemodes: ['automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Flash Hider', 'Compensator', 'Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('SPEAR3080000')
  },
  {
    name: 'M4',
    image: '/files/weapons/M4.jpg',
    assignment: 'primary',
    firemodes: ['automatic', 'semi-automatic', '3-round burst'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: [
      'Suppressor',
      'Flash Hider',
      'Compensator',
      'Muzzle Brake',
      'Extended Barrel'
    ],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('M40000000000')
  },
  {
    name: 'AR-15.50',
    image: '/files/weapons/AR-1550.jpg',
    assignment: 'primary',
    firemodes: ['semi-automatic'],
    type: 'Assult Rifle',
    sights: [
      'Red Dot Sight',
      'Holographic Sight',
      'Reflex Sight',
      'ACOG Sight'
    ],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: ['Vertical Grip', 'Angled Grip'],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('AR1550000000')
  },
  {
    name: '1911 TACOPS',
    image: '/files/weapons/1911TACOPS.jpg',
    assignment: 'secondary',
    firemodes: ['semi-automatic'],
    type: 'Handgun',
    sights: [],
    barrels: ['Suppressor', 'Muzzle Brake'],
    grips: [],
    underbarrel: ['Lazer'],
    _id: mongoose.Types.ObjectId('1911TACOPS00')
  }
];
