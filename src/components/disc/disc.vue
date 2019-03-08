<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from '../music-list/music-list'
import {mapGetters} from 'vuex'
import {getDiscDetail} from 'api/data/recommend'

export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    title () {
      return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  created () {
    this._getDiscDetail()
  },
  methods: {
    _getDiscDetail () {
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      const result = getDiscDetail()
      console.log(result)
      result.then(res => {
        return res.clone().json()
      }).then(json => {
        const data = json
        console.log(data)
        this.songs = data.list.musicData
      })
    }
  },
  components: {
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
