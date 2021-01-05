<template>
    <a-row>

        <!-- Left Section -->

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-select-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <a-select
                        v-model:value="value1"
                        show-search
                        allowClear
                        placeholder="Select City"
                        option-filter-prop="children"
                        style="width: 60%"
                        :filter-option="filterOption"
                        @focus="handleFocus"
                        @blur="handleBlur"
                        @change="handleChange"
                    >
                            <a-select-option value="bandung">
                                Bandung
                            </a-select-option>
                            <a-select-option value="bogor">
                                Bogor
                            </a-select-option>
                            <a-select-option value="disabled" disabled>
                                Jakarta
                            </a-select-option>
                            <a-select-option value="cianjur">
                                Cianjur
                            </a-select-option>
                    </a-select>
                    <a-select
                        v-model:value="value2"
                        style="width: 60%" disabled
                        placeholder="Select City"
                        >
                            <a-select-option value="bandung">
                                Bandung
                            </a-select-option>
                    </a-select>
                    <a-select
                        v-model:value="value3"
                        style="width: 60%"
                        loading
                        ref="select"
                        @change="handleChange"
                        placeholder="Select City"
                        >
                            <a-select-option value="bandung">
                                Bandung
                            </a-select-option>
                            <a-select-option value="bogor">
                                Bogor
                            </a-select-option>
                            <a-select-option value="disabled" disabled>
                                Jakarta
                            </a-select-option>
                            <a-select-option value="cianjur">
                                Cianjur
                            </a-select-option>
                    </a-select>
                    <a-select
                        v-model:value="value4"
                        style="width: 60%"
                        @change="handleChange"
                        placeholder="Select City"
                        >
                            <template #suffixIcon><smile-outlined /></template>
                            <a-select-option value="bandung">Bandung</a-select-option>
                            <a-select-option value="bogor">Bogor</a-select-option>
                            <a-select-option value="disabled" disabled>Jakarta</a-select-option>
                            <a-select-option value="cianjur">Cianjur</a-select-option>
                    </a-select>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SelectBasic">
                        Basic
                        <a class="anchor" href="#SelectBasic">#</a>
                    </h4>
                    <p>
                        Select basic usage.
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
            <section id="components-select-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <a-select v-model:value="province" style="width: 40%" placeholder="Select Province">
                        <a-select-option v-for="pro in provinceData" :key="pro">
                            {{ pro }}
                        </a-select-option>
                        </a-select>
                        <a-select v-model:value="secondCity" style="width: 40%" placeholder="Select City">
                        <a-select-option v-for="city in cities" :key="city">
                            {{ city }}
                        </a-select-option>
                    </a-select>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Type">
                        Type
                        <a class="anchor" href="#Type">#</a>
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
import { SmileOutlined } from '@ant-design/icons-vue';

const provinceData = ['JawaBarat', 'Jakarta'];
const cityData = {
  JawaBarat: ['Bandung', 'Bogor', 'Cianjur'],
  Jakarta: ['Central Jakarta', 'East Jakarta', 'North Jakarta', 'West Jakarta'],
};

export default {
  data() {
    const province = provinceData[0];
    return {
      value1: [],
      value2: [],
      value3: [],
      value4: [],
      province,
      provinceData,
      cityData,
      secondCity: cityData[province][0],
    };
  },

  computed: {
    cities() {
      return cityData[this.province];
    },
  },

  watch: {
    province(val) {
      this.secondCity = this.cityData[val][0];
    },
  },

  components: {
    SmileOutlined,
  },

  methods: {
    handleChange(value1) {
      console.log(`selected ${value1}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
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