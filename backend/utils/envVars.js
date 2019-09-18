// This file is left here simply as an example of how we might access some environmental values and settings

const path = require("path");

class EnvVars {
    static isLoaded;
    
    constructor() {
        if (!EnvVars.isLoaded) {
            process.env.PROJECT_REPO_PATH = path.resolve(__dirname) + '..\\';

            let dotPath = process.env.PROJECT_REPO_PATH + 'backend\\.env';
        
            require('dotenv').config({path: dotPath});

            EnvVars.isLoaded = true;
        }
    }
}

let envVars = new EnvVars();

// Setup:
//   .babel.rc:
//     "plugins": [
//       "@babel/plugin-proposal-class-properties"
//     ]
///  install with: npm install --save-dev @babel/plugin-proposal-class-properties

// usage: 
//   import * as envVars from './utils/envVars';
