const loadLocations = require('./locations');
const loadEx = require('./ex');
const domStrings = require('./dom');

const whenExLoads = (data) => {
  $('#container').append(domStrings.writeEx(data));
};

const whenLocationsLoad = (data) => {
  $('#locations').append(domStrings.writeLocations(data.locations));
};

const ifErrorOccurs = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadEx(whenExLoads, ifErrorOccurs);
  loadLocations(whenLocationsLoad, ifErrorOccurs);
};

module.exports = initializer;
