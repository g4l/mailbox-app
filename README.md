## Sample Mail app with Angular 1.5

This is a single page application for managing emails and contacts.

> Note: in this test version, there is no real postal service on the server. Thus, new messages will not be sent to recipients. They will be just saved in the sent mail directory on the server.

## Demo

To see demo in your browser, please follow one of the next links and pass authorization with this login/password:

- login: `me@test.com`
- password: `qwerty`

[Demo](https://vad1m198.github.io/mailbox-app/ "Direct link")

## Installation

1. Navigate to the project directory and run: `npm install`, wait until all dependencies will be installed.

2. To compile package files execute: `npm build`. In docs folber bundle files will be present.

## Unit testing

`npm run test`

> You need to install karma globally to run tests.  `npm install karma -g`