/* eslint-disable no-undef */
const { uniqueLinks, totalStats, brokenStats } = require('../src/controller/stats');

const linksListed = [
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

  describe('stats', () => {

    it('should return the total of links', () => {
      expect(totalStats(linksListed)).toBe(3);
    });

    it('should return number of unique links', () => {
      expect(uniqueLinks(linksListed)).toBe(3);
    });
    
    it('should return number of broken links', () => {
      expect(brokenStats(linksListed)).toBe(1);
    });
  });