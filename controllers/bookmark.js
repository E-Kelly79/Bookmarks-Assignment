'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const bookmarkCollection = require('../models/bookmark-store');
const accounts = require ('./accounts.js');

const bookmark = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    const bookid = request.params.id;
    logger.debug('bookmark id = ', bookid);
    if (loggedInUser) {
      const viewData = {
        title: 'Bookmarks',
        bookmark: bookmarkCollection.getBookmark(bookid),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };
    
    response.render('bookmarks', viewData);
    }else{
      response.redirect('/');
    }
    
  },
  
  deleteLink(request, response) {
    const bookmarkId = request.params.id;
    const mybookmark = request.params.linkid;
    logger.debug(`Deleting Song ${mybookmark} from Playlist ${bookmarkId}`);
    bookmarkCollection.removeLink(bookmarkId, mybookmark);
    response.redirect('/bookmark/' + bookmarkId);
  },
  
  addBookmark(request, response){
    const bookmarkId = request.params.id;
    const bookmark = bookmarkCollection.getBookmark(bookmarkId);
    const newBookmark = {
      id: uuid(),
      title: request.body.title,
      link: request.body.link,
      theImage:request.body.image,
    };
    bookmarkCollection.addBookmark(bookmarkId, newBookmark);
    response.redirect('/bookmark/' + bookmarkId);
  },
  
  
  

};

 

module.exports = bookmark;