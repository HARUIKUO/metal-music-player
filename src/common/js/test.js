_setSliderWidth(){
  this.children = this.$refs.sliderGroup.children

  let width = 0
  let sliderWidth = this.$refs.slider.clientWidth
  for (let i=0, i<this.children.length, i++) {
    let child = this.children[i]
    addClass(child, 'slider-item')

    child.style.width = sliderWidth + 'px'
    width += sliderWidth
  }
  if (this.loop) {
    width += 2 * sliderWidth
  }
}
mounted () {
  setTimeout(() => {
    this._initScroll()
  }, 20)
}
_initScroll () {
  if (!this.$refs.wrapper) {
    return
  }
  this.scroll = new BScroll(this.$refs.wrapper, {
    probeType: this.probeType,
    click: this.click
  })
}

_normalizeSinger () {
  let map = {
    hot: {
      title: name,
      items: []
    }
  }
  list.forEach((item, index) => {
    if (index < 10) {
      map.hot.items.push({
        id: item.singer_id,
        name: item.singer_name
      })
    }
    const key = item.singer_index
    if (!map[key]) {
      map[key] = {
        title: key,
        items: []
      }
    }
    map[key].items.push({
      id: item.id,
      name: item.name
    })
  })
  let hot = []
  let ret = []
  for (let key in map) {
    
  }
  let val = map[key]
  for ()
}
