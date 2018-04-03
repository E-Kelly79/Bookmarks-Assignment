'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');

const myBookmarks = require('../models/bookmark-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmark: myBookmarks.getAllBookmarks(),
    };
    logger.info('about to render', myBookmarks.getAllBookmarks());
    response.render('dashboard', viewData);
  },
  
  addBookCollection(request, response){
    const newBook ={
      id: uuid(),
      title:request.body.title,
      bookmarks: [],
    };
    myBookmarks.addBookCollection(newBook);
    response.redirect('/dashboard');
  },
  
  deleteBookmark(request, response){
   const bookid = request.params.id;
    //logger.debug('Deleting BookMark ${bookid}');
    myBookmarks.removeBookmark(bookid);
    response.redirect('/dashboard');
  }
};

module.exports = dashboard;
