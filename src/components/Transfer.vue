<template>
    <a-row>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-transfer-demo-table-transfer" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-transfer
                        :titles="['Device Inventory', 'Destination Site']"
                        :data-source="mockData"
                        :target-keys="targetKeys"
                        :disabled="disabled"
                        :show-search="showSearch"
                        :filter-option="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
                        :show-select-all="false"
                        @change="onChange"
                        >
                        <template
                            #children="{
                            direction,
                            filteredItems,
                            selectedKeys,
                            disabled: listDisabled,
                            onItemSelectAll,
                            onItemSelect,
                            }"
                        >
                            <a-table
                            :row-selection="
                                getRowSelection({ disabled: listDisabled, selectedKeys, onItemSelectAll, onItemSelect })
                            "
                            :columns="direction === 'left' ? leftColumns : rightColumns"
                            :data-source="filteredItems"
                            size="small"
                            :style="{ pointerEvents: listDisabled ? 'none' : null }"
                            :custom-row="
                                ({ key, disabled: itemDisabled }) => ({
                                onClick: () => {
                                    if (itemDisabled || listDisabled) return;
                                    onItemSelect(key, !selectedKeys.includes(key));
                                },
                                })
                            "
                            />
                        </template>
                        </a-transfer>
                    </div>
                    <div class="switch-option">
                    <a-switch
                        un-checked-children="disabled"
                        checked-children="disabled"
                        :checked="disabled"
                        @change="triggerDisable"
                        />
                        <a-switch
                        un-checked-children="showSearch"
                        checked-children="showSearch"
                        :checked="showSearch"
                        @change="triggerShowSearch"
                    />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TableTransfer">
                        Table Transfer
                        <a class="anchor" href="#TableTransfer">#</a>
                    </h4>
                    <p>
                        Customize render list with Table component.
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
import difference from 'lodash/difference';
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 4 === 0,
  });
}

const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Device ID',
  },
  {
    dataIndex: 'description',
    title: 'Location Address',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];

export default {
  data() {
    return {
      mockData,
      targetKeys: originTargetKeys,
      disabled: false,
      showSearch: false,
      leftColumns: leftTableColumns,
      rightColumns: rightTableColumns,
    };
  },
  methods: {
    onChange(nextTargetKeys) {
      this.targetKeys = nextTargetKeys;
    },

    triggerDisable(disabled) {
      this.disabled = disabled;
    },

    triggerShowSearch(showSearch) {
      this.showSearch = showSearch;
    },
    getRowSelection({ disabled, selectedKeys, onItemSelectAll, onItemSelect }) {
      return {
        getCheckboxProps: item => ({ disabled: disabled || item.disabled }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, selectedKeys)
            : difference(selectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys,
      };
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

#components-transfer-demo-table-transfer .ant-transfer .ant-btn-icon-only.ant-btn-sm{
    width: 32px;
    height: 40px;
    padding: 0;
    font-size: 14px;
    border-radius: 6px;
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

.switch-option{
    text-align: left;
}

.switch-option .ant-switch{
    margin-top: 24px;
    margin-right: 16px;
}

</style>