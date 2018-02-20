'use strict';

const logger = require('../utils/logger');
const bookmarkCollection = require('../models/bookmark-store.js');

const bookmark = {
  index(request, response) {
     const bookmarkId = request.params.id;
       logger.debug('Bookmark id = ',bookmarkId);
    
    const viewData = {
      title: 'Bookmark',
    };
    response.render('Bookmark', viewData);
  },
};

module.exports = bookmark;