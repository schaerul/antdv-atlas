<template>
    <a-row>

        <!-- Left Section -->

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-fixed-columns-and-header" class="code-box">
                <section class="code-box-demo">
                    <a-table
                      :columns="columns"
                      :data-source="data"
                      :scroll="{ x: 1500, y: 300 }"
                      size="medium"
                      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                    >
                        <template #action="{ }">
                        <a>Edit <span>|</span> Delete</a>
                        </template>
                    </a-table>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="FixedColumnHeader">
                        Fixed Column & Header
                        <a class="anchor" href="#FixedColumnHeader">#</a>
                    </h4>
                    <p>
                        A Solution for displaying large amounts of data with long columns.
                    </p>
                    <blockquote>
                        <p>
                            Specify the width of columns if header and cell do not align properly.
                            If specified width is not working or have gutter between columns, please try to leave
                            one column at least without width to fit fluid layout, or make sure no long word to break table layout.
                            A fixed value which is greater than table width for <code>scroll.x</code> is recommended.
                            The sum of unfixed columns should not greater than <code>scroll.x</code>.
                        </p>
                    </blockquote>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>
        </a-col>

        <!-- End of Left Section -->

    </a-row>
</template>

<script>
const columns = [
  { title: 'Full Name', width: 120, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 70, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 160 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 160 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 160 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 160 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 160 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 160 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 160 },
  { title: 'Column 8', dataIndex: 'address', key: '8', width: 160 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 120,
    slots: { customRender: 'action' },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 3 + `${i}`,
    address: `London Park no. ${i}`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  methods: {
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
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

.code-box-meta blockquote{
    margin: 0 0 15px 24px;
}

.markdown blockquote{
    font-size: 90%;
    color: #7A869A;
    border-left: 4px solid #A5ADBA;
    padding-left: .8em;
    /* margin: 1em 0; */
}
</style>