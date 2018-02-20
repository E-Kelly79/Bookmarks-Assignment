'use strict';

const logger = require('../utils/logger');

const sonatas = require('../models/bookmark-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmarks: sonatas,
    };
    logger.info('about to render', sonatas);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
