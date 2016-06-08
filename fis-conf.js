// default settings. fis3 release
//编译时无视以下文件
fis.set('project.ignore', [
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'package.json',
  'fis-conf.js'
]);

//使用规范amd
fis.hook('amd', {
  //globalAsyncAsSync: false,
});

fis.match('_html_tpl/**', {
  release: false
});

// Global start
fis.match('*.{js,css}', {
  useHash: true
});

fis.match('*.scss', {
  parser: fis.plugin('node-sass'),
  optimizer: fis.plugin('clean-css'),
  useHash: true,
  rExt: '.css'
});

fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
  //isMod: true
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end

// default media is `dev`
fis.match('*', {
  useHash: false,
  optimizer: null,
  domain: '.',
  deploy: fis.plugin('local-deliver', {
    to: '../branches/gh-pages/'
  })
});