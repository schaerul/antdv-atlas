<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
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
            </section>

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
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
             <section id="components-dropdown-demo-button" class="code-box">
                <section class="code-box-demo">
                    <div class="demo-dropdown-wrap">
                        <a-dropdown-button @click="handleButtonClick">
                        Button
                        <template #overlay>
                            <a-menu @click="handleMenuClick">
                            <a-menu-item key="1">
                                <SettingOutlined />
                                1st menu item
                            </a-menu-item>
                            <a-menu-item key="2">
                                <SettingOutlined />
                                2nd menu item
                            </a-menu-item>
                            <a-menu-item key="3">
                                <SettingOutlined />
                                3rd item
                            </a-menu-item>
                            </a-menu>
                        </template>
                        </a-dropdown-button>
                        <a-dropdown-button>
                        Button
                        <template #overlay>
                            <a-menu @click="handleMenuClick">
                            <a-menu-item key="1">
                                <SettingOutlined />
                                1st menu item
                            </a-menu-item>
                            <a-menu-item key="2">
                                <SettingOutlined />
                                2nd menu item
                            </a-menu-item>
                            <a-menu-item key="3">
                                <SettingOutlined />
                                3rd item
                            </a-menu-item>
                            </a-menu>
                        </template>
                        <template #icon><SettingOutlined /></template>
                        </a-dropdown-button>
                        <a-dropdown-button disabled @click="handleButtonClick">
                        Button
                        <template #overlay>
                            <a-menu @click="handleMenuClick">
                            <a-menu-item key="1">
                                <SettingOutlined />
                                1st menu item
                            </a-menu-item>
                            <a-menu-item key="2">
                                <SettingOutlined />
                                2nd menu item
                            </a-menu-item>
                            <a-menu-item key="3">
                                <SettingOutlined />
                                3rd item
                            </a-menu-item>
                            </a-menu>
                        </template>
                        </a-dropdown-button>
                        <a-dropdown>
                        <template #overlay>
                            <a-menu @click="handleMenuClick">
                            <a-menu-item key="1">
                                <SettingOutlined />
                                1st menu item
                            </a-menu-item>
                            <a-menu-item key="2">
                                <SettingOutlined />
                                2nd menu item
                            </a-menu-item>
                            <a-menu-item key="3">
                                <SettingOutlined />
                                3rd item
                            </a-menu-item>
                            </a-menu>
                        </template>
                        <a-button>
                            Button
                            <DownOutlined />
                        </a-button>
                        </a-dropdown>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DropdownButton">
                        Dropdown Button
                        <a class="anchor" href="#DropdownButton">#</a>
                    </h4>
                    <p>
                        A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.
                    </p>
                </section>
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

<style>

.demo-dropdown-wrap .ant-dropdown-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>