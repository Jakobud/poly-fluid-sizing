const path = require('node:path');
const sassTrue = require('sass-true');

sassTrue.runSass({ describe, it }, path.join(__dirname, 'poly-fluid-sizing.spec.scss'));
sassTrue.runSass({ describe, it }, path.join(__dirname, 'list-remove.spec.scss'));
sassTrue.runSass({ describe, it }, path.join(__dirname, 'list-sort.spec.scss'));
sassTrue.runSass({ describe, it }, path.join(__dirname, 'map-sort.spec.scss'));
sassTrue.runSass({ describe, it }, path.join(__dirname, 'linear-interpolation.spec.scss'));
