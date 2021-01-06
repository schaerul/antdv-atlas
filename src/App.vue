<template>
   <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo">
        <img alt="atlas-logo" src="./assets/atlas-logo.svg">
      </div>
      <a-menu
        theme="dark" 
        mode="inline" 
        v-model:selectedKeys="selectedKeys"
        :openKeys="openKeys"
        @openChange="onOpenChange"
      >
        <a-sub-menu key="sub1">
            <template #title>
              <span><SettingOutlined /><span>General</span></span>
            </template>
            <a-menu-item key="1">
              <router-link to="/button">
              Button
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              Icon (soon)
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template #title>
              <span><SettingOutlined /><span>Layout</span></span>
            </template>
            <a-menu-item key="3">
              Grid (soon)
            </a-menu-item>
            <a-menu-item key="4">
              Layout (soon)
            </a-menu-item>
            <a-menu-item key="5">
              Space (soon)
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
            <template #title>
              <span><SettingOutlined /><span>Navigation</span></span>
            </template>
            <a-menu-item key="6">
              Affix (soon)
            </a-menu-item>
            <a-menu-item key="7">
              <router-link to="/breadcrumb">
                Breadcrumb
              </router-link>
            </a-menu-item>
            <a-menu-item key="8">
              <router-link to="/dropdown">
                Dropdown
              </router-link>
            </a-menu-item>
            <a-menu-item key="9">
              Menu (soon)
            </a-menu-item>
            <a-menu-item key="10">
              <router-link to="/page-header">
                Page Header
              </router-link>
            </a-menu-item>
            <a-menu-item key="11">
              <router-link to="/pagination">
                Pagination
              </router-link>
            </a-menu-item>
            <a-menu-item key="12">
              <router-link to="/steps">
                Steps
              </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
            <template #title>
              <span><SettingOutlined /><span>Data Entry</span></span>
            </template>
            <a-menu-item key="13">
              <router-link to="/autocomplete">
                AutoComplete
              </router-link>
            </a-menu-item>
            <a-menu-item key="14">
              <router-link to="/cascader">
              Cascader
              </router-link>
            </a-menu-item>
            <a-menu-item key="15">
              <router-link to="/checkbox">
              Checkbox
              </router-link>
            </a-menu-item>
            <a-menu-item key="16">
              <router-link to="/datepicker">
              Date Picker
              </router-link>
            </a-menu-item>
            <a-menu-item key="17">
              <router-link to="/form">
                Form
              </router-link>
            </a-menu-item>
            <a-menu-item key="19">
              <router-link to="/input">
                Input
              </router-link>
            </a-menu-item>
            <a-menu-item key="20">
              <router-link to="/input-number">
              InputNumber
              </router-link>
            </a-menu-item>
            <a-menu-item key="21">
              Mention
            </a-menu-item>
            <a-menu-item key="22">
              <router-link to="/radio">
              Radio Button
              </router-link>
            </a-menu-item>
            <a-menu-item key="23">
              Rate
            </a-menu-item>
            <a-menu-item key="24">
              <router-link to="/select">
                Select
              </router-link>>
            </a-menu-item>
            <a-menu-item key="25">
              Slider
            </a-menu-item>
            <a-menu-item key="26">
              <router-link to="/switch">
              Switch
              </router-link>
            </a-menu-item>
            <a-menu-item key="27">
              <router-link to="/time-picker">
                TimePicker
              </router-link>
            </a-menu-item>
            <a-menu-item key="28">
              <router-link to="/transfer">
                Transfer
              </router-link>
            </a-menu-item>
            <a-menu-item key="29">
              <router-link to="/treeselect">
                TreeSelect
              </router-link>
            </a-menu-item>
            <a-menu-item key="30">
              <router-link to="/upload">
              Upload
              </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub5">
            <template #title>
              <span><SettingOutlined /><span>Data Display</span></span>
            </template>
            <a-menu-item key="49">
              <router-link to="/avatar">
                Avatar
              </router-link>
            </a-menu-item>
            <a-menu-item key="33">
              <router-link to="/badge">
                Badge
              </router-link>
            </a-menu-item>
            <a-menu-item key="">
              <router-link to="">
                Card
              </router-link>
            </a-menu-item>
            <a-menu-item key="41">
              <router-link to="/collapse">
                Collapse
              </router-link>
            </a-menu-item>
            <a-menu-item key="44">
              <router-link to="/description">
                Description
              </router-link>
            </a-menu-item>
            <a-menu-item key="43">
              <router-link to="/empty">
                Empty
              </router-link>
            </a-menu-item>
            <a-menu-item key="34">
              <router-link to="/tab">
                Tab
              </router-link>
            </a-menu-item>
            <a-sub-menu key="sub5-1">
              <template #title>
                <span>Table</span>
              </template>
                <a-menu-item key="31">
                  <router-link to="/table-fixedcolumnheader">
                    Fixed Column/Header
                  </router-link>
                </a-menu-item>
                <a-menu-item key="54">
                  <router-link to="">
                    Editable Cell
                  </router-link>
                </a-menu-item>
                <a-menu-item key="53">
                  <router-link to="/editable-row">
                    Editable Row
                  </router-link>
                </a-menu-item>
                <a-menu-item key="32">
                  <router-link to="/table-ellipses">
                    Ellipsis Column
                  </router-link>
                </a-menu-item>
                <a-menu-item key="52">
                  <router-link to="/expandable-row">
                    Expandable Rows
                  </router-link>
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="45">
              <router-link to="/tag">
                Tag
              </router-link>
            </a-menu-item>
            <a-menu-item key="50">
              <router-link to="/timeline">
                Timeline
              </router-link>
            </a-menu-item>
            <a-menu-item key="42">
              <router-link to="/tooltip">
                Tooltip
              </router-link>
            </a-menu-item>
            <a-menu-item key="35">
              <router-link to="/statistic">
                Statistic
              </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub6">
            <template #title>
              <span><SettingOutlined /><span>Feedback</span></span>
            </template>
            <a-menu-item key="36">
              Alert
            </a-menu-item>
            <a-menu-item key="37">
              <router-link to="/drawer">
                Drawer
              </router-link>
            </a-menu-item>
            <a-menu-item key="47">
              <router-link to="/message">
                Message
              </router-link>
            </a-menu-item>
            <a-menu-item key="39">
              <router-link to="/modal">
                Modal
              </router-link>
            </a-menu-item>
            <a-menu-item key="48">
              <router-link to="/notification">
                Notification
              </router-link>
            </a-menu-item>
            <a-menu-item key="40">
              <router-link to="/popconfirm">
                Popconfirm
              </router-link>
            </a-menu-item>
            <a-menu-item key="51">
              <router-link to="/progress">
                Progress
              </router-link>
            </a-menu-item>
            <a-menu-item key="46">
              <router-link to="/skeleton">
                Skeleton
              </router-link>
            </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '240px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        ©2020. made with ❤ from atlasdsgn
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  SettingOutlined,
} from '@ant-design/icons-vue';

export default {

  components: {
    SettingOutlined,
  },

  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'],
      openKeys: ['sub1'],
      selectedKeys: [1],
    };
  },

  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },

};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');


#app {
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

#components-layout-demo-fixed-sider .logo {
  margin: 24px;
}

#components-layout-demo-fixed-sider .logo .img {
  height: 20px;
}
</style>
