<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-radio-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-radio v-model:checked="checked">Option A</a-radio>
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
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-radio-demo-radio-style" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <div>
                        <a-radio-group v-model:value="value1" @change="onChange">
                            <a-radio-button value="a">
                            Bandung
                            </a-radio-button>
                            <a-radio-button value="b">
                            Bogor
                            </a-radio-button>
                            <a-radio-button value="c">
                            Cianjur
                            </a-radio-button>
                            <a-radio-button value="d">
                            Jakarta
                            </a-radio-button>
                        </a-radio-group>
                        </div>
                        <div :style="{ marginTop: '16px' }">
                        <a-radio-group v-model:value="value2" @change="onChange">
                            <a-radio-button value="a">
                            Bandung
                            </a-radio-button>
                            <a-radio-button value="b" disabled>
                            Bogor
                            </a-radio-button>
                            <a-radio-button value="c">
                            Cianjur
                            </a-radio-button>
                            <a-radio-button value="d">
                            Jakarta
                            </a-radio-button>
                        </a-radio-group>
                        </div>
                        <div :style="{ marginTop: '16px' }">
                        <a-radio-group disabled v-model:value="value3" @change="onChange">
                            <a-radio-button value="a">
                            Bandung
                            </a-radio-button>
                            <a-radio-button value="b">
                            Bogor
                            </a-radio-button>
                            <a-radio-button value="c">
                            Cianjur
                            </a-radio-button>
                            <a-radio-button value="d">
                            Jakarta
                            </a-radio-button>
                        </a-radio-group>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="RadioStyle">
                        Radio Style
                        <a class="anchor" href="#RadioStyle">#</a>
                    </h4>
                    <p>
                        The combination of radio button style.
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
            <section id="components-radio-demo-vertical-radiogroup" class="code-box expand">
                <section class="code-box-demo">
                    <a-radio-group v-model:value="value" @change="onChange2">
                        <a-radio :style="radioStyle" :value="1">
                        Option A
                        </a-radio>
                        <a-radio :style="radioStyle" :value="2">
                        Option B
                        </a-radio>
                        <a-radio :style="radioStyle" :value="3">
                        Option C
                        </a-radio>
                        <a-radio :style="radioStyle" :value="4">
                        More...
                        <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
                        </a-radio>
                    </a-radio-group>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="VerticalRadioGroup">
                        Vertical RadioGroup
                        <a class="anchor" href="#VerticalRadioGroup">#</a>
                    </h4>
                    <p>
                        Vertical RadioGroup, with more radios.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-radio-demo-radio-group" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-radio-group v-model:value="value" @change="onChange">
                        <a-radio :value="1">
                            A
                        </a-radio>
                        <a-radio :value="2">
                            B
                        </a-radio>
                        <a-radio :value="3">
                            C
                        </a-radio>
                        <a-radio :value="4">
                            D
                        </a-radio>
                        </a-radio-group>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="RadioGroup">
                        Radio Group
                        <a class="anchor" href="#RadioGroup">#</a>
                    </h4>
                    <p>
                        A group of radio components.
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
export default {
  data() {
    return {
      checked: false,
      value1: 'a',
      value2: 'a',
      value3: 'a',
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
    },
    onChange2(e) {
      console.log('radio checked', e.target.value);
    },
  },
};
</script>