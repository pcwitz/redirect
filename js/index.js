'use strict';

var redirect = require('./redirect');

var url = redirect.getParameterByName('URL');
redirect.makeHREF('redirectLink', url);
redirect.startRedirect(url, 10); //10 seconds