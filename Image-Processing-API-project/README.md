//Instructions to access endpoints
//Kindly provide the image name with width and height parameters between 50 to 2000 as query string in the url
//The original images and labels are provided in the Thumbs folder

// For example:

local/host:3000/api?name=fjord&width=500&height=200


//scripts to build, test and start my application
"scripts": {
    "build": "npx tsc",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine",
    "start": "nodemon src/index.ts"
  }

  //both endpoint and middleware tests are app and resizer, respectively
  //testing endpoint for response status
  //testing resizer to evaluate expectation to be true
