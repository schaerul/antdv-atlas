<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-modal-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-button type="primary" @click="showModal2">
                        Open Modal
                        </a-button>
                        <a-modal v-model:visible="visible2" title="Create Site" :closable=false @ok="handleOk2" okText="Submit" cancelText="Discard">
                          <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" layout="vertical">
                              <a-form-item label="Name">
                                <a-input v-model:value="form.name" />
                              </a-form-item>
                                <a-row>
                                  <a-col :span="12">
                                      <a-form-item label="Location">
                                        <a-select v-model:value="form.region" placeholder="Site location">
                                          <a-select-option value="bandung">
                                            Bandung
                                          </a-select-option>
                                          <a-select-option value="jakarta">
                                            Jakarta
                                          </a-select-option>
                                        </a-select>
                                      </a-form-item>
                                  </a-col>
                                  <a-col :span="6" :offset="1">
                                      <a-form-item label="Deploy Date">
                                        <a-date-picker
                                          v-model:value="form.date1"
                                          show-time
                                          type="date"
                                          placeholder="Pick a date"
                                          style="width: 100%;"
                                        />
                                      </a-form-item>
                                  </a-col>
                                </a-row>
                              <a-form-item label="Instant delivery">
                                <a-switch v-model:checked="form.delivery" />
                              </a-form-item>
                              <a-form-item label="Activity type">
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
                              <a-form-item label="Resources">
                                <a-radio-group v-model:value="form.resource">
                                  <a-radio value="1">
                                    Sponsor
                                  </a-radio>
                                  <a-radio value="2">
                                    Venue
                                  </a-radio>
                                </a-radio-group>
                              </a-form-item>
                              <a-form-item label="Notes">
                                <a-textarea v-model:value="value" placeholder="Give a little more details about your site" :rows="3" showCount :maxlength="100" />
                              </a-form-item>
                            </a-form>
                        </a-modal>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicModal">
                        Basic Modal
                        <a class="anchor" href="#BasicModal">#</a>
                    </h4>
                    <p>
                        Basic modal.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-modal-demo-confirmation-modal-dialog" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-button @click="showConfirm">
                        Confirm
                        </a-button>
                        <a-button type="dashed" @click="showDeleteConfirm">
                        Delete
                        </a-button>
                        <a-button type="dashed" @click="showPropsConfirm">
                        With extra props
                        </a-button>
                    </div>                   
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ConfirmDialog">
                        Confirmation Modal Dialog
                        <a class="anchor" href="#ConfirmDialog">#</a>
                    </h4>
                    <p>
                        To use <code>confirm()</code> to show a confirmation modal dialog.
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
            <section id="components-modal-demo-customized-footer" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-button type="primary" @click="showModal">
                        Open Modal with Customized Footer
                        </a-button>
                        <a-modal v-model:visible="visible" title="Title" :closable=false @ok="handleOk">
                        <template #footer>
                            <a-button key="back" @click="handleCancel">
                            Return
                            </a-button>
                            <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                            Submit
                            </a-button>
                        </template>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        </a-modal>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomizedFooter">
                        Customized Footer
                        <a class="anchor" href="#CustomizedFooter">#</a>
                    </h4>
                    <p>
                        A more complex example which define a customized footer button bar,
                        the dialog will change to loading state after clicking submit button, when the loading is over,
                        the modal dialog will be closed.
                        You could set <code>footer</code> to <code>null</code> if you don't need default footer buttons.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-statistic-demo-countdown" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-button @click="info">
                        Info
                        </a-button>
                        <a-button @click="success">
                        Success
                        </a-button>
                        <a-button @click="error">
                        Error
                        </a-button>
                        <a-button @click="warning">
                        Warning
                        </a-button>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="InformationModal">
                        Information Modal Dialog
                        <a class="anchor" href="#InformationModal">#</a>
                    </h4>
                    <p>
                        In the various types of information modal dialog, only one button to close dialog is provided.
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
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { Modal } from 'ant-design-vue';

export default {
  data() {
    return {
      visible: false,
      loading: false,
      visible2: false,
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    showModal() {
      this.visible = true;
    },
    showModal2() {
      this.visible2 = true;
    },
    handleOk2(e) {
      console.log(e);
      this.visible2 = false;
    },
    handleOk(e) {
      console.log(e)
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      console.log(e)
      this.visible = false;
    },

    showConfirm() {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },

    showDeleteConfirm() {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    showPropsConfirm() {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          disabled: true,
        },
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
  },
};
</script>

<style>
#components-modal-demo-confirmation-modal-dialog .ant-btn{
    margin-right: 16px;
}
</style>