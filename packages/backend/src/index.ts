import * as dotenv from 'dotenv';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaLogger from 'koa-logger';

import Routes from './routes';

function main() {
  const router = new KoaRouter();
  const routes = new Routes();
  router.get('/', routes.infoGET.bind(routes));

  const app = new Koa();
  app.use(KoaLogger());
  app.use(router.routes());

  dotenv.load();
  const port = process.env.PORT || 6543;
  process.stdout.write(`[main] Listening to port ${port}\n`);
  const server = app.listen(port);
process.on('exit', () => server.close())
}

if (!module.parent) main();

