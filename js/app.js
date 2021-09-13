'use strict';

// Constantes
const WORK_HOURS = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

// Datos
let myTeam = [
  {
    name: 'María',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Pedro',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Esther',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Marcos',
    availability: new Array(8).fill(true),
  },
];

// Functions
let getRandomBoolean = () => {
  let number = Math.random();
  let availableHour = '';

  if (number < 0.5) {
    availableHour = 'Yes';
  } else {
    availableHour = 'No';
  }

  return availableHour;
};

let createCalendar = () => {
  for (let x = 0; x < WORK_HOURS.length; x++) {
    let calendar;
    let yesOrNo = getRandomBoolean();

    if (yesOrNo === 'Yes') {
      calendar =
        WORK_HOURS[x] + ' ' + yesOrNo + ' - Esta disponible en este horario';
      console.log(calendar);
    } else if (yesOrNo === 'No') {
      calendar =
        WORK_HOURS[x] + ' ' + yesOrNo + ' - No esta disponible en este horario';
      console.log(calendar);
    }
  }
};

let getRandomAvailability = () => {
  for (let i = 0; i < myTeam.length; i++) {
    for (let j = 0; j < myTeam[i].availability.length; j++) {
      let newAvailable = getRandomBoolean();
      myTeam[i].availability[j] = newAvailable;
    }
    console.log('Disponibilidad de: ' + myTeam[i].name);
    createCalendar();
  }

  return myTeam;
};
getRandomAvailability();
