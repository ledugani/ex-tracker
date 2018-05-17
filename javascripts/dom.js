const writeEx = (exes) => {
  let exDomString = '';
  exes.forEach((ex) => {
    exDomString += `<div class="margin ${ex.exId}">`;
    exDomString +=  `<div class="col-sm-4">`;
    exDomString +=    `<img src="${ex.imageUrl}" id="ex">`;
    exDomString +=    `<h1>${ex.name}</h1>`;
    exDomString +=    `<p>Age: <em>${ex.age}</em></p>`;
    exDomString +=    `<p>Flaws: <em>${ex.flaws}</em></p>`;
    exDomString +=  `</div>`;
    exDomString += `</div>`;
  });
  return exDomString;
};

const writeLocations = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div id="${location.timeOfDay}" class="panel panel-default col-md-4 locationcard">`;
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

module.exports = {
  writeLocations,
  writeEx,
};
