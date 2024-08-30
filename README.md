# Feedback App

## Made with Create React App

+ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

+ In the project directory, you can run:

#### `npm start`

+ Runs the app in the development mode.\
+ Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
+ The page will reload when you make changes.\
+ You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

+ Builds the app for production to the `build` folder.\
+ It correctly bundles React in production mode and optimizes the build for the best performance.
+ The build is minified and the filenames include the hashes.\
+ Your app is ready to be deployed!
+ See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Flow Of Creation of Feedback App:
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '18px', 'fontFamily': 'Algerian' , 'primaryBorderColor': 'blue' , 'background' : 'purple', 'mainBkg': 'pink'}}}%%
flowchart TD
   1[\Project Starting/]
   -.-> 2[\Go shopping/]
   -.-> 3[\Go shopping/]
   -.-> 4[\Go shopping/]
   -.-> 5
    5(Card component made to make a styled component Card
   instead of using card class,
    now can use card in which we want to apply card effect) --> B
    B{{Making conditional style and class to apply dark theme effect}}
    B --> C{{Creating Delete Feedback option using an icon, 
    to delete we are using, filter method of array,
    and prop drilling to pass state from components to main app for now,
    later will use Context API}}
     --> D(Now we are making feedback stats component which will tell
     how many feedback are there and all)
     --> E(Creating Forms to add Feedback with rating)
     --> F{{Creating Cusutom Button - 
     which is only enabled to send after 10 characters input}}
     --> G[Real time Validation
     that button should be disabled by default and 
     should be enabled after 10 characters present and output this Warning also]
     --> M(Rating Select Component)
     --> N{{Adding feedback to main list}}
     --> O{{Adding animation using library Framer Motion}}
     --> P{{Creating routes to ABOUT Page }}
     --> Q{{Created a Context and Provider }}
     --> R{{Used Context in feedback list and stats to show from Feedback context }}
     --> S{{Need to move functions Addfeedback and deleteFeedback in Context }}
     --> T{{Adding Edit Feedback Feature }}
     --> U{{now showing selected feedback in Writing bar to edit it }}
     --> V{{now adding Update function which we will apply on editFeedback }}
```

