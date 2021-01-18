# Mad Devs

> Mad Devs is a full stack team for development and administration of IT projects. We specialize in projects requiring the individual technical solutions.

## Code coverage with tests
![Coverage statements](client/static/badge-statements.svg) 
![Coverage branches](client/static/badge-branches.svg)
![Coverage functions](client/static/badge-functions.svg)
![Coverage lines](client/static/badge-lines.svg)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deploy to the production server 

1. In file `server/routes/index.js`, on lines 47 and 64, replace email from current, to `req.body.variables.emailTo`

2. Create pull request from new-develop to master. If all checks passed successfully, you can merge new-develop to master

3. After deploy, set old test email for staging in file `server/routes/index.js`
