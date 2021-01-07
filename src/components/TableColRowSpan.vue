<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-table-demo-colspan-and-rowspan" class="code-box">
                <section class="code-box-demo">
                    <a-table :columns="columns" :data-source="data" bordered>
                        <template #name="{ text }">
                        <a>{{ text }}</a>
                        </template>
                    </a-table>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ColRowSpan">
                        colSpan and rowSpan 
                        <a class="anchor" href="#ColRowSpan">#</a>
                    </h4>
                    <p>
                        Table column title supports <code>colSpan</code> that set in <code>column</code>.
                        Table cell supports <code>colSpan</code> and <code>rowSpan</code> that set in render return object.
                        When each of them is set to <code>0</code>, the cell will not be rendered.             
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
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = ({ text, index }) => {
  const obj = {
    children: text,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

export default {
  data() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        customRender: ({ text, index }) => {
          if (index < 4) {
            return <a href="javascript:;">{text}</a>;
          }
          return {
            children: <a href="javascript:;">{text}</a>,
            props: {
              colSpan: 5,
            },
          };
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        customRender: renderContent,
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        customRender: ({ text, index }) => {
          const obj = {
            children: text,
            props: {},
          };
          if (index === 2) {
            obj.props.rowSpan = 2;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.props.rowSpan = 0;
          }
          if (index === 4) {
            obj.props.colSpan = 0;
          }
          return obj;
        },
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        customRender: renderContent,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        customRender: renderContent,
      },
    ];
    return {
      data,
      columns,
    };
  },
};
</script>