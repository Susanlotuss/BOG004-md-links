const { validateLinksFiles } = require('./validate')

const uniqueLinks = (contentLinks) => {
    return new Set(contentLinks.map((links) => links.href)).size;
  };

const totalStats = (contentLinks) => {
    return contentLinks.length
};

const brokenStats = (contentLinks) => {
    return contentLinks.filter(link => link.status >= 400).length;
};

module.exports = { uniqueLinks, totalStats, brokenStats }