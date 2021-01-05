<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-dropdown-demo-other-elements" class="code-box">
                <section class="code-box-demo">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()"> Hover me <DownOutlined /> </a>
                        <template #overlay>
                        <a-menu>
                            <a-menu-item key="0">
                            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"
                                >1st menu item</a
                            >
                            </a-menu-item>
                            <a-menu-item key="1">
                            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"
                                >2nd menu item</a
                            >
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3" disabled>
                            3rd menu item（disabled）
                            </a-menu-item>
                        </a-menu>
                        </template>
                    </a-dropdown>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="OtherElements">
                        Other Elements
                        <a class="anchor" href="#OtherElements">#</a>
                    </h4>
                    <p>
                        Divider and disabled menu item.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-dropdown-demo-trigger-mode" class="code-box">
                <section class="code-box-demo">
                    <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()"> Click me <DownOutlined /> </a>
                        <template #overlay>
                        <a-menu>
                            <a-menu-item key="0">
                            <SettingOutlined />Edit
                            </a-menu-item>
                            <a-menu-item key="1">
                            <SettingOutlined />Delete
                            </a-menu-item>
                            <a-menu-item key="4">
                            <SettingOutlined />View Details
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3">
                            <SettingOutlined />Activate
                            </a-menu-item>
                        </a-menu>
                        </template>
                    </a-dropdown>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TriggerMode">
                        Trigger Mode
                        <a class="anchor" href="#TriggerMode">#</a>
                    </h4>
                    <p>
                        The default trigger mode is <code>hover</code>, you can change it to <code>click</code>.
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
            <section id="ccomponents-dropdown-demo-basic" class="code-box expand">
                <section class="code-box-demo">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()"> Hover me <DownOutlined /> </a>
                        <template #overlay>
                        <a-menu>
                            <a-menu-item>
                            <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                            <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                            <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                        </template>
                    </a-dropdown>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DropdownBasic">
                        Basic
                        <a class="anchor" href="#DropdownBasic">#</a>
                    </h4>
                    <p>
                        The most basic dropdown menu.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-dropdown-demo-cascading-menu" class="code-box">
                <section class="code-box-demo">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        Cascading menu <DownOutlined />
                        </a>
                        <template #overlay>
                        <a-menu>
                            <a-menu-item>1st menu item</a-menu-item>
                            <a-menu-item>2nd menu item</a-menu-item>
                            <a-sub-menu key="test" title="sub menu">
                            <a-menu-item>3rd menu item</a-menu-item>
                            <a-menu-item>4th menu item</a-menu-item>
                            </a-sub-menu>
                            <a-sub-menu title="disabled sub menu" disabled>
                            <a-menu-item>5d menu item</a-menu-item>
                            <a-menu-item>6th menu item</a-menu-item>
                            </a-sub-menu>
                        </a-menu>
                        </template>
                    </a-dropdown>
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
import { DownOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    DownOutlined,
    SettingOutlined,
  },
};
</script>