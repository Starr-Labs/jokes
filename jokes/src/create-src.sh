#!/bin/bash

# create index.js in src directory
echo "import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));" > src/index.js

# create App.js in src directory
touch src/App.js

# create Card.js in src directory
touch src/Card.js

# create Home.js in src directory
touch src/Home.js

# create UserSubmission.js in src directory
touch src/UserSubmission.js

#create Jokes.js in src directory
touch src/Jokes.js

#create api.js in src directory
touch src/api.js

