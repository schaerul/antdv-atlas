<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-timeline-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-timeline>
                        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                        <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                        <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                    </a-timeline>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TimelineBasic">
                        Basic
                        <a class="anchor" href="#TimelineBasic">#</a>
                    </h4>
                    <p>
                        Basic timeline.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-timeline-demo-last-node" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-timeline pending="Recording..." :reverse="reverse">
                        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                        <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                        </a-timeline>
                        <a-button type="primary" style="margin-top: 16px" @click="handleClick">
                        Toggle Reverse
                        </a-button>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="LastNode">
                        Last Node
                        <a class="anchor" href="#LastNode">#</a>
                    </h4>
                    <p>
                        When the timeline is incomplete and ongoing, put a ghost node at last.
                        Set <code>pending</code> as truthy value to enable displaying pending item. You can customize the
                        pending content by passing a React Element. Meanwhile, <code>slot="pendingDot"</code> is used to
                        customize the dot of the pending <code>item.reverse={true}</code> is used for reversing nodes. 
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-timeline-demo-alternate" class="code-box">
                <section class="code-box-demo">
                    <a-timeline mode="alternate">
                        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                        <a-timeline-item color="green">
                        Solve initial network problems 2015-09-01
                        </a-timeline-item>
                        <a-timeline-item>
                        <template #dot><ClockCircleOutlined style="font-size: 16px;"/></template>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                        </a-timeline-item>
                        <a-timeline-item color="red">
                        Network problems being solved 2015-09-01
                        </a-timeline-item>
                        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                        <a-timeline-item>
                        <template #dot><ClockCircleOutlined style="font-size: 16px;"/></template>
                        Technical testing 2015-09-01
                        </a-timeline-item>
                    </a-timeline>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Alternate">
                        Alternate
                        <a class="anchor" href="#Alternate">#</a>
                    </h4>
                    <p>
                        Alternate timeline. 
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
            <section id="components-timeline-demo-color" class="code-box expand">
                <section class="code-box-demo">
                    <a-timeline>
                        <a-timeline-item color="green">
                        Create a services site 2015-09-01
                        </a-timeline-item>
                        <a-timeline-item color="green">
                        Create a services site 2015-09-01
                        </a-timeline-item>
                        <a-timeline-item color="red">
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                        </a-timeline-item>
                        <a-timeline-item>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                        </a-timeline-item>
                        <a-timeline-item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                        </a-timeline-item>
                        <a-timeline-item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                        </a-timeline-item>
                    </a-timeline>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Color">
                        Color
                        <a class="anchor" href="#Color">#</a>
                    </h4>
                    <p>
                        Set the color of circles. <code>green</code> means completed or success status, <code>red</code> means warning or error,
                        and <code>blue</code> means ongoing or other default status. 
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-timeline-demo-custom" class="code-box">
                <section class="code-box-demo">
                    <a-timeline>
                        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                        <a-timeline-item color="red">
                        <template #dot><clock-circle-outlined style="font-size: 16px;"/></template>
                        Technical testing 2015-09-01
                        </a-timeline-item>
                        <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                    </a-timeline>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Custom">
                        Custom
                        <a class="anchor" href="#Custom">#</a>
                    </h4>
                    <p>
                        Set a node as an icon or other custom element. 
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-timeline-demo-right-alternate" class="code-box">
                <section class="code-box-demo">
                    <a-timeline mode="right">
                        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                        <a-timeline-item>
                        <template #dot><clock-circle-outlined style="font-size: 16px;"/></template>
                        Technical testing 2015-09-01
                        </a-timeline-item>
                        <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                    </a-timeline>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="RightAlternate">
                        Right Alternate
                        <a class="anchor" href="#RightAlternate">#</a>
                    </h4>
                    <p>
                        Right alternate timeline.
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
import { ClockCircleOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    ClockCircleOutlined,
  },
  data() {
    return {
      reverse: false,
    };
  },
  methods: {
    handleClick() {
      this.reverse = !this.reverse;
    },
  },
};
</script>