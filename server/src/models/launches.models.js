const launches = new Map();

let latestFlightNumber = 100;

const initialLaunch = {
  flightNumber: 100,
  mission: '',
  rocket: '',
  launchDate: new Date('December 27, 2030'),
  target: '',
  customer: ['ztm', 'nasa'],
  upcoming: true,
  success: true,
}

launches.set(initialLaunch.flightNumber, initialLaunch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunches(launch){
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ['Zero to Mastery', 'NASA'],
      flightNumber: latestFlightNumber,
    }));
}


module.exports = {
  getAllLaunches,
  addNewLaunches,
}