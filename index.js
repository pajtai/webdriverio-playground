'use strict';

var webdriverio = require('webdriverio');

var options = require('./wdio.conf.js');

var client = webdriverio.remote(options);

