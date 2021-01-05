<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-switch-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-switch v-model:checked="checked" @change="onChange" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SwitchBasic">
                        Basic
                        <a class="anchor" href="#SwitchBasic">#</a>
                    </h4>
                    <p>
                        The most basic usage.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-switch-demo-text-icon" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-switch checked-children="Yes" un-checked-children="No" v-model:checked="checked1" />
                        <br />
                        <a-switch checked-children="1" un-checked-children="0" v-model:checked="checked2" />
                        <br />
                        <a-switch v-model:checked="checked3">
                        <template #checkedChildren><check-outlined /></template>
                        <template #unCheckedChildren><close-outlined /></template>
                        </a-switch>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TextIcon">
                        Text & icon
                        <a class="anchor" href="#TextIcon">#</a>
                    </h4>
                    <p>
                        With text and icon.
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
            <section id="components-switch-demo-loading" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-switch loading v-model:checked="checked4" />
                        <br />
                        <a-switch loading v-model:checked="checked5" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Loading">
                        Loading
                        <a class="anchor" href="#Loading">#</a>
                    </h4>
                    <p>
                        Mark a pending state of switch.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-switch-demo-text-icon" class="code-box">
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
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';

export default {
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checked5: false,
    };
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
  components: {
    CheckOutlined,
    CloseOutlined,
  },
};
</script>

<style>
#components-switch-demo-text-icon .ant-switch{
    margin-bottom: 16px;
}
#components-switch-demo-loading .ant-switch{
    margin-bottom: 16px;
}
</style>