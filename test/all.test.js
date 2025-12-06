const path = require('node:path');
const sassTrue = require('sass-true');

sassTrue.runSass({ describe, it }, path.join(__dirname, 'poly-fluid-sizing.spec.scss'));
