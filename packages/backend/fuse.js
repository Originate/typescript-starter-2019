const { FuseBox } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'server',
  output: 'dist/$name.js',
  useTypescriptCompiler: true,
  experimentalFeatures: true,
  sourceMaps: true,
  log: false,
  tsConfig: '../../tsconfig.json',
});

fuse
  .bundle('server-bundle')
  .instructions('> [index.ts]')
  .watch('src/**')
  .completed(proc => {console.debug(proc.node);setTimeout(() => proc.start(), 1000)});
fuse.run();
