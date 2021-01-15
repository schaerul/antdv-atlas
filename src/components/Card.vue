<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-card-demo-basic-card" class="code-box">
                <section class="code-box-demo">
                    <a-card title="Default size card" style="width: 300px">
                        <template #extra><a href="#">more</a></template>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                    <br />
                    <a-card size="small" title="Small size card" style="width: 300px">
                        <template #extra><a href="#">more</a></template>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicCard">
                        Basic Card
                        <a class="anchor" href="#BasicCard">#</a>
                    </h4>
                    <p>
                        A basic card containing a title, content and an extra corner content.
                        Supports two sizes: <code>default</code> and <code>small</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-empty-demo-customize" class="code-box">
                <section class="code-box-demo">
                    <div style="background-color: #ececec; padding: 20px;">
                        <a-row :gutter="16">
                        <a-col :span="8">
                            <a-card title="Card title" :bordered="false">
                            <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="8">
                            <a-card title="Card title" :bordered="false">
                            <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="8">
                            <a-card title="Card title" :bordered="false">
                            <p>card content</p>
                            </a-card>
                        </a-col>
                        </a-row>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CardColumn">
                        Card in Column
                        <a class="anchor" href="#CardColumn">#</a>
                    </h4>
                    <p>
                        Cards usually cooperate with grid column layout in overview page.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-card-demo-support-more-content-configuration" class="code-box">
                <section class="code-box-demo">
                    <a-card hoverable style="width: 300px">
                        <template #cover>
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        </template>
                        <template class="ant-card-actions" #actions>
                        <setting-outlined key="setting" />
                        <edit-outlined key="edit" />
                        <ellipsis-outlined key="ellipsis" />
                        </template>
                        <a-card-meta title="Card title" description="This is the description">
                        <template #avatar>
                            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </template>
                        </a-card-meta>
                    </a-card>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SupportConfiguration">
                        Support Configuration
                        <a class="anchor" href="#SupportConfiguration">#</a>
                    </h4>
                    <p>
                        A Card that supports <code>cover</code>, <code>avatar</code>, <code>title</code> and <code>description</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-card-demo-with-tabs" class="code-box">
                <section class="code-box-demo">
                    <a-card
                        style="width:100%"
                        title="Card title"
                        :tab-list="tabList"
                        :active-tab-key="key"
                        @tabChange="key => onTabChange(key, 'key')"
                    >
                        <template #customRender="item">
                        <span> <home-outlined />{{ item.key }} </span>
                        </template>
                        <template #extra>
                        <a href="#">More</a>
                        </template>
                        {{ contentList[key] }}
                    </a-card>
                    <br /><br />
                    <a-card
                        style="width:100%"
                        :tab-list="tabListNoTitle"
                        :active-tab-key="noTitleKey"
                        @tabChange="key => onTabChange(key, 'noTitleKey')"
                    >
                        <p v-if="noTitleKey === 'Article'">
                        article content
                        </p>
                        <p v-else-if="noTitleKey === 'App'">
                        app content
                        </p>
                        <p v-else-if="noTitleKey === 'Project'">
                        project content
                        </p>
                        <template #tabBarExtraContent>
                        <a href="#">More</a>
                        </template>
                    </a-card>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="WithTabs">
                        With Tabs
                        <a class="anchor" href="#WithTabs">#</a>
                    </h4>
                    <p>
                        More content can be hosted.
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
            <section id="components-card-demo-no-border" class="code-box expand">
                <section class="code-box-demo">
                    <div style="background:#ECECEC; padding:30px">
                        <a-card title="Card title" :bordered="false" style="width: 300px">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        </a-card>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NoBorder">
                        No Border
                        <a class="anchor" href="#NoBorder">#</a>
                    </h4>
                    <p>
                        A borderless card on a gray background.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-card-demo-grid-card" class="code-box">
                <section class="code-box-demo">
                    <a-card title="Card Title">
                        <a-card-grid style="width:25%;text-align:center">
                        Content
                        </a-card-grid>
                        <a-card-grid style="width:25%;text-align:center" :hoverable="false">
                        Content
                        </a-card-grid>
                        <a-card-grid style="width:25%;text-align:center">
                        Content
                        </a-card-grid>
                        <a-card-grid style="width:25%;text-align:center">
                        Content
                        </a-card-grid>
                        <a-card-grid style="width:25%;text-align:center">
                        Content
                        </a-card-grid>
                        <a-card-grid style="width:25%;text-align:center">
                        Content
                        </a-card-grid>
                        <a-card-grid style="width:25%;text-align:center">
                        Content
                        </a-card-grid>
                        <a-card-grid style="width:25%;text-align:center">
                        Content
                        </a-card-grid>
                    </a-card>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="GridCard">
                        Grid Card
                        <a class="anchor" href="#GridCard">#</a>
                    </h4>
                    <p>
                        Grid style card content.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-card-demo-inner-card" class="code-box">
                <section class="code-box-demo">
                    <a-card title="Card title">
                        <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
                        Group title
                        </p>
                        <a-card title="Inner card title">
                        <template #extra>
                            <a href="#">More</a>
                        </template>
                        Inner Card content
                        </a-card>
                        <a-card title="Inner card title" :style="{ marginTop: '16px' }">
                        <template #extra>
                            <a href="#">More</a>
                        </template>
                        Inner Card content
                        </a-card>
                    </a-card>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="InnerCard">
                        Inner Card
                        <a class="anchor" href="#InnerCard">#</a>
                    </h4>
                    <p>
                        It can be placed inside the ordinary card to display the information of the multilevel structure
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
import { SettingOutlined, EditOutlined, EllipsisOutlined, HomeOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    HomeOutlined,
  },
  data() {
    return {
      tabList: [
        {
          key: 'Tab1',
          // tab: 'tab1',
          slots: { tab: 'customRender' },
        },
        {
          key: 'Tab2',
          tab: 'Tab2',
        },
      ],
      contentList: {
        tab1: 'content1',
        tab2: 'content2',
      },
      tabListNoTitle: [
        {
          key: 'Article',
          tab: 'Article',
        },
        {
          key: 'App',
          tab: 'App',
        },
        {
          key: 'Project',
          tab: 'Project',
        },
      ],
      key: 'Tab1',
      noTitleKey: 'app',
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
  },
};
</script>