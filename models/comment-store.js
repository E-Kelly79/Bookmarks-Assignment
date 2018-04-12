'use strict';
const _ = require('lodash');
const logger = require('../utils/logger');
const JsonStore = require('./json-store');

const commentStore = {
  store: new JsonStore('./models/comment-store.json', {commentCollection: []}),
  collection: 'commentCollection',
  
  getAllComments(){
    return this.store.findAll(this.collection);
  },
  
  getComment(id){
    return this.store.findOneBy(this.collection, {id: id});
  },
  
  addComment(comment){
   this.store.add(this.collection, comment); 
  },
  
  removeAllComments(){
    this.store.removeAll(this.collection);
  },
  
  removeComment(id){
    const comment = this.getComment(id);
    this.store.remove(this.collection, comment);
  },
  
  
//   addBookmark(id, link){
//     const bookmark = this.getBookmark(id);
//     bookmark.bookmarks.push(link);
//   },
  
  
  
//   removeLink(id, linkid){
//     const bookmark = this.getBookmark(id);
//     const link = bookmark.bookmarks;
//     _.remove(link, {id: linkid});
//   },
  
  // getUserBookmarks(userid){
  //   return this.store.findBy(this.collection, {userid: userid});
  // },
  
  

};

module.exports = commentStore;