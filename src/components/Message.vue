<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-message-demo-normal-prompt" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" @click="info">
                        Display normal message
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NormalMessage">
                        Normal Prompt
                        <a class="anchor" href="#NormalMessage">#</a>
                    </h4>
                    <p>
                        Normal message for information.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-message-demo-message-with-loading-indicator" class="code-box">
                <section class="code-box-demo">
                    <a-button @click="success">
                        Display a loading indicator
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="LoadingIndicator">
                        Message with Loading Indicator
                        <a class="anchor" href="#LoadingIndicator">#</a>
                    </h4>
                    <p>
                        Display a global loading indicator, which is dismissed by itself asynchronously.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-message-demo-other-types-of-message" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-button @click="success3">
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
                    <h4 id="OtherMessage">
                        Other Message
                        <a class="anchor" href="#OtherMessage">#</a>
                    </h4>
                    <p>
                        Messages of success, error and warning types.
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
            <section id="components-message-demo-customize-duration" class="code-box expand">
                <section class="code-box-demo">
                    <a-button @click="success2">
                        Customized display duration
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomizeDuration">
                        Customize Duration
                        <a class="anchor" href="#CustomizeDuration">#</a>
                    </h4>
                    <p>
                        Customize message display duration from default <code>3s</code> to <code>10s</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-message-demo-update-message-content" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" @click="openMessage">
                        Open the message box
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="UpdateMessageContent">
                        Update Message Content
                        <a class="anchor" href="#UpdateMessageContent">#</a>
                    </h4>
                    <p>
                        Update message content with unique <code>key</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-message-demo-promise-interface" class="code-box">
                <section class="code-box-demo">
                    <a-button @click="success4">
                        Display a sequence of message
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="PromiseInterface">
                        Promise Interface
                        <a class="anchor" href="#PromiseInterface">#</a>
                    </h4>
                    <p>
                        <code>message</code> provides promise interface for <code>onClose</code>. The above example will display a new message when old message is about to finish.
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
import { message } from 'ant-design-vue';
const key = 'updatable';
export default {
  methods: {
    info() {
      message.info('This is a normal message');
    },
      success() {
      const hide = message.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    },
    success2() {
      message.success(
        'This is a prompt message for success, and it will disappear in 10 seconds',
        10,
      );
    },
    success3() {
      message.success('This is a success message');
    },
    success4() {
      message
        .loading('Action in progress..', 2.5)
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Loading finished is finished', 2.5));
    },
    error() {
      message.error('This is an error message');
    },
    warning() {
      message.warning('This is a warning message');
    },
    openMessage() {
      message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        message.success({ content: 'Loaded!', key, duration: 2 });
      }, 1000);
    },
  },
};
</script>

<style>
#components-message-demo-other-types-of-message .ant-btn{
    margin-right: 16px;
}
</style>