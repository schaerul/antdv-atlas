<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-breadcrumb-demo-basic-usage-" class="code-box">
                <section class="code-box-demo">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
                        <a-breadcrumb-item>An Application</a-breadcrumb-item>
                    </a-breadcrumb>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="EmptyBasic">
                        Basic
                        <a class="anchor" href="#EmptyBasic">#</a>
                    </h4>
                    <p>
                        Simplest usage.
                    </p>
                </section>
            </section>

            <section id="components-breadcrumb-demo-configuring-the-separator" class="code-box">
                <section class="code-box-demo">
                    <a-breadcrumb separator=">">
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item href="">
                        Application Center
                        </a-breadcrumb-item>
                        <a-breadcrumb-item href="">
                        Application List
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>An Application</a-breadcrumb-item>
                    </a-breadcrumb>
                    <a-breadcrumb>
                        <template #separator><span style="color: red">></span></template>
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item href="">
                        Application Center
                        </a-breadcrumb-item>
                        <a-breadcrumb-item href="">
                        Application List
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>An Application</a-breadcrumb-item>
                    </a-breadcrumb>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomSeparator">
                        Configuring the Separator
                        <a class="anchor" href="#CustomSeparator">#</a>
                    </h4>
                    <p>
                        The separator can be customized by setting the separator preperty: separator=">" or use
                        slot="separator"
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-breadcrumb-demo-with-an-icon" class="code-box expand">
                <section class="code-box-demo">
                    <a-breadcrumb>
                        <a-breadcrumb-item href="">
                        <home-outlined />
                        </a-breadcrumb-item>
                        <a-breadcrumb-item href="">
                        <user-outlined />
                        <span>Application List</span>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>
                        Application
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="WithIcon">
                        With an Icon
                        <a class="anchor" href="#WithIcon">#</a>
                    </h4>
                    <p>
                        The icon should be placed in front of the text.
                    </p>
                </section>
            </section>

            <section id="components-breadcrumb-demo-bread-crumbs-with-drop-down-menu" class="code-box">
                <section class="code-box-demo">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
                        <a-breadcrumb-item>
                        <a href="">General</a>
                        <template #overlay>
                            <a-menu>
                            <a-menu-item>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.atlasvm.io/">
                                General
                                </a>
                            </a-menu-item>
                            <a-menu-item>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.atlasvm.io/">
                                Layout
                                </a>
                            </a-menu-item>
                            <a-menu-item>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.atlasvm.io/">
                                Navigation
                                </a>
                            </a-menu-item>
                            </a-menu>
                        </template>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>Button</a-breadcrumb-item>
                    </a-breadcrumb>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BreadcrumbsDropdown">
                        Breadcrumbs with Dropdown Menu
                        <a class="anchor" href="#BreadcrumbsDropdown">#</a>
                    </h4>
                    <p>
                        Breadcrumbs support drop down menu.
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    HomeOutlined,
    UserOutlined,
  },
};
</script>