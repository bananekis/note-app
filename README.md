# Note app using react-router, firebase & redux.
## Description
Note app is an app where you can create, edit, filter, delete and search notes by coresponding `tag`. State is handled mainly by Redux.
In order to keep the state saved in the localstorage I used `redux persist` library which uses a special build-in action types that are called `REHYDRATE`.
These actions can look at what was stored in the previous state and `rehydrate` it in order to keep the state as what it was before. Additionaly I added `firebase Auth` that
uses google auth in order to authentificate the user.

## Edit
Page where you can edit and save particular note

## Create
Abbility to create a note via the provided formular

## Search-bar
Filter notes in-time

## Tags
Special page where you can filter by note tags

# Note
You must use your own firebase API in and replace .env.sample with corresponding values.

## Available scripts

> In the project directory, you can run:

### `npm run`

+ Runs the app in the development mode.\

### `npm test`

+ Launches the test runner in the interactive watch mode.\

### `npm build`

+ Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm eject`

+ This command will remove the single build dependency from your project.
