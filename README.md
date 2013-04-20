Flatly
=============

It's a small, static website generator.

Sometimes I make super basic websites and it sucks to use PHP (*or other server side languages*) just to do things like:

- page templates

Technology
------------

Made with Node.js and using `make` to run the build.

- jade
- jshint
- connect
- watchr

Also includes Bootstrap and jQuery. The `Makefile` was inspired by the Bootstrap project.


Installation
------------

 1. Clone project (barbarians can download and unzip)
 2. Install dependencies with `$ [sudo] npm install`

Usage
------------
 - Edit files in `/templates` and `/assets`
 - Build site via `$ make`
 - Expose `/public` files to the world

Note: All files or directories in the `/assets` directory will be copied to `/public/assests` during the build. 

**Future Ideas:**

- Maybe we could minify and/or optimize assets during the build.
- It might be cool to add a `$ make upload` feature to publish via FTP.

Live Preview
------------
I used `connect` and `watchr` to create a live preview mode. During live preview you can make changes to files in `/templates` or `/assets` and `watchr` will automatically rebuild the site for you.

 - Run `$ make start`
 - Then visit `http://localhost:1138/`
 - Make changes and simply refresh your browser
 - Run `$ make stop` to stop the server

R2D2 Beep Boop
------------

Made using the force by [@jedireza](https://twitter.com/jedireza).

&copy; 2013 Reza Akhavan <<reza@akhavan.me>>

(The MIT License)