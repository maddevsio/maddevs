# Mad Devs

> Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.

## Code coverage with tests
![Coverage statements](client/static/badge-statements.svg) 
![Coverage branches](client/static/badge-branches.svg)
![Coverage functions](client/static/badge-functions.svg)
![Coverage lines](client/static/badge-lines.svg)

## Requirements

### Environment variables

#### Sendpulse

Service for sending letters. Data from the forms are processed and sent to SendPulse

* NODE_SENDPULSE_API_USER_ID 
* NODE_SENDPULSE_API_KEY

#### Emails

SendPulse will send email to these emails

* NODE_EMAIL_HR
* NODE_EMAIL_CONTACT

#### Prismic

* NODE_PRISMIC_API

#### AmoCrm

Data from the forms are sent not only to SendPulse, but also to AmoCrm

* NODE_AMOCRM_URL
* NODE_AMOCRM_REDIRECT_URL
* NODE_AMOCRM_SECRET
* NODE_AMOCRM_ID
* NODE_AMOCRM_PHONE_FIELD_ID
* NODE_AMOCRM_EMAIL_FIELD_ID
* NODE_AMOCRM_RESPONSIBLE_USER_ID
* NODE_AMOCRM_SOURCE_FIELD_ID
* NODE_AMOCRM_SOURCE_FIELD_VALUE

#### Slack

Sending messages using Incoming Webhooks

* NODE_JEST_COVERAGE_SLACK_WEBHOOK_URL
* NODE_PAGESPEED_SLACK_WEBHOOK_URL

#### Googleapis

We use googlePageSpeed api to run check site speed using github actions after each merge into the new-develop or master branch

* NODE_GOOGLEAPIS_KEY

#### Mongo

Temporary tokens for the correct operation of AmoCrm are stored in mLab 

* NODE_MONGO_URL

#### Sentry

Add a link to the DNS sentry, where the errors will be sent.

* NODE_SENTRY_DSN
* NODE_SENTRY_DSN_FRONT

#### Domain

Set current domain

* NODE_DOMAIN

**All of these variables must be added to the Heroku hosting**

## Instructions for using the AWS S3

[Amazon S3](https://aws.amazon.com/s3/) is used to store video files and pictures of the site. 

### Install aws cli

> Link to official documentation https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html

``` bash
sudo apt install awscli
```

Or download zip bundle

``` bash
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip" \&& unzip awscli-bundle.zip \&& sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws \&& rm -rf awscli-bundle*
```

The result should be

``` bash
aws --version
aws-cli/1.16.161
```

### Setup

The current **AWS Access Key ID** and **AWS Secret Access Key** can be requested from Team.

```bash
aws configure
```

aws will ask for the keys to specify the settings 

``` bash
AWS Access Key ID: Key
AWS Secret Access Key: Key
Default region name: us-west-1
Default output format: json
```

Or just export the keys, in which case the access will only be in the terminal where the export is made.

``` bash
export AWS_ACCESS_KEY_ID="key"
```

``` bash
export AWS_SECRET_ACCESS_KEY="key"
```

It remains to update the environment variable and run the site.  

In the root of the project should be a file .env, where you insert the variable **NODE_S3_PUBLIC_URL** 

This variable must contain the url, which will be used to access s3 files. 

The link through which we will get pictures and videos **https://d6xkme6dcvajw.cloudfront.net/**

### Commands

Show available folders & files

``` bash
aws s3 ls s3://maddevsio/
```

Result:

``` bash
aws s3 ls s3://maddevsio/
PRE images/
PRE videos/
```

Upload folder

``` bash
aws s3 cp --acl public-read folder s3://maddevsio/folder/ --recursive
```

Rename folder

``` bash
aws s3 --recursive mv s3://maddevsio/folder/ s3://maddevsio/folder_2/
```

Remove folder

``` bash
aws s3 rm --recursive s3://maddevsio/folder/    
```

Upload file to folder

``` bash
aws s3 cp --acl public-read ./folder/name.jpg s3://maddevsio/folder/
```

Remove file

``` bash
aws s3 rm s3://maddevsio/folder/name.jpg
```

Update files

``` bash
aws s3 sync --acl public-read ./folder s3://maddevsio/folder/
```

Get file from bucket https://d6xkme6dcvajw.cloudfront.net/videos/main.ef19480.mp4

## Run project

### Install dependencies

``` bash
$ npm install # Or yarn install
```

### Serve with hot reload at localhost:3000

``` bash
$ npm run dev
```

### Build for production and launch server

``` bash
$ npm run build
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deploy to the staging server

To send changes to the staging server, you should merge your branch to the **new-develop** branch 

## Deploy to the production server

To send changes to the staging server, you should merge **new-develop** branch to **master** branch

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

