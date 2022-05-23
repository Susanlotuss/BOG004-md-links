"use strict";

const fetch = require('node-fetch');

const validateLinksFiles = (contentLinks) => {  
    const linksFound = contentLinks.map((linksOn) => {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        fetch(linksOn.href)
          .then(response => {

              if (response.status >= 200 && response.status < 400) {
                linksOn.status = response.status;
                linksOn.message = response.statusText; 
              resolve(linksOn);            
            } else {
                linksOn.status = response.status;
                linksOn.message = 'Fail'; 
              resolve(linksOn); 
            }
          // eslint-disable-next-line no-unused-vars
          }).catch(error => {
            linksOn.status = '';
            linksOn.message = 'Not Found';
            resolve(linksOn);
          });
      });
    });

    return Promise.all(linksFound);
  };

  module.exports = { validateLinksFiles }