<template>
  <div class="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>

<script>
import {getSingerList} from 'api/data/singer'
import Singer from 'common/js/singer'
import ListView from 'base/listview/listview'

const HOT_NAME = 'hot'
const HOT_SINGER_LEN = 10

export default {
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      const result = getSingerList()
      result.then(res => {
        console.log(res.clone().json())
        return res.clone().json()
      }).then(json => {
        const data = json
        console.log(data.singerList.data.singerlist)
        this.singers = this._normalizeSinger(data.singerList.data.singerlist)
        console.log(this._normalizeSinger(this.singers))
      })
    },
    _normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }

      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            id: item.singer_mid,
            name: item.singer_name
          }))
        }

        const key = item.singer_index
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.singer_mid,
          name: item.singer_name
        }))
      })
      console.log(map)

      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        console.log(val.title)
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  components: {
    ListView
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    height: 550px
    bottom: 0
    width: 100%
</style>
