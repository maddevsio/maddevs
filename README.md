# Mad Devs

> Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.

## Code coverage with tests

![Coverage statements](client/static/badge-statements.svg) 
![Coverage branches](client/static/badge-branches.svg)
![Coverage functions](client/static/badge-functions.svg)
![Coverage lines](client/static/badge-lines.svg)

## Additional docs

* [How to remove link from sitemap.xml](./docs/how_to_remove_link_from_sitemap_xml.md)


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

#### Atlassian

Environment variables for atlassian authentication

* NODE_ATLASSIAN_TOKEN
* NODE_ATLASSIAN_EMAIL
* NODE_ATLASSIAN_PROJECT_KEY
* NODE_ATLASSIAN_API_URL

#### Slack

Sending messages using Incoming Webhooks

* NODE_JEST_COVERAGE_SLACK_WEBHOOK_URL
* NODE_PAGESPEED_SLACK_WEBHOOK_URL

#### Sentry

Add a link to the DNS sentry, where the errors will be sent.

* NODE_SENTRY_DSN
* NODE_SENTRY_DSN_FRONT

#### Domain

Set current domain

* NODE_DOMAIN

#### Feature Flags envs

Set current environment for feature flags

* FF_ENVIRONMENT

#### Radiator envs

* RADIATOR_AUTH_TYPE
* RADIATOR_PROJECT_ID
* RADIATOR_PRIVATE_KEY_ID
* RADIATOR_PRIVATE_KEY
* RADIATOR_CLIENT_EMAIL
* RADIATOR_CLIENT_ID
* RADIATOR_AUTH_URI
* RADIATOR_TOKEN_URI
* RADIATOR_PROVIDER_CERT_URL
* RADIATOR_CLIENT_CERT_URL
* RADIATOR_WEBHOOK_URL - slack webhook url
* RADIATOR_GOOGLEAPIS_KEY - key for google api(pagespeed)

#### Huntflow envs

Environment variables for huntflow authentication and sending applications to the huntflow vacancies

* NODE_HUNTFLOW_API_URL
* NODE_HUNTFLOW_TOKEN
* NODE_HUNTFLOW_ACCOUNT_ID
* NODE_HUNTFLOW_RESERVE_VACANCY_ID

#### Cypress tests

Cypress run e2e tests on base URL domain

* NODE_CYPRESS_BASE_URL


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

## Feature Flags

We're used feature-flags for display/hide some features on different environments.

### Create flag

For create a new feature flag, you need to open `@/featureFlags/config.js` file and add your flag into config with the following syntax:

```javascript
export const config = {
   myFeatureFlag: ['development', 'staging']
}
```

The name of your feature flag should be key in the `config`. Environments where your flag should return true should be value of your flag. It's an array of environments. At the moment we have 3 available environments:

* `development` - for local development
* `staging` - for staging(maddevs.co)
* `production` - for production(maddevs.io)

### Usage

#### with `<Feature>` component

The better option. You can simple use your feature-flag in the templates using globally registered component. Example:

```javascript
<Feature flag="myFeatureFlag">
   Some content
</Feature>
```

#### with `featureFlag()` method

Also you can use global method in your template:

```javascript
<div v-if="featureFlag('myFeatureFlag')">
   Some content
</div>
```

or in the component's code:

```javascript
   ...
   methods: {
      send() {
         if(featureFlag('myFeatureFlag')) {
            // ...do something
         }
      }
   }
   ...
```

## Seo Analyzer

Github action for checks for errors in the html DOM.

### Run

```bash
npm run seo-analyze
```

#### Valid result

```bash
 ████████████████████████████████████████ 100% | ETA: 0s | 233/233

 No any SEO defect found.
```

#### Invalid result

```bash
████████████████████████████████████████ 100% | ETA: 0s | 233/233

File: dist/case-studies/namba-food/index.html
SEO defects found: 
There are 1 <img> tag without alt attribute
```
## Radiator
We have advanced tool for collect some metrics from google analytics and google page speed and send it to our slack/telegram channels.

### Usage
For run radiator you need to execute the following command:
```bash
$ node radiator --slack
```
Radiator script will collect all needed data and send it to slack.

### Arguments
* `--slack` - use this arg for send collected data to slack
* `--channel` - use this arg for send collected data to a specific slack channel
* `--telegram` - use this arg for send collected data to telegram
* `--period` - collect data for selected period. Available values: `day`, `week`, `month`
