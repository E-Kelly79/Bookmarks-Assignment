'use strict';

const express = require('express');
const router = express.Router();

const start     =require('./controllers/start.js');
const dashboard =require('./controllers/dashboard.js');
const about     =require('./controllers/about.js');
const bookmark  =require('./controllers/bookmark.js');
const accounts  =require('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/dashboard/deletebookmark/:id', dashboard.deleteBookmark);
router.post('/dashboard/addBookCollections', dashboard.addBookCollection);
router.post('/dashboard/addBookCollections', dashboard.uploadPicture);

router.get('/bookmark/:id', bookmark.index);
router.get('/bookmark/:id/deletelink/:linkid', bookmark.deleteLink);
router.post('/bookmark/:id/addbookmark', bookmark.addBookmark);

router.get('/about', about.index);

router.post('/about/addcomment', about.addComment);






module.exports = router;
