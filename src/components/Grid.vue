<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-basic-grid" class="code-box">
                <section class="code-box-demo">
                    <a-row>
                        <a-col :span="12">
                        col-12
                        </a-col>
                        <a-col :span="12">
                        col-12
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="8">
                        col-8
                        </a-col>
                        <a-col :span="8">
                        col-8
                        </a-col>
                        <a-col :span="8">
                        col-8
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="6">
                        col-6
                        </a-col>
                        <a-col :span="6">
                        col-6
                        </a-col>
                        <a-col :span="6">
                        col-6
                        </a-col>
                        <a-col :span="6">
                        col-6
                        </a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicGrid">
                        Basic Grid
                        <a class="anchor" href="#BasicGrid">#</a>
                    </h4>
                    <p>
                        From the stack to the horizontal arrangement.
                        You can create a basic grid system by using a single set of <code>Row</code> and <code>Col</code> grid assembly,
                        all of the columns (Col) must be placed in <code>Row</code>.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-flex-alignment" class="code-box">
                <section class="code-box-demo">
                    <p>Align Top</p>
                    <a-row type="flex" justify="center" align="top">
                        <a-col :span="4">
                        <p class="height-100">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-50">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-120">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-80">
                            col-4
                        </p>
                        </a-col>
                    </a-row>

                    <p>Align Center</p>
                    <a-row type="flex" justify="space-around" align="middle">
                        <a-col :span="4">
                        <p class="height-100">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-50">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-120">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-80">
                            col-4
                        </p>
                        </a-col>
                    </a-row>

                    <p>Align Bottom</p>
                    <a-row type="flex" justify="space-between" align="bottom">
                        <a-col :span="4">
                        <p class="height-100">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-50">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-120">
                            col-4
                        </p>
                        </a-col>
                        <a-col :span="4">
                        <p class="height-80">
                            col-4
                        </p>
                        </a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="FlexAlignment">
                        Flex Alignment
                        <a class="anchor" href="#FlexAlignment">#</a>
                    </h4>
                    <p>
                        Flex child elements vertically aligned.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-flex-order" class="code-box expand">
                <section class="code-box-demo">
                    <a-row type="flex">
                        <a-col :span="6" :order="4">
                        1 col-order-4
                        </a-col>
                        <a-col :span="6" :order="3">
                        2 col-order-3
                        </a-col>
                        <a-col :span="6" :order="2">
                        3 col-order-2
                        </a-col>
                        <a-col :span="6" :order="1">
                        4 col-order-1
                        </a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="FlexOrder">
                        Flex Order
                        <a class="anchor" href="#FlexOrder">#</a>
                    </h4>
                    <p>
                        To change the element sort by Flex layout order.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-flex-layout" class="code-box">
                <section class="code-box-demo">
                    <p>sub-element align left</p>
                    <a-row type="flex" justify="start">
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                    </a-row>

                    <p>sub-element align center</p>
                    <a-row type="flex" justify="center">
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                    </a-row>

                    <p>sub-element align right</p>
                    <a-row type="flex" justify="end">
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                    </a-row>

                    <p>sub-element monospaced arrangement</p>
                    <a-row type="flex" justify="space-between">
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                    </a-row>

                    <p>sub-element align full</p>
                    <a-row type="flex" justify="space-around">
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                        <a-col :span="4">
                        col-4
                        </a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="FlexLayout">
                        Flex Layout
                        <a class="anchor" href="#FlexLayout">#</a>
                    </h4>
                    <p>
                        Use row-flex define flex layout, its child elements depending on the value of the start,center, end,space-between, space-around, which are defined in its parent node layout mode.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-flex-fill" class="code-box expand">
                <section class="code-box-demo">
                    <a-divider orientation="left">
                        Percentage columns
                    </a-divider>
                    <a-row type="flex">
                        <a-col :flex="2">2 / 5</a-col>
                        <a-col :flex="3">3 / 5</a-col>
                    </a-row>
                    <a-divider orientation="left">
                        Fill rest
                    </a-divider>
                    <a-row type="flex">
                        <a-col flex="100px">100px</a-col>
                        <a-col flex="auto">auto</a-col>
                    </a-row>
                    <a-divider orientation="left">
                        Raw flex style
                    </a-divider>
                    <a-row type="flex">
                        <a-col flex="1 1 200px">1 1 200px</a-col>
                        <a-col flex="0 1 300px">0 1 300px</a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="FlexFill">
                        Flex Fill 
                        <a class="anchor" href="#FlexFill">#</a>
                    </h4>
                    <p>
                        Col provides <code>flex</code> prop to support fill rest.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-grid-gutter" class="code-box expand">
                <section class="code-box-demo">
                    <div class="gutter-example">
                        <a-row :gutter="16">
                        <a-col class="gutter-row" :span="6">
                            <div class="gutter-box">
                            col-6
                            </div>
                        </a-col>
                        <a-col class="gutter-row" :span="6">
                            <div class="gutter-box">
                            col-6
                            </div>
                        </a-col>
                        <a-col class="gutter-row" :span="6">
                            <div class="gutter-box">
                            col-6
                            </div>
                        </a-col>
                        <a-col class="gutter-row" :span="6">
                            <div class="gutter-box">
                            col-6
                            </div>
                        </a-col>
                        </a-row>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="GridGutter">
                        Grid Gutter
                        <a class="anchor" href="#GridGutter">#</a>
                    </h4>
                    <p>
                        You can use the <code>gutter</code> property of <code>Row</code> as grid spacing, we recommend set it to <code>(16 + 8n) px</code>. (<code>n</code> stands for natural number.)
                        You can set it to a object like <code>{ xs: 8, sm: 16, md: 24, lg: 32 }</code> for responsive design.
                        You can use a array to set vertical spacing, <code>[horizontal, vertical]</code> <code>[16, { xs: 8, sm: 16, md: 24, lg: 32 }]</code>.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-a-column-offset" class="code-box expand">
                <section class="code-box-demo">
                    <a-row>
                        <a-col :span="8">
                        col-8
                        </a-col>
                        <a-col :span="8" :offset="8">
                        col-8
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="6" :offset="6">
                        col-6 col-offset-6
                        </a-col>
                        <a-col :span="6" :offset="6">
                        col-6 col-offset-6
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12" :offset="6">
                        col-12 col-offset-6
                        </a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ColumnOffset">
                        a-column offset
                        <a class="anchor" href="#ColumnOffset">#</a>
                    </h4>
                    <p>
                        <code>Offset</code> can set the column to the right side. For example, using <code>offset = {4}</code> can
                        set the element shifted to the right four columns width.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-more-responsive" class="code-box expand">
                <section class="code-box-demo">
                    <a-row>
                        <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                        Col
                        </a-col>
                        <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                        Col
                        </a-col>
                        <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                        Col
                        </a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="MoreResponsive">
                        More Responsive
                        <a class="anchor" href="#MoreResponsive">#</a>
                    </h4>
                    <p>
                        <code>span</code> <code>pull</code> <code>push</code> <code>offset</code> <code>order</code> property can be embedded into <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code> properties to use,
                        where <code>:xs="6"</code> is equivalent to <code>:xs="{span: 6}"</code>.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-响应式布局" class="code-box expand">
                <section class="code-box-demo">
                    <a-row>
                        <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
                        Col
                        </a-col>
                        <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                        Col
                        </a-col>
                        <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
                        Col
                        </a-col>
                    </a-row>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ResponsiveLayout">
                        Responsive Layout
                        <a class="anchor" href="#ResponsiveLayout">#</a>
                    </h4>
                    <p>
                        Referring to the Bootstrap [responsive design] (http://getbootstrap.com/css/#grid-media-queries), here preset six dimensions: <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code>.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-grid-demo-playground" class="code-box expand">
                <section class="code-box-demo">
                    
                        <div style="margin-bottom:16px">
                        <span style="margin-right:6px">Horizontal Gutter (px): </span>
                        <div style="width:50%">
                            <a-slider
                            v-model:value="gutterKey"
                            :min="0"
                            :max="Object.keys(gutters).length - 1"
                            :marks="gutters"
                            :step="null"
                            />
                        </div>
                        <span style="margin-right: 6px">Vertical Gutter (px): </span>
                        <div style="width: 50%">
                            <a-slider
                            v-model:value="vgutterKey"
                            :min="0"
                            :max="Object.keys(vgutters).length - 1"
                            :marks="vgutters"
                            :step="null"
                            />
                        </div>
                        <span style="margin-right:6px">Column Count:</span>
                        <div style="width:50%">
                            <a-slider
                            v-model:value="colCountKey"
                            :min="0"
                            :max="Object.keys(colCounts).length - 1"
                            :marks="colCounts"
                            :step="null"
                            />
                        </div>
                        </div>
                        <a-row :gutter="[gutters[gutterKey], vgutters[vgutterKey]]">
                        <a-col
                            v-for="(item) in colCounts[colCountKey]"
                            :key="item.toString()"
                            :span="24 / colCounts[colCountKey]"
                        >
                            <div>Column</div>
                        </a-col>
                        </a-row>
                        <a-row :gutter="[gutters[gutterKey], vgutters[vgutterKey]]">
                        <a-col
                            v-for="(item) in colCounts[colCountKey]"
                            :key="item.toString()"
                            :span="24 / colCounts[colCountKey]"
                        >
                            <div>Column</div>
                        </a-col>
                        </a-row>
                        <pre v-text="rowColHtml" />
                        <pre v-text="rowColHtml" />
                    
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Playground">
                        Playground
                        <a class="anchor" href="#Playground">#</a>
                    </h4>
                    <p>
                        A simple playground for column count and gutter.
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
export default {
  data() {
    const gutters = {};
    const colCounts = {};
    const vgutters = {};
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      colCounts[i] = value;
    });
    return {
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 2,
      colCounts,
      gutters,
      vgutters,
    };
  },
  computed: {
    rowColHtml() {
      const colCount = this.colCounts[this.colCountKey];
      const getter = [this.gutters[this.gutterKey], this.vgutters[this.vgutterKey]];
      let colCode = '<a-row :gutter="[' + getter + ']">\n';
      for (let i = 0; i < colCount; i++) {
        const spanNum = 24 / colCount;
        colCode += '  <a-col :span="' + spanNum + '"/>\n';
      }
      colCode += '</a-row>';
      return colCode;
    },
  },
};
</script>

