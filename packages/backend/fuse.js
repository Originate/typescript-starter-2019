const { FuseBox } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'server',
  output: 'dist/$name.js',
  useTypescriptCompiler: true,
  sourceMaps: true,
  log: false,
  tsConfig: '../../tsconfig.json',
});

fuse
  .bundle('server-bundle')
  .instructions('> [index.ts]')
  .watch()
  .completed(proc => proc.start());
fuse.run();
