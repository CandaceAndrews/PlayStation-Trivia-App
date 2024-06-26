
const ps1Games = [
  {
    id: 1,
    title: 'Final Fantasy VII',
    cover: require('@/assets/thumbnails/final-fantasy-7/cover.jpeg'),
    questions: [
      // 1
      {
        question: `What is the name of the ancient city that serves as the birthplace of the Cetra?`,
        options: ['Nibelheim', 'Wutai', 'Cosmo Canyon', 'The Forgotten Capital'],
        correctAnswer: 'The Forgotten Capital'
      },
      // 2
      {
        question: `What is the name of the final dungeon where players confront Sephiroth in his true form?`,
        options: ['Northern Crater', 'Forgotten City', 'Crystal Cave', 'Whirlwind Maze'],
        correctAnswer: 'Northern Crater'
      },
      // 3
      {
        question: `Which summon materia is obtained after defeating the Midgar Zolom?`,
        options: ['Leviathan', 'Ifrit', 'Bahamut', 'Choco/Mog'],
        correctAnswer: 'Leviathan'
      },
      // 4
      {
        question: `What is the name of the bar owned by Tifa Lockhart in Sector 7 of Midgar?`,
        options: ['Seventh Sin', `Heaven's Gate`, ' Seventh Circle', '7th Heaven'],
        correctAnswer: '7th Heaven'
      },
      // 5
      {
        question: `What is the ultimate Limit Break for Cloud Strife?`,
        options: ['Omnislash', 'Finishing Touch', 'Blade Beam', 'Catastrophe'],
        correctAnswer: 'Omnislash'
      },
      // 6
      {
        question: `Which two characters engage in a memorable fight atop the Sister Ray cannon?`,
        options: ['Cloud and Tifa', 'Barret and Dyne', 'Cloud and Sephiroth', 'Tifa and Sephiroth'],
        correctAnswer: 'Cloud and Sephiroth'
      },
      // 7
      {
        question: `What is the name of the underground prison where Cloud and his party are held captive during the story?`,
        options: ['Corel Prison', 'Nibelheim Prison', 'Sector 6 Prison', 'Shinra Building Detention Center'],
        correctAnswer: 'Corel Prison'
      },
      // 8
      {
        question: `Which character can manipulate time and space using their Limit Break abilities?`,
        options: ['Cloud Strife', 'Aerith Gainsborough', 'Vincent Valentine', 'Cait Sith'],
        correctAnswer: 'Vincent Valentine'
      },
      // 9
      {
        question: `What is the name of the giant cannon that Shinra uses to drain Mako energy from the planet?`,
        options: ['Mako Cannon', 'Omega Weapon', 'Sister Ray', 'Jenova Cannon'],
        correctAnswer: 'Sister Ray'
      },
      // 10
      {
        question: `What is the highest rank that a member of the elite military group SOLDIER can achieve?`,
        options: ['SOLDIER First Class', 'SOLDIER Elite', 'SOLDIER Captain', 'SOLDIER Commander'],
        correctAnswer: 'SOLDIER First Class'
      },
      // 11
      {
        question: `What is another name for an Ancient, the last of which plays a crucial role in the story of Final Fantasy VII?`,
        options: ['Cetra', 'Eternals', 'Elders', 'Celestials'],
        correctAnswer: 'Cetra'
      },
      // 12
      {
        question: `What is the name of the optional super-boss that appears in the Ancient Forest area?`,
        options: ['Emerald Weapon', 'Ruby Weapon', 'Diamond Weapon', 'Ultima Weapon'],
        correctAnswer: 'Ruby Weapon'
      },
      // 13
      {
        question: `What is the name of the robotic creature that accompanies Cait Sith?`,
        options: ['Aps', 'Mog', 'Tonberry', 'Boundfat'],
        correctAnswer: 'Mog'
      },
      // 14
      {
        question: `Which summon materia can be obtained by defeating the optional boss, Ruby Weapon?`,
        options: ['Knights of the Round', 'Phoenix', 'Alexander', 'Bahamut ZERO'],
        correctAnswer: 'Bahamut ZERO'
      },
      // 15
      {
        question: `How many Huge Materia are there in the game?`,
        options: ['3 Huge Materia', '4 Huge Materia', '5 Huge Materia', '6 Huge Materia'],
        correctAnswer: '3 Huge Materia'
      },
    ]
  },
  {
    id: 2,
    title: 'Metal Gear Solid',
    cover: require('@/assets/thumbnails/metal-gear-solid/cover.jpeg'),
    questions: [
      {
        // 1
        question: `What is the name of the island where most of Metal Gear Solid's events take place?`,
        options: ['Shadow Moses Island', 'Outer Heaven', 'Zanzibar Land', 'Mother Base'],
        correctAnswer: 'Shadow Moses Island',
      },
      {
        // 2
        question: `What is the name of the stealth camouflage technology used by Snake in Metal Gear Solid?`,
        options: ['Solid Eye', 'Stealth Camo', 'Active Camouflage', 'OctoCamo'],
        correctAnswer: 'Stealth Camo',
      },
      // 3
      {
        question: `What is the name of the device used by Snake to communicate with his support team and save the game in Metal Gear Solid?`,
        options: ['Codec', 'Radar', 'Walkie-Talkie', 'Transceiver'],
        correctAnswer: 'Codec',
      },
      // 4
      {
        question: `Which character betrays Snake and reveals herself to be working with the antagonist?`,
        options: ['Meryl Silverburgh', 'Sniper Wolf', 'Naomi Hunter', 'Mei Ling'],
        correctAnswer: 'Naomi Hunter',
      },
      // 5
      {
        question: `What is the real name of the character known as Deepthroat, who provides Snake with tips and information during the game?`,
        options: ['Frank Jaeger', 'Gray Fox', 'Liquid Snake', 'Solid Snake'],
        correctAnswer: 'Frank Jaeger',
      },
      // 6
      {
        question: `What is the name of the music track that plays during the iconic battle against Psycho Mantis?`,
        options: ['Encounter', 'Snake Eater', 'The Best is Yet to Come', 'Metal Gear Solid Main Theme'],
        correctAnswer: 'Encounter',
      },
      // 7
      {
        question: `What is the name of the government agency that Snake works for in Metal Gear Solid?`,
        options: ['CIA', 'FBI', 'FOXHOUND', 'FOXDIE'],
        correctAnswer: 'FOXHOUND',
      },
      // 8
      {
        question: `Which character sacrifices themselves to save Snake and Otacon during the final battle with Metal Gear Rex?`,
        options: ['Gray Fox', 'Meryl Silverburgh', 'Naomi Hunter', 'Mei Ling'],
        correctAnswer: 'Gray Fox',
      },
      // 9
      {
        question: `What is the name of the scientist who developed Metal Gear Rex and later aids Snake in stopping the weapon?`,
        options: ['Hal Emmerich', 'Frank Jaeger', 'Decoy Octopus', 'Donald Anderson'],
        correctAnswer: 'Hal Emmerich',
      },
        // 10
        {
          question: `What is the name of the virus injected into Snake, threatening his life and serving as a key plot element in Metal Gear Solid?`,
          options: ['FOXALIVE', 'FOXHOUND', 'FOXDIE-C', 'FOXDIE'],
          correctAnswer: 'FOXDIE',
        },
        // 11
        {
          question: `What is the name of the remote-controlled missile launcher used by Snake to destroy obstacles and enemies from a distance in Metal Gear Solid?`,
          options: ['Nikita Missile Launcher', 'Stinger Missile Launcher', 'FAMAS Assault Rifle', 'PSG1 Sniper Rifle'],
          correctAnswer: 'Nikita Missile Launcher',
        },
        // 12
        {
          question: `What is the name of the location where Solid Snake is initially briefed about his mission in Metal Gear Solid?`,
          options: ['Docking Bay', 'Helipad', 'Briefing Room', 'Armory'],
          correctAnswer: 'Briefing Room',
        },
        // 13
        {
          question: `What is the name of the key card system used to access different areas and levels within the Shadow Moses facility in Metal Gear Solid?`,
          options: ['PAL Key', 'Red Card', 'Blue Card', 'ID Card'],
          correctAnswer: 'PAL Key',
        },
        // 14
        {
          question: `What is the significance of the number "141.12" in Metal Gear Solid?`,
          options: [`It is the frequency of Otacon's Codec channel.`, 'It is the access code for Metal Gear Rex.', 'It is the date of the Shadow Moses incident.', 'It is the identification number of Gray Fox.'],
          correctAnswer: `It is the frequency of Otacon's Codec channel.`,
        },
        // 15
        {
          question: `What is the name of the AI system that controls the security and surveillance of the Shadow Moses facility in Metal Gear Solid?`,
          options: ['Otacon', 'ArmsTech', 'DARPA', 'Metal Gear Mk. II'],
          correctAnswer: 'ArmsTech',
        },
    ]
  },
  {
    id: 3,
    title: 'Resident Evil 2',
    cover: require('@/assets/thumbnails/resident-evil-2/cover.jpeg'),
    questions: [
      {
        // 1
        question: `What is the name of the underground laboratory where the T-Virus was developed and researched in Resident Evil 2?`,
        options: ['Arklay Laboratory', 'Spencer Mansion Laboratory', 'Raccoon City Laboratory','Umbrella Corporation Laboratory'],
        correctAnswer: `Umbrella Corporation Laboratory`,
      },
      {
        // 2
        question: `Which boss enemy must players defeat in the underground facility to obtain the G-Virus sample in Resident Evil 2?`,
        options: ['William Birkin', 'G-Virus Spawn', 'Mr. X', 'Giant Crocodile'],
        correctAnswer: `William Birkin`,
      },
      {
        // 3
        question: `What is the code required to unlock the safe in the Raccoon City Police Department?`,
        options: ['2236', '4613', '8159', '3645'],
        correctAnswer: `2236`,
      },
      {
        // 4
        question: `What is the name of the virus responsible for creating the zombies and mutated creatures?`,
        options: ['G-Virus', 'T-Virus', 'Las Plagas', 'C-Virus'],
        correctAnswer: `T-Virus`,
      },
      {
        // 5
        question: `After obtaining the Base Vaccine, what room must the player return to create the G-Vaccine?`,
        options: ['P-4 laboratory', 'B4F experimentation room', 'B4F low temperature laboratory', 'Main Shaft'],
        correctAnswer: `P-4 laboratory`,
      },
      {
        // 6
        question: `What is the primary weakness of Plant 42, the monstrous plant creature?`,
        options: ['Fire', 'Acid', 'Explosives', 'Electricity'],
        correctAnswer: `Acid`,
      },
      {
        // 7
        question: `Which decision do players make near the end that influences the ending they will experience?`,
        options: ['Choose whether to save Ada Wong or Sherry Birkin', `Decide which character will confront William Birkin's final form`, 'Select the location for the final showdown with the T-103 Tyrant', 'Determine whether to activate the self-destruct sequence or find an alternate escape route'],
        correctAnswer: `Decide which character will confront William Birkin's final form`,
      },
      {
        // 8
        question: `What is the maximum number of inventory slots that can be unlocked for a character?`,
        options: [' 4 slots', '6 slots', '8 slots', '10 slots'],
        correctAnswer: `10 slots`,
      },
      {
        // 9
        question: `Where does Claire find the Chief's diary?`,
        options: [`Chief Irons' desk`, `Art Room on a box`, `RPD Waiting Room desk`, `Chief Irons' desk chair`],
        correctAnswer: `Chief Irons' desk chair`,
      },
      {
        // 10
        question: `How many different types of ammunition can be found for the shotgun?`,
        options: ['1', '2', '3', '4'],
        correctAnswer: `3`,
      },
      {
        // 11
        question: `What item is needed to unlock the door in the Raccoon City Police Department basement leading to the secret laboratory?`,
        options: ['Club Key', 'Spade Key', 'Diamond Key', 'Heart Key'],
        correctAnswer: `Club Key`,
      },
      {
        // 12
        question: `Which key is dropped by Ada in the B2F Power Room after her apparent death by the hands of T-00 during Leon's "B" scenario?`,
        options: ['Red Card Key', 'Blue Card Key', 'Master Key', 'Club Key'],
        correctAnswer: `Master Key`,
      },
      {
        // 13
        question: `How many times must a player click on Wesker's desk in the S.T.A.R.S. office to trigger the hidden item?`,
        options: ['10 times', '30 times', '40 times', '50 times'],
        correctAnswer: `50 times`,
      },
      {
        // 14
        question: `What is the item that Sherry Birkin carries with her throughout most of Resident Evil 2, which becomes a key plot element in the game?`,
        options: ['Necklace', 'Locket', 'Bracelet', 'Pendant'],
        correctAnswer: `Locket`,
      },
      {
        // 15
        question: `What does a player need to do to unlock The 4th Survivor mode?`,
        options: ['Complete scenario A and B, while getting an A rank on at least one of them', 'Complete any scenario six times', 'Finish Leon B or Claire B in less than 3:00 hours with an A or B ranking', 'Finish either scenario with no damage taken'],
        correctAnswer: `Complete scenario A and B, while getting an A rank on at least one of them`,
      }
    ]
  },
  {
    id: 4,
    title: 'Crash Bandicoot',
    cover: require('@/assets/thumbnails/crash-bandicoot/cover.jpeg'),
    questions: [
      {
        // 1
        question: `What is the name of the first island that Crash explores in the game?`,
        options: ['Wumpa Island', 'N. Sanity Island', 'Cortex Island', 'Jungle Island'],
        correctAnswer: `N. Sanity Island`,
      },
      {
        // 2
        question: `What is the name of the secret level accessed by collecting all the colored gems in the level "The Lost City`,
        options: ['The Bonus Round', 'Fumbling in the Dark', 'The Hidden Passage', 'The Gemstone Chamber'],
        correctAnswer: `The Bonus Round`,
      },
      {
        // 3
        question: `What is the primary objective of Crash Bandicoot throughout the game?`,
        options: ['Save Tawna', 'Defeat Dr. Neo Cortex', 'Collect Gems', 'Escape the Island'],
        correctAnswer: `Defeat Dr. Neo Cortex`,
      },
      {
        // 4
        question: `How many levels are there in total in the original Crash Bandicoot game?`,
        options: ['20', '25', '30', '32'],
        correctAnswer: `32`,
      },
      {
        // 5
        question: `In the level "Generator Room," what enemy type is most prominently featured?`,
        options: ['Lab Assistants', 'Electric Eels', 'Toxic Waste Barrels', 'Robot Spiders'],
        correctAnswer: `Electric Eels`,
      },
      {
        // 6
        question: `What is the maximum number of lives Crash can have in the original Crash Bandicoot game without exploiting glitches or cheats?`,
        options: ['99', '50', '25', '10'],
        correctAnswer: `99`,
      },
      {
        // 7
        question: `In which level does Crash encounter his first boss, Papu Papu?`,
        options: ['Rolling Stones', 'Native Fortress', 'Upstream', 'The Lost City'],
        correctAnswer: `Native Fortress`,
      },
      {
        // 8
        question: `In the level "Lights Out," what is the primary obstacle that makes visibility difficult for Crash?`,
        options: ['Darkness', 'Falling platforms', 'Rolling barrels', 'Hidden traps'],
        correctAnswer: `Darkness`,
      },
      {
        // 9
        question: `What special ability does Crash gain after defeating Ripper Roo?`,
        options: ['Super Spin', 'Double Jump', 'Belly Flop', 'No special ability'],
        correctAnswer: `No special ability`,
      },
      {
        // 10
        question: `Which level features a unique mechanic where Crash must avoid being crushed by moving walls and ceilings?`,
        options: ['Boulder Dash', 'Heavy Machinery', 'Road to Nowhere', 'Temple Ruins'],
        correctAnswer: `Heavy Machinery`,
      },
      {
        // 11
        question: `How many colored gems can Crash collect in the game?`,
        options: ['4', '5', '6', '7'],
        correctAnswer: `6`,
      },
      {
        // 12
        question: `What type of levels are represented by a skull icon on the map?`,
        options: ['Bonus Levels', 'Boss Levels', 'Hidden Levels', 'Time Trial Levels'],
        correctAnswer: `Boss Levels`,
      },
      {
        // 13
        question: `What is the purpose of bonus rounds in Crash Bandicoot levels?`,
        options: ['To earn extra lives', 'To collect additional Wumpa fruits', 'To unlock secret areas', 'To access special power-ups'],
        correctAnswer: `To earn extra lives`,
      },
      {
        // 14
        question: `What is the name of the bonus stage that can be accessed in the level "The Lab" by breaking a specific set of boxes?`,
        options: ['Bouncing Boxes', 'Lights Out', 'The High Road', 'Toxic Dash'],
        correctAnswer: `Lights Out`,
      },
      {
        // 15
        question: `Which unique features are exclusive and not found in any other game in the series?`,
        options: ['The purple gem and Time Trial mode', 'The orange gem and bonus round tokens', 'The green gem and warp rooms', 'The yellow gem and Aku Aku masks'],
        correctAnswer: ``,
      },
    ]
  },
  {
    id: 5,
    title: 'Tomb Raider',
    cover: require('@/assets/thumbnails/tomb-raider/cover.png'),
    questions: [
      {
        // 1
        question: `Lara uncovers a hidden entrance beneath which fallen monument in Tomb Raider's starting location?`,
        options: ['Palace Midas', 'Statue of Plutus', 'Colosseum', 'Temple of Tihocan'],
        correctAnswer: `Statue of Plutus`,
      },
      {
        // 2
        question: `What is the first weapon Lara acquires after her dual pistols?`,
        options: ['Shotgun', 'Shaver Shotgun', 'Grenade Launcher', 'Crossbow'],
        correctAnswer: `Shotgun`,
      },
      {
        // 3
        question: `To access the Tomb of Set in Peru, Lara must solve a puzzle involving which mythological creatures?`,
        options: ['Sphinxes', 'Minotaurs', 'Sirens', 'Griffins'],
        correctAnswer: `Sphinxes`,
      },
      {
        // 4
        question: `What secret item, obtained in the Tomb of Set, allows Lara to access underwater areas?`,
        options: ['Diving Suit', 'Rebreather', 'Air Tank', 'Amphibious Suit'],
        correctAnswer: `Rebreather`,
      },
      {
        // 5
        question: `Which hidden location within the Palace Midas grants access to the next area, but requires a specific key type?`,
        options: ['The Treasury', 'The Torture Chamber', 'The Royal Tomb', 'The Hydra Chamber'],
        correctAnswer: `The Treasury`,
      },
      {
        // *****6
        question: `What two creatures does Lara encounter for the first time within the Tomb of Qualopec?`,
        options: ['T-Rex and Bats', 'Wolves and Spiders', 'Yetis and Rats', 'Centaurs and Harpies'],
        correctAnswer: ``,
      },
      {
        // 7
        question: `To access the final confrontation with Lara's nemesis, Lara must use a specific artifact on which location's altar?`,
        options: [`Midas' Throne Room`, `Qualopec's Inner Sanctum`, 'The Atlantean Chamber', 'The Sunken Pyramid'],
        correctAnswer: `Qualopec's Inner Sanctum`,
      },
      {
        // 8
        question: `What is the name of the final boss Lara faces in Tomb Raider?`,
        options: ['Natla', 'Tihocan', 'Larson Redmond', 'The Serpent'],
        correctAnswer: `Natla`,
      },
      {
        // 9 
        question: `Which deadly trap, requiring a specific timed maneuver, guards the entrance to the Tomb of Qualopec?`,
        options: ['Spike Traps', 'Rolling Boulders', 'Flaming Arrows', 'Spear Traps'],
        correctAnswer: `Rolling Boulders`,
      },
      {
        // 10
        question: `What secret item, hidden within the Colosseum, allows Lara to bypass certain locked doors?`,
        options: ['Hall of Mirrors Key', 'Palace Midas Key', 'Skeleton Key', 'Atlantis Key'],
        correctAnswer: `Skeleton Key`,
      },
      {
        // 11
        question: `What is the combination to unlock the safe in the City of Khamoon?`,
        options: [`745`, '297', '865', '314'],
        correctAnswer: `745`,
      },
      {
        // 12
        question: `To access the underwater section of the Palace Midas, Lara must solve a puzzle involving which object?`,
        options: ['Sun Dial', 'Water Pressure Levers', 'Statues of Lions', 'The Scion of Atlantis'],
        correctAnswer: `Water Pressure Levers`,
      },
      {
        // 13
        question: `What secret item, hidden within the Tomb of Set, allows Lara to climb specific walls?`,
        options: ['Climbing Claws', 'Grappling Hook', 'Rope Arrows', 'Spider Rope'],
        correctAnswer: `Climbing Claws`,
      },
      {
        // 14
        question: `Which two secret items, found throughout the game, combine to create a powerful explosive device?`,
        options: ['Chemical X and TNT Block', 'High Octane Gas and Remote Detonator', 'Nitro Glycerin and Fuse', 'White Phosphorous and Pipe Bomb'],
        correctAnswer: `Nitro Glycerin and Fuse`,
      },
      {
        // 15
        question: `What is the name of the hidden location accessed within the Palace Midas that contains a secret stash of weapons and ammunition?`,
        options: ['The Armory', 'The Trophy Room', 'The Training Grounds', 'The Hidden Vault'],
        correctAnswer: `The Armory`,
      },
    ]
  },
  {
    id: 6,
    title: 'Silent Hill',
    cover: require('@/assets/thumbnails/silent-hill/cover.jpeg'),
    questions: [
      {
        // 1
        question: `How does Harry Mason acquire the Flauros?`,
        options: ['By defeating Split Head', 'By solving a puzzle in the Otherworld library', 'It is given to him by Dahlia Gillespie', `By finding it hidden in Lisa Garland's room`],
        correctAnswer: `It is given to him by Dahlia Gillespie`,
      },
      {
        // 2
        question: `What is the name on the antique shop key if you examine it?`,
        options: ['Wood Side Antique', 'Green Lion', `Antique Shop`, `Daisy's Antique`],
        correctAnswer: `Green Lion`,
      },
      {
        // 3
        question: `How many possible endings are there in the original Silent Hill game?`,
        options: ['3', '4', '5', '6'],
        correctAnswer: `5`,
      },
      {
        // 4
        question: `What item must Harry use to access the alternate school area beneath Midwich Elementary?`,
        options: ['Red Liquid', 'Green Key', 'Bronze Medallion', 'Channeling Stone'],
        correctAnswer: `Bronze Medallion`,
      },
      {
        // 5
        question: `In the alternate school area, what is the correct sequence of symbols to unlock the clock tower door?`,
        options: ['Moon, Star, Sun', 'Sun, Moon, Star', 'Star, Sun, Moon', 'Moon, Sun, Star'],
        correctAnswer: `Sun, Moon, Star`,
      },
      {
        // 6
        question: `Which is the optional location in Silent Hill that Harry can enter to begin the Kaufmann sidequest?`,
        options: ['Balkan Church', `Annie's Bar`, 'Hell Gas Station', 'Indian Runner'],
        correctAnswer: `Annie's Bar`,
      },
      {
        // 7
        question: `Which item is needed in order to save Cybil?`,
        options: ['Flauros', 'Amulet of Solomon', 'Red Liquid', 'Seal of Metatron'],
        correctAnswer: 'Red Liquid'
      },
      {
        // 8
        question: 'What is the name of the abandoned amusement park that Harry explores in Silent Hill?',
        options: ['Fantasyland', 'Lakeside Park', 'Lakeside Amusement Park', 'Funland'],
        correctAnswer: 'Lakeside Amusement Park'
      },
      {
        // 9
        question: `What is the final location in the game the player explores?`,
        options: ['Nowhere', 'Lakeside Amusement Park', `The Abyss`, `The Lighthouse`],
        correctAnswer: `Nowhere`,
      },
      {
        // 10
        question: `Which of the following is NOT a potential weapon that Harry can use to defend himself against the creatures?`,
        options: ['Shotgun', 'Pipe', 'Chainsaw', 'Revolver'],
        correctAnswer: `Revolver`,
      },
      {
        // 11
        question: `What is the name of the secret organization that Dr. Kaufmann is affiliated with?`,
        options: ['The Valtiel Sect', 'The Order', 'The Brethren of Silence', 'The Cult of Silent Hill'],
        correctAnswer: `The Order`,
      },
      {
        // 12
        question: `Where can the Channeling Stone can be found?`,
        options: ['Lighthouse roof', `Norman's Motel`, 'Midwich Elementary School', 'Convenience Store 8'],
        correctAnswer: `Convenience Store 8`,
      },
      {
        // 13
        question: `What building must be entered in order to reach Midwich Elementary School?`,
        options: ['The Levin St. House', 'Silent Hill Police Station', `Norman's Motel`, 'Balkan Church'],
        correctAnswer: `The Levin St. House`,
      },
      {
        // 14
        question: `What item is needed in order to retrieve the key underneath the floorboards in the Norman's Motel?`,
        options: ['Crowbar', 'Magnet', 'String with hook', 'Tongs'],
        correctAnswer: `Magnet`,
      },
      {
        // 15
        question: `What is the name of the enemy that bursts through the cafe window soon after Harry observes the radio?`,
        options: ['The Creeper', 'The Air Screamer', 'The Closer', 'The Twinfeeler'],
        correctAnswer: `The Air Screamer`,
      },
    ]
  }
  ];
  
  export default ps1Games;
  
