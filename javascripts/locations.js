const loadLocations = (successFunction, errorFunction) => {
  jQuery.get('../db/locations.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = loadLocations;
