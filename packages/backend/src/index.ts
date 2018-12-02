import * as dotenv from 'dotenv';
import Koa from 'koa';
import KoaRouter from 'koa-router';

import Routes from './routes';

function main() {
  dotenv.load();
  const port = process.env.PORT || 6543;
  process.stdout.write(`[main] Listening to port ${port}\n`);

  const app = new Koa();
  const router = new KoaRouter()
  const routes = new Routes()
  router.get('/', routes.infoGET);
  app.use(router.routes())
  app.listen(port)
}

if (!module.parent) {
  main();
}
