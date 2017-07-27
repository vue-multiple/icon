<template>
  <div id="app">
    <demonstration
        tag="h2"
        title="Icon 图标"
        anchor="icon-tu-biao"
        description="图标组件"
        :show-content="false">
    </demonstration>
    <demonstration
        title="概述"
        anchor="gai-shu"
        :show-content="false">
      <template slot="description">
        图标使用开源项目 <a href="http://ionicons.com/" target="_blank">ionicons</a>
      </template>
    </demonstration>
    <demonstration
        title="使用方法"
        anchor="shi-yong-fang-fa"
        :multiple="true"
        :highlight="sourcecode">
      <template slot="description">
        为图标指定对应的 <code>type</code> 属性
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">默认，heart</span>
          <div>
            <vm-icon type="heart"></vm-icon>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">指定颜色，#FF4949</span>
          <div>
            <vm-icon type="heart" color="#FF4949"></vm-icon>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">指定大小，默认单位px</span>
          <div>
            <vm-icon type="heart" :size="30"></vm-icon>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">带单位，em</span>
          <div>
            <vm-icon type="heart" size="2em"></vm-icon>
          </div>
        </div>
      </template>
      <template slot="explanation">
        通过为组件指定 <code>type</code> 属性，最终渲染为 <code>i class="vm-icon-heart"</code>，可以指定 <code>size</code>
        属性，为图标设置大小。还可以指定 <code>color</code> 属性，为图标指定颜色。当然提供 <code>size</code> 和 <code>color</code>
        只是提供了方便，你可以直接在组件上设置style 属性， <code>style="font-size: 2em; color: red;"。</code>
      </template>
    </demonstration>
    <demonstration
        title="Attributes"
        anchor="attributes"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>tag</td>
            <td>自定义元素标签</td>
            <td>string</td>
            <td>*</td>
            <td>i</td>
          </tr>
          <tr>
            <td>type</td>
            <td>图标的名称</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>size</td>
            <td>图标的大小，单位是 %, in, cm, mm, em, ex, pt, pc, px 之一， 默认单位为 px</td>
            <td>number/string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>color</td>
            <td>图标的颜色</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
        title="图标集合"
        anchor="tu-biao-ji-he"
        :show-content="false">
      <template>
        <div class="icon-search">
          <input type="text" v-model="keyword" placeholder="输入英文关键词搜索，比如 heart">
          <p>点击下面的图标按钮可以直接复制组件代码</p>
        </div>
        <div class="icons">
          <div class="icons-item"
               v-for="(icon, index) in icons"
               @click="handleClickIcon(icon, index, $event)"
               @mouseleave="handleMouseleave()"
               @mousemove="handleMousemove(icon, index)">
            <i :class="'vm-icon-'+icon.name" style="font-size: 32px;"></i>
            <p>{{icon.name}}</p>
          </div>
          <transition name="copy">
            <div class="copied" v-show="showCopy" :style="{ top, left }">Copied!</div>
          </transition>
        </div>
      </template>
    </demonstration>
  </div>
</template>
<script>
  import { sourcecode } from './template'
  import { icons } from './icons.json'
  import Clipboard from 'clipboard'
  export default {
    data () {
      return {
        sourcecode,
        keyword: '',
        showCopy: false,
        top: 0,
        left: 0
      }
    },
    computed: {
      icons () {
        return icons.filter(icon => {
          return icon.name.indexOf(this.keyword) > -1
        })
      }
    },
    methods: {
      handleClickIcon (icon, index, event) {
        var clip = new Clipboard('.icons', {
          text () {
            return `<vm-icon type="${icon.name}"></vm-icon>`
          }
        })

        clip.on('success', e => {
          e.clearSelection();
          clip.destroy();
          this.left = index % 5 * 200 + 70 + 'px'
          this.top = (Math.floor(index / 5) + 1) * 100 + 'px'
          this.showCopy = true
        })
      },
      handleMousemove (icon, index) {
      },
      handleMouseleave () {
        this.showCopy = false
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
    .icon-search {
      margin: 20px auto 30px;
      text-align: center;
      input {
        width: 500px;
        margin: 0 auto;
        padding: 8px 0;
        font-size: 14px;
        text-align: center;
        color: #5e6d82;
        background-color: #eff2f7;
        border: 0;
        border-radius: 4px;
        outline: none;
      }
      p {
        margin-top: 20px;
      }
    }
    .icons {
      position: relative;
      overflow: hidden;
      padding-bottom: 50px;
      zoom: 1;
      .copy-enter-active,
      .copy-leave-active {
        transition: opacity .5s
      }
      .copy-enter, .copy-leave-to {
        opacity: 0
      }
      .copied {
        position: absolute;
        left: 0;
        top: 30px;
        z-index: 99;
        padding: 5px 8px;
        font: normal normal 11px/1.5 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
        color: #fff;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
        white-space: pre;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 3px;
        -webkit-font-smoothing: subpixel-antialiased;
        &:before {
          position: absolute;
          top: -10px;
          left: 25px;
          width: 0;
          height: 0;
          color: rgba(0, 0, 0, 0.8);
          pointer-events: none;
          content: "";
          border: 5px solid transparent;
          border-bottom-color: rgba(0, 0, 0, 0.8);
        }
      }
      .icons-item {
        float: left;
        width: 200px;
        height: 90px;
        padding-top: 10px;
        color: #5c6b77;
        text-align: center;
        cursor: pointer;
        p {
          margin: 5px;
          padding-top: 15px;
          font-size: 14px;
        }
      }
    }
  }
</style>
