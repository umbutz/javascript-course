'use strict';

/// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 4,
  price = 200 * numPassengers,
  promotion = Math.trunc(price * 0.10)
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
    promotion,
  };

  console.log(booking);
  bookings.push(booking);
};

//const bolsoText = document.querySelector('#bolsoText').textContent;
//const namesBolso = ['Bonaro', 'Bonoro', 'Bossauro'];
//if(bolsoText = 'Bolsonaro' || 'bolsonaro') { bolsoText = namesBolso[Math.trunc(Math.random() * 3)]};

createBooking('F3FU');
createBooking('F3FU', undefined, 53);
console.log(bookings) 

const voo = 'F3FU';

const confirmPassenger = {
    passageiro1: {
        name: 'Jonas', 
        id: 1676564332,
    },
}

const passageiro1 = {
    name: 'Jonas',
    id: 1676564332,
};

const checkIn = function (vooNumber, passageiro) {
    vooNumber = 'F3TU';
    passageiro.name = 'Sr(a).' + passageiro.name;

    if(passageiro.id === confirmPassenger.passageiro1.id) {
        alert('Confirmado!')
    }else {
        alert('Informações erradas')
    }
}

checkIn(voo, passageiro1);
console.log(voo);
console.log(passageiro1);

const passaporteNovo = (pessoa) => {
    pessoa.id = Math.trunc(Math.random() * 10000000000);
}

passaporteNovo(passageiro1);
console.log(passageiro1.id);

checkIn(voo, passageiro1)