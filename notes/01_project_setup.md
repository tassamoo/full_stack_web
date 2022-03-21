use NPM/node to initialize our project

- run command: npm init -y 
- change main variable from index.js to server.js
- install dependency using ommand: npm i express - ejs express-ejs-layouts
- run npm i --save-dev nodemon
- create scrits in package.json: 
- start: node server.js
- devStart: nodemon server.js

configure server.js check server.js comment
run command npm run devStart
open localhost:3000 to check the website


setup MVC(Model View Controller) to layout our application 
- using routes directory as controller
- using models directory for databases
- using views directory to contain all layout that we created

create index.js inside routes dir and set it up, check index.js comments.
integrate our route with views by creating layout.ejs. Check the comment in file layout.ejs.

connect to database using mongoose in server.js. check comment inside the file.

create .gitignore to exclude nodemoules and .env and push it to github

deploy it using heroku

