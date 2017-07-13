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
    let style = {}
    const UNITS = ['%', 'in', 'cm', 'mm', 'em', 'ex', 'pt', 'pc', 'px']

    if (this.size) {
      let hasUnit = typeof this.size === 'string'
        && UNITS.indexOf(this.size.replace(/\d*/, '')) > -1

      style.fontSize = `${ this.size + (hasUnit ? '' : 'px')}`
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
