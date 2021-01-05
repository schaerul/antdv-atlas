<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-empty-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <div>
                        <a-avatar :size="64">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        <a-avatar size="large">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        <a-avatar>
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        <a-avatar size="small">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        </div>
                        <br />
                        <div>
                        <a-avatar shape="square" :size="64">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        <a-avatar shape="square" size="large">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        <a-avatar shape="square">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        <a-avatar shape="square" size="small">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="AvatarBasic">
                        Basic
                        <a class="anchor" href="#AvatarBasic">#</a>
                    </h4>
                    <p>
                        Three sizes and two shapes are available.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-avatar-demo-type" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-avatar>
                        <template #icon>
                            <UserOutlined />
                        </template>
                        </a-avatar>
                        <a-avatar>U</a-avatar>
                        <a-avatar>USER</a-avatar>
                        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>
                        <a-avatar style="backgroundColor:#87d068">
                        <template #icon>
                            <UserOutlined />
                        </template>
                        </a-avatar>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Type">
                        Type
                        <a class="anchor" href="#Type">#</a>
                    </h4>
                    <p>
                        Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
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
            <section id="components-avatar-demo-with-badge" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <span style="margin-right:24px">
                        <a-badge :count="1">
                            <a-avatar shape="square">
                            <template #icon><UserOutlined /></template>
                            </a-avatar>
                        </a-badge>
                        </span>
                        <span>
                        <a-badge dot>
                            <a-avatar shape="square">
                            <template #icon><UserOutlined /></template>
                            </a-avatar>
                        </a-badge>
                        </span>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="WithBadge">
                        With Badge
                        <a class="anchor" href="#WithBadge">#</a>
                    </h4>
                    <p>
                        Usually used for reminders and notifications.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-avatar-demo-autoset-font-size" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-avatar
                        shape="square"
                        size="large"
                        :style="{ backgroundColor: color, verticalAlign: 'middle' }"
                        >
                        {{ avatarValue }}
                        </a-avatar>
                        <a-button
                        size="small"
                        :style="{ marginLeft: 16, verticalAlign: 'middle' }"
                        @click="changeValue"
                        >
                        Change
                        </a-button>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="AutosetFontSize">
                        Autoset Font Size
                        <a class="anchor" href="#AutosetFontSize">#</a>
                    </h4>
                    <p>
                        For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.
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
import { UserOutlined } from '@ant-design/icons-vue';
const UserList = ['C', 'S', 'Elun', 'Musk'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
export default {
  components: {
    UserOutlined,
  },
  data() {
    return {
      avatarValue: UserList[0],
      color: colorList[0],
    };
  },
  methods: {
    changeValue() {
      const index = UserList.indexOf(this.avatarValue);
      this.avatarValue = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
      this.color = index < colorList.length - 1 ? colorList[index + 1] : colorList[0];
    },
  },
};
</script>

<style>
#components-empty-demo-basic .ant-avatar{
    margin-right: 8px;
}
#components-avatar-demo-type .ant-avatar{
    margin-right: 8px;
}
#components-avatar-demo-autoset-font-size .ant-avatar{
    margin-right: 8px;
}
</style>