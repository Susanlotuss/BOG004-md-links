/* eslint-disable no-undef */
const { mdLinks } = require('./index.js');
const { uniqueLinks, totalStats, brokenStats } = require('./stats');

const options = {
    validate: false,
  };

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
          Href: ${links.href}  
          Text: ${links.text}  `)))

        .catch(err => console.log(err)); 

  } else if (optionEnter === '--validate' || optionEnter === '-v') {
      options.validate = true;
      mdLinks(path, options)
        .then(link => link.forEach((linkMd) => console.log(` 
          Href: ${linkMd.href}  
          Text: ${linkMd.text} 
          Status: ${linkMd.status} 
          Status Message: ${linkMd.message}`)))
        
        .catch(err => console.log(err));

  } else if (optionEnter === '--stats' || optionEnter === '-s') {
      mdLinks(path, options).then(link => console.log(`
        Total: ${totalStats.length}
        Unique: ${uniqueLinks(link)}
        
     `)).catch(err => console.log(err));
  }