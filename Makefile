HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

#
# BUILD THE SITE
#
build:
	@echo "${HR}\n"
	@echo "Starting to build website... beep boop..."
	
	@rm -f -r public/*
	@echo " ✔ cleared the public folder"
	
	@./node_modules/.bin/jshint build/*.js --config .jshint
	@./node_modules/.bin/jshint preview/*.js --config .jshint
	@echo " ✔ finished linting with jshint"
	
	@node build
	
	@mkdir -p public/assets/
	@cp -r assets/* public/assets/
	@echo " ✔ copied assets"
	
	@echo "Finished building website... boop beep..."
	@echo "\n${HR}"

#
# MAKE CLEAN
#
clean:
	@rm -f -r public/*
	@echo " ✔ Cleared the public folder"

#
# MAKE PREVIEW
#
start:
	@node preview/server.js &
	@echo " ✔ Started server... beep boop..."
	@echo " - run 'make stop' to quit"
	@open 'http://localhost:1138/'

#
# STOP PREVIEW
#
stop:
	@kill -9 `cat preview/.pid`
	@rm preview/.pid
	@echo " ✔ Stopped the server... boop beep..."


.PHONY: build preview stop