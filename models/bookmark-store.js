'use strict';

const logger = require('../utils/logger');

const bookmarkStore = {
  
  bookmarksCollection: require('./bookmark-store.json').myBookmarkCollection,
  
  getAllBookmarks(){
    return this.bookmarksCollection;
  },
  
  getBookmark(id){
    return
    let foundBookmark = null;
    for(let bookmark of this.bookmarksCollection){
       if(id == bookmark.id){
           foundBookmark = bookmark;
       }
    }
    return foundBookmark;
  },

};

module.exports = bookmarkStore;