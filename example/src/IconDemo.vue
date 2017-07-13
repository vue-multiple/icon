<template>
  <div class="icon-demo">
    <div class="icon-demo__item">
      <h2 id="icon-tu-biao">
        <a href="#icon-tu-biao" aria-hidden="true" class="header-anchor">¶</a>
        Icon 图标
      </h2>
      <p>图标组件 （<a href="https://www.iviewui.com/components/icon" target="_blank">iView Icon 图标</a>）</p>
    </div>
    <div class="icon-demo__item">
      <h3 id="gai-shu">
        <a href="#gai-shu" aria-hidden="true" class="header-anchor">¶</a>
        概述
      </h3>
      <p>图标使用开源项目 <a href="http://ionicons.com/" target="_blank">ionicons</a></p>
    </div>
    <div class="icon-demo__item">
      <h3 id="shi-yong-fang-fa">
        <a href="#shi-yong-fang-fa" aria-hidden="true" class="header-anchor">¶</a>
        使用方法
      </h3>
      <p>为图标指定对应的 <code>type</code> 属性</p>
      <demo :multiple="true">
        <template slot="source">
          <div class="block">
            <span class="demonstration">默认，heart</span>
            <div class="icon-wrap">
              <vm-icon type="heart"></vm-icon>
            </div>
          </div>
          <div class="block">
            <span class="demonstration">指定大小，默认单位px</span>
            <div class="icon-wrap">
              <vm-icon type="heart" :size="40"></vm-icon>
            </div>
          </div>
          <div class="block">
            <span class="demonstration">带单位，em</span>
            <div class="icon-wrap">
              <vm-icon type="heart" size="3em"></vm-icon>
            </div>
          </div>
          <div class="block">
            <span class="demonstration">指定颜色，#FF4949</span>
            <div class="icon-wrap">
              <vm-icon type="heart" color="#FF4949"></vm-icon>
            </div>
          </div>
        </template>
        <template slot="description">
          通过为组件指定 <code>type</code> 属性，最终渲染为 <code>i class="vm-icon-heart"</code>，可以指定 <code>size</code>
          属性，为图标设置大小。还可以指定 <code>color</code> 属性，为图标指定颜色。当然提供 <code>size</code> 和 <code>color</code>
          只是提供了方便，你可以直接在组件上设置style 属性， <code>style="font-size: 2em; color: red;"。</code>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecode"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="icon-demo__item">
      <h3 id="attributes">
        <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
        Attributes
      </h3>
      <table class="table">
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
          <td>String</td>
          <td>*</td>
          <td>i</td>
        </tr>
        <tr>
          <td>type</td>
          <td>图标的名称</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>size</td>
          <td>图标的大小，单位是 ['%', 'in', 'cm', 'mm', 'em', 'ex', 'pt', 'pc', 'px'] 之一， 默认单位为px</td>
          <td>Number | String</td>
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
    </div>
  </div>
</template>
<script>

  let sourcecode = `<div class="block">
    <span class="demonstration">默认，heart</span>
    <div class="icon-wrap">
      <vm-icon type="heart"></vm-icon>
    </div>
  </div>
  <div class="block">
    <span class="demonstration">指定大小，默认单位px</span>
    <div class="icon-wrap">
      <vm-icon type="heart" :size="40"></vm-icon>
    </div>
  </div>
  <div class="block">
    <span class="demonstration">带单位，em</span>
    <div class="icon-wrap">
      <vm-icon type="heart" size="3em"></vm-icon>
    </div>
  </div>
  <div class="block">
    <span class="demonstration">指定颜色，#FF4949</span>
    <div class="icon-wrap">
      <vm-icon type="heart" color="#FF4949"></vm-icon>
    </div>
  </div>`

  import Demo from './Demo.vue'
  export default {
    data () {
      return {
        sourcecode
      }
    },
    components: {
      Demo
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .icon-demo {
    .source {
      i {
        color: #8492a6;
        font-size: 1.5em;
        vertical-align: middle;
      }
    }
    .icon-wrap {
      min-height: 40px;
    }
    h2, h3 {
      font-weight: 400;
      color: #1f2f3d;
    }
    h2 {
      font-size: 28px;
      margin: 0
    }
    h3 {
      font-size: 22px;
      margin: 45px 0 15px;
    }
    h3, h2 {
      &:hover {
        a {
          opacity: .4;
        }
      }
      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;
        color: #4078c0;
        text-decoration: none;
        &:hover {
          opacity: .4;
        }
      }
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      a {
        color: #2d8cf0;
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        transition: color .2s ease;
        &:hover {
          color: #57a3f3;
        }
      }
      code {
        background-color: #f9fafc;
        padding: 0 4px;
        border: 1px solid #eaeefb;
        border-radius: 4px;
      }
    }
    .new {
      font-style: normal;
      color: #FF4949;
      code {
        background-color: #FF4949 !important;
        color: #fff !important;
      }
    }
    .table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;
      th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        background-color: #eff2f7;
        white-space: nowrap;
      }
      th, td {
        border-bottom: 1px solid #eaeefb;
        padding: 10px;
        max-width: 250px;
      }
    }
  }
</style>
