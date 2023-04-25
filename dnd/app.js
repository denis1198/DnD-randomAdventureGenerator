const bbegNames = [
  "Geçgar, Bugbear Captain",
  "Lord Malyk, The Illustrious Im-Potentate",
  "Varios, Melee Combat Cleric of a Death God",
  "Gorgoroth Skullcrusher,Half-Orc Fighter",
  "Thomas Riddleweaver, Gnome Warlock",
  "Wiegraf, Half Elf Duskblade",
  "Lemac Shadowsong, Boss type Bard",
  "Pyros, Azer Monk",
  "Shimmer-Scale Wyrmling Blue Dragon Favored Soul",
  "Lorak Coldeyes, Bishop of Hruggek",
  "Bezzandine Triskelion, Ogre Fighter",
  "Sahuagin Sorcerer",
  "Gnoll Chieftain",
  "Half-fiend Hobgoblin",
  "Young Green Dragon Warlock",
  "Lord Sunder",
  "Ventifakt Gronthean, Evil Elven Sorcerer",
  "Flesh-Reaper, Warforged Juggernaut",
  "The Tyrants Eyes, Bishop of Hextor",
  "Oroku Saki Human Ninja ",
  "Venerable Kobold Sorcerer ",
  "Vampiric Goblin Blackguard ",
  "Beholder",
  "Fnogghi Chaos-Hand, Fomorian, (Cleric 18), CR 21",
  "Kanzztera, Advanced Half-Fiend Nymph, (Thrall of Grazzt 10), CR 21",
  "Silas the Corrupted, Lich, (Cleric 21), CR 23",
  "Frost Giant",
  "Medusa Lich",
  "Ice Devil",
  "Danukan-Ryttn The Possessed",
  "The Vestige",
  "Aginor, Fallen Solar",
  "Grandael, Succubus",
  "Maladric, Akalich",
];
const bbegBackgroundIdeas = [
  "The Arisen: This villain was once a great hero who fell in battle and was resurrected by dark magic. They are now a twisted parody of their former self, using their strength and power to sow chaos and destruction.",
  "The Beastmaster: This villain controls a menagerie of deadly beasts, which they use to do their bidding. They take sadistic pleasure in watching their creatures tear apart their enemies.",
  "The Blackguard: A fallen paladin who has embraced the darkest aspects of their power, the blackguard is a remorseless killer who shows no mercy to those who cross them.",
  "The Blight: A creature of pure evil that spreads death and destruction wherever it goes. The blight is immune to all forms of damage, making it a nearly unstoppable force of nature.",
  "The Cult Leader: This diabolical villain heads up a secret cult dedicated to overthrowing the government and bringing chaos and anarchy. They will stop at nothing to achieve their goals, sacrificing their followers.",
  "The Dragonrider: A fearsome warrior who has tamed a dragon and used it as their battle mount. The Dragonrider is a master of aerial combat and will strike fear into the hearts of those who oppose them.",
  "The Illusionist: A devious trickster who creates illusions that deceive and mislead their enemies. The illusionist is often underestimated because of their small stature, but they are more than capable of holding their own in a fight.",
  "The Necromancer: A spellcaster who has mastered the dark art of necromancy, raising the dead to do their bidding. The necromancer is often feared and shunned by society, but they view mortals as nothing more than tools to be used and discarded at will.",
  "The Orc Chieftain: A brutal warrior who leads a horde of orcs in conquering the land. The orc chieftain cares only for bloodshed and violence and will show no mercy to those foolish enough to cross them.",
  "The Lich King: An evil sorcerer who has achieved immortality by sacrificing his soul to dark forces. The Lich King is incredibly powerful and intelligent, making him a dangerous foe for any adventurer.",
  "The Witch Queen: A malevolent sorceress whose powers come from dark deals made with powerful demons. The Witch Queen is beautiful but deadly, her beauty masking the hideous creature she truly is beneath..",
];
const plot = [
  "The city guard has been turning a blind eye to a group of smugglers using the city’s sewer system to transport illegal goods. Your players are tasked with investigating the smuggling operation and stopping it.",
  "A local tavern owner has been murdered, and evidence points to one of the city guards as the killer. It’s up to the players to figure out who did it and clear the guard’s name.",
  "A shipment of valuable goods has gone missing, and the players must track down the thieves and retrieve the goods before they can be sold on the black market",
  "A group of bandits has been terrorizing trade caravans traveling through the area, and the players are hired to put an end to it.",
  "An evil sorcerer has taken up residence in an abandoned keep, and the players must defeat him and his minions before he can enact his plans for world domination.",
  "The bard is horny",
  "A group of goblins has been stealing livestock from farms in the area, and the players must stop it before the farmers starve.",
  "A young noblewoman has been kidnapped, and the player must rescue her from her captors before they can ransom her off to her wealthy family.",
  "An ancient artifact has been unearthed, and rumors abound that it is cursed. The players must investigate the artifact and determine if the rumors are true.",
  "A dragon has been spotted in the area, and people are living in fear of its wrath. The players must slay the dragon and restore peace to the land.",
  "An evil witch has cursed the town’s wells, poisoning the water supply. The player must find the witch and lift the curse before everyone in town dies of thirst",
  "A powerful magic user is terrorizing locals with illusions and driving them mad with hallucinations. The players try to catch this madman.",
  "A small-time alchemist is making a name for himself by selling potions made from a very rare and deadly flower. The players try to catch him before he can hurt anyone.",
  "A young woman has been going mad, claiming something is after her. She doesnt know if it is real or just an illusion.",
  "A group of pirates has been attacking local shipping. They are after something more than just booty, however.",
  "The king has been kidnapped! Your mission is to get him back before his double starts a war in his name",
  "A magical ceremony goes wrong, unleashing horrors upon an unsuspecting village.",
  "While trying to help a friend in need, the players trigger an ancient trap that unleashes fiendish creatures into the world.",
  "During this year’s harvest festival, the town is under siege by an unknown enemy.",
  "Ancient ruins have been discovered in the nearby forest, and excitement about their contents draws a crowd of treasure hunters among them the players.",
  "While on vacation in a city far away, the players trickle into a series of events that lead to them preventing a massive terrorist attack.",
];
const sideQuests = [
  "The lost city of Atlantis: A group of adventurers stumbles upon a map that leads to the lost city of Atlantis. Will they be able to find it? And what treasures (or dangers) will they encounter along the way?",
  "Escorting a caravan: A local merchant needs help escorting a caravan through dangerous territory. Can the adventurers get the caravan to its destination safely? And will they be able to protect the merchants goods from bandits?",
  "Investigating murders: A series of murders has been plaguing a small town. Can the adventurers figure out who (or what) is behind the killings? And will they be able to stop them before more innocents are harmed?",
  "Escaping from prison: The adventurers have been captured and thrown in jail for a crime they didn’t commit. They’ll have to use all their ingenuity and skills to escape from their cells and clear their names. But even if they manage to do that, they will still have to contend with the guards who are hot on their heels…",
  "Infiltrating a cult: A nefarious cult has been causing trouble in the area, and the local authorities have asked the adventurers to investigate them and end their activities. This will be no easy task, as the cult members are heavily armed and extremely distrustful of outsiders…",
];
const mundaneDrops = [
  "Oily Rags",
  "Wooden Sword",
  "Bucket of Rotten Eels",
  "Box of rusty Nails",
  "Oily Beaver Pelts",
  "White velvet Mask",
  "Rotten Belt",
  "Torn blank Scroll",
  "Woolen Blanket",
  "Blood stained Dress",
  "Blue Quartz Gem",
  "Blue Scarf",
  "Bone Dice",
  "Bone fragments",
  "Carved Bone Statuette",
  "Cloth Scrapt",
  "Cloth-of-gold Vestments",
  "Comb",
  "Cooking pot",
  "Copper Acorns",
  "Copper Chalice",
  "Crude Box",
  "Crude Holy Symbol",
  "Crude Pipe",
  "Demons vale Wine",
  "Dinosaur Bacon",
  "Dire Bat Wings",
  "Disk of Balance",
  "Dried Flower",
  "Leather Ball",
  "Empty Vial",
  "Fat Cat Statue",
  "Fine Cheese",
  "Flesh Shield",
  "Flint & Steel",
  "Fools Gold",
  "Fragrant Torches",
  "Rotten Garlic",
  "Glass Sphere",
  "Glittering Glass",
  "Glow Stone",
  "Goat Jerky",
  "Gold Bracelet",
  "Gold Locket",
  "Hematite",
  "Holy Ice Symbol",
  "Honey",
  "Inhalation Herbs & Essences",
  "Iron Buckle",
  "Iron Earring",
  "Iron Nail",
  "Iron Spike",
  "Jar of Eyeballs",
  "Pile of Coal",
  "Lead coins",
  "Little Riding Hood",
  "Ring of Engagement",
  "Old Hat",
  "Old Pouch",
  "Old Round Shield",
  "Parchment",
  "Potpurri",
  "River Stone",
  "Saw",
  "Scroll Case",
  "Silk Handkerchief",
  "Silver Ewer",
  "Tin Cup",
  "Tobacco",
  "Unreadable Note",
  "Walking Stick",
  "Weighted Die(6-sided)",
  "Whistle",
  "Wolf pelt",
  "Wooden Spike",
  "Raisins",
  "Soupd Ladel",
  "Silver-tipped Quill",
  "Marbles",
  "Dead Rat",
  "Bones with bitemarks",
  "Half-burnt Twigs",
  "Pile of unidentifiable Slime",
  "Dry Hay",
  "Glassh Shards",
  "Smooth Pebbles",
  "Rotten Human Finger",
  "Voodoo Doll",
  "Bug Infested Shoe",
  "Ring of Keys",
  "Single Metal Coin",
  "Used Bandages",
  "Broken Mirror",
  "Wooden Buttons",
  "Wolf Teeth",
];
const commonDrops = [
  "Leather armor",
  "Padded Armor",
  "Studded Leather",
  "Breastplate",
  "Chain Shirt",
  "Half plate",
  "Hide",
  "Scale Mail",
  "Ring mail",
  "Shield",
  "Club",
  "Dagger",
  "Greatclub",
  "HandAxe",
  "Javelin",
  "Light Hammer",
  "mace",
  "Quarterstaff",
  "Sickle",
  "spear",
  "Light crossbow",
  "Dart",
  "Shortbow",
  "Sling",
  "Battleaxe",
  "Flail",
  "Glaive",
  "Greataxe",
  "Greatsword",
  "Halberd",
  "Lance",
  "Longsword",
  "Maul",
  "Morningstar",
  "Pike",
  "Rapier",
  "Scimitar",
  "Shortsword",
  "Trident",
  "War pick",
  "Warhammer",
  "Whip",
  "Blowgun",
  "Hand crossbow",
  "Heavy Crossbow",
  "Longbow",
  "Net",
  "Arrows(20)",
  "Crossbow Bolts(20)",
  "Sling Bullets(20)",
  "Abacus",
  "Acid(vial)",
  "Alchemist's Fire(flask)",
  "Antitoxin",
  "Arcane Focus Crystal",
  "Arcane Focus Orb",
  "Arcane Focus Rod",
  " Arcane Focus, Staff",
  "Arcane Focus Wand",
  "Backpack",
  "Ball Bearings(bag of 1000)",
  "Barrel",
  "Basket",
  "Bedroll",
  "Bell",
  "Blanket",
  "Block and Tackle",
  "Book",
  "Bottle/Glass",
  "Caltrops(bag of 20)",
  "Candle",
  "Case, crossbow bolt",
  "Case, Map or Scroll",
  "Chain(10feet)",
  "Chalk(1piece)",
  "Chest",
  "Climbing Kit",
  "Clothes, Common",
  "Clothes, Costume",
  "Clothes, Fine",
  "Clothes, Travelers",
  "Componet Pouc",
  "Crowbar",
  "Druidic Focus, spring of mistletoe",
  "Druidic Focus, Totem",
  "Druidic Focus, Wooden staff",
  "Druidic Focus, Yew Wand",
  "Fishing tackle",
  "Flask",
  "Tankard",
  "Grappling Hook",
  "Hammer",
  "Hammer/sledge",
  "Healing kit",
  "Holy symbol, Amulet",
  "Holy symbol, Emblem",
  "Holy Symbol, reqliquary",
  "Holy Water(flask)",
  "Hourglass",
  "Hunting Trap",
  "Ink (1 ounce bottle)",
  "Ink Pen",
  "Jug",
  "Pitcher",
  "Lamp",
  "Lanter, Bulleye",
  "Lanter, Hooded",
  "Lock",
  "Magnifying Glass",
  "Manacles",
  "Mess kit",
  "Mirror/Steel",
  "Oil(flask)",
  "Paper(one sheet)",
  "Parchment(one sheet)",
  "Perfume(vial)",
  "Pick, Miners",
  "Piton",
  "Poison, Basic(vial)",
  "Pole(10-foot)",
  "Pouch",
  "Quiver",
  "Ram,Portable",
  "Ration(1day)",
  "Robes",
  "Rope,Hempen(50feet)",
  "Rope,Silk(50feet)",
  "Sack",
  "Merchant Scale",
  "Sealing Wax",
  "Shovel",
  "Signal Whistle",
  "Signet Ring",
  "Soap",
  "Spellbook",
  "Spikes,iron(10)",
  "Tent, two-person",
  "Tinderbox",
  "Torch",
  "Vial",
  "Waterskin",
  "Whetstone",
  "Alchemist supplies",
  "Brewers supplies",
  "Caligrapher supplies",
  "Carpenters tools",
  "Cartographers tools",
  "Cobblers tools",
  "Cooks tools",
  "Jewelers tools",
  "Masons tools",
  "Painters tools",
  "Potters tools",
  "Smiths tools",
  "Tinkers tools",
  "Weavers tools",
  "Woodcarvers tools",
  "Disguise kit",
  "Forgery kit",
  "Dice set",
  "Playing card set",
  "Herbalism kit",
  "Bagpipes",
  "Drum",
  "Dulcimer",
  "Flute",
  "Lute",
  "Lyre",
  "Horn",
  "Pan flute",
  "Shawm",
  "Viola",
  "Navigators tool",
  "Poisoners kit",
  "Thieves tools",
  "Potion of healing",
  "Potion of Climbing",
];
const uncommonDrops = [
  "Splint",
  "Assassins blood",
  "Burnt Othur Fumes",
  "Crawler mucus",
  "Drow Poison",
  "Essence of Ether",
  "Malice",
  "Oil of Taggit",
  "Pale Tincture",
  "Serpent Venom",
  "Truth Serum",
  "Philter of Love",
  "Potion of Poison",
  "Dust of Dryness(1 pellet)",
  "Potion of Greater healing",
  "Potion of Water Breathing",
  "Potion of Animal Friendship",
  "Potion of Growth",
  "Dust of Disappearance",
  "Potion of Resistance",
  "Dust of Sneezing and Chokuing",
  "Oil of Slipperiness",
  "Adamantine Chain Mail",
  "Adamantine Breastplate",
  "Helm of Comprehending Languages",
  "Trident of Fish Command",
  "Elemental Gem",
  "Eversmoking Bottle",
  "Ring of Warmth",
  "Bracers of Archery",
  "Circlet of Blasting",
  "Javeling of Lightning",
  "Wind fan",
  "Goggles of Night",
  "Necklace of adaption",
  "Ring of Water Walking",
  "Wnad of Magic Detection",
  "Wand of Secrets",
  "Pipes of the Sewers",
  "Gloves of SWimming and Climbing",
  "Rope of Climbing",
  "Staff of the Python",
  "Boots of Elvenkind",
  "Eyes of Minute Seeing",
  "Eyes of the Eagle",
  "Ring of Jumping",
  "Gloves of Missile Snaring",
  "Eyes of Charming",
  "Medallion of Thoughts",
  "Ring of Swimming",
  "Cloack of Protection",
  "Bag of holding",
  "Luckstone",
  "Gem of Brightness",
  "Periapt of Wound Closure",
  "Boots of Striding and Springing",
  "Cloak of elvenkind",
  "Hat of Disguise",
  "Immovable Rod",
  "Lanter of Revealing",
  "Periapt of Health",
  "Slippers of Spider Climbing",
  "Silver Raven",
  "Pearl of Power",
  "Pipes of Haunting",
  "Cloak of the Manta Ray",
  "Deck of Illusions",
  "Brooch of Shielding",
  "Gauntlets of Ogre Power",
  "Headband of Intellect",
  "Wand of Magic Missiles",
  "Wand of Web",
  "Broom of Flying",
  "Winged boots",
  "Boots of Winterlands",
  "Helm of Telepathy",
  "Ring of Mind Shielding",
  "Amulet of Proof Against Detection and Location",
  "Decanter of Endless Water",
  "Chalk of Identification",
];
const rareDrops = [
  "Plate Armor",
  "Spyglass",
  "Midnight Tears",
  "Purple Worm Poison",
  "Torpor",
  "Wyvern Poison",
  "Feather Token Anchor",
  "Potion of Heroism",
  "Potion of Mind Reading",
  "Feather Token Fan",
  "Feather Token Whip",
  "Potion of Diminution",
  "Potion of Gaseous Form",
  "Vicious Club",
  "Vicious Dagger",
  "Vicious Javelin",
  "Vigious Sickle",
  "Vicious ShortBow",
  "Vicious Battleaxe",
  "Vicious Greatsword",
  "Ivory Goat(Travail)",
  "Horn of Blasting",
  "Potion of Superior Healing",
  "Necklace of Fireballs",
  "Golden Lion",
  "Beaf of Force",
  "Potion of Clairvoyance",
  "Greatsowrd of Life-Stealing",
  "Shortsword of Life-Stealing",
  "Ioun Stone of Sustenance",
  "Ivory Goat of Traveling",
  "Ioun Stone of Protection",
  "Chime of Opening",
  "Oil of Etherealness",
  "Glamoured Studded Leather",
  "Longsword of Wounding",
  "Dagger of Wounding",
  "Handy Haversack",
  "Ring of Feather Falling",
  "Dagger of Venom",
  "Feather Token Bird",
  "Feather Token Swan Boat",
  "Staff of Withering",
  "Dimensional Shackles",
  "Onyx Dog",
  "Ring of Protection",
  "Boots of Speed",
  "Elven Chain",
  "Iron Bands of Bilarro",
  "Rope of Entanglement",
  "Wand of Enemy Detection",
  "Boots of Levitation",
  "Ringo of Animal Influence",
  "Flame Tongue Dagger",
  "Ring of Evasion",
  "Ring of the Ram",
  "Horsehoes of Speed",
  "Periapt of Proof Against Poison",
  "Wings of Flying",
  "Studded Leather of Resistance",
  "Breatplate of Resistance",
  "Arror-Catching Shield",
  "Belt of Dwarvenkind",
  "Braces of Defense",
  "Ioun Stone of Reserve",
  "Ring of Resistance",
  "Shield of Missile Attraction",
  "Cloak of the bat",
  "Ring of X-Ray Vision",
  "Marble Elephant",
  "Ebony Fly",
  "Giant Slayer Battleaxe",
  "Mace of Smithing",
  "Amulet of Health",
  "Dragon Slayer Longsword",
  "Mace of Disruption",
  "Mace of terror",
  "Cape of te Mountebank",
  "Portable Hole",
  "Bowl of Commanding Water Elementals",
  "Brazier of Commanding Fire Elementals",
  "Censer of Controlling Air Elementals",
  "Stone of Controlling Earth Elementals",
  "Bronze Griffon",
  "Serpentine Owl",
  "Wand of Binding",
  "Wand of Fear",
  "Folding Boat",
  "Ioun stone of Awareness",
  "Staff of Charming",
  "Sun Blade",
  "Staff of healing",
  "Staff of Swarming Insects",
  "Wand of Paralysis",
  "Cube of Force",
  "Rod of Rulership",
  "Ring of Free Action",
  "Ivory Goat of Terror",
  "Ring of Spell Storing",
  "Mantle of Spell Resistance",
  "Robe of Eyes",
  "Wand of Fireballs",
  "Wand of Lightning Bolts",
  "Gem of Seeing",
  "Staff of Woodlands",
  "Helm of Teleportation",
  "Instant Fortress",
];
const veryRareDrops = [
  "Potion of Invisibility",
  "Marvelous Pigments",
  "Potion of Speed",
  "Potion of Flying",
  "Potion of Vitality",
  "Potion of Supreme Healing",
  "Horsehoes of a Zephyr",
  "Greatsword of Sharpness",
  "Dancing Scimitar",
  "Dancing Rapier",
  "Frost Brand GreatSword",
  "Ioun Stone of Absorption",
  "Ioun Stone of Agility",
  "Ioun Stone of Fortitude",
  "Ion Stone of Insight",
  "Ioun Stone of Intellect",
  "Ioun Stone of Leadership",
  "Ioun Stone of Strenght",
  "Oil of Sharpness",
  "Oathbow",
  "Dragon Scale Mail",
  "Cloak of Arachnida",
  "Animated Shield",
  "Robe of Scintilating Colors",
  "Scimitar of Speed",
  "Nine Lives Stealer",
  "Dwarven Plate",
  "Staff of Thunder and Lightning",
  "Carpet of Flying",
  "Ring of Regeneration",
  "Staff of Fire",
  "Dwarven Thrower",
  "Staff of Striking",
  "Rod of Alertness",
  "Staff of Frost",
  "Wand of Polymorph",
  "Rod of Absorption",
  "Spellguard Shield",
  "Crystall Ball",
  "Robe of Stars",
  "Ring of Telekineses",
  "Rod of Security",
  "Staff of Power",
  "Obsidian Steed",
  "Amulet of Planes",
];
const legendaryDrops = [
  "Universal Solvent",
  "Sovereign Glue",
  "Ioun Stone of Regeneration",
  "Apparatus of Kwalish",
  "Ring of Invisibility",
  "Ioun Stone of Mastery",
  "Spher of Annihilation",
  "Hammer of Thunderbolts",
  "Ring of Fire Elemental Command",
  "Plate Armor of Invulnerability",
  "Talisman of Sphere",
  "Vorpal Scimitar",
  "Defender Greatsword",
  "Ring of Water Elemental Command",
  "Rod of Lordly Might",
  "Ring of Spell Turning",
  "Ioun Stone of Greater Absorption",
  "Ring of Earth Elemental Command",
  "Robe of the Archmagi",
  "Ring of Air Elemental Command",
];
const commonEnemies = ["Bugbear", "Carrion Crawler", "Cyclops", "Dire Wolf", "Doppelganger", "Flying Snake", "Gargoyle", "Ghoul", "Frost Giant", "Spiders", "Golem", "Goblin", "Hobgoblin", "Kobold", "Ogre", "Orc", "Skeleton", "Troll"];
const startingPlaces = ["Island", "City", "Fields", "Port", "Warfield", "Party", "Castle", "Forest", "Tavern", "Streets", "Dungeon", "Hell", "Prison"];
// creating a random starting place
function randomStartingPlace() {
  const startingPlace = document.querySelector(".startingPoint");
  const startingPlaceSpan = document.createElement("span");
  startingPlaceSpan.innerText = "Starting at : ";
  const startingPlaceParagraph = document.createElement("p");
  startingPlaceParagraph.innerText = startingPlaces[Math.floor(Math.random() * startingPlaces.length)];
  startingPlace.append(startingPlaceSpan, startingPlaceParagraph);
}
//Creating a random Story Idea.
function randomStoryIdeas() {
  const storyIdeaPlace = document.querySelector(".history");
  const storyIdeaSpan = document.createElement("span");
  storyIdeaSpan.innerText = "Story idea : ";
  const storyIdeaParagraph = document.createElement("p");
  storyIdeaParagraph.innerText = plot[Math.floor(Math.random() * plot.length)];
  storyIdeaPlace.append(storyIdeaSpan, storyIdeaParagraph);
}
// Random common enemy generator 10 slots.
function randomCommonEnemiesGenerator() {
  const randomCommonEnemies = document.querySelector(".enemies");
  const randomCommonEnemiesUl = document.createElement("ul");
  randomCommonEnemiesUl.innerText = "Common Enemies: ";
  const randomCommonEnemiesP = document.createElement("p");
  for (let i = 0; i < 10; i++) {
    randomCommonEnemiesP.innerText += commonEnemies[Math.floor(Math.random() * commonEnemies.length)] + ". ";
    randomCommonEnemiesUl.appendChild(randomCommonEnemiesP);
  }
  randomCommonEnemies.appendChild(randomCommonEnemiesUl);
}
// 15 mundane drops generator
function randomMundaneDropsGenerator() {
  const randomMundaneDrops = document.querySelector(".mundaneDrops");
  const randomMundaneDropsUl = document.createElement("ul");
  randomMundaneDropsUl.innerText = "Mundane Drops : ";
  const randomMundaneDropsP = document.createElement("p");
  for (let i = 0; i < 15; i++) {
    randomMundaneDropsP.innerText += mundaneDrops[Math.floor(Math.random() * mundaneDrops.length)] + "/ ";
    randomMundaneDropsUl.appendChild(randomMundaneDropsP);
  }
  randomMundaneDrops.appendChild(randomMundaneDropsUl);
}
// random 2 side quest generator.
function randomSideQuestsIdeas() {
  const sideQuestsIdeasPlace = document.querySelector(".sidequests");
  const sideQuestsIdeasSpan = document.createElement("span");
  sideQuestsIdeasSpan.innerText = "Side Quest idea : ";
  const sideQuestIdeasParagraph = document.createElement("p");
  sideQuestIdeasParagraph.innerText = sideQuests[Math.floor(Math.random() * sideQuests.length)];
  sideQuestsIdeasPlace.append(sideQuestsIdeasSpan, sideQuestIdeasParagraph);
}
// 10 common drops generator
function randomCommonDropsGenerator() {
  const randomCommonDrops = document.querySelector(".commonDrops");
  const randomCommonDropsUl = document.createElement("ul");
  randomCommonDropsUl.innerText = "Common Drops : ";
  const randomCommonDropsP = document.createElement("p");
  for (let i = 0; i < 10; i++) {
    randomCommonDropsP.innerText += commonDrops[Math.floor(Math.random() * commonDrops.length)] + "/ ";
    randomCommonDropsUl.appendChild(randomCommonDropsP);
  }
  randomCommonDrops.appendChild(randomCommonDropsUl);
}

