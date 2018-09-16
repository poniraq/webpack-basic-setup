const $ = require('jquery');

let buttons = $('button');
buttons.on('mousedown', (e) => $(e.currentTarget).addClass('pressed'));
buttons.on('mouseup', (e) => $(e.currentTarget).removeClass('pressed'));