<style>
.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1),
.grid-demo .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1),
[id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1){
    background: #9868CF;
}

.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row),
.grid-demo .code-box-demo .ant-row > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row){
    padding: 16px 0;
}

.grid-demo .ant-row-flex > div, .grid-demo .ant-row > div, .grid-demo .code-box-demo .ant-row-flex > div,
.grid-demo .code-box-demo .ant-row > div, [id^="components-grid-demo-"] .ant-row-flex > div,
[id^="components-grid-demo-"] .ant-row > div, [id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div,
[id^="components-grid-demo-"] .code-box-demo .ant-row > div{
    text-align: center;
    border-radius: 0;
    min-height: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #FFF;
    font-weight: 600 !important;
}

.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row), .grid-demo .code-box-demo .ant-row > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row),
[id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row){
    background: #7F43C4;
    padding: 16px 0;
}

#components-grid-demo-flex-alignment .code-box-demo p{
    text-align: center;
}

#components-grid-demo-flex-layout .code-box-demo p{
    text-align: center;
}

.gutter-example ::v-deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #7F43C4;
  padding: 8px 0;
}

#components-grid-demo-playground [class~='ant-col'] {
  background: transparent;
  border: 0;
}
#components-grid-demo-playground [class~='ant-col'] > div {
  background: #7F43C4;
  height: 120px;
  line-height: 120px;
  font-size: 13px;
}
#components-grid-demo-playground pre {
  background: #f9f9f9;
  border-radius: 6px;
  font-size: 13px;
  padding: 8px 16px;
}


</style>