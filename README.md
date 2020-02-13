# React Login Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

To install dependencies, run `yarn install`

To Start the app, run `yarn start`, this will start 2 servers:

- Dev API Proxy
- Create React App client

Login:

1. Enter Credentials:
  Username: joe90@supermarionation.com
  Password: <anything you want>
2. Click submit button, you should be taken to the map

You should be able to move around the map, turn on/off layers and click on features displayed to get metadata.


The client forwards API requests to the proxy API, which can be configured to more easily return error responses than a real API can.

To run End-to-End tests, run `yarn e2e`. This will start up cypress, so tests can be run locally.

I have 2 example types of tests:

- traditional
- cucumber feature/steps (via plugin)

Both types should be compared, which is a little unfair as they are not like for like. It is however, a starting point and proof of each type working.
