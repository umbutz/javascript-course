// Data needed for first part of the section
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours1 = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Seu macarrão ${ing1}, segundo pedido de macarrão ${ing2}, terceiro ${ing3}`
    );
  },
};
/// Sting Methods
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = pegCod => pegCod.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, hours] = flight.split(';');
  //type = type.replaceAll('_', ' ')
  //from = from.slice(0,3).toUpperCase();
  //to = to.slice(0,3).toUpperCase();

  let fixingVariables = `${
    type.startsWith('_Delayed') ? '🔴' : ''
  } ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
    to
  )} (${hours.replace(':', 'h')})`.padStart(45);

  console.log(fixingVariables);
}

/*
///// (Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textArea = document.querySelector('textarea').value;
  const rows = textArea.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${'🟩'.repeat(i + 1)}`);
  }
});

/// Working with strings #3
const stringS = 'veryaniceagood'.split('a');
console.log(stringS[1])

const [firstName, lastName] = `Buenos Aires,Porto Rico `.split(',');
console.log(firstName);

/// Working with strings #2
const doc = (document.querySelector('h1').textContent = document
  .querySelector('h1')
  .textContent.toUpperCase());
console.log(doc.toLowerCase())

const victor = prompt(`Say you're name: `);
const victor1 = victor.toLowerCase();
const victor2 = victor1[0].toUpperCase() + victor1.slice(1);
console.log(victor2)


/// Working with strings #1
const conS = 'abcd efgh jojo';
console.log(conS.length)
console.log(conS.slice(1, 9)) //.slice(começa, termina)
console.log(conS.slice(0, -1));
console.log(conS.slice(0, conS.indexOf(' ')))
console.log(conS.slice(conS.lastIndexOf(' ')));  

///// (Coding Challenge #3)
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1-p criar uma array contendo os acontecimentos (sem repetição)
const events = [...new Set(gameEvents.entries())];
console.log(events);

//2-p remover o cartão amarelo do minuto 64
gameEvents.delete(64)

//3-p calcular e registrar no console
const time = [...gameEvents.keys()].pop();
console.log(`Ocorreu um evento, em média, a cada ${time / gameEvents.size} minutos de jogo.`)
console.log([new Set(gameEvents.values())])
//4-p fazer um loop e registrar no console
for(let [min, acon] of gameEvents) {
  const tempo = min < 45 ? 'PRIMERO' : 'SEGUNDO';
  console.log(`[${tempo} TEMPO] ${min}: ${acon}`);
}

/// Maps: Iteration
const question = new Map([
  ['question1', 'Qual linguagem de p/ estamos usando?'],
  [1, 'C#'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Você Acertou'],
  [false, 'Você Errou'],
]);

console.log(question);
console.log(question.get('question1'));

for (const [key, value] of question) {
  typeof key === 'number' ? console.log(`Answer ${key}: ${value}`): '';
}

const answer = 3;

answer === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

console.log([...question]);

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//// Maps: Fundamentals
const mapsN = new Map ();
mapsN.set('name', 'Brasil');
mapsN.set('location', 'São Paulo');
mapsN.set('cat', ['a', 'b', 'c']);

console.log(mapsN);

/// Set
const newSet = new Set(['a', 'b', 'a', 'b']); //pode ser usado para descobrir quais posições existem na aray ou objeto
const oldSet = ['a', 'b', 'a', 'b'];
console.log(oldSet);
console.log(newSet);

///// (Coding Challenge #2)
//1-p
for (let [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2-p
console.log(game.odds)
const {odds: {team1, x: emp, team2}} = game;

//3-p
console.log(`Bayern Munich winrate : ${team1}
Drew: ${emp}
Borussia winrate: ${team2}`)

//4-p
const scores =  {
  'Lewandowski': 2,
  'Gnarby': 1,
  'Hummels': 1,
};

/// Looping Objects: K, V, E;
const openK = Object.keys(openingHours1);
const openV = Object.values(openingHours1);
const entries = Object.entries(openingHours1);
console.log(openK, openV);

for (const [key, {open, close}] of entries) {
  console.log(`In ${key}, we open at ${open} and close at ${close}`);
}

/// Optional Chaining
console.log(restaurant.openingHours.thu?.close)

for(const day of days) {
  const open = restaurant.openingHours[day]?.open;
  open != undefined ? console.log(`We open in ${day} at ${open}`): console.log(`In ${day} we are closed`);
}

/// Looping Arrays
const fNames = ['Victor', 'Butz', 'Mario']
for (const [numero, nomes] of fNames.entries()) console.log(`${numero + 1}: ${nomes}`);

///// (Challenger #1)
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1-p
const [players1, players2] = game.players;

//2-p
const [gk, ...fieldPlayers] = players1;

//3-p
const allPlayers = [...players1, ...players2];

//4-p
const players1Final = [...players1, 'Coutinho', 'Thiago', 'Perisic'];

//5-p
const {odds: {team1, x: drew, team2}} = game;
console.log(team1);

//6-p
const printGoals = (...players) => console.log(`${players.length} Goals`);
printGoals(...game.scored);

//7-p
team1 < team2 && console.log('Bayer win this match.') || team1 > team2 && console.log('Borussia win this match.');

///(Nulish operator)
restaurant.numbGuest = '';

const guestNum = restaurant.numbGuest ?? 10;
console.log(guestNum);

///(&& and ||)
console.log(0 || 'Victor');
console.log(0 && 'Victor');

///FOURTH PART OF SECTION (Rest Pattern and Parameters)
const [a, b, ...arr] = [1,2,3,4,5,6]; //Operador Rest é usado para "reciclar" o resto dos valores restantes.
console.log(arr[1]);

const [pizza, , risotto, ...outros] = [...restaurant.mainMenu, ...restaurant.starterMenu]; //Array
console.log(pizza,'|', risotto, '|', ...outros);

//Operador Rest pode ser usado em objetos também 
const { sat, ...othersWeekdays} = restaurant.openingHours; //Objeto
console.log(sat, othersWeekdays);

//Parametros
const param = function (...numbers) {
  let sum = 0;
  for(let i =0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
let x = [1,2,2,3];
param(...x);

restaurant.orderPizza('pasta,', 'katchup,', 'mortadela,', 'salame.');

///THIRD PART OF SECTION (The Spread Operators)
const arr = [1,2,3];
const badNew = [4,5,6, ...arr];
console.log(badNew);
console.log(...badNew);

const newMenu = [...restaurant.mainMenu, 'Pig'];
console.log(...newMenu);  

const newMainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //Copiando as informações do objeto.
console.log(...newMainMenu);

const aName = 'Jonas';
const arr2 = [...aName, 'Victor'];
console.log(...arr2);

///SECOND PART OF SECTION (Destructuring Objects)
//Um objeto não necessita de pulo igual a array.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: weCategories,
} = restaurant;
console.log(restaurantName, hours, weCategories);

let a = 11;
let b = 12;

const obj = {a: 13, b: 14};
({a, b} = obj) //Modificando o valor original das duas variaveis
console.log(a,b); 

///FIRST PART OF SECTION (Desctructing Arrays)
const arr = ['Jonass', '1234', 'Californication'];

//pulando o segundo valor da array
let [myName, , myHouse] = arr;
console.log(arr);
console.log(myName, myHouse);

[myHouse, myName] = [myName, myHouse];
console.log(myName, myHouse);

//definindo valores
const [a, b, c = 1] = [8, 9];
console.log(a, b, c);
*/
