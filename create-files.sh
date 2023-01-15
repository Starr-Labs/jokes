#!/bin/bash

# create root directory
mkdir jokes
cd jokes

# create public directory
mkdir public

# create index.html in public directory
echo "<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'>
    <title>My App</title>
  </head>
  <body>
    <div id='root'></div>
    <script src='/static/js/bundle.js'></script>
  </body>
</html>" > public/index.html

# create src directory
mkdir src

# create index.js in src directory
echo "import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));" > src/index.js

# create App.js in src directory
touch src/App.js

# create package.json
echo "{
  \"name\": \"my-app\",
  \"version\": \"1.0.0\",
  \"private\": true,
  \"dependencies\": {
    \"react\": \"^17.0.1\",
    \"react-dom\": \"^17.0.1\",
    \"react-scripts\": \"4.0.3\"
  },
  \"scripts\": {
    \"start\": \"react-scripts start\",
    \"build\": \"react-scripts build\",
    \"test\": \"react-scripts test\",
    \"eject\": \"react-scripts eject\"
  },
  \"eslintConfig\": {
    \"extends\": [
      \"react-app\",
      \"react-app/jest\"
    ]
  },
  \"browserslist\": {
    \"production\": [
      \">0.2%\",
      \"not dead\",
      \"not op_mini all\"
    ],
    \"development\": [
      \"last 1 chrome version\",
      \"last 1 firefox version\",
      \"last 1 safari version\"
    ]
  }
}" > package.json
