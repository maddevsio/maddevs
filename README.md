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

## Instructions for working with video files

> For work with AWS S3 we use [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html).

``` bash
# install awscli 
$ pip install awscli --upgrade --user
$ aws --version
aws-cli/1.16.161

# install awscli using bundle
$ curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip" \ && unzip awscli-bundle.zip \ && sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws \ && rm -rf awscli-bundle*

# authorization
$ aws configure
AWS Access Key ID: Key
AWS Secret Access Key: Key
Default region name: us-west-1
Default output format: json

# view files in the bucket
$ aws s3 ls s3://maddevsio-videos/

# delete video
$ aws s3 rm s3://maddevsio-videos/main.ef19480.mp4

# upload all videos from the catalog in Bucket with read permission set
$ aws s3 sync --acl public-read ./videos s3://maddevsio-videos/

# upload a single file in bucket with read permissions set
$ aws s3 cp --acl public-read ./videos/main.ef19480.mp4 s3://maddevsio-videos/
```
For get access keys write merynes345@gmail.com

## Errors

If you get this errors, please create `.env` file and set vars.

Example `.env` var can you see in [.env.example](./.env.example) file

```bash
 FATAL  Cannot read property 'replace' of undefined                                                                                                                                        14:43:55

  at ModuleContainer.install (node_modules/@nuxtjs/prismic/src/index.js:16:33)
  at ModuleContainer.addModule (node_modules/@nuxt/core/dist/core.js:235:34)
  at promise.then (node_modules/@nuxt/utils/dist/utils.js:1859:43)
  at process._tickCallback (internal/process/next_tick.js:68:7)
  at Function.Module.runMain (internal/modules/cjs/loader.js:834:11)
  at startup (internal/bootstrap/node.js:283:19)
  at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)


   ╭────────────────────────────────────────────────────────────╮
   │                                                            │
   │   ✖ Nuxt Fatal Error                                       │
   │                                                            │
   │   TypeError: Cannot read property 'replace' of undefined   │
   │                                                            │
   ╰────────────────────────────────────────────────────────────╯

npm ERR! code 1
npm ERR! path /home/denisoed/projects/maddevs
npm ERR! command failed
npm ERR! command sh -c nuxt
```