'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const myBookmarks = require('../models/bookmark-store.js');
const accounts = require ('./accounts.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmark: myBookmarks.getUserBookmarks(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    logger.info('about to render', myBookmarks.getAllBookmarks());
    response.render('dashboard', viewData);
    }else{
      response.redirect('/');
    }
  },
  
  deleteBookmark(request, response){
   const bookid = request.params.id;
    logger.debug('Deleting BookMark ${bookid}');
    myBookmarks.removeBookmark(bookid);
    response.redirect('/dashboard');
  },
  
  addBookCollection(request, response){
    const loggedInUser = accounts.getCurrentUser(request);
    const newBook ={
      id: uuid(),
      userid: loggedInUser.id,
      title:request.body.title,
      theImage:request.body.image,
      bookmarks: [],
    };
    myBookmarks.addBookCollection(newBook);
    response.redirect('/dashboard');
  },
  
  uploadPicture(request, response) {
   const loggedInUser = accounts.getCurrentUser(request);
   myBookmarks.addPicture(loggedInUser.id, request.files.picture, function () {
     response.redirect('/dashboard');
   });
  },

  
  
};

module.exports = dashboard;
