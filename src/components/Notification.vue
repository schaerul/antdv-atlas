<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-notification-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" @click="openNotification">
                        Open the notification box
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NotifBasic">
                        Basic
                        <a class="anchor" href="#NotifBasic">#</a>
                    </h4>
                    <p>
                        The simplest usage that close the notification box after 4.5s.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-notification-demo-placement" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-button type="primary" @click="openNotification4('topLeft')">
                        <radius-upleft-outlined />
                        topLeft
                        </a-button>
                        <a-button type="primary" @click="openNotification4('topRight')">
                        <radius-upright-outlined />
                        topRight
                        </a-button>
                        <a-divider />
                        <a-button type="primary" @click="openNotification4('bottomLeft')">
                        <radius-bottomleft-outlined />
                        bottomLeft
                        </a-button>
                        <a-button type="primary" @click="openNotification4('bottomRight')">
                        <radius-bottomright-outlined />
                        bottomRight
                        </a-button>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Placement">
                        Placement
                        <a class="anchor" href="#Placement">#</a>
                    </h4>
                    <p>
                        A notification box can pop up from <code>topRight</code> or <code>bottomRight</code> or <code>bottomLeft</code> or <code>topLeft</code>.
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
            <section id="components-notification-demo-notification-with-icon" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-button @click="() => openNotificationWithIcon('success')">
                        Success
                        </a-button>
                        <a-button @click="() => openNotificationWithIcon('info')">
                        Info
                        </a-button>
                        <a-button @click="() => openNotificationWithIcon('warning')">
                        Warning
                        </a-button>
                        <a-button @click="() => openNotificationWithIcon('error')">
                        Error
                        </a-button>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NotificationIcon">
                        Notification with Icon
                        <a class="anchor" href="#NotificationIcon">#</a>
                    </h4>
                    <p>
                        A notification box with a icon at the left side.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-notification-demo-duration-after-which-the-notification-box-is-closed" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" @click="openNotification2">
                        Open the notification box
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DurationClosed">
                        Duration Closed
                        <a class="anchor" href="#DurationClosed">#</a>
                    </h4>
                    <p>
                        <code>Duration</code> can be used to specify how long the notification stays open. After the duration time elapses,
                        the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,
                        the notification box will never close automatically.    
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-notification-demo-custom-close-button" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" @click="openNotification3">
                        Open the notification box
                    </a-button>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomClose">
                        Custom Close Button
                        <a class="anchor" href="#CustomClose">#</a>
                    </h4>
                    <p>
                        To customize the style or font of the close button.  
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
import { notification, Button } from 'ant-design-vue';
import { h } from 'vue';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons-vue';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export default {
  components: {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
  },
  methods: {
    openNotification() {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    },
    openNotification2() {
      notification.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 3,
      });
    },
    openNotification3() {
      const key = `open${Date.now()}`;
      notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h(
          Button,
          {
            type: 'primary',
            size: 'small',
            onClick: () => notification.close(key),
          },
          'Confirm',
        ),
        key,
        onClose: close,
      });
    },
    openNotification4(placement) {
      notification.open({
        message: `Notification ${placement}`,
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
      });
    },
    openNotificationWithIcon(type) {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    },
  },
};
</script>

<style>
#components-notification-demo-notification-with-icon .ant-btn{
    margin-right: 16px;
}

#components-notification-demo-placement .ant-btn{
    margin-right: 16px;
}
</style>