/**
 * Created by Gagan on 05-01-2017.
 */
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//tell node where to see the public resource
app.use(express.static(__dirname + '/public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

//configure instagram app
ig.use({
   access_token: '2709394903.1677ed0.f39529f721104f04b6fc9b66fb948c62'
});

//set the routes
app.get('/', function (req, res) {
   ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
      console.log('in user self media recent');
      res.render('pages/index', {grams: medias});
   });
});

app.listen(9000);
console.log('App start');
