'use strict';

const express = require('express');
const router = express.Router();

const start     =require('./controllers/start.js');
const dashboard =require('./controllers/dashboard.js');
const about     =require('./controllers/about.js');
const bookmark  =require('./controllers/bookmark.js');

router.get('/', start.index);
router.get('/about', about.index);
router.get('/dashboard', dashboard.index);
router.get('/bookmark/:id', bookmark.index);
router.get('/bookmark/:id/deletelink/:bookid', bookmark.deleteLink);
//router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);
//router.get('/dashboard/deletebookmark/:id', bookmark.deleteBookmark);


module.exports = router;
