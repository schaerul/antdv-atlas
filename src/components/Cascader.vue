<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-cascader-demo-basic" class="code-box">
                <section class="code-box-demo">
                        <a-cascader
                            v-model:value="value"
                            :options="options"
                            :display-render="displayRender"
                            @change="onChange"
                        />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Type">
                        Basic
                        <a class="anchor" href="#Type">#</a>
                    </h4>
                    <p>
                        Cascade selection box for selecting category and sub-category. <code>hover</code> to expand sub menu, <code>click</code> to select option.
                    </p>
                </section>
            </section>

            <section id="components-cascader-demo-hover" class="code-box">
                <section class="code-box-demo">
                    <a-cascader
                      v-model:value="value"
                      :options="options"
                      :display-render="displayRender"
                      expand-trigger="hover"
                      
                      @change="onChange"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Hover">
                        Hover
                        <a class="anchor" href="#Hover">#</a>
                    </h4>
                    <p>
                        Hover to expand sub menu, click to select option.
                    </p>
                </section>
            </section>

            <section id="components-cascader-demo-trigger" class="code-box">
                <section class="code-box-demo">
                  <span>
                    {{ text }} &nbsp;
                    <a-cascader v-model:value="value" :options="options" @change="onChange">
                      <a href="#">Change city</a>
                    </a-cascader>
                  </span>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomTrigger">
                        Custom Trigger
                        <a class="anchor" href="#CustomTrigger">#</a>
                    </h4>
                    <p>
                        Separate trigger button and result.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-cascader-demo-size" class="code-box expand">
                <section class="code-box-demo">
                  <a-cascader v-model:value="value" size="large" style="width: 100%" :options="options" />
                  <br />
                  <br />
                  <a-cascader v-model:value="value" style="width: 100%" :options="options" />
                  <br />
                  <br />
                  <a-cascader v-model:value="value" size="small" style="width: 100%" :options="options" />
                  <br />
                  <br />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Size">
                        Size
                        <a class="anchor" href="#Size">#</a>
                    </h4>
                    <p>
                        Cascade selection box of different sizes.
                    </p>
                </section>
            </section>

            <section id="components-cascader-demo-search" class="code-box expand">
                <section class="code-box-demo">
                    <a-cascader
                      v-model:value="value3"
                      :options="options"
                      :show-search="{ filter }"
                      
                      @change="onChange3"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Search">
                        Search
                        <a class="anchor" href="#Search">#</a>
                    </h4>
                    <p>
                        Search and select options directly.
                    </p>
                </section>
            </section>

            <section id="components-cascader-demo-change-on-select" class="code-box">
                <section class="code-box-demo">
                  <a-cascader v-model:value="value" :options="options" change-on-select @change="onChange"/>   
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ChangeOnSelect">
                        Change on Select 
                        <a class="anchor" href="#ChangeOnSelect">#</a>
                    </h4>
                    <p>
                        Allow only select parent options.
                    </p>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      value3: [],
      options: [
        {
          value: 'jawa-barat',
          label: 'Jawa Barat',
          children: [
            {
              value: 'kab-bandung',
              label: 'Kab. Bandung',
            },
            {
              value: 'kab-cianjur',
              label: 'Kab. Cianjur',
            },
            {
              value: 'kab-ciamis',
              label: 'Kab. Ciamis',
            },
            {
              value: 'kab-bogor',
              label: 'Kab. Bogor',
            },
          ],
        },
        {
          value: 'jakarta',
          label: 'DKI Jakarta',
          children: [
            {
              value: 'jakarta-utara',
              label: 'Jakarta Utara',
            },
            {
              value: 'jakarta-selatan',
              label: 'Jakarta Selatan',
            },
            {
              value: 'jakarta-timur',
              label: 'Jakarta Timur',
            },
            {
              value: 'jakarta-barat',
              label: 'Jakarta Barat',
            },
          ],
        },
      ],
    };
  },
  methods: {

    onChange3(value3, selectedOptions) {
      console.log(value3, selectedOptions);
    },
    filter(inputValue, path) {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    },
  },
};
</script>

<style>

.code-boxes-col-2-1{
    display: inline-block;
    vertical-align: top;
}

.code-box{
    border: 1px solid #ebedf0;
    border-radius: 6px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    transition: all .2s;
}

.code-box-demo{
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0,0,0,.65);
}

#components-cascader-demo-basic .ant-cascader-picker{
    width: 100%;
}

#components-cascader-demo-search .ant-cascader-picker{
    width: 100%;
}

#components-cascader-demo-hover .ant-cascader-picker{
    width: 100%;
}

#components-cascader-demo-change-on-select .ant-cascader-picker{
    width: 100%;
}

/* #components-cascader-demo-search .ant-cascader-picker .ant-input:hover{
    border-color: #0CC6A7;
    border-right-width: 2px !important;
    background-color: #fff;
} */

.code-box.expand .code-box-meta{
    border-radius: 0;
}

.code-box-meta.markdown{
    text-align: left;
    position: relative;
    width: 100%;
    font-size: 14px;
    transition: background-color .4s;
}

.markdown{
    color: #2c3e50;
    font-size: 14px;
    line-height: 2;
}

.markdown code{
    margin: 0 1px;
    background: #f3f3f4;
    padding: .2em .4em;
    border-radius: 3px;
    font-size: .9em;
    border: 1px solid #eee;
}

.code-box-meta .demo-description>h4, .code-box-meta>h4{
    position: absolute;
    top: -22px;
    padding: 1px 8px;
    margin-left: 16px;
    color: #2c3e50;
    border-radius: 2px 2px 0 0;
    background: #FFF;
    font-size: 14px;
    width: auto;
}

.code-box-meta .demo-description>p, .code-box-meta>p{
    font-size: 12px;
    margin: .5em 0;
    padding: 18px 24px 12px;
    width: 100%;
    word-break: break-word;
}

.code-box-actions{
    padding: 14px;
    text-align: center;
    opacity: .7;
    transition: opacity .3s;
}

.code-box-actions, .code-box .highlight:not(:first-child){
    border-top: 1px dashed #ebedf0;
}

.code-box .code-expand-icon{
    cursor: pointer;
}

.code-box-actions>form, .code-box-actions>i, .code-box-actions>span{
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    /* margin-left: 16px; */
    vertical-align: top;
}

.code-box .code-expand-icon-show{
    opacity: .55;
    pointer-events: auto;
}

.code-box .code-expand-icon-hide, .code-box .code-expand-icon-show{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-shadow: none;
    transition: all .4s;
    user-select: none;
}
</style>