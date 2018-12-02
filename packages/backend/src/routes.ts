import KoaRouter from 'koa-router';

class Routes {
  createdAt: number;
  constructor() {
    this.createdAt = Date.now();
  }

  async infoGET(ctx: KoaRouter.IRouterContext, next: () => Promise<any>): Promise<void> {
    ctx.set('content-type', 'applicaton/json');
    ctx.body = JSON.stringify({ uptimeInSeconds: (Date.now() - this.createdAt) / 1000, a: 'ss' });
  }
}

export default Routes;
