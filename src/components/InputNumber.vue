<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-input-number-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" @change="onChange" />
                        <br/><br/>Current Value: {{ value }}
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NumberBasic">
                        Basic
                        <a class="anchor" href="#NumberBasic">#</a>
                    </h4>
                    <p>
                        Numeric-only input box.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-input-number-demo-formatter" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-input-number
                        v-model:value="value1"
                        :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                        @change="onChange"
                        />
                        <a-input-number
                        v-model:value="value2"
                        :min="0"
                        :max="100"
                        :formatter="value => `${value}%`"
                        :parser="value => value.replace('%', '')"
                        @change="onChange2"
                        />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Formatter">
                        Formatter
                        <a class="anchor" href="#Formatter">#</a>
                    </h4>
                    <p>
                        Display value within it's situation with <code>formatter</code>, and we usually use <code>parser</code> at the same time.
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

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-input-number-demo-decimals" class="code-box expand">
                <section class="code-box-demo">
                    <a-input-number v-model:value="value4" :min="0" :max="10" :step="0.1" @change="onChange" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NoDescription">
                        Decimals
                        <a class="anchor" href="#NoDescription">#</a>
                    </h4>
                    <p>
                        A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-empty-demo-chose-image" class="code-box">
                <section class="code-box-demo">
                    <a-empty :image="simpleImage" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomImage">
                        Choose Image
                        <a class="anchor" href="#CustomImage">#</a>
                    </h4>
                    <p>
                        You can choose another style of <code>image</code> by setting image to <code>Empty.PRESENTED_IMAGE_SIMPLE</code>.
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
export default {
  data() {
    return {
      value: 3,
      value1: 1000,
      value2: 100,
      value4: null,
    };
  },
  methods: {
    onChange(value) {
      console.log('changed', value);
    },
    onChange2(value) {
      console.log('changed', value);
    },
  },
};
</script>

<style>
#components-input-number-demo-formatter .ant-input-number{
    margin-right: 16px;
}
</style>