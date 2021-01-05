<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-steps-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-steps :current="1">
                        <a-step>
                        <!-- <span slot="title">Finished</span> -->
                        <template #title>
                            Finished
                        </template>
                        <template #description>
                            <span>This is a description.</span>
                        </template>
                        </a-step>
                        <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
                        <a-step title="Waiting" description="This is a description." />
                    </a-steps>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Basic">
                        Basic
                        <a class="anchor" href="#Basic">#</a>
                    </h4>
                    <p>
                        The most basic step bar.
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
        
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-steps-demo-switch-step" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-steps :current="current" size="small">
                        <a-step v-for="item in steps" :key="item.title" :title="item.title" :description="item.description" />
                        </a-steps>
                        <div class="steps-content">
                        {{ steps[current].content }}
                        </div>
                        <div class="steps-action">
                        <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                            Next
                        </a-button>
                        <a-button
                            v-if="current == steps.length - 1"
                            type="primary"
                            @click="$message.success('Processing complete!')"
                        >
                            Done
                        </a-button>
                        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
                            Previous
                        </a-button>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SwitchStep">
                        Switch Step
                        <a class="anchor" href="#SwitchStep">#</a>
                    </h4>
                    <p>
                        Cooperate with the content and buttons, to represent the progress of a process.
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

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-steps-demo-mini-version" class="code-box expand">
                <section class="code-box-demo">
                    <a-steps :current="1" size="small">
                        <a-step title="Finished" />
                        <a-step title="In Progress" />
                        <a-step title="Waiting" />
                    </a-steps>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="MiniVersion">
                        Mini Version
                        <a class="anchor" href="#MiniVersion">#</a>
                    </h4>
                    <p>
                        By setting like this: <code>Steps size="small"</code>, you can get a mini version.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-steps-demo-with-icon" class="code-box">
                <section class="code-box-demo">
                    <a-steps>
                        <a-step status="finish" title="Login">
                        <template #icon>
                            <user-outlined />
                        </template>
                        </a-step>
                        <a-step status="finish" title="Verification">
                        <template #icon>
                            <solution-outlined />
                        </template>
                        </a-step>
                        <a-step status="process" title="Pay">
                        <template #icon>
                            <loading-outlined />
                        </template>
                        </a-step>
                        <a-step status="wait" title="Done">
                        <template #icon>
                            <smile-outlined />
                        </template>
                        </a-step>
                    </a-steps>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="WithIcon">
                        With Icon
                        <a class="anchor" href="#WithIcon">#</a>
                    </h4>
                    <p>
                        You can use your own custom icons by setting the property <code>icon</code> for <code>Steps.Step</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-steps-demo-dot-style" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-steps progress-dot :current="1">
                        <a-step title="Finished" description="This is a description." />
                        <a-step title="In Progress" description="This is a description." />
                        <a-step title="Waiting" description="This is a description." />
                        </a-steps>
                        <a-divider />
                        <a-steps progress-dot :current="1" direction="vertical">
                        <a-step title="Finished" description="This is a description. This is a description." />
                        <a-step title="Finished" description="This is a description. This is a description." />
                        <a-step title="In Progress" description="This is a description. This is a description." />
                        <a-step title="Waiting" description="This is a description." />
                        <a-step title="Waiting" description="This is a description." />
                        </a-steps>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DotStyle">
                        Dot Style
                        <a class="anchor" href="#DotStyle">#</a>
                    </h4>
                    <p>
                        Steps with progress dot style.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-steps-demo-clickable" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-steps :current="current" @change="onChange">
                        <a-step title="Step 1" description="This is a description." />
                        <a-step title="Step 2" description="This is a description." />
                        <a-step title="Step 3" description="This is a description." />
                        </a-steps>
                        <a-divider />
                        <a-steps v-model:current="current" direction="vertical">
                        <a-step title="Step 1" description="This is a description." />
                        <a-step title="Step 2" description="This is a description." />
                        <a-step title="Step 3" description="This is a description." />
                        </a-steps>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Clickable">
                        Clickable
                        <a class="anchor" href="#Clickable">#</a>
                    </h4>
                    <p>
                        Setting <code>@change</code> makes Steps clickable.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-steps-demo-navigation-steps" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
                        <a-step
                            title="Step 1"
                            sub-title="00:00:05"
                            status="finish"
                            description="This is a description."
                        />
                        <a-step
                            title="Step 2"
                            sub-title="00:01:02"
                            status="process"
                            description="This is a description."
                        />
                        <a-step
                            title="Step 3"
                            sub-title="waiting for longlong time"
                            status="wait"
                            description="This is a description."
                        />
                        </a-steps>
                        <a-steps v-model:current="current" type="navigation" :style="stepStyle">
                        <a-step status="finish" title="Step 1" />
                        <a-step status="process" title="Step 2" />
                        <a-step status="wait" title="Step 3" />
                        <a-step status="wait" title="Step 4" />
                        </a-steps>
                        <a-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
                        <a-step status="finish" title="finish 1" />
                        <a-step status="finish" title="finish 2" />
                        <a-step status="process" title="current process" />
                        <a-step status="wait" title="wait" disabled />
                        </a-steps>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NavigationSteps">
                        Navigation Steps
                        <a class="anchor" href="#NavigationSteps">#</a>
                    </h4>
                    <p>
                        Navigation steps.
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
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
  },
  data() {
    return {
      current: 0,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
      steps: [
        {
          title: 'Client',
          content: 'First-content',
          description: 'Set your client name, mail address, PIC company & company phone no.',
        },
        {
          title: 'Site',
          content: 'Second-content',
          description: 'Set your site name, province, city, address, category, PIC site & PIC mobile no.',
        },
        {
          title: 'Contract',
          content: 'Third-content',
          description: 'Set your cotract name, partnership type, duration & device quota',
        },
        {
          title: 'Commercial Terms',
          content: 'Last-content',
          description: 'Set your configuration name, terms & term value',
        },
      ],
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    onChange(current) {
      console.log('onChange:', current);
      this.current = current;
    },
  },
};
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #dadada;
  border-radius: 12px;
  background-color: #f3f3f4;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>