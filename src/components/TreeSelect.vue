<template>
    <a-row>

        <!-- Left Section -->

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tree-select-demo-checkable" class="code-box">
                <section class="code-box-demo">
                    <a-tree-select
                        v-model:value="value"
                        style="width: 100%"
                        :tree-data="treeData"
                        tree-checkable
                        show-search
                        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                        allow-clear
                        :show-checked-strategy="SHOW_PARENT"
                        search-placeholder="Please select"
                    />
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
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>
        </a-col>

        <!-- End of Left Section -->

        <!-- Right Section -->

        <a-col :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tree-select-demo-checkable" class="code-box">
                <section class="code-box-demo">
                    <a-tree-select
                        v-model:value="value"
                        style="width: 100%"
                        :tree-data="treeData"
                        tree-checkable
                        show-search
                        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                        allow-clear
                        :show-checked-strategy="SHOW_PARENT"
                        search-placeholder="Please select"
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
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import { TreeSelect } from 'ant-design-vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
export default {
  data() {
    return {
      treeExpandedKeys: [],
      value: ['0-0-0'],
      treeData,
      SHOW_PARENT,
    };
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
    border-bottom: 1px dashed #ebedf0;
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