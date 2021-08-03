module.exports = {
  "src/**/*.{js,ts,tsx,json}": [
    "./node_modules/.bin/eslint --fix",
    "./node_modules/.bin/prettier --write",
    "yarn lint",
  ],
  'src/**/*.css': ['./node_modules/.bin/stylelint --fix', './node_modules/.bin/prettier --write'],
  'src/**/*.scss': [
    './node_modules/.bin/stylelint --syntax=scss --fix',
    './node_modules/.bin/prettier --write',
  ],
};
