const router = require('express').Router();
const { Album, Artist, Song } = require('../db');

// connect your API routes here!
// ALBUMS PAGE
router.get('/albums', async (req, res, next) => {
    try {
        const allAlbums = await Album.findAll();
        res.send(allAlbums);
    } catch (err) { next(err) }
});

// INDIVIDUAL ALBUM PAGE BY ALBUM ID - Eager Loading
router.get('/albums/:albumId', async (req, res, next) => {
    try {
        const album = await Album.findOne({
            where: {
                id: req.params.albumId,
            },
            include: Song,
        });
        res.send(album);
    } catch (err) { next(err) }
});

module.exports = router