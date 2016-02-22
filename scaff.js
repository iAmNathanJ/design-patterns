#! /usr/local/bin/node

'use strict';

const fs = require('fs')
    , mkdir = fs.mkdirSync
    , read = fs.readFileSync
    , write = fs.writeFileSync;

const ERR = (err) => {
  if(err) console.error(err);
};

let base = process.argv[2]
  , pattern = base
  , languages = [ 'js', 'ruby']
  , ext = { js: 'js', ruby: 'rb' };

function getScaffold(name, ext) {
  return name === pattern ? read(`./scaffold/pattern.${ext}`) : read(`./scaffold/${name}.${ext}`)
}

let files = [ 'index', pattern, 'test' ];

mkdir(base, ERR);

for(let lang of languages) {
  mkdir(`${base}/${lang}`, ERR);
  files.forEach((file) => {
    let scaffold = getScaffold(file, ext[lang]);
    write(`./${base}/${lang}/${file}.${ext[lang]}`, scaffold);
  });
}
