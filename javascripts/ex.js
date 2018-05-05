const loadExInfo = (successFunction, errorFunction) => {
  jQuery.get('../db/ex.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = loadExInfo;
