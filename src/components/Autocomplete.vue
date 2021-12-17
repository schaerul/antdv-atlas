<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-auto-complete-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <a-auto-complete
                        v-model:value="value"
                        :options="options"
                        style="width: 100%"
                        placeholder="Input your text .."
                        @select="onSelect"
                        @search="onSearch"
                        @change="onChange"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Basic">
                        Basic
                        <a class="anchor" href="#Basic">#</a>
                    </h4>
                    <p>
                        Basic Usage, set datasource of autocomplete with <code>options</code> property.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-auto-complete-demo-customized" class="code-box">
                <section class="code-box-demo">
                    <a-auto-complete
                        v-model:value="value2"
                        style="width: 100%"
                        placeholder="Input your text .."
                        @search="handleSearch"
                    >
                        <template #dataSource>
                        <a-select-option v-for="email in result" :key="email">
                            {{ email }}
                        </a-select-option>
                        </template>
                    </a-auto-complete>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Customized">
                        Customized
                        <a class="anchor" href="#Customized">#</a>
                    </h4>
                    <p>
                        You could pass <code>#dataSource</code> as children of <code>AutoComplete</code>, instead of using <code>dataSource</code>。
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};
export default {
  data() {
    return {
      value: '',
      value2: '',
      options: [],
      result: [],
    };
  },
  watch: {
    value(val) {
      console.log('value', val);
    },
  },
  methods: {
    onSearch(searchText) {
      console.log('searchText');
      this.options = !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    },
    onSelect(value) {
      console.log('onSelect', value);
    },
    onChange(value) {
      console.log('onChange', value);
    },
    handleSearch(value2) {
      let result;
      if (!value2 || value2.indexOf('@') >= 0) {
        result = [];
      } else {
        result = ['gmail.com', 'atlasvm.io', 'stickearn.com'].map(domain => `${value2}@${domain}`);
      }
      this.result = result;
    },
  },
};
</script>