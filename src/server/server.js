const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const recommendData = require('./mock/recommend')
const discData = require('./mock/disc')
const singerData = require('./mock/singer')
const songListData = require('./mock/songlist')
const rankData = require('./mock/rank')
const hotSearchData = require('./mock/search')

router.get('/api/recommend', (ctx, next) => {
  ctx.body = recommendData
})

router.get('/api/disc', (ctx, next) => {
  ctx.body = discData
})

router.get('/api/singer', (ctx, next) => {
  ctx.body = singerData
})

router.get('/api/rank', (ctx, next) => {
  ctx.body = rankData
})

router.get('/api/hotsearch', (ctx, next) => {
  ctx.body = hotSearchData
})

router.get('/api/singer/:singerid', (ctx, next) => {
  console.log(ctx.params);

  ctx.body = songListData
})

// router.get('/api/disclist', (ctx, next) => {
//   var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_musiclist_getmyfav.fcg'
//
//   axios.get('/url', {
//     headers: {
//       referer: 'https://y.qq.com/',
//       host: 'y.qq.com'
//     },
//     params: ctx.request.query
//   }).then((ctx.response) => {
//     res.json(ctx.response)
//   }).catch((e) => {
//     console.log(e)
//   })
// })
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
