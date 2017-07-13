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
        <div class="icon-demo__item">
            <h3 id="tu-biao-ji-he">
                <a href="./#tu-biao-ji-he" aria-hidden="true" class="header-anchor">¶</a>
                图标集合
            </h3>
            <div class="icon-search">
                <input type="text" v-model="keyword" placeholder="输入英文关键词搜索，比如 heart">
                <p>点击下面的图标按钮可以直接复制组件代码</p>
            </div>
            <div class="icons">
                <div class="icons-item tooltipped tooltipped-s"
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
    import {icons} from './icons.json'
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
        },
        components: {
            Demo
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .icon-demo {
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
            zoom: 1;
            .copy-enter-active, .copy-leave-active {
                transition: opacity .5s
            }
            .copy-enter, .copy-leave-to /* .fade-leave-active in <2.1.8 */
            {
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
