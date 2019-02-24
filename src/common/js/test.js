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
