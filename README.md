# Contact Form
- A contact from using EJS, node.js Express, Mysql.
## Getting started 
Init the npm to kick start
```
npm init
```
Install  Express, EJS, body-parser, mysql, and nodemon like given below:
```
npm i express ejs mysql body-parser nodemon
```
After saving all the code now run your code using
```
nodemon app.js
```
- On the browser enter your localhost to see the result.
- Once you click submit button the data are inserted in your database check your terminal to know the status of your database.

To see the result change the URL as below:
Install  Express, EJS, body-parser, mysql, and nodemon like given below:
```
localhost:3000/admin
```

# Help center
## What does app.js contain?
- Connection to database
- Getting data form front end
- Rendering and passing data to route
### Note :loudspeaker:
You should add all the requried details for the database to connect such as
- localhost
- username
- password
- database
## What does lists.ejs contain?
- Once rendering is finished all the data from database  will be dsplayed in a table.
- To see the result enter the url below:
```
localhost:3000/admin
```
