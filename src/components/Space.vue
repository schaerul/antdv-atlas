<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-space-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <a-space>
                        Space
                        <a-button type="primary">Button</a-button>
                        <a-upload>
                        <a-button> <UploadOutlined /> Click to Upload </a-button>
                        </a-upload>
                        <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
                        <a-button>Confirm</a-button>
                        </a-popconfirm>
                    </a-space>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SpaceBasic">
                        Basic Usage
                        <a class="anchor" href="#SpaceBasic">#</a>
                    </h4>
                    <p>
                        Crowded components horizontal spacing.
                    </p>
                </section>
            </section>

            <section id="components-space-demo-space-size" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-radio-group v-model:value="size">
                        <a-radio value="small">Small</a-radio>
                        <a-radio value="middle">Middle</a-radio>
                        <a-radio value="large">Large</a-radio>
                        </a-radio-group>
                        <br />
                        <br />
                        <a-space :size="size">
                        <a-button type="primary">Primary</a-button>
                        <a-button>Default</a-button>
                        <a-button type="dashed">Dashed</a-button>
                        <a-button type="link">Link</a-button>
                        </a-space>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SpaceSize">
                        Space Size
                        <a class="anchor" href="#SpaceSize">#</a>
                    </h4>
                    <p>
                        <code>large</code>, <code>middle</code> and <code>small</code> preset sizes.
                        Set the size to <code>large</code> and <code>middle</code> by setting size to large and middle respectively.
                        If <code>size</code> is not set, the spacing is <code>small</code>.
                    </p>
                </section>
            </section>

            <section id="components-space-demo-customize-size" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-slider v-model:value="size2" />
                        <br />
                        <br />
                        <a-space :size="size2">
                        <a-button type="primary">Primary</a-button>
                        <a-button>Default</a-button>
                        <a-button type="dashed">Dashed</a-button>
                        <a-button type="link">Link</a-button>
                        </a-space>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomizeSize">
                        Customize Size
                        <a class="anchor" href="#CustomizeSize">#</a>
                    </h4>
                    <p>
                        Custom spacing size.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-space-demo-vertical-space" class="code-box expand">
                <section class="code-box-demo">
                    <a-space direction="vertical">
                        <a-card title="Card" style="width: 300px;">
                        <p>Card content</p>
                        <p>Card content</p>
                        </a-card>
                        <a-card title="Card" style="width: 300px;">
                        <p>Card content</p>
                        <p>Card content</p>
                        </a-card>
                    </a-space>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="VerticalSpace">
                        Vertical Space
                        <a class="anchor" href="#VerticalSpace">#</a>
                    </h4>
                    <p>
                        Crowded components vertical spacing.
                        Can set <code>width: 100%</code> fill a row. 
                    </p>
                </section>
            </section>

            <section id="components-space-demo-align" class="code-box">
                <section class="code-box-demo">
                    <div class="space-align-container">
                        <div class="space-align-block">
                        <a-space align="center">
                            center
                            <a-button type="primary">Primary</a-button>
                            <span class="mock-block">Block</span>
                        </a-space>
                        </div>
                        <div class="space-align-block">
                        <a-space align="start">
                            start
                            <a-button type="primary">Primary</a-button>
                            <span class="mock-block">Block</span>
                        </a-space>
                        </div>
                        <div class="space-align-block">
                        <a-space align="end">
                            end
                            <a-button type="primary">Primary</a-button>
                            <span class="mock-block">Block</span>
                        </a-space>
                        </div>
                        <div class="space-align-block">
                        <a-space align="baseline">
                            baseline
                            <a-button type="primary">Primary</a-button>
                            <span class="mock-block">Block</span>
                        </a-space>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SpaceAlign">
                        Align
                        <a class="anchor" href="#SpaceAlign">#</a>
                    </h4>
                    <p>
                        Config item align.
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import UploadOutlined from '@ant-design/icons-vue/UploadOutlined';
export default {
  components: {
    UploadOutlined,
  },
  data() {
    return {
      size: 'small',
      size2: 8,
    };
  },
};
</script>

<style scoped>
.space-align-container {
  display: flex;
  align-items : flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 2px dashed #0CC6A7;
  padding: 16px;
  flex: none;
  border-radius: 6px;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: #f3f3f4;
}
</style>