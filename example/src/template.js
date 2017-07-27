export const sourcecode = `<div class="block">
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