const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: '',
  rocket: '',
  launchDate: new Date('December 27, 2030'),
  destination: '',
  customer: ['ztm', 'nasa'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}


module.exports = {
  getAllLaunches,
}