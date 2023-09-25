# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs the app on yarn package manager

### `Important`

**<span style="color:red">unfortunately the JSON schema that gets returned from the api is not consistent to what it was when I first developed the app so there a many bugs that needs to be fixed. Although there inst any changes in teh documentation.</span>**

**<span style="color:red">another important point is that the search results don't show the similar movies/TV shows to the search term because the api doesn't return that data anymore, Although the api documentation says it doest mention that anymore .</span>**

add a file on the root folder and name it .env \
create a variable called REACT_APP_API_KEY and assign the API key from OMDB API website (https://www.omdbapi.com/)

REACT_APP_API_KEY = API_KEY_SECRET_HERE

and then yarn start 
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## Documentation 

First I took the mockup image the divided it by components. 
Then I build 3 different components (Header,Result,ResultList). 
Since I need to move the state between two child components. 
I am using redux as a state management tool.

Tried material UI but in my opinion its a bit too much for this kind of application. \

Created three global states on redux to store the search api and the individual title api and the watchlist 
and used redux hooks to attach it to the components to run async functions 
also created the CLEAR_DATA action type to reset the redux store to remove data.

Added  multi range slider from [Building a Multi-Range Slider in React from scratch](https://dev.to/sandra_lewis/building-a-multi-range-slider-in-react-from-scratch-4dl1) and input type radio to the header component so as to call the search api with those filters.
Also added react-infinite-scroll-component from yarn package manager to trigger events
when a user scrolls to the bottom of the list.

