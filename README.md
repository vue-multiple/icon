# icon

> Vue-based icon component

## Install

```bash
npm install vue-multiple-icon -S
```

## Quick Start

```bash
import Vue from 'vue'
import VmIcon from 'vue-multiple-icon'
import 'vue-multiple-icon/lib/icon.css'

Vue.component(VmIcon.name, VmRate)
```

## Usage

```html
<vm-icon type="load-a"></vm-icon>
```

## API
| Property | Description | Type | Default |
| ----- | ----- | ----- | ----- |
| tag | Name of tag. | String | i |
| type | Name of icon. | String | - |
| size | Size of icon.(default is px) | Number/String | - |
| color | Color of icon. | String | - |

For more information, please refer to [Icon](https://vue-multiple.github.io/icon/) in our documentation.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run demo:dev

# build for demo with minification
npm run demo:build

# build for gh-pages with minification
npm run demo:prepublish

# build for production with minification
npm run build

# generate gh-pages
npm run deploy
```

## LICENSE

[MIT](http://opensource.org/licenses/MIT)