function randomUncommonDropsGenerator() {
  const randomUncommonDrops = document.querySelector(".uncommonDrops");
  const randomUncommonDropsUl = document.createElement("ul");
  randomUncommonDropsUl.innerText = "Uncommon Drops : ";
  const randomUncommonDropsP = document.createElement("p");
  for (let i = 0; i < 10; i++) {
    randomUncommonDropsP.innerText += uncommonDrops[Math.floor(Math.random() * uncommonDrops.length)] + "/ ";
    randomUncommonDropsUl.appendChild(randomUncommonDropsP);
  }
  randomUncommonDrops.appendChild(randomUncommonDropsUl);
}
function randomRareDropsGenerator() {
  const randomRareDrops = document.querySelector(".rareDrops");
  const randomRareDropsUl = document.createElement("ul");
  randomRareDropsUl.innerText = "Rare Drops : ";
  const randomRareDropsP = document.createElement("p");
  for (let i = 0; i < 5; i++) {
    randomRareDropsP.innerText += rareDrops[Math.floor(Math.random() * rareDrops.length)] + "/ ";
    randomRareDropsUl.appendChild(randomRareDropsP);
  }
  randomRareDrops.appendChild(randomRareDropsUl);
}

function randomveryRareDropsGenerator() {
  const randomVeryRareDrops = document.querySelector(".veryRareDrops");
  const randomVeryRareDropsUl = document.createElement("ul");
  randomVeryRareDropsUl.innerText = "Very Rare Drops : ";
  const randomVeryRareDropsP = document.createElement("p");
  for (let i = 0; i < 5; i++) {
    randomVeryRareDropsP.innerText += veryRareDrops[Math.floor(Math.random() * veryRareDrops.length)] + "/ ";
    randomVeryRareDropsUl.appendChild(randomVeryRareDropsP);
  }
  randomVeryRareDrops.appendChild(randomVeryRareDropsUl);
}
function randomLegendaryDropsGenerator() {
  const randomLegendaryDrops = document.querySelector(".legendaryDrops");
  const legendaryDropsUl = document.createElement("ul");
  legendaryDropsUl.innerText = "Legendary Drops : ";
  const legendaryDropsP = document.createElement("p");
  for (let i = 0; i < 3; i++) {
    legendaryDropsP.innerText += legendaryDrops[Math.floor(Math.random() * legendaryDrops.length)] + "/ ";
    legendaryDropsUl.appendChild(legendaryDropsP);
  }
  randomLegendaryDrops.appendChild(legendaryDropsUl);
}
// random bbeg generator
function randomBbeg() {
  const bbegPlace = document.querySelector(".bbeg");
  const bbegSpan = document.createElement("span");
  bbegSpan.innerText = "BBEG : ";
  const bbegParagraph = document.createElement("p");
  bbegParagraph.innerText = bbegNames[Math.floor(Math.random() * bbegNames.length)];
  bbegPlace.append(bbegSpan, bbegParagraph);
}
// bbeg background
function randomBbegBackground() {
  const bbegBackgroundPlace = document.querySelector(".bbegBackground");
  const bbegBackgroundSpan = document.createElement("span");
  bbegBackgroundSpan.innerText = "BBEG Background: ";
  const bbegBackgroundParagraph = document.createElement("p");
  bbegBackgroundParagraph.innerText = bbegBackgroundIdeas[Math.floor(Math.random() * bbegBackgroundIdeas.length)];
  bbegBackgroundPlace.append(bbegBackgroundSpan, bbegBackgroundParagraph);
}
// Removing the old content
function removeOldAdventure() {
  const startingPlaceRemoval = document.getElementById("startingPoint");
  const historyRemoval = document.getElementById("history");
  const bbegRemoval = document.getElementById("bbeg");
  const enemiesRemoval = document.getElementById("enemies");
  const commonDropsRemoval = document.getElementById("commonDrops");
  const mundaneDropsRemoval = document.getElementById("mundaneDrops");
  const bbegBackgroundRemoval = document.getElementById("bbegBackground");
  const sideQuestsIdeasRemoval = document.getElementById("sidequests");
  const randomUncommonDropsRemoval = document.getElementById("uncommonDrops");
  const randomRareDropsRemoval = document.getElementById("rareDrops");
  const randomVeryRareDropsRemoval = document.getElementById("veryRareDrops");
  const legendaryDropsRemoval = document.getElementById("legendaryDrops");
  legendaryDropsRemoval.innerHTML = "";
  randomVeryRareDropsRemoval.innerHTML = "";
  randomRareDropsRemoval.innerHTML = "";
  randomUncommonDropsRemoval.innerHTML = "";
  startingPlaceRemoval.innerHTML = "";
  bbegBackgroundRemoval.innerHTML = "";
  historyRemoval.innerHTML = "";
  bbegRemoval.innerHTML = "";
  enemiesRemoval.innerHTML = "";
  commonDropsRemoval.innerHTML = "";
  mundaneDropsRemoval.innerHTML = "";
  sideQuestsIdeasRemoval.innerHTML = "";
}
// i still don't know why i couldn't modularize the app, tried to export, export default, literal object exporting, requesting, and allways stopped working
function randomAdventure() {
  removeOldAdventure();
  randomStartingPlace();
  randomSideQuestsIdeas();
  randomMundaneDropsGenerator();
  randomCommonEnemiesGenerator();
  randomCommonDropsGenerator();
  randomStoryIdeas();
  randomUncommonDropsGenerator();
  randomRareDropsGenerator();
  randomveryRareDropsGenerator();
  randomBbeg();
  randomBbegBackground();
  randomLegendaryDropsGenerator();
}
