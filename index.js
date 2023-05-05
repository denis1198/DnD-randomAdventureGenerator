import data from "./db.json" assert { type: "json" };
import {
  randomStartingPlace,
  justBbeg,
  bbegNames,
  justBbegBack,
  justCommonDrops,
  justEnemies,
  justHistory,
  justLegendaryDrops,
  justMundaneDrops,
  justRareDrops,
  justSideQuest,
  justStartingPoint,
  justUncommonDrops,
  justVeryRareDrops,
  randomAdventure,
  randomBbeg,
  randomBbegBackground,
  randomCommonDropsGenerator,
  randomCommonEnemiesGenerator,
  randomLegendaryDropsGenerator,
  randomMundaneDropsGenerator,
  randomRareDropsGenerator,
  randomSideQuestsIdeas,
  randomStoryIdeas,
  randomUncommonDropsGenerator,
  randomveryRareDropsGenerator,
  removeOldAdventure,
} from "./functions.js";

// adding eventListeners
const bbeg = document.querySelector(".bbegGen");
bbeg.addEventListener("click", justBbeg);

const bbegBack = document.querySelector(".bbegBack");
bbegBack.addEventListener("click", justBbegBack);

const startingPoint = document.querySelector(".startingPointBtn");
startingPoint.addEventListener("click", justStartingPoint);

const randomHistory = document.querySelector(".historyBtn");
randomHistory.addEventListener("click", justHistory);

const randomSideQuestBtn = document.querySelector(".sidequestBtn");
randomSideQuestBtn.addEventListener("click", justSideQuest);

const randomEnemies = document.querySelector(".enemiesBtn");
randomEnemies.addEventListener("click", justEnemies);

const mundaneDrops = document.querySelector(".mundaneDropsBtn");
mundaneDrops.addEventListener("click", justMundaneDrops);

const commonDrops = document.querySelector(".commonDropsBtn");
commonDrops.addEventListener("click", justCommonDrops);

const uncommonDrops = document.querySelector(".uncommonDropsBtn");
uncommonDrops.addEventListener("click", justUncommonDrops);

const rareDrops = document.querySelector(".rareDropsBtn");
rareDrops.addEventListener("click", justRareDrops);

const veryRareDrops = document.querySelector(".veryRareDropsBtn");
veryRareDrops.addEventListener("click", justVeryRareDrops);

const legendaryDrops = document.querySelector(".legendaryDropsBtn");
legendaryDrops.addEventListener("click", justLegendaryDrops);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", removeOldAdventure);

const completeAdventure = document.querySelector("#adventure");
completeAdventure.addEventListener("click", randomAdventure);
