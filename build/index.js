var fs = require('fs')
  , jade = require('jade');

//get pages list
var pages = fs.readdirSync(__dirname + '/../templates/pages/');

//generate each page
pages.forEach(function (name) {
  //load page source
  var path = __dirname  + '/../templates/pages/' + name;
  var page = fs.readFileSync(path, 'utf-8');
  
  page = jade.compile(page, { filename: path })();
  console.log(' ✔ finished building "'+ name.replace(/jade$/, 'html') +'"');

  fs.writeFileSync(__dirname + '/../public/' + name.replace(/jade$/, 'html'), page, 'utf-8');
});