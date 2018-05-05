const loadLocations = require('./locations');
const writeLocations = require('./dom');

const whenPageLoads = (data) => {
  $('#container').append(writeLocations(data.locations));
};

const ifErrorOccurs = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadLocations(whenPageLoads, ifErrorOccurs);
};

module.exports = initializer;
