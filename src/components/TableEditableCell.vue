<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-editable-rows" class="code-box">
                <section class="code-box-demo">
                    <a-button class="editable-add-btn" @click="handleAdd">
                        Add
                    </a-button>
                    <a-table bordered :data-source="dataSource" :columns="columns">
                        <template #name="{ text, record }">
                        <editable-cell :text="text" @change="val => onCellChange(record.key, 'name', val)" />
                        </template>
                        <template #operation="{ record }">
                        <a-popconfirm
                            v-if="dataSource.length"
                            title="Sure to delete?"
                            @confirm="onDelete(record.key)"
                        >
                            <a>Delete</a>
                        </a-popconfirm>
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
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';

const EditableCell = {
  name: 'EditableCell',
  template: `
    <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input v-model:value="value" @pressEnter="check" />
          <check-outlined class="editable-cell-icon-check" @click="check" />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{value || ' '}}
          <edit-outlined class="editable-cell-icon" @click="edit" />
        </div>
    </div>
  `,
  components: {
    CheckOutlined,
    EditOutlined,
  },
  props: {
    text: String,
    onChange: Function,
  },
  data() {
    return {
      value: this.text,
      editable: false,
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    },
    edit() {
      this.editable = true;
    },
  },
};
export default {
  components: {
    EditableCell,
  },
  data() {
    return {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
      count: 2,
      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          slots: { customRender: 'name' },
        },
        {
          title: 'age',
          dataIndex: 'age',
        },
        {
          title: 'address',
          dataIndex: 'address',
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          slots: { customRender: 'operation' },
        },
      ],
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`,
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
  },
};
</script>
<style lang="less">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>