<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-alert-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-alert message="Success Text" type="success" /><br />
                    <a-alert message="Info Text" type="info" /><br />
                    <a-alert message="Warning Text" type="warning" /><br />
                    <a-alert message="Error Text" type="error" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Basic">
                        Basic Usage & Type
                        <a class="anchor" href="#Basic">#</a>
                    </h4>
                    <p>
                        The basic example.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-alert-demo-banner" class="code-box">
                <section class="code-box-demo">
                    <a-alert message="Warning text" banner />
                    <br />
                    <a-alert
                        message="Very long warning text warning text text text text text text text"
                        banner
                        closable
                    />
                    <br />
                    <a-alert :show-icon="false" message="Warning text without icon" banner />
                    <br />
                    <a-alert type="error" message="Error text" banner />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BannerAlert">
                        Banner
                        <a class="anchor" href="#BannerAlert">#</a>
                    </h4>
                    <p>
                        The basic example.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-alert-demo-icon" class="code-box">
                <section class="code-box-demo">
                    <a-alert message="Success Tips" type="success" show-icon /><br />
                    <a-alert message="Informational Notes" type="info" show-icon /><br />
                    <a-alert message="Warning" type="warning" show-icon /><br />
                    <a-alert message="Error" type="error" show-icon /><br />
                    <a-alert
                        message="Success Tips"
                        description="Detailed description and advices about successful copywriting."
                        type="success"
                        show-icon
                    />
                    <br />
                    <a-alert
                        message="Informational Notes"
                        description="Additional description and informations about copywriting."
                        type="info"
                        show-icon
                    />
                    <br />
                    <a-alert
                        message="Warning"
                        description="This is a warning notice about copywriting."
                        type="warning"
                        show-icon
                    />
                    <br />
                    <a-alert
                        message="Error"
                        description="This is an error message about copywriting."
                        type="error"
                        show-icon
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="WithIcon">
                        Icon
                        <a class="anchor" href="#WithIcon">#</a>
                    </h4>
                    <p>
                        Set <code>icon</code> props to customize the icon.
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
            <section id="components-popconfirm-demo-placement" class="code-box expand">
                <section class="code-box-demo">
                    <div id="components-alert-demo-description">
                        <a-alert message="Success Text" type="success">
                            <template #description>
                            <p>
                                Success Description
                                <span style="color: red">Success</span>
                                Description Success Description
                            </p>
                            </template>
                        </a-alert>
                        <br />
                        <a-alert
                            message="Info Text"
                            description="Info Description Info Description Info Description Info Description"
                            type="info"
                        />
                        <br />
                        <a-alert
                            message="Warning Text"
                            description="Warning Description Warning Description Warning Description Warning Description"
                            type="warning"
                        />
                        <br />
                        <a-alert
                            message="Error Text"
                            description="Error Description Error Description Error Description Error Description"
                            type="error"
                        />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Description">
                        Description
                        <a class="anchor" href="#Description">#</a>
                    </h4>
                    <p>
                        There are 12 <code>placement</code> options available. Use <code>arrowPointAtCenter</code> if you want arrow point at the center of target.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-alert-demo-custom-icon" class="code-box">
                <section class="code-box-demo">
                    <a-alert message="showIcon = false" type="success">
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert message="Success Tips" type="success" showIcon>
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert message="Informational Notes" type="info" showIcon>
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert message="Warning" type="warning" showIcon>
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert message="Error" type="error" showIcon>
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert
                        message="Success Tips"
                        description="Detailed description and advices about successful copywriting."
                        type="success"
                        show-icon
                    >
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert
                        message="Informational Notes"
                        description="Additional description and informations about copywriting."
                        type="info"
                        show-icon
                    >
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert
                        message="Warning"
                        description="This is a warning notice about copywriting."
                        type="warning"
                        show-icon
                    >
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                    <br />
                    <a-alert
                        message="Error"
                        description="This is an error message about copywriting."
                        type="error"
                        show-icon
                    >
                        <template #icon><smile-outlined /></template>
                    </a-alert>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomIcon">
                        Custom Icon
                        <a class="anchor" href="#CustomIcon">#</a>
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

            <section id="components-alert-demo-close-text" class="code-box">
                <section class="code-box-demo">
                    <a-alert message="Info Text" type="info" close-text="Close Now" />
                    <br />
                    <a-alert
                        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                        type="warning"
                        closable
                        @close="onClose"
                    />
                    <br />
                    <a-alert
                        message="Error Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description"
                        type="error"
                        closable
                        @close="onClose"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomCloseText">
                        Customize Close Text
                        <a class="anchor" href="#CustomCloseText">#</a>
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

<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  
});
</script>