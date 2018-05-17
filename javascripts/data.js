const loadLocations = require('./locations');
const loadEx = require('./ex');
const domStrings = require('./dom');
const bindEvents = require('./events');

const initializer = () => {
  loadEx().then((data) => {
    $('#container').append(domStrings.writeEx(data.exes));
  }).catch((error) => {
    console.error('error!', error);
  });

  loadLocations().then((data) => {
    $('#locations').append(domStrings.writeLocations(data.locations));
  }).catch((error) => {
    console.error('error!', error);
  });
  bindEvents();
};

module.exports = initializer;
