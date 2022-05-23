const path = require('path');
const fs = require('fs'); 
const { marked } = require('marked'); 

const pathIsAbsolute = (pathEvaluate) => {
  return path.isAbsolute(pathEvaluate); 
};

const convertRelativeToAbsolute = (pathRelative) => {
  return path.resolve(pathRelative);
};

const pathIsDirectory = (pathEvaluate) => {
  return fs.lstatSync(pathEvaluate).isDirectory();
};

const pathIsFile = (pathEvaluate) => {
  return fs.lstatSync(pathEvaluate).isFile();
};

const readDirectory = (directory) => {
  return fs.readdirSync(directory); 
};

const fileIsMD = (file) => {
  return path.extname(file);
};
const readFiles = (info) => {
    return fs.readFileSync(info, 'utf8');
};

const getMDFiles = (router) => {
    let arrayMDFiles = [];
    if (pathIsFile(router) === true) {
      if (fileIsMD(router) === '.md') {
        arrayMDFiles.push(router);
      }
    }
    if (pathIsDirectory(router) === true) {
      const arrNameContent = readDirectory(router);
      arrNameContent.forEach(nameFile => {
        const newRouter = path.join(router, nameFile);
        arrayMDFiles = arrayMDFiles.concat(getMDFiles(newRouter));
      });
    }
    return arrayMDFiles; 
  };
  
const getMDLinks = (arrayMDFiles) => {
    let arrayLinks = [];
    arrayMDFiles.forEach((routerMD) => {
      const readFilesMD = readFiles(routerMD); 
      const renderer = new marked.Renderer(); 
      renderer.link = (href, ___, text) => {
        arrayLinks.push({ href, text: text.slice(0, 50), file: routerMD }); 
      };
      marked(readFilesMD, {renderer});
    }); 
       
    return arrayLinks;
  };

  module.exports = { pathIsAbsolute, convertRelativeToAbsolute, pathIsDirectory, pathIsFile, readDirectory, fileIsMD, readFiles, getMDFiles, getMDLinks };

