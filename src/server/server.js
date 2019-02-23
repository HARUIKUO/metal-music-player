const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const recommendData = require('./mock/recommend')

router.get('/api/recommend', (ctx, next) => {
  ctx.body = recommendData
})

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
