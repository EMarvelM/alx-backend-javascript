# ES6 Basics

## Curriculum
**Short Specializations Average: 0.0%**

### 0x00. ES6 Basics

#### JavaScriptES6

- **Weight:** 1
- **Project Start:** Jun 24, 2024, 6:00 AM
- **Project End:** Jun 25, 2024, 6:00 AM
- **Checker Release:** Jun 24, 2024, 12:00 PM
- **Auto Review:** Launched at the deadline

### Concepts
For this project, we expect you to look at these concepts:
- JavaScript programming
- Software Linter

### Resources
Read or watch:
- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

### Requirements
#### General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

### Setup
#### Install NodeJS 12.11.x
(in your home directory):
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
check the versions:

```bash
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

#### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run:

```bash
npm install
```

#### Configuration files
Add the files below to your project directory:

**`package.json`**
```json
{
  "name": "es6_basics",
  "version": "1.0.0",
  "description": "Learning ES6 basics",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint .",
    "dev": "nodemon"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.10.5",
    "@babel/core": "^7.11.0",
    "@babel/preset-env": "^7.11.0",
    "eslint": "^7.6.0",
    "jest": "^26.2.2",
    "nodemon": "^2.0.4"
  }
}
```


**`babel.config.js`**
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

***`.eslintrc.js`***
```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
```

Finally, run `npm install` from the terminal of your project folder to install all necessary project dependencies.

