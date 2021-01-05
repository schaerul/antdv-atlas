<template>
    <a-row>

        <!-- Left Section -->

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-ellipsis-column" class="code-box">
                <section class="code-box-demo">
                    <a-table :columns="columns" :data-source="data">
                        <template #name="{text}">
                        <a>{{ text }}</a>
                        </template>
                    </a-table>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="EllipsisColumn">
                        Ellipsis Column
                        <a class="anchor" href="#EllipsisColumn">#</a>
                    </h4>
                    <p>
                        Ellipsize cell content via setting <code>column.ellipsis</code>.
                    </p>
                    <blockquote>
                        <p>
                            Cannot ellipsize table header with sorters and filters for now.
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
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    slots: { customRender: 'name' },
    width: 120,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
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
    border-bottom: 1px dashed #ebedf0;
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