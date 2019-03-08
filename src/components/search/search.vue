<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox"></search-box>
    </div>
    <div class="shortcut-wrapper">
      <div class="shortcut">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li @click="addQuery(item.k)" class="item" v-for="item in hotSearchList" :key="item.n">
              <span>{{item.k}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from 'base/search-box/search-box'
import {getHotSearchList} from 'api/data/search'

export default {
  data () {
    return {
      hotSearchList: []
    }
  },
  created () {
    this._getHotSearchList()
  },
  methods: {
    _getHotSearchList () {
      const result = getHotSearchList()
      console.log(result)
      result.then(res => {
        return res.clone().json()
      }).then(json => {
        const data = json
        console.log(data.data.hotkey)
        this.hotSearchList = data.data.hotkey.slice(0, 10)
      })
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    }
  },
  components: {
    SearchBox
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
</style>
