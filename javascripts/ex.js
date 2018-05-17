const loadExInfo = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject('error', error);
      });
  });
};

module.exports = loadExInfo;
