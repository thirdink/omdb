# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs the app on yarn package manager

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Documentation 

first I took the mockup image the divided it by components. \
Then I build 3 different components (Header,Result,ResultList). \
Since I need to move the state between two child components. \
I am using redux as a state management tool.\

Tried material UI but imo its a bit too much for this kinda of application. \
Tried the new redux toolkits but was a bit confusing so was taking abit of my time also has a lot of abstractions so I used the old react-redux with thunk. \

Created two global states on reducx to store the search api and the individual title api \
and used reudx hooks to attach it to the components to run async functions \
also created the CLEAR_DATA action type to reset the redux store to remove data.\

Added  multi range slider from [Building a Multi-Range Slider in React from scratch](https://dev.to/sandra_lewis/building-a-multi-range-slider-in-react-from-scratch-4dl1) and input type radio to the header component so as to call the search api with those filters.
Also added react-infinite-scroll-component from yarn package manager to trigger events
when a user scrolls to the bottom of the list.\

