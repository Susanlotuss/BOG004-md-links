"use strict";

const fetch = require('node-fetch');

const validateLinksFiles = (contentLinks) => {  
    const linksFound = contentLinks.map((linksOn) => {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        fetch(linksOn.href)
          .then(response => {

              // HTTP: Respuestas satisfactorias 200-299, redirecciones 300-399, errores de cliente 400+
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
    
    // devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, 
    // o rechaza la petición si la primera promesa es rechazada.
    return Promise.all(linksFound);
  };

  module.exports = { validateLinksFiles }