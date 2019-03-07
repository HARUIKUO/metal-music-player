# metal

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

前端的歌单首页，上部分为滚动栏，下部分为自己mock数据模拟的歌单样式

![ABC](https://github.com/HARUIKUO/metal-music-player/blob/master/src/common/music1.jpg)

前端的歌手列表页面，数据取自线上的qq音乐接口，koa-router代理，有侧边栏导航功能，点击可进入歌手详情

![ABC](https://github.com/HARUIKUO/metal-music-player/blob/master/src/common/music2.jpg)

歌手详情的页面（Anly小姐姐最棒！！！），数据模拟qq音乐的线上接口，上部为歌手背景图，下部为歌曲列表，显示可以支持动态的响应，歌单向上滚动拖拽，背景图会自响应变化

![ABC](https://github.com/HARUIKUO/metal-music-player/blob/master/src/common/music3.jpg)

播放器页面，利用audio接口的的播放器形成，可以支持基本的播放，前进以及后退等功能（线上qq音乐的音源数据拿不到，但播放等状态可以动态变化）

![ABC](https://github.com/HARUIKUO/metal-music-player/blob/master/src/common/music4.jpg)

排行榜的前端页面，数据取自qq音乐的排行接口，koa-router代理

![ABC](https://github.com/HARUIKUO/metal-music-player/blob/master/src/common/music5.jpg)
