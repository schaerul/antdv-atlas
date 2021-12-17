<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-button-demo-type" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary">Primary</a-button>
                    <a-button type="primary" disabled>Primary(disabled)</a-button>
                    <br />
                    <a-button>Default</a-button>
                    <a-button disabled>Default(disabled)</a-button>
                    <br />
                    <a-button type="dashed">Dashed</a-button>
                    <a-button type="dashed" disabled>Dashed(disabled)</a-button>
                    <br />
                    <a-button type="link">Link</a-button>
                    <a-button type="link" disabled>Link(disabled)</a-button>
                    <br />
                    <a-button type="danger">Danger</a-button>
                    <a-button type="danger" disabled>Danger(disabled)</a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ButtonBasic">
                        Basic
                        <a class="anchor" href="#ButtonBasic">#</a>
                    </h4>
                    <p>
                        There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button , <code>danger</code> button and <code>link</code> button in antd.
                    </p>
                </section>
            </section>

            <section id="components-button-demo-size" class="code-box">
                <section class="code-box-demo">
                    <a-radio-group v-model:value="size">
                        <a-radio-button value="large">Large</a-radio-button>
                        <a-radio-button value="default">Default</a-radio-button>
                        <a-radio-button value="small">Small</a-radio-button>
                    </a-radio-group>
                    <br />
                    <br />
                    <a-button type="primary" :size="size">Primary</a-button>
                    <a-button :size="size">Default</a-button>
                    <a-button type="dashed" :size="size">Dashed</a-button>
                    <a-button type="danger" :size="size">Danger</a-button>
                    <a-button type="link" :size="size">Link</a-button>
                    <br />
                    <a-button type="primary" :size="size">
                        <template #icon>
                        <DribbbleOutlined />
                        </template>
                    </a-button>
                    <a-button type="primary" shape="circle" :size="size">
                        <template #icon>
                        <DribbbleOutlined />
                        </template>
                    </a-button>
                    <a-button type="primary" shape="round" :size="size">
                        <template #icon>
                        <DribbbleOutlined />
                        Download
                        </template>
                    </a-button>
                    <a-button type="primary" shape="round" :size="size">
                        <template #icon>
                        <DribbbleOutlined />
                        </template>
                    </a-button>
                    <a-button type="primary" :size="size">
                        <template #icon>
                        <DribbbleOutlined />
                        </template>
                        Download
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ButtonSize">
                        Size
                        <a class="anchor" href="#ButtonSize">#</a>
                    </h4>
                    <p>
                        We are supports a default button size as well as a large and small size. If a large or small
                        button is desired, set the <code>size</code> property to either <code>large</code> or <code>small</code> respectively.
                        Omit the size property for a button with the default size.
                    </p>
                </section>
            </section>

            <section id="components-button-demo-icon" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" shape="circle">
                        <template #icon><SettingOutlined /></template>
                    </a-button>
                    <a-button type="primary" shape="circle">A</a-button>
                    <a-button type="primary">
                        <template #icon><SettingOutlined /></template>Setting
                    </a-button>
                    <a-button shape="circle">
                        <template #icon><SettingOutlined /> </template
                    ></a-button>
                    <a-button>
                        <template #icon><SettingOutlined /></template>Setting
                    </a-button>
                    <a-button shape="circle">
                        <template #icon><SettingOutlined /> </template
                    ></a-button>
                    <a-button>
                        <template #icon><SettingOutlined /></template>Setting
                    </a-button>
                    <a-button type="dashed" shape="circle">
                        <template #icon><SettingOutlined /> </template
                    ></a-button>
                    <a-button type="dashed">
                        <template #icon><SettingOutlined /></template>Setting
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ButtonIcon">
                        Icon
                        <a class="anchor" href="#ButtonIcon">#</a>
                    </h4>
                    <p>
                        <code>Button</code> components can contain an <code>Icon</code>. This is done by setting the <code>icon</code> property or placing an
                        <code>Icon</code> component within the <code>Button</code>. If you want specific control over the positioning and placement
                        of the <code>Icon</code>, then that should be done by placing the <code>Icon</code> component within the <code>Button</code> rather than
                        using the <code>icon</code> property.
                    </p>
                </section>
            </section>

            <section id="components-button-demo-icon" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" block>
                        Primary
                    </a-button>
                    <a-button block>
                        Default
                    </a-button>
                    <a-button type="dashed" block>
                        Dashed
                    </a-button>
                    <a-button type="danger" block>
                        Danger
                    </a-button>
                    <a-button type="link" block>
                        Link
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BlockButton">
                        Block Button
                        <a class="anchor" href="#BlockButton">#</a>
                    </h4>
                    <p>
                        <code>block</code> property will make the button fit to its parent width.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-button-demo-button-group" class="code-box expand">
                <section class="code-box-demo">
                    <div id="components-button-demo-button-group">
                        <h4>Basic</h4>
                        <a-button-group>
                        <a-button>Cancel</a-button>
                        <a-button type="primary">
                            OK
                        </a-button>
                        </a-button-group>
                        <a-button-group>
                        <a-button disabled>
                            L
                        </a-button>
                        <a-button disabled>
                            M
                        </a-button>
                        <a-button disabled>
                            R
                        </a-button>
                        </a-button-group>
                        <a-button-group>
                        <a-button type="primary">
                            L
                        </a-button>
                        <a-button>M</a-button>
                        <a-button>M</a-button>
                        <a-button type="dashed">
                            R
                        </a-button>
                        </a-button-group>

                        <h4>With Icon</h4>
                        <a-button-group>
                        <a-button type="primary"> <LeftOutlined />Go back </a-button>
                        <a-button type="primary"> Go forward<RightOutlined /> </a-button>
                        </a-button-group>
                        <a-button-group>
                        <a-button type="primary">
                            <template #icon><CloudOutlined /></template>
                        </a-button>
                        <a-button type="primary">
                            <template #icon><CloudDownloadOutlined /></template>
                        </a-button>
                        </a-button-group>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ButtonGroup">
                        Button Group
                        <a class="anchor" href="#ButtonGroup">#</a>
                    </h4>
                    <p>
                        <code>Buttons</code> can be grouped by placing multiple Button components into a <code>Button.Group</code>.
                        The <code>size</code> can be set to <code>large</code>, <code>small</code> or left unset resulting in a default size.
                    </p>
                </section>
            </section>

            <section id="components-button-demo-ghost-button" class="code-box">
                <section class="code-box-demo">
                    <div :style="{ background: 'rgb(226, 226, 232)', padding: '26px 24px 24px' }">
                        <a-button type="primary" ghost>
                        Primary
                        </a-button>
                        <a-button ghost>
                        Default
                        </a-button>
                        <a-button type="dashed" ghost>
                        Dashed
                        </a-button>
                        <a-button type="danger" ghost>
                        Danger
                        </a-button>
                        <a-button type="link" ghost>
                        Link
                        </a-button>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="GhostButton">
                        Ghost Button
                        <a class="anchor" href="#GhostButton">#</a>
                    </h4>
                    <p>
                        <code>ghost</code> property will make button's background transparent, it is common used in colored background.
                    </p>
                </section>
            </section>

            <section id="components-button-demo-loading" class="code-box">
                <section class="code-box-demo">
                        <a-button type="primary" loading>
                            Loading
                        </a-button>
                        <a-button type="primary" size="small" loading>
                            Loading
                        </a-button>
                        <br />
                        <a-button type="primary" :loading="loading" @mouseenter="enterLoading">
                            mouseenter me!
                        </a-button>
                        <a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
                            1s
                        </a-button>
                        <br />
                        <a-button type="primary" loading />
                        <a-button type="primary" shape="circle" loading />
                        <a-button type="danger" shape="round" loading />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Loading">
                        Loading
                        <a class="anchor" href="#Loading">#</a>
                    </h4>
                    <p>
                        A loading indicator can be added to a button by setting the <code>loading</code> property on the <code>Button</code>.
                    </p>
                </section>
            </section>

            <section id="components-button-demo-multiple" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary">Primary</a-button>
                    <a-button>Secondary</a-button>
                    <a-dropdown>
                        <template #overlay>
                        <a-menu @click="handleMenuClick">
                            <a-menu-item key="1">1st item</a-menu-item>
                            <a-menu-item key="2">2nd item</a-menu-item>
                            <a-menu-item key="3">3rd item</a-menu-item>
                        </a-menu>
                        </template>
                        <a-button>
                        Actions
                        <DownOutlined />
                        </a-button>
                    </a-dropdown>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Multiple">
                        Multiple Button
                        <a class="anchor" href="#Multiple">#</a>
                    </h4>
                    <p>
                        A loading indicator can be added to a button by setting the <code>loading</code> property on the <code>Button</code>.
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import { 
  SettingOutlined,
  DribbbleOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  CloudDownloadOutlined,
  CloudOutlined, } from '@ant-design/icons-vue';

import { ref } from 'vue';

export default {
  components: {
    SettingOutlined,
    DribbbleOutlined,
    DownOutlined,
    LeftOutlined,
    RightOutlined,
    CloudDownloadOutlined,
    CloudOutlined,
  },
  data() {
    return {
      loading: false,
      iconLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
  },
  setup() {
    return {
      size: ref('large'),
    };
  },
};
</script>

<style>

#components-button-demo-ghost-button .ant-btn,
#components-button-demo-multiple .ant-btn,
#components-button-demo-size .ant-btn,
#components-button-demo-loading .ant-btn,
#components-button-demo-button-group .ant-btn-group,
#components-button-demo-icon .ant-btn,
#components-button-demo-type .ant-btn{
    margin: 0 16px 16px 0;
}

#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}

#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}

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