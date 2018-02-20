'use strict';

const logger = require('../utils/logger');
const bookmark = {
    bookmarksCollection: require('./bookmark-store.json').myBookmarkCollection,
    getAllBookmarks(){
     return this.bookmarksCollection;
    },
  
  
  
  
};



module.exports = bookmark;