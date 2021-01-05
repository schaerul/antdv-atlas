<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tag-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-tag>Tag 1</a-tag>
                        <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
                        <a-tag closable @close="log">
                        Tag 2
                        </a-tag>
                        <a-tag closable @close="preventDefault">
                        Prevent Default
                        </a-tag>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TagBasic">
                        Basic Usage
                        <a class="anchor" href="#TagBasic">#</a>
                    </h4>
                    <p>
                        Simplest usage.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-tag-demo-colorful-tag" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <h4 style="margin-bottom: 16px">
                        Presets:
                        </h4>
                        <div>
                        <a-tag color="pink">
                            pink
                        </a-tag>
                        <a-tag color="red">
                            red
                        </a-tag>
                        <a-tag color="orange">
                            orange
                        </a-tag>
                        <a-tag color="green">
                            green
                        </a-tag>
                        <a-tag color="cyan">
                            cyan
                        </a-tag>
                        <a-tag color="blue">
                            blue
                        </a-tag>
                        <a-tag color="purple">
                            purple
                        </a-tag>
                        </div>
                        <h4 style="margin-top: 16px">
                        Custom:
                        </h4>
                        <div>
                        <a-tag color="#f50">
                            #f50
                        </a-tag>
                        <a-tag color="#2db7f5">
                            #2db7f5
                        </a-tag>
                        <a-tag color="#87d068">
                            #87d068
                        </a-tag>
                        <a-tag color="#108ee9">
                            #108ee9
                        </a-tag>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ColorfulTag">
                        Colorful Tag
                        <a class="anchor" href="#ColorfulTag">#</a>
                    </h4>
                    <p>
                        We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-tag-demo-icon" class="code-box">
                <section class="code-box-demo">
                    <a-tag color="#55acee">
                        <template #icon>
                        <twitter-outlined />
                        </template>
                        Twitter
                    </a-tag>
                    <a-tag color="#cd201f">
                        <template #icon>
                        <youtube-outlined />
                        </template>
                        Youtube
                    </a-tag>
                    <a-tag color="#3b5999">
                        <template #icon>
                        <facebook-outlined />
                        </template>
                        Facebook
                    </a-tag>
                    <a-tag color="#55acee">
                        <template #icon>
                        <linkedin-outlined />
                        </template>
                        LinkedIn
                    </a-tag>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Icon">
                        Icon
                        <a class="anchor" href="#Icon">#</a>
                    </h4>
                    <p>
                        <code>Tag</code> components can contain an <code>Icon</code>. This is done by setting the <code>icon</code> property or placing an <code>Icon</code>
                        component within the <code>Tag</code>. If you want specific control over the positioning and placement of the <code>Icon</code>,
                        then that should be done by placing the <code>Icon</code> component within the <code>Tag</code> rather than using the <code>icon</code> property.
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
            <section id="components-tag-demo-checkable" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-checkable-tag v-model:checked="checked1" @change="handleChange">
                        Tag1
                        </a-checkable-tag>
                        <a-checkable-tag v-model:checked="checked2" @change="handleChange">
                        Tag2
                        </a-checkable-tag>
                        <a-checkable-tag v-model:checked="checked3" @change="handleChange">
                        Tag3
                        </a-checkable-tag>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Checkable">
                        Checkable
                        <a class="anchor" href="#Checkable">#</a>
                    </h4>
                    <p>
                        <code>CheckableTag</code> works like Checkbox, click it to toggle checked state.
                    </p>
                    <blockquote><p>It is an absolute controlled component and has no uncontrolled mode.</p></blockquote>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-tag-demo-status-tag" class="code-box">
                <section class="code-box-demo">
                    <a-divider orientation="left">Without icon</a-divider>
                    <div>
                        <a-tag color="success">success</a-tag>
                        <a-tag color="processing">processing</a-tag>
                        <a-tag color="error">error</a-tag>
                        <a-tag color="warning">warning</a-tag>
                        <a-tag color="default">default</a-tag>
                    </div>
                    <a-divider orientation="left">With icon</a-divider>
                    <div>
                        <a-tag color="success">
                        <template #icon>
                            <check-circle-outlined />
                        </template>
                        success
                        </a-tag>
                        <a-tag color="processing">
                        <template #icon>
                            <sync-outlined :spin="true" />
                        </template>
                        processing
                        </a-tag>
                        <a-tag color="error">
                        <template #icon>
                            <close-circle-outlined />
                        </template>
                        error
                        </a-tag>
                        <a-tag color="warning">
                        <template #icon>
                            <exclamation-circle-outlined />
                        </template>
                        warning
                        </a-tag>
                        <a-tag color="default">
                        <template #icon>
                            <clock-circle-outlined />
                        </template>
                        waiting
                        </a-tag>
                        <a-tag color="default">
                        <template #icon>
                            <minus-circle-outlined />
                        </template>
                        stop
                        </a-tag>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="StatusTag">
                        Status Tag
                        <a class="anchor" href="#StatusTag">#</a>
                    </h4>
                    <p>
                        We preset five different colors, you can set color property such as <code>success</code>, <code>processing</code>, <code>error</code>, <code>default</code> and warning to indicate specific status.
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
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
  },
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
    };
  },
  methods: {
    handleChange(checked) {
      console.log(checked);
    },
    log(e) {
      console.log(e);
    },
    preventDefault(e) {
      e.preventDefault();
      console.log('Clicked! But prevent default.');
    },
  },
};
</script>

<style>
#components-tag-demo-status-tag .ant-tag{
    margin-bottom: 16px;
}
#components-tag-demo-colorful-tag > h4{
    margin-top: 24px !important;
}
</style>