<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/header/header'
import Tab from './components/tab/tab'
export default {
  components: {
    Header,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
