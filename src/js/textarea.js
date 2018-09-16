const $ = require('jquery');
const autoResizePlugin = require('./lib/autoresize.jquery');

autoResizePlugin($);
$('textarea').autoResize();