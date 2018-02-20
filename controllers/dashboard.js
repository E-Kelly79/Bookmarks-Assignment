'use strict';

const logger = require('../utils/logger');

const myBookmarks = require('../models/bookmark-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmarks: myBookmarks.getAllBookmarks(),
    };
    logger.info('about to render', myBookmarks.getAllBookmarks());
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
