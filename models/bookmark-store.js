'use strict';
const _ = require('lodash');
const logger = require('../utils/logger');
const JsonStore = require('./json-store');

const bookmarkStore = {
  store: new JsonStore('./models/bookmark-store.json', {myBookmarkCollection: []}),
  collection: 'myBookmarkCollection',
  
  getAllBookmarks(){
    return this.store.findAll(this.collection);
  },
  
  getBookmark(id){
    return this.store.findOneBy(this.collection, {id: id});
  },
  
  addBookCollection(book){
   this.store.add(this.collection, book); 
  },
  
  removeAllBookmarks(){
    this.store.removeAll(this.collection);
  },
  
  removeBookmark(id){
    const bookmark = this.getBookmark(id);
    this.store.remove(this.collection, bookmark);
  },
  
  
  addBookmark(id, link){
    const bookmark = this.getBookmark(id);
    bookmark.bookmarks.push(link);
  },
  
  
  
  removeLink(id, linkid){
    const bookmark = this.getBookmark(id);
    const link = bookmark.bookmarks;
    _.remove(link, {id: linkid});
  },
  
  getUserBookmarks(userid){
    return this.store.findBy(this.collection, {userid: userid});
  },
  
  

};

module.exports = bookmarkStore;