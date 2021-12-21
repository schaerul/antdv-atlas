<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-input-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-input placeholder="Basic Usage" />
                    <br/>
                    <br/>
                    <a-input disabled placeholder="Disabled" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicInput">
                        Basic Usage
                        <a class="anchor" href="#BasicInput">#</a>
                    </h4>
                    <p>
                        Basic usage example.
                    </p>
                </section>
            </section>

            <section id="components-input-demo-basic-clear" class="code-box">
                <section class="code-box-demo">
                    <a-input v-model:value="value1" placeholder="input with clear icon" allow-clear />
                    <br />
                    <br />
                    <a-textarea v-model:value="value2" placeholder="textarea with clear icon" allow-clear />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicClear">
                        Basic with Clear Icon
                        <a class="anchor" href="#BasicClear">#</a>
                    </h4>
                    <p>
                        Basic usage example with clear icon.
                    </p>
                </section>
            </section>

            <section id="components-input-demo-presuffix" class="code-box">
                <section class="code-box-demo">
                    <div class="components-input-demo-presuffix">
                        <a-input placeholder="Basic usage" v-model:value="userName" ref="userNameInput">
                        <template #prefix><user-outlined type="user"/></template>
                        <template #suffix>
                            <a-tooltip title="Extra information">
                            <info-circle-outlined style="color: rgba(0,0,0,.45)" />
                            </a-tooltip>
                        </template>
                        </a-input>
                        <br />
                        <br />
                        <a-input prefix="￥" suffix="RMB" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="PrefixSuffix">
                         Prefix and Suffix
                        <a class="anchor" href="#PrefixSuffix">#</a>
                    </h4>
                    <p>
                        Add prefix or suffix icons inside input.
                    </p>
                </section>
            </section>

            <section id="components-input-demo-textarea-with-character-counting" class="code-box">
                <section class="code-box-demo">
                    <a-textarea v-model:value="valueCount" showCount :maxlength="100" placeholder="Character counting"/>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TextAreaCounting">
                         Textarea with Character Counting
                        <a class="anchor" href="#PrefixSuffix">#</a>
                    </h4>
                    <p>
                        Show character counting.
                    </p>
                </section>
            </section>

            <section id="components-input-demo-pre-/-post-tab" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <div style="margin-bottom: 16px">
                        <a-input addon-before="http://" addon-after=".com" v-model:value="valuePrePost1" placeholder="yoursite"/>
                        </div>
                        <div style="margin-bottom: 16px">
                        <a-input v-model:value="valuePrePost2" placeholder="yoursite">
                            <template #addonBefore>
                            <a-select v-model:value="valuePrePost3" style="width: 116px">
                                <a-select-option value="http://">
                                http://
                                </a-select-option>
                                <a-select-option value="https://">
                                https://
                                </a-select-option>
                            </a-select>
                            </template>
                            <template #addonAfter>
                            <a-select v-model:value="valuePrePost4" style="width: 110px">
                                <a-select-option value=".com">
                                .com
                                </a-select-option>
                                <a-select-option value=".co.id">
                                .co.id
                                </a-select-option>
                                <a-select-option value=".id">
                                .id
                                </a-select-option>
                                <a-select-option value=".org">
                                .org
                                </a-select-option>
                            </a-select>
                            </template>
                        </a-input>
                        </div>
                        <div style="margin-bottom: 16px">
                        <a-input v-model:value="valuePrePost5" placeholder="yoursite@domain.com">
                            <template #addonAfter>
                            <setting-outlined />
                            </template>
                        </a-input>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="PrePostTab">
                        Pre / Post Tab
                        <a class="anchor" href="#PrePostTab">#</a>
                    </h4>
                    <p>
                        Using pre & post tabs example.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-input-demo-autosizing-the-height-to-fit-the-content" class="code-box expand">
                <section class="code-box-demo">
                    <div class="components-input-demo-size">
                        <a-input size="large" placeholder="large size" />
                        <a-input placeholder="default size" />
                        <a-input size="small" placeholder="small size" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Autosizing">
                        Autosizing the height to fit the content
                        <a class="anchor" href="#Autosizing">#</a>
                    </h4>
                    <p>
                        <code>autoSize</code> prop for a <code>textarea</code> type of <code>Input</code> makes the height to automatically adjust based
                        on the content. An options object can be provided to <code>autoSize</code> to specify the minimum and
                        maximum number of lines the textarea will automatically adjust.
                    </p>
                    <blockquote>
                        <p>
                            <code>autosize</code> is deprecated after <code>1.5.0</code>, please use <code>autoSize</code>.
                        </p>
                    </blockquote>
                </section>
            </section>

            <section id="components-input-demo-search-box" class="code-box">
                <section class="code-box-demo">
                    <div :style="wrapStyles">
                        <div>
                            <a-input-search
                            placeholder="input search text"
                            
                            @search="onSearch"
                            />
                            <br /><br />
                            <a-input-search
                            placeholder="input search text"
                            enter-button
                            @search="onSearch"
                            />
                            <br /><br />
                            <a-input-search
                            placeholder="input search text"
                            enter-button="Search"
                            size="large"
                            @search="onSearch"
                            />
                            <br /><br />
                            <a-input-search
                            placeholder="input search text"
                            size="large"
                            @search="onSearch"
                            >
                            <template #enterButton>
                                <a-button>
                                Custom
                                </a-button>
                            </template>
                            </a-input-search>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SearchBox">
                        Search Box
                        <a class="anchor" href="#SearchBox">#</a>
                    </h4>
                    <p>
                        Example of creating a search box by grouping a standard input with a search button.
                    </p>
                </section>
            </section>

            <section id="components-input-demo-password-box" class="code-box">
                <section class="code-box-demo">
                    <a-input-password v-model:value="valuePassword" placeholder="6+ your unique password " />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="PasswordBox">
                        Password Box
                        <a class="anchor" href="#PasswordBox">#</a>
                    </h4>
                    <p>
                        Input type of password and added in 1.4.0.
                    </p>
                </section>
            </section>

            <section id="components-input-demo-textarea" class="code-box">
                <section class="code-box-demo">
                    <a-textarea v-model:value="valueTextArea" placeholder="Basic usage" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TextArea">
                        Text Area
                        <a class="anchor" href="#TextArea">#</a>
                    </h4>
                    <p>
                        For multi-line input.
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import { UserOutlined, InfoCircleOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default {

  components: {
    UserOutlined,
    InfoCircleOutlined,
    SettingOutlined,
  },
  data() {
    return {
      userName: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      valurSearch: '',
      valuePassword: '',
      valueTextArea: '',
      valueCount: 'This is an example',
      valuePrePost1: '',
      valuePrePost2: '',
      valuePrePost3: 'http://',
      valuePrePost4: '.com',
      valuePrePost5: '',
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = '';
    },
    onSearch(valueSearch) {
      console.log('use value', valueSearch);
      console.log('or use this.value', this.valueSearch);
    },
    onChange(e) {
      console.log(e);
    },
  },
};
</script>

<style>
.components-input-demo-size .ant-input{
  /* width: 200px; */
  margin: 0 24px 24px 0;
}

</style>