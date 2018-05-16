// Create function that hides unselected options
const filterLocations = () => {
  $('#morning').on('click', () => {
    $('#locations #Afternoon').toggle();
    $('#locations #Night').toggle();
  });
  $('#afternoon').on('click', () => {
    $('#locations #Morning').toggle();
    $('#locations #Night').toggle();
  });
  $('#night').on('click', () => {
    $('#locations #Afternoon').toggle();
    $('#locations #Morning').toggle();
  });
};

module.exports = filterLocations;
