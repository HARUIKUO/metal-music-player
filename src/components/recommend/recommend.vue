<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
      </div>
      <div class="recommend-list">
        <h1 class="list-title">Hotest Album Recommend</h1>
      </div>
      <ul>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getRecommend} from 'api/data/recommend'
  import {ERR_OK} from 'api/config'

  export default {
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        const result = getRecommend()
        console.log(result)
        result.then((res) => {
          console.log(res.json());
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        overflow: hidden
        width: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
</style>
