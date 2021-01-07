<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-border,-title-and-footer" class="code-box">
                <section class="code-box-demo">
                    <a-table :columns="columns" :data-source="data" bordered>
                        <template #name="{ text }">
                        <a>{{ text }}</a>
                        </template>
                        <template #title="">
                        Header
                        </template>
                        <template #footer="">
                        Footer
                        </template>
                    </a-table>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="HeaderTable">
                        Border, Title and Footer
                        <a class="anchor" href="#HeaderTable">#</a>
                    </h4>
                    <p>
                        Add border, title and footer for table. 
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
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
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
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>