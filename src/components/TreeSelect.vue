<template>
    <a-row>

        <!-- Left Section -->

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tree-select-demo-checkable" class="code-box">
                <section class="code-box-demo">
                    <a-tree-select
                        v-model:value="value"
                        show-search
                        style="width: 100%"
                        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                        placeholder="Please select"
                        allow-clear
                        multiple
                        :tree-data="treeData"
                    ></a-tree-select>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TreeSelectBasic">
                        Basic
                        <a class="anchor" href="#TreeSelectBasic">#</a>
                    </h4>
                    <p>
                        There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button , <code>danger</code> button and <code>link</code> button in atlasdsgn.
                    </p>
                </section>
            </section>
        </a-col>

        <!-- End of Left Section -->

        <!-- Right Section -->

        <a-col :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tree-select-demo-checkable" class="code-box">
                <section class="code-box-demo">
                    <a-space>
                        <a-button type="primary" @click="maxTagCount++">maxTagCount (++)</a-button>
                        <a-button type="primary" @click="maxTagCount--">maxTagCount (--)</a-button>
                    </a-space>
                    <br/>
                    <br/>
                    <h3>maxTagCount: {{ maxTagCount }}</h3>
                    <br/>
                    <a-tree-select
                        v-model:value="value"
                        style="width: 100%"
                        :tree-data="treeData"
                        tree-checkable
                        :show-checked-strategy="SHOW_PARENT"
                        placeholder="All Location"
                        show-search
                        multiple
                        allow-clear
                        @change="onChange"
                        @search="onSearch"
                        @select="onSelect"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TreeSelectCheckable">
                        Checkable
                        <a class="anchor" href="#TreeSelectCheckable">#</a>
                    </h4>
                    <p>
                        There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button , <code>danger</code> button and <code>link</code> button in atlasdsgn.
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import { TreeSelect } from 'ant-design-vue';
// import { defineComponent, ref, watch } from 'vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
  {
    title: 'Jawa Barat',
    value: 'jawa barat',
    key: '0-0',
    children: [
      {
        title: 'Kab. Bandung',
        value: 'kab bandung',
        key: '0-0-0',
      },
      {
        title: 'Kab. Bogor',
        value: 'kab bogor',
        key: '0-0-1',
      },
      {
        title: 'Kab. Cianjur',
        value: 'kab cianjur',
        key: '0-0-2',
      },
      {
        title: 'Kab. Ciamis',
        value: 'kab ciamis',
        key: '0-0-3',
      },
    ],
  },
  {
    title: 'DKI Jakarta',
    value: 'dki jakarta',
    key: '0-1',
    children: [
      {
        title: 'Jakarta Barat',
        value: 'jakarta barat',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Jakarta Selatan',
        value: 'jakarta selatan',
        key: '0-1-1',
      },
      {
        title: 'Jakarta Timur',
        value: 'jakarta timur',
        key: '0-1-2',
      },
      {
        title: 'Jakarta Utara',
        value: 'jakarta utara',
        key: '0-1-3',
      },
    ],
  },
];
export default {
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined,
      treeData,
      SHOW_PARENT,
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
      this.value = value;
    },
    onSearch() {
      console.log(...arguments);
    },
    onSelect() {
      console.log(...arguments);
    },
  },
};
</script>

<style>

.code-boxes-col-2-1{
    display: inline-block;
    vertical-align: top;
}

.code-box{
    border: 1px solid #ebedf0;
    border-radius: 6px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    transition: all .2s;
}

.code-box-demo{
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0,0,0,.65);
}

#components-tree-select-demo-checkable .ant-select{
    margin-right: 16px;
    margin-bottom: 16px;
}

.code-box.expand .code-box-meta{
    border-radius: 0;
}

.code-box-meta.markdown{
    text-align: left;
    position: relative;
    width: 100%;
    font-size: 14px;
    transition: background-color .4s;
}

.markdown{
    color: #2c3e50;
    font-size: 14px;
    line-height: 2;
}

.markdown code{
    margin: 0 1px;
    background: #f3f3f4;
    padding: .2em .4em;
    border-radius: 3px;
    font-size: .9em;
    border: 1px solid #eee;
}

.code-box-meta .demo-description>h4, .code-box-meta>h4{
    position: absolute;
    top: -22px;
    padding: 1px 8px;
    margin-left: 16px;
    color: #2c3e50;
    border-radius: 2px 2px 0 0;
    background: #FFF;
    font-size: 14px;
    width: auto;
}

.code-box-meta .demo-description>p, .code-box-meta>p{
    font-size: 12px;
    margin: .5em 0;
    padding: 18px 24px 12px;
    width: 100%;
    word-break: break-word;
}

.code-box-actions{
    padding: 14px;
    text-align: center;
    opacity: .7;
    transition: opacity .3s;
}

.code-box-actions, .code-box .highlight:not(:first-child){
    border-top: 1px dashed #ebedf0;
}

.code-box .code-expand-icon{
    cursor: pointer;
}

.code-box-actions>form, .code-box-actions>i, .code-box-actions>span{
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    /* margin-left: 16px; */
    vertical-align: top;
}

.code-box .code-expand-icon-show{
    opacity: .55;
    pointer-events: auto;
}

.code-box .code-expand-icon-hide, .code-box .code-expand-icon-show{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-shadow: none;
    transition: all .4s;
    user-select: none;
}
</style>