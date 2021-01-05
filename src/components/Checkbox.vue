<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-checkbox-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-checkbox v-model:checked="checked" @change="onChange">
                        Checkbox
                    </a-checkbox>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CheckboxBasic">
                        Basic
                        <a class="anchor" href="#CheckboxBasic">#</a>
                    </h4>
                    <p>
                        Basic usage of checkbox.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-checkbox-demo-disabled" class="code-box">
                <section class="code-box-demo">
                    <a-checkbox v-model:checked="checked1" disabled>
                        Option A
                    </a-checkbox>
                    <br />
                    <br />
                    <a-checkbox v-model:checked="checked2" disabled>
                        Option B
                    </a-checkbox>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CheckboxDisabled">
                        Disabled
                        <a class="anchor" href="#CheckboxDisabled">#</a>
                    </h4>
                    <p>
                        Disabled checkbox.
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
            <section id="components-checkbox-demo-controlled-checkbox" class="code-box expand">
                <section class="code-box-demo">
                    <p :style="{ marginBottom: '20px' }">
                        <a-checkbox v-model:checked="checked3" :disabled="disabled">
                        {{ label }}
                        </a-checkbox>
                    </p>
                    <p>
                        <a-button type="primary" size="small" @click="toggleChecked">
                        {{ !checked3 ? 'Check' : 'Uncheck' }}
                        </a-button>
                        <a-button :style="{ marginLeft: '10px' }" type="primary" size="small" @click="toggleDisable">
                        {{ !disabled ? 'Disable' : 'Enable' }}
                        </a-button>
                    </p>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ControlledCheckbox">
                        Controlled Checkbox 
                        <a class="anchor" href="#ControlledCheckbox">#</a>
                    </h4>
                    <p>
                        Communicated with other components.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-checkbox-demo-check-all" class="code-box">
                <section class="code-box-demo">
                    <div :style="{ borderBottom: '1px solid #f3f3f4', marginTop: '16px' }">
                        <a-checkbox
                        v-model:checked="checkAll"
                        :indeterminate="indeterminate"
                        @change="onCheckAllChange"
                        >
                        Check all
                        </a-checkbox>
                    </div>
                    <br />
                    <a-checkbox-group v-model:value="checkedList" :options="plainOptions" @change="onChange2" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CheckAll">
                        Check All 
                        <a class="anchor" href="#CheckAll">#</a>
                    </h4>
                    <p>
                        The <code>indeterminate</code> property can help you to achieve a 'check all' effect.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-checkbox-demo-use-with-grid" class="code-box">
                <section class="code-box-demo">
                    <a-checkbox-group v-model:value="value">
                        <a-row>
                        <a-col :span="8">
                            <a-checkbox value="A">
                            A
                            </a-checkbox>
                        </a-col>
                        <a-col :span="8">
                            <a-checkbox value="B">
                            B
                            </a-checkbox>
                        </a-col>
                        <a-col :span="8">
                            <a-checkbox value="C">
                            C
                            </a-checkbox>
                        </a-col>
                        <a-col :span="8">
                            <a-checkbox value="D">
                            D
                            </a-checkbox>
                        </a-col>
                        <a-col :span="8">
                            <a-checkbox value="E">
                            E
                            </a-checkbox>
                        </a-col>
                        </a-row>
                    </a-checkbox-group>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CheckGrid">
                        Use with Grid 
                        <a class="anchor" href="#CheckGrid">#</a>
                    </h4>
                    <p>
                        We can use <code>checkbox</code> and Grid <code>checkbox.group</code>, to implement complex layout
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
const plainOptions = ['Apple', 'Pear', 'Orange'];

export default {
  data() {
    return {
      value: [],
      checked: false,
      checked1: false,
      checked2: false,
      checked3: true,
      disabled: false,
      checkedList: ['Apple', 'Orange'],
      indeterminate: true,
      checkAll: false,
      plainOptions,
    };
  },
  computed: {
    label() {
      const { checked3, disabled } = this;
      return `${checked3 ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
    },
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    toggleChecked() {
      this.checked3 = !this.checked3;
    },
    toggleDisable() {
      this.disabled = !this.disabled;
    },
    onChange2(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    },
  },
};
</script>