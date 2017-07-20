# Hapi-TypeScript-Api-Starter

A simple Hapijs starter with typescript.
===================


Features
-------------
- boom
- bluebird
- hapi-auth-jwt2
- joi
- jsonwebtoken

Usage
-------------
**Clone this repository**

`git clone https://github.com/renehauck/Hapi-TypeScript-Api-Starter.git`

**Install**

`yarn install`

or

`npm install`

and start

`node index.js`


Routes
-------------
**HelloWorld Route (get)**

`http://localhost:3000/`

**Login Route (post)**

send this object:

`{password:1234,email:test@test.de}`

to this route:

`http://localhost:3000/login`

and you get a json-token.

**secure HelloWorld Route (get)**

send this token in the *Authorization*-Header to this route 

`http://localhost:3000/login`

and you have access to this secure route.

Happy coding!
------------



    
