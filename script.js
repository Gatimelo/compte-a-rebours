console.log('bot is starting');
let Twit = require('twit');

let config = require('./config');
let T = new Twit(config);

let time = 20*60;
let id;
let status = "*Bip Bop* Je suis un robot, je lance ce compte à rebours à partir de 100 000. Charles  s'est donné le défi de détenir plus d'un million d'euros sur son compte avant que j'arrive à 0. \\n\\n (j'enlève 1 toutes les 20 minutes)";
let status_string = status;

let constructorL1Start = "//         Compte à Rebours        ";
let constructorL1End = "\\\\\n";
let constructorL2Start = "\\\\";
let constructorL2End = "";

T.post('statuses/update', { status: status}, function(err, data, response) {
  status = 100000;
  id = data.id_str;
  status_string = status.toString();
  console.log("initialized");
})

setInterval(twentyMinutes, 1000*time);

function twentyMinutes() {
  T.post('statuses/update', { status: status }, function(err, data, response) {

    id = data.id_str;
    console.log('worked ' + status);
    status--;
    status_string = status.toString();
  })
  let nb = (34 - status_string.length%2 - status_string.length)/2
  for (let tmp = nb ; tmp>0 ; tmp--) {
    constructorL2Start += space;
  }
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



// let nombre = 1;
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
//   // let tweets = data.statuses;
//   // for (let i = 0; i < tweets.length; i++) {
//   //   console.log(tweets[i].text);
//   // }
//   console.log("wokk");
//   console.log(err);
// }
