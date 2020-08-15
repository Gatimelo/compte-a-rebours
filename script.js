console.log('bot is starting');
let Twit = require('twit');

let config = require('./config');
let T = new Twit(config);

let time = 25;
let id;
//let status = "*Bip Bop* Je suis un robot, je lance ce compte à rebours à partir de 100 000. Charles  s'est donné le défi de détenir plus d'un million d'euros sur son compte avant que j'arrive à 0. \\n\\n (j'enlève 1 toutes les 20 minutes)";
let status = "test 3 compte"
let status_string;

let line1 = "//         Compte à Rebours         \\\\\n";
let line2Start;
let line2End;
let space = " ";
let url = "\n\nhttps://twitter.com/gatimelo/status/"

/*
T.post('statuses/update', { status: status }, function(err, data, response) {
  id = data.id_str;
  console.log("initialized");
})*/

setInterval(twentyMinutes, 1000*time);

status = 10000;
status_string = status.toString();

function twentyMinutes() {
  console.log(status_string)
  console.log(status_string.length)
  line2Start = "\\\\";
  line2End = "";
  if (status_string.length%2 !== 0)
    line2Start += space;
  let nb = (34 - status_string.length%2 - status_string.length) / 2
  for (let tmp = nb; tmp > 0; tmp--) {
    line2Start += space;
    line2End += space;
  }
  line2End += "//";

  T.post('statuses/update', { status: line1 + line2Start + status_string + line2End + url + id }, function(err, data, response) {
    console.log(line1 + line2Start + status_string + line2End + url + id)
    id = data.id_str;
    console.log('worked ' + status);
    status--;
    status_string = status.toString();
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
