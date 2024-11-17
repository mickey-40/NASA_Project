const { 
  planets,
 } = require('../../models/planets.models');

function httpGetAllPlanets(req, res) {
  return res.status(200).json(planets);
};

module.exports = {
  httpGetAllPlanets,
}