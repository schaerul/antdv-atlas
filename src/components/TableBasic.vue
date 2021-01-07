<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-basic-usage" class="code-box">
                <section class="code-box-demo">
                    <a-table :columns="columns" :data-source="data">
                        <template #name="{ text }">
                        <a>{{ text }}</a>
                        </template>
                        <template #customTitle>
                        <span><smile-outlined /> Name</span>
                        </template>
                        <template #tags="{ text: tags }">
                        <span>
                            <a-tag
                            v-for="tag in tags"
                            :key="tag"
                            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                            >
                            {{ tag.toUpperCase() }}
                            </a-tag>
                        </span>
                        </template>
                        <template #action="{ record }">
                        <span>
                            <a>Invite 一 {{ record.name }}</a>
                            <a-divider type="vertical" />
                            <a>Delete</a>
                            <a-divider type="vertical" />
                            <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
                        </span>
                        </template>
                    </a-table>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Basic">
                        Basic
                        <a class="anchor" href="#Basic">#</a>
                    </h4>
                    <p>
                        Simple table with actions. 
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
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle', customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>