const writeLocations = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="panel panel-default col-md-4">`;
    domString +=   `<div class="panel-heading">`;
    domString +=     `<h3 class="panel-title text-center">${location.name}</h3>`;
    domString +=         `</div>`;
    domString +=         `<div class="panel-body text-center">`;
    domString +=             `<img src="${location.locationImg}">`;
    domString +=             `<p>${location.locationAddress}</p>`;
    domString +=         `</div>`;
    domString +=         `<div class="panel-footer text-center">${location.timeOfDay}</div>`;
    domString +=     `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeLocations;
