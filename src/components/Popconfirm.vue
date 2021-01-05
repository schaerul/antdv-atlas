<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-popconfirm-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-popconfirm
                        title="Are you sure delete this data?"
                        ok-text="Delete" 
                        cancel-text="Cancel"
                        @confirm="confirm"
                        @cancel="cancel"
                    >
                        <a href="#">Delete</a>
                    </a-popconfirm>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicPop">
                        Basic
                        <a class="anchor" href="#BasicPop">#</a>
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

            <section id="components-popconfirm-demo-customize-icon" class="code-box">
                <section class="code-box-demo">
                    <a-popconfirm title="Are you sure？">
                        <template #icon><question-circle-outlined style="color: red"/></template>
                        <a href="#">Delete</a>
                    </a-popconfirm>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomIcon">
                        Customize Icon
                        <a class="anchor" href="#CustomIcon">#</a>
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
                    <div id="components-a-popconfirm-demo-placement">
                        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
                        <a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>TL</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>Top</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>TR</a-button>
                        </a-popconfirm>
                        </div>
                        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                        <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>LT</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>Left</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>LB</a-button>
                        </a-popconfirm>
                        </div>
                        <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
                        <a-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>RT</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>Right</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>RB</a-button>
                        </a-popconfirm>
                        </div>
                        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
                        <a-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>BL</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>Bottom</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <template #title>
                            <p>{{ text }}</p>
                            </template>
                            <a-button>BR</a-button>
                        </a-popconfirm>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Placement">
                        Placement
                        <a class="anchor" href="#Placement">#</a>
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

            <section id="components-statistic-demo-countdown" class="code-box">
                <section class="code-box-demo">

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
import { message } from 'ant-design-vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    QuestionCircleOutlined,
  },

  data() {
    return {
      buttonWidth: 70,
      text: 'Are you sure to delete this task?',
    };
  },
  
  methods: {
    confirm(e) {
      console.log(e);
      message.success('Click on Delete');
    },
    cancel(e) {
      console.log(e);
      message.error('Click on Cancel');
    },
  },
}
</script>

<style>
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>