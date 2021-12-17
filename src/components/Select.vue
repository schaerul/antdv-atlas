<template>
    <a-row>

        <!-- Left Section -->

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-select-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <a-radio-group v-model:value="size">
                        <a-radio-button value="large">Large</a-radio-button>
                        <a-radio-button value="default">Default</a-radio-button>
                        <a-radio-button value="small">Small</a-radio-button>
                    </a-radio-group>
                    <br />
                    <br />
                    <a-space direction="vertical" style="width: 100%">
                        <a-select
                        v-model:value="value1"
                        :size="size"
                        style="width: 100%"
                        :options="options"
                        ></a-select>
                        <a-select
                        v-model:value="value2"
                        :options="options"
                        mode="multiple"
                        :size="size"
                        placeholder="Please Select"
                        style="width: 100%"
                        @popupScroll="popupScroll"
                        ></a-select>
                        <a-select
                        v-model:value="value3"
                        :options="options"
                        mode="tags"
                        :size="size"
                        placeholder="Please Select"
                        style="width: 100%"
                        ></a-select>
                    </a-space>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SelectBasic">
                        Basic
                        <a class="anchor" href="#SelectBasic">#</a>
                    </h4>
                    <p>
                        The height of the input field for the select defaults to 46px. If size is set to large, the height will be 56px, and if set to small, 34px.
                    </p>
                </section>
            </section>
        </a-col>

        <!-- End of Left Section -->

        <!-- Right Section -->

        <a-col :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-select-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                        <a-select
                        ref="select"
                        v-model:value="value1"
                        style="width: 100%"
                        :options="options1"
                        @focus="focus"
                        @change="handleChange"
                        ></a-select>
                        <a-select v-model:value="value2" style="width: 100%" disabled :options="options2"></a-select>
                        <a-select v-model:value="value3" style="width: 100%" loading :options="options3"></a-select>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicUsage">
                        Basic Usage
                        <a class="anchor" href="#BasicUsage">#</a>
                    </h4>
                    <p>
                        Basic usage
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const popupScroll = () => {
      console.log('popupScroll');
    };

    return {
      popupScroll,
      size: ref('default'),
      value1: ref('a1'),
      value2: ref(['a1', 'b2']),
      value3: ref(['a1', 'b2']),
      options: [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })),
    };
  },
});
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

#components-select-demo-basic-usage .ant-select{
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