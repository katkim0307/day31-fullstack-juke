const router = require('express').Router();
const { Album, Artist, Song } = require('../db');

// connect your API routes here!
// ALBUMS ROUTE
router.get('/albums', async (req, res, next) => {
    try {
        const allAlbums = await Album.findAll({
            include: [Artist],
        });
        res.send(allAlbums);
    } catch (err) { next(err) }
});

// INDIVIDUAL ALBUM ROUTE BY ALBUM ID - Eager Loading
router.get('/albums/:albumId', async (req, res, next) => {
    try {
        const album = await Album.findByPk(req.params.albumId, {
            include: [
                { model: Artist },
                {
                    model: Song,
                    where: {
                        albumId: req.params.albumId,
                    }
                }
            ],
        });
        res.send(album);
    } catch (err) { next(err) }
});

// ARTISTS ROUTE
router.get('/artists', async (req, res, next) => {
    try {
        const allArtists = await Artist.findAll({
            include: [Album],
        });
        res.send(allArtists);
    } catch (err) { next(err) }
});

router.get('/artists/:artistId', async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.artistId, {
            include: Album,
        });
        res.send(artist);
    } catch (err) { next(err) }
});

module.exports = router