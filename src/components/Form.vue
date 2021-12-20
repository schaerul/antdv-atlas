<template>
    <a-row>

        <a-col :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-form-demo-validation" class="code-box">
                <section class="code-box-demo">
                    <a-form
                        ref="ruleForm"
                        :model="form"
                        :rules="rules"
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        layout="vertical"
                    >
                        <a-form-item ref="name" label="Activity name" name="name">
                        <a-input v-model:value="form.name" />
                        </a-form-item>
                        <a-form-item label="Activity Zone" name="region">
                        <a-select v-model:value="form.region" placeholder="please select your zone">
                            <a-select-option value="shanghai">
                            Zone one
                            </a-select-option>
                            <a-select-option value="beijing">
                            Zone two
                            </a-select-option>
                        </a-select>
                        </a-form-item>
                        <a-form-item label="Activity time" required name="date1">
                        <a-date-picker
                            v-model:value="form.date1"
                            show-time
                            type="date"
                            placeholder="Pick a date"
                            style="width: 100%;"
                        />
                        </a-form-item>
                        <a-form-item label="Instant delivery" name="delivery">
                        <a-switch v-model:checked="form.delivery" />
                        </a-form-item>
                        <a-form-item label="Activity Type" name="type">
                        <a-checkbox-group v-model:value="form.type">
                            <a-checkbox value="1" name="type">
                            Online
                            </a-checkbox>
                            <a-checkbox value="2" name="type">
                            Promotion
                            </a-checkbox>
                            <a-checkbox value="3" name="type">
                            Offline
                            </a-checkbox>
                        </a-checkbox-group>
                        </a-form-item>
                        <a-form-item label="Resources" name="resource">
                        <a-radio-group v-model:value="form.resource">
                            <a-radio value="1">
                            Sponsor
                            </a-radio>
                            <a-radio value="2">
                            Venue
                            </a-radio>
                        </a-radio-group>
                        </a-form-item>
                        <a-form-item label="Activity Form" name="desc">
                          <a-textarea v-model:value="form.desc" />
                        </a-form-item>
                        <a-form-item :wrapper-col="{ span: 12 }">
                        <a-button type="primary" @click="onSubmit">
                            Create
                        </a-button>
                        <a-button style="margin-left: 10px;" @click="resetForm">
                            Reset
                        </a-button>
                        </a-form-item>
                    </a-form>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="FormValidation">
                        Form with Validation
                        <a class="anchor" href="#FormValidation">#</a>
                    </h4>
                    <p>
                        Just add the <code>rules</code> attribute for <code>Form</code> component, pass validation rules,
                        and set <code>prop</code> attribute for <code>FormItem</code> as a specific key that needs to be
                        validated. See more information at <a href="https://github.com/yiminghe/async-validator" data-v-67a5e324-s="">async-validator</a>.
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
            <section id="components-form-demo-dynamic-form-item" class="code-box">
                <section class="code-box-demo">
                    <a-form
                        ref="dynamicValidateForm"
                        :model="dynamicValidateForm"
                        v-bind="formItemLayoutWithOutLabel"
                        layout="vertical"
                        :style="{ textAlign: 'Left' }"
                    >
                        <a-form-item
                        v-for="(domain, index) in dynamicValidateForm.domains"
                        :key="domain.key"
                        v-bind="index === 0 ? formItemLayout : {}"
                        :label="index === 0 ? 'Domains' : ''"
                        :name="['domains', index, 'value']"
                        :rules="{
                            required: true,
                            message: 'domain can not be null',
                            trigger: 'change',
                        }"
                        >
                        <a-input
                            v-model:value="domain.value"
                            placeholder="e.g.: yourname@domain.com"
                            style="width: 80%; margin-right: 8px"
                        />
                        <MinusCircleOutlined
                            v-if="dynamicValidateForm.domains.length > 1"
                            class="dynamic-delete-button"
                            :disabled="dynamicValidateForm.domains.length === 1"
                            @click="removeDomain(domain)"
                        />
                        </a-form-item>
                        <a-form-item v-bind="formItemLayoutWithOutLabel">
                        <a-button type="dashed" style="width: 80%;" @click="addDomain">
                            <PlusOutlined /> Add field
                        </a-button>
                        </a-form-item>
                        <a-form-item v-bind="formItemLayoutWithOutLabel">
                        <a-button type="primary" html-type="submit" @click="submitForm('dynamicValidateForm')">
                            Submit
                        </a-button>
                        <a-button style="margin-left: 10px" @click="resetForm('dynamicValidateForm')">
                            Reset
                        </a-button>
                        </a-form-item>
                    </a-form>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DynamicForm">
                        Dynamic Form Item
                        <a class="anchor" href="#DynamicForm">#</a>
                    </h4>
                    <p>
                        Add or remove form items dynamically.
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
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';

// let id = 0;
export default {

  components: {
    MinusCircleOutlined,
    PlusOutlined,
  },

  data() {
    return {
      labelCol: { span: 12 },
      wrapperCol: { span: 24 },
      other: '',
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },

      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 0 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 0 },
        },
      },
      dynamicValidateForm: {
        domains: [],
      },

      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [
          { required: true, message: 'Please pick a date', trigger: 'change', type: 'object' },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
    };
  },
  methods: {

    submitForm(formName) {
      this.$refs[formName]
        .validate()
        .then(() => {
          console.log('values', this.dynamicValidateForm.domains);
        })
        .catch(error => {
          console.log('error', error);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now(),
      });
    },

    onSubmit() {
      this.$refs.ruleForm
        .validate()
        .then(() => {
          console.log('values', this.form);
        })
        .catch(error => {
          console.log('error', error);
        });
    },
    // resetForm() {
    //   this.$refs.ruleForm.resetFields();
    // },
  },
};
</script>

<style>

.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
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
    text-align: left;
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0,0,0,.65);
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