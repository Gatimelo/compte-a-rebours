console.log('bot is starting');
var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var nombre = 20*60;
var id = 1;
var status = "*Bip Bop* Je suis un robot, je lance ce compte à rebours à partir de 100 000 et je vous annonce que Charles aura minimum 1 million d'euros sur son compte avant que j'arrive à 0 \n \n (3 tweets/heure)"

T.post('statuses/update', { status: status}, function(err, data, response) {
  status = 100000;
  id = data.id_str;
  console.log("started");
})

setInterval(vingtMinutes, 1000*nombre);

function vingtMinutes() {
  T.post('statuses/update', { status: status }, function(err, data, response) {
    status--;
    var id = data.id;
    console.log('worked');
  })
}


//
// setInterval(fonct, 1000*20);
// function fonct(){
//   T.post('statuses/update', { status: status + "\n\nhttps://twitter.com/gatimelo/status/" + id }, function(err, data, response) {
//     status--;
//     id = data.id_str;
//     console.log('worked1');
//   })
// }
// function fonct(){
//   T.post('statuses/update', { status: status + "\nhttps://twitter.com/gatimelo/status/" + id }, function(err, data, response) {
//     status--;
//     id = data.id_str;
//     console.log('worked2');
//   })
// }





//
// function vingtMinutes() {
//   console.log(status);
//   status--;
// }



// var nombre = 1;
// // setInterval(hehe, 1000*1);
// function hehe() {

//
// var params = {
//   q: 'gatimelo charles',
//   count:200
// }

// T.get('search/tweets', params, gotData);
//
// function gotData(err, data, response) {
//   // var tweets = data.statuses;
//   // for (var i = 0; i < tweets.length; i++) {
//   //   console.log(tweets[i].text);
//   // }
//   console.log("wokk");
//   console.log(err);
// }
