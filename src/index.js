const {
  pathIsAbsolute, 
  convertRelativeToAbsolute,
  getMDFiles, 
  getMDLinks
} = require ('./controller/path');

const { validateLinksFiles } = require ('./controller/validate');

const mdLinks = (path, options) => {
  let pathAbsolute; 
  if (!pathIsAbsolute(path)) {
    pathAbsolute = convertRelativeToAbsolute(path); 
  } else {
    pathAbsolute = path; 
  }
  return new Promise((resolve) => {
    if (!options.validate) {
      resolve(getMDLinks(getMDFiles(pathAbsolute)));
    } if (options.validate) {
      resolve(validateLinksFiles(getMDLinks(getMDFiles(pathAbsolute))));
    } 
  });
};
// console.log(mdLinks(process.argv[2], {validate: false}))
module.exports = { mdLinks }