/* eslint-disable no-undef */
const { mdLinks } = require('../src/controller/index');

// const path = process.argv[2];
// console.log(typeof mdLinks)
describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});

  it('execute mdLinks function validate false, return data', () => {
    let testPath = 'src/prueba';
    let result = [
      {
        file: "C:\\Users\\susan\\Proyectos Laboratoria\\MD Links\\BOG004-md-links\\src\\prueba\\file.md",
        href: 'https://www.pixar.com/error404',
        text: 'Pixar broken link'
      },
      {
        file: "C:\\Users\\susan\\Proyectos Laboratoria\\MD Links\\BOG004-md-links\\src\\prueba\\file.md",
        href: 'https://www.pixar.com/',
        text: 'Working pixar link'
      },
      {
        file: "C:\\Users\\susan\\Proyectos Laboratoria\\MD Links\\BOG004-md-links\\src\\prueba\\file.md",
        href: '',
        text: ''
      }
    ]
    return mdLinks(testPath, {validate: false}).then((tests) => {
      expect(tests).toEqual(result);
  })
});

  it('execute mdLinks function validate true, return data + status fail or ok + HTTP status', () => {
    let testPath = 'src/prueba';
    let result = [
      {
        file: "C:\\Users\\susan\\Proyectos Laboratoria\\MD Links\\BOG004-md-links\\src\\prueba\\file.md",
        href: 'https://www.pixar.com/error404',
        text: 'Pixar broken link',
        status: 404,
        message: 'Fail'
      },
      {
        file: "C:\\Users\\susan\\Proyectos Laboratoria\\MD Links\\BOG004-md-links\\src\\prueba\\file.md",
        href: 'https://www.pixar.com/',
        text: 'Working pixar link',
        status: 200,
        message: 'OK'
      },
      {
        file: "C:\\Users\\susan\\Proyectos Laboratoria\\MD Links\\BOG004-md-links\\src\\prueba\\file.md",
        href: '',
        text: '',
        status: '',
        message: 'Not Found'
      }
    ]
    return mdLinks(testPath, {validate: true}).then((tests) => {
      expect(tests).toEqual(result);
  })
});