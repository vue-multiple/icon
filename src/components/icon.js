export default {
  name: 'VmIcon',

  componentName: 'VmIcon',

  props: {
    tag: {
      type: String,
      default: 'i'
    },
    type: String,
    size: [Number, String],
    color: String
  },

  render (h) {
    var style = {}

    if (this.size) {
      style.fontSize = `${this.size}px`
    }
    if (this.color) {
      style.color = this.color
    }

    return h(this.tag, {
      class: [
        `vm-icon-${this.type}`
      ],
      style: style
    }, this.$slots.default)
  }
}
