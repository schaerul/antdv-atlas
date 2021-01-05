<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-editable-rows" class="code-box">
                <section class="code-box-demo">
                    <a-table :columns="columns" :data-source="data" bordered>
                        <template v-for="col in ['name', 'age', 'address']" #[col]="{ text, record }" :key="col">
                            
                                <a-input
                                v-if="record.editable"
                                style="margin: -5px 0"
                                :value="text"
                                @change="e => handleChange(e.target.value, record.key, col)"
                                />
                                <template v-else>
                                {{ text }}
                                </template>
        
                        </template>
                        <template #operation="{ record }">
                        <div class="editable-row-operations">
                            <span v-if="record.editable">
                            <a @click="save(record.key)">Save</a>
                            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
                                <a>Cancel</a>
                            </a-popconfirm>
                            </span>
                            <span v-else>
                            <a v-bind="editingKey !== '' ? { disabled: 'disabled' } : {}" @click="edit(record.key)">
                                Edit
                            </a>
                            </span>
                        </div>
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
  {
    title: 'Name',
    dataIndex: 'name',
    width: '25%',
    slots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '15%',
    slots: { customRender: 'age' },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '40%',
    slots: { customRender: 'address' },
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    slots: { customRender: 'operation' },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Ivan Scumbag ${i}`,
    age: 32,
    address: `Ujung Berung Rebels No. ${i}`,
  });
}
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns,
      editingKey: '',
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter(item => key === item.key)[0];
      const targetCache = newCacheData.filter(item => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = '';
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = '';
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
        delete target.editable;
        this.data = newData;
      }
    },
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
