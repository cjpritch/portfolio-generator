// Required statement to use file system module 
const fs = require('fs');

const generatePage = require('./src/page-template.js')

// Holds user command line arguments
const profileDataArgs = process.argv.slice(2);

// Store arguments in variables 
const [name, github] = profileDataArgs;

// Generate html file 
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log("Portfolio complete!");
});









