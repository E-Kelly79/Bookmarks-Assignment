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
  
//   deleteSong(request, response) {
//     const playlistId = request.params.id;
//     const songId = request.params.songid;
//     logger.debug(`Deleting Song ${songId} from Playlist ${playlistId}`);
//     playlistStore.removeSong(playlistId, songId);
//     response.redirect('/playlist/' + playlistId);
//   },
  

};

 

module.exports = bookmark;