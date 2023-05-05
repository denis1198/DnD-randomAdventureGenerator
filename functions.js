import data from "./db.json" assert { type: "json" };

export const bbegNames = [...data.bbegNames];
const bbegBackgroundIdeas = [...data.bbegBackgroundIdeas];
const plot = [...data.plot];
const sideQuestsData = [...data.sideQuests];
const mundaneDrops = [...data.mundaneDrops];
const commonDrops = [...data.commonDrops];
const uncommonDrops = [...data.uncommonDrops];
const rareDrops = [...data.rareDrops];
const veryRareDrops = [...data.veryRareDrops];
const legendaryDrops = [...data.legendaryDrops];
const commonEnemies = [...data.commonEnemies];
const startingPlaceData = [...data.startingPlaces];
// TENHO QUE UTILIZAR [...data.position]

// criar consts para os valores
// preciso dar um jeito de fazer as requisições totais com substituições.

// PRECISO FAZER UMA FUNÇÃO QUE RECEBE O VALOR DOS PARÂMETROS DO RANDOM GENERATOR
// E UTILIZA PARA QUERRY SELECTOR/GETELEMENTBYID PARA CRIAR NA TELA.

export async function randomStartingPlace() {
  const startingPlace = document.querySelector(".startingPoint");
  const startingPlaceSpan = document.createElement("span");
  startingPlaceSpan.innerText = "Starting at : ";
  const startingPlaceParagraph = document.createElement("p");
  startingPlaceParagraph.innerText = startingPlaceData[Math.floor(Math.random() * startingPlaceData.length)];
  startingPlace.append(startingPlaceSpan, startingPlaceParagraph);
}
export async function randomStoryIdeas() {
  const storyIdeaPlace = document.querySelector(".history");
  const storyIdeaSpan = document.createElement("span");
  storyIdeaSpan.innerText = "Story idea : ";
  const storyIdeaParagraph = document.createElement("p");
  storyIdeaParagraph.innerText = plot[Math.floor(Math.random() * plot.length)];
  storyIdeaPlace.append(storyIdeaSpan, storyIdeaParagraph);
}
export async function randomCommonEnemiesGenerator() {
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
export async function randomMundaneDropsGenerator() {
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
export async function randomSideQuestsIdeas() {
  const sideQuestsIdeasPlace = document.querySelector(".sidequests");
  const sideQuestsIdeasSpan = document.createElement("span");
  sideQuestsIdeasSpan.innerText = "Side Quest idea : ";
  const sideQuestIdeasParagraph = document.createElement("p");
  sideQuestIdeasParagraph.innerText = sideQuestsData[Math.floor(Math.random() * sideQuestsData.length)];
  sideQuestsIdeasPlace.append(sideQuestsIdeasSpan, sideQuestIdeasParagraph);
}
export async function randomCommonDropsGenerator() {
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
export async function randomUncommonDropsGenerator() {
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
export async function randomRareDropsGenerator() {
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
export async function randomveryRareDropsGenerator() {
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
export async function randomLegendaryDropsGenerator() {
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
export async function randomBbeg() {
  const bbegPlace = document.querySelector(".bbeg");
  const bbegSpan = document.createElement("span");
  bbegSpan.innerText = "BBEG : ";
  const bbegParagraph = document.createElement("p");
  bbegParagraph.innerText = bbegNames[Math.floor(Math.random() * bbegNames.length)];
  bbegPlace.append(bbegSpan, bbegParagraph);
}
export async function randomBbegBackground() {
  const bbegBackgroundPlace = document.querySelector(".bbegBackground");
  const bbegBackgroundSpan = document.createElement("span");
  bbegBackgroundSpan.innerText = "BBEG Background: ";
  const bbegBackgroundParagraph = document.createElement("p");
  bbegBackgroundParagraph.innerText = bbegBackgroundIdeas[Math.floor(Math.random() * bbegBackgroundIdeas.length)];
  bbegBackgroundPlace.append(bbegBackgroundSpan, bbegBackgroundParagraph);
}
export async function removeOldAdventure() {
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
export async function randomAdventure() {
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
export async function justBbeg() {
  removeOldAdventure();
  randomBbeg();
}
export async function justBbegBack() {
  removeOldAdventure();
  randomBbegBackground();
}
export async function justStartingPoint() {
  removeOldAdventure();
  randomStartingPlace();
}
export async function justHistory() {
  removeOldAdventure();
  randomStoryIdeas();
}
export async function justSideQuest() {
  removeOldAdventure();
  randomSideQuestsIdeas();
}
export async function justEnemies() {
  removeOldAdventure();
  randomCommonEnemiesGenerator();
}
export async function justMundaneDrops() {
  removeOldAdventure();
  randomMundaneDropsGenerator();
}
export async function justCommonDrops() {
  removeOldAdventure();
  randomCommonDropsGenerator();
}
export async function justUncommonDrops() {
  removeOldAdventure();
  randomUncommonDropsGenerator();
}
export async function justRareDrops() {
  removeOldAdventure();
  randomRareDropsGenerator();
}
export async function justVeryRareDrops() {
  removeOldAdventure();
  randomveryRareDropsGenerator();
}
export async function justLegendaryDrops() {
  removeOldAdventure();
  randomLegendaryDropsGenerator();
}
