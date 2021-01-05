<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-collapse-demo-collapse" class="code-box">
                <section class="code-box-demo">
                    <a-collapse v-model:activeKey="activeKey1">
                        <a-collapse-panel key="1" header="This is panel header 1">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="3" header="This is panel header 3" disabled>
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                    </a-collapse>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CollapseBasic">
                        Basic Collapse
                        <a class="anchor" href="#CollapseBasic">#</a>
                    </h4>
                    <p>
                        By default, any number of panels can be expanded at a time. The first panel is expanded in this example.
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
            <section id="components-collapse-demo-custom-panel" class="code-box">
                <section class="code-box-demo">
                    <a-collapse v-model:activeKey="activeKey4" :bordered="false" :expand-icon-position="expandIconPosition">
                        <template #expandIcon="{ isActive }">
                        <caret-right-outlined :rotate="isActive ? 90 : 0" />
                        </template>
                        <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                    </a-collapse>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomPanel">
                        Custom Panel
                        <a class="anchor" href="#CustomPanel">#</a>
                    </h4>
                    <p>
                        Customize the background, border and margin styles and icon for each panel.
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
            <section id="components-collapse-demo-accordion" class="code-box expand">
                <section class="code-box-demo">
                    <a-collapse v-model:activeKey="activeKey2" accordion>
                        <a-collapse-panel key="1" header="This is panel header 1">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="3" header="This is panel header 3">
                        <p>{{ text }}</p>
                        </a-collapse-panel>
                    </a-collapse>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Accordion">
                        Accordion
                        <a class="anchor" href="#Accordion">#</a>
                    </h4>
                    <p>
                        In accordion mode, only one panel can be expanded at a time.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-collapse-demo-extra-node" class="code-box">
                <section class="code-box-demo">
                    <a-collapse v-model:activeKey="activeKey3" :expand-icon-position="expandIconPosition">
                        <a-collapse-panel key="1" header="This is panel header 1">
                        <p>{{ text }}</p>
                        <template #extra><setting-outlined @click="handleClick"/></template>
                        </a-collapse-panel>
                        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
                        <p>{{ text }}</p>
                        <template #extra><setting-outlined @click="handleClick"/></template>
                        </a-collapse-panel>
                        <a-collapse-panel key="3" header="This is panel header 3" disabled>
                        <p>{{ text }}</p>
                        <template #extra><setting-outlined @click="handleClick"/></template>
                        </a-collapse-panel>
                    </a-collapse>
                    <br />
                    <span>Expand Icon Position: </span>
                    <a-select v-model:value="expandIconPosition">
                        <a-select-option value="left">
                        Left
                        </a-select-option>
                        <a-select-option value="right">
                        Right
                        </a-select-option>
                    </a-select>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ExtraNode">
                        Extra Node
                        <a class="anchor" href="#CustomImage">#</a>
                    </h4>
                    <p>
                        More than one panel can be expanded at a time, the first panel is initialized to be active in this case.
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
import { SettingOutlined, CaretRightOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SettingOutlined,
    CaretRightOutlined,
  },
  data() {
    return {
      text: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey1: ['1'],
      activeKey2: [],
      activeKey3: ['1'],
      activeKey4: ['1'],
      expandIconPosition: 'left',
      customStyle:
        'background: #f3f3f4; border-radius: 12px; margin-bottom: 16px; border: 0; overflow: hidden',
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
  methods: {
    handleClick(event) {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    },
  },
};
</script>

<style>

</style>