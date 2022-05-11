#!/usr/bin/env node
/* eslint-disable no-undef */
//  const inquirer = require('inquirer');
const { mdLinks } = require('../index.js');
const { uniqueLinks, totalStats, brokenStats } = require('./stats');

// process.argv[0] == "path to node"
// process.argv[1] == "path to the js file"  
// process.argv[2] == "firstarg"

const options = {
    validate: false
  };

  // The slice starting at 2 will discard the "path to node" and "path to the js file"
  // and return everything else that was typed on the command line.
  const args = process.argv.slice(2);
  
  const path = process.argv[2]; 
  const optionEnter = process.argv[3];
  const optionEnterExtra = process.argv[4];
  
  if (optionEnter === '--stats' && optionEnterExtra === '--validate' || optionEnter === '--validate' && optionEnterExtra === '--stats') {
    mdLinks(path, options).then(link => console.log(`
      Total : ${totalStats.length}
      Unique: ${uniqueLinks(link)}
      Broken: ${brokenStats(link)}

   `)).catch(err => console.log(err));

  } else if (args.length === 1) {
      options.validate = false;
      mdLinks(path, options)
        .then(link => link.forEach((links) => console.log(` 
          ${links.href}  ${links.text}  `)))

        .catch(err => console.log(err)); 

  } else if (optionEnter === '--validate' || optionEnter === '-v') {
      options.validate = true;
      mdLinks(path, options)
        .then(link => link.forEach((linkMd) => console.log(` 
          ${linkMd.href}  ${linkMd.text} ${linkMd.status} ${linkMd.message}`)))
        
        .catch(err => console.log(err));

  } else if (optionEnter === '--stats' || optionEnter === '-s') {
      mdLinks(path, options).then(link => console.log(`
        Total: ${totalStats.length}
        Unique: ${uniqueLinks(link)}
        
     `)).catch(err => console.log(err));
  }