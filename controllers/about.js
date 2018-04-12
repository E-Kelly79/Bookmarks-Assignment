'use strict';

const logger = require('../utils/logger');
const commentStore = require('../models/comment-store');
const accounts = require ('./accounts.js');
const uuid = require('uuid');

const about = {
  index(request, response) {
     const loggedInUser = accounts.getCurrentUser(request);  
    logger.info('about rendering');
    if(loggedInUser){
      const viewData = {
      title: 'About Bookmarks',
      comments: commentStore.getAllComments(),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };
    response.render('about', viewData);
    }else{
      response.redirect('/');
    }
  },
  
   addComment(request, response) {
    const newComment = {
      id: uuid(),
      name: request.body.name,
      comment: request.body.comment
    };
    logger.debug('Creating a new Comment', newComment);
    commentStore.addComment(newComment);
    response.redirect('/about');
  },
};

module.exports = about;
