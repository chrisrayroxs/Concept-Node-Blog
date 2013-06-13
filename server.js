// server.js

//define prerequisites
var
  express = require('express'),
  app     = express(),
  poet    = require('poet')( app ),
  port = 3000;

//initialize poet interface
poet
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();

//set app attributes
app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ) );
app.use( app.router );

//another comment

//direct all traffic from port number to our req and res interfaces
app.get( '/', function ( req, res ) { res.render( 'index' ); });
app.listen( port );
console.log('Node server is up on ', port);