'use strict';

const logger = require('../utils/logger');
const bookmarkCollection = require('../models/bookmark-store');

const bookmark = {
  index(request, response) {
    const bookid = request.params.id;
    logger.debug('bookmark id = ', bookid);
    const viewData = {
      title: 'Bookmarks',
      bookmark: bookmarkCollection.getBookmark(bookid),
    };
    response.render('bookmarks', viewData);
  },
  
  deleteLink(request, response) {
    const bookmarkId = request.params.id;
    const mybookmark = request.params.linkid;
    logger.debug(`Deleting Song ${mybookmark} from Playlist ${bookmarkId}`);
    bookmarkCollection.removeLink(bookmarkId, mybookmark);
    response.redirect('/bookmark/' + bookmarkId);
  },
  

};

 

module.exports = bookmark;