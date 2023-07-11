const API_KEY = 'QQcgi2D/1uiJJWqIS8H83w==zsssgsMWSIkaWkvW'
const URL = 'https://api.api-ninjas.com/v1/cars?limit=2&model='

const $make = $('#makeBasic');
const $model = $('#modelBasic');
const $year = $('#yearBasic');

const $make1 = $('#makeSmart');
const $model1 = $('#modelSmart');
const $year1 = $('#yearSmart');

const $make2 = $('#makeSport');
const $model2 = $('#modelSport');
const $year2 = $('#yearSport');

const $make3 = $('#makeLuxury');
const $model3 = $('#modelLuxury');
const $year3 = $('#yearLuxury');

const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
  event.preventDefault();
  const userInput = $input.val();
console.log(userInput);

  $.ajax({url: URL + `${userInput}`,  headers: { 'X-Api-Key': API_KEY}})

  .then(function (data) {
    const carData = data;
    console.log(carData);
    render(carData);
  })
  .catch(function (error) {
    console.log('error:', error);
  });
}

function render(carData) {
  // Display car data for the Basic car section
  $make.text(carData[0].make);
  $model.text(carData[0].model);
  $year.text(carData[0].year);
}

  // Display car data for the Smart car section
  // $make1.text(carData[1].make);
  // $model1.text(carData[1].model);
  // $year1.text(carData[1].year);

  // Display car data for the Sports car section
  // $make2.text(carData[2].make);
  // $model2.text(carData[2].model);
  // $year2.text(carData[2].year);

   // Display car data for the Luxury car section
  // $make3.text(carData[3].make);
  // $model3.text(carData[3].model);
  // $year3.text(carData[3].year);
















// function handleGetData(event) {
//     event.preventDefault();
//     userInput = $input.val();
//     $.ajax(URL + `q=${userInput}&appid=` + API_KEY)
//       .then(function(data) {
//         carData = data
//         render(carData);
//       }, function(error) {
//         console.log('error: ', error);
//       })
//   }

