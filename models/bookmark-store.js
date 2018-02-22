'use strict';
const _ = require('lodash');
const logger = require('../utils/logger');

const bookmarkStore = {
  
  bookmarksCollection: require('./bookmark-store.json').myBookmarkCollection,
  
  getAllBookmarks(){
    return this.bookmarksCollection;
  },
  
  getBookmark(id){
    return _.find(this.bookmarksCollection, {id:id});
  },
  
  removeLink(id, bookid){
   const link = this.getBookmark(id);
    _.remove(this.bookmark.link, {id: bookid});
  },
  
  removeBookmark(id){
    _.remove(this.bookmarksCollection, {id:id});
  }

};

module.exports = bookmarkStore;