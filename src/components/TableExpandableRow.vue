<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-editable-rows" class="code-box">
                <section class="code-box-demo">
                    <a-table :columns="columns" :data-source="data">
                        <template #action="{ }">
                        <a>Delete</a>
                        </template>
                        <template #expandedRowRender="{ record }">
                        <p style="margin: 0">
                            {{ record.description }}
                        </p>
                        </template>
                    </a-table>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="EditableRows">
                        Editable Rows
                        <a class="anchor" href="#EditableRows">#</a>
                    </h4>
                    <p>
                        Table with editable rows. 
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
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', dataIndex: '', key: 'x', slots: { customRender: 'action' } },
];

const data = [
  {
    key: 1,
    name: 'Chaerul Sutami',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is Chaerul Sutami, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Dwie Intan Yuniarti Santoso',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Dwie Intan Yuniarti Santoso, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Rendgra Agrida',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Rendgra Agrida, I am 32 years old, living in Sidney No. 1 Lake Park.',
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