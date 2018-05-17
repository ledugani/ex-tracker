// Create function that hides unselected options
const filterLocationsByTOD = () => {
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

// Create a function that filters results based on keyword searched
// const searchResults = () => {
//   $('#submit-btn').on('click', () => {
//     const search = $('#inputField').val();
//     const panels = $('#locations .panel');
//     for (let i = 0; i < panels; i++) {

//       // if (panels[i] === search) {
//       //   panels[i].removeClass('selected');
//       //   $('#locations .selected').hide;
//       // }
//     }
//   });
// };

jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const keyPress = () => {
  $('#inputField').keypress((e) => {
    const search = $('#inputField').val();
    if (e.keyCode === 13) {
      $('.locationcard').not($(`:icontains(${search})`)).hide();
      $('#inputField').val('');
    } else {
      $('#submit-btn').on('click', () => {
        $('.locationcard').not($(`:icontains(${search})`)).hide();
        $('#inputField').val('');
      });
    }
  });
};

const bindEvents = () => {
  filterLocationsByTOD();
  keyPress();
};

module.exports = bindEvents;
