#! /usr/local/bin/node

'use strict';

const _ = require('lodash')
    , fs = require('fs')
    , mkdir = fs.mkdirSync
    , readFile = fs.readFileSync
    , write = fs.writeFileSync;

// let config = {
//   entry: './templates',
//   files: [ 'index', pattern, 'test' ],
//   create: {
//     js: { ext: 'js' },
//     ruby: { ext: 'rb' },
//   },
//   dest: './'
// };

let base = process.argv[2]
  , pattern = base
  , languages = [ 'js', 'ruby' ]
  , ext = { js: 'js', ruby: 'rb' };

const ERR = (e) => {
  if(e) console.error(e.message);
};

function read(file) {
  try {
    return readFile(file);
  } catch(e) {
    ERR(e);
  }
}

function getTemplate(file, data) {
  let tmpl = _.template(read(file));
  return tmpl(data);
}

function scaffold(name, ext) {
  if(name === pattern) {
    return getTemplate(`./templates/pattern.${ext}`, { pattern: pattern });
  } else {
    return getTemplate(`./templates/${name}.${ext}`, { pattern: pattern });
  }
}

let files = [ 'index', pattern, 'test' ];

mkdir(base, ERR);

for(let lang of languages) {
  mkdir(`${base}/${lang}`, ERR);
  files.forEach((file) => {
    let scaff = scaffold(file, ext[lang]);
    let fileName = (lang === 'ruby') ? _.snakeCase(file) : file;
    write(`./${base}/${lang}/${fileName}.${ext[lang]}`, scaff);
  });
}
