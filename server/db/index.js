// require each of your models here...
const db = require('./db');
const Album = require('./album');
const Artist = require('./artist');
const Song = require('./song');

// ...and give them some nice associations here!
Artist.hasMany(Album);
Album.belongsTo(Artist);// artistId
Artist.hasMany(Song);
Song.belongsTo(Artist); // artistId
Album.hasMany(Song);
Song.belongsTo(Album);  // albumId

// Include your models in your module.exports as well!
// The seed file expects to find them there!
module.exports = { db, Album, Artist, Song }
