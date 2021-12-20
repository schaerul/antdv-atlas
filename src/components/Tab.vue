<template>
    <a-row>
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tabs-demo-disabled" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-tabs>
                            <a-tab-pane key="1" tab="1st">
                            This is content of 1st tab
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="2nd" disabled>
                            This is content of 2nd tab
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="3rd">
                            This is content of 3rd tab
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TabBasic">
                        Basic Usage
                        <a class="anchor" href="#TabBasic">#</a>
                    </h4>
                    <p>
                        Default activate first tab and disable a tab.
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


        <a-col :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-button-demo-type" class="code-box">
                <section class="code-box-demo">
                    <a-tabs>
                        <a-tab-pane key="1">
                        <template #tab>
                            <span>
                            <apple-outlined />
                            1st
                            </span>
                        </template>
                        This is content of 1st tab
                        </a-tab-pane>
                        <a-tab-pane key="2">
                        <template #tab>
                            <span>
                            <android-outlined />
                            2nd
                            </span>
                        </template>
                        This is content of 2nd tab
                        </a-tab-pane>
                    </a-tabs>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TabIcon">
                        With Icon
                        <a class="anchor" href="#TabIcon">#</a>
                    </h4>
                    <p>
                        The Tab with Icon.
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

    <a-row>
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tabs-demo-extra-content" class="code-box">
                <section class="code-box-demo">
                    <a-tabs>
                        <a-tab-pane key="1" tab="1st">
                        This is content of 1st tab
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="2nd">
                        This is content of 2nd tab
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="3rd">
                        This is content of 2nd tab
                        </a-tab-pane>
                        <template #tabBarExtraContent>
                        <a-button type="default" size="small">
                            Extra Button
                        </a-button>
                        </template>
                    </a-tabs>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ExtraContent">
                        Extra Content
                        <a class="anchor" href="#ExtraContent">#</a>
                    </h4>
                    <p>
                        You can add extra actions to the right of Tabs.
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


        <a-col :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tabs-demo-slide" class="code-box">
                <section class="code-box-demo">
                    <div style="width: 100%">
                        <a-radio-group v-model:value="mode" :style="{ marginBottom: '24px' }">
                        <a-radio-button value="top">
                            Horizontal
                        </a-radio-button>
                        <a-radio-button value="left">
                            Vertical
                        </a-radio-button>
                        </a-radio-group>
                        <a-tabs
                        :tab-position="mode"
                        :style="{ height: '120px' }"
                        @prevClick="callback"
                        @nextClick="callback"
                        >
                        <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`"> This is content of Tab-{{ i }}</a-tab-pane>
                        </a-tabs>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TabSlide">
                        Slide
                        <a class="anchor" href="#TabSlide">#</a>
                    </h4>
                    <p>
                        The Tab with Icon.
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

import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    AppleOutlined,
    AndroidOutlined,
  },
  data() {
    return {
      mode: 'top',
    };
  },
  methods: {
    callback(val) {
      console.log(val);
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

#components-button-demo-type .ant-btn{
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