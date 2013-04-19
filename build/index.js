var fs = require('fs')
  , hogan = require('hogan.js');

//compile the layout
var layout = fs.readFileSync(__dirname + '/../templates/layout.mustache', 'utf-8');
layout = hogan.compile(layout, {});

//get pages list
var pages = fs.readdirSync(__dirname + '/../templates/pages/');

//generate each page
pages.forEach(function (name) {
  //load page source
  var page = fs.readFileSync(__dirname  + '/../templates/pages/' + name, 'utf-8');
  var context = {};
  
  page = hogan.compile(page, {});
  page = layout.render(context, {
    body: page
  });
  console.log(' ✔ finished building "'+ name.replace(/mustache$/, 'html') +'"');

  fs.writeFileSync(__dirname + '/../public/' + name.replace(/mustache$/, 'html'), page, 'utf-8');
});