<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-pagination-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-pagination v-model:current="current" :total="50" show-less-items />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicPagination">
                        Basic
                        <a class="anchor" href="#BasicPagination">#</a>
                    </h4>
                    <p>
                        BasicPagination.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-pagination-demo-more" class="code-box">
                <section class="code-box-demo">
                    <a-pagination v-model:current="current" :total="500" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="MorePages">
                        More
                        <a class="anchor" href="#MorePages">#</a>
                    </h4>
                    <p>
                        Mode pages.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-pagination-demo-changer" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-pagination
                        show-size-changer
                        v-model:current="current1"
                        v-model:pageSize="pageSize"
                        :total="500"
                        @showSizeChange="onShowSizeChange"
                        />
                        <br />
                        <a-pagination
                        v-model:current="current2"
                        show-size-changer
                        :total="500"
                        disabled
                        @showSizeChange="onShowSizeChange"
                        />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Changer">
                        Changer
                        <a class="anchor" href="#Changer">#</a>
                    </h4>
                    <p>
                        Change <code>pageSize</code>.
                    </p>
                </section>
            </section>

            <section id="components-pagination-demo-jumper" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-pagination show-quick-jumper v-model:current="current1" :total="500" @change="onChange" />
                        <br />
                        <a-pagination
                        show-quick-jumper
                        v-model:current="current2"
                        :total="500"
                        disabled
                        show-less-items
                        @change="onChange"
                        />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Jumper">
                        Jumper
                        <a class="anchor" href="#Jumper">#</a>
                    </h4>
                    <p>
                        Jump to a page directly.
                    </p>
                </section>
            </section>

            <section id="components-pagination-demo-total-number" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-pagination
                        :total="85"
                        :show-total="total => `Total ${total} items`"
                        :page-size="20"
                        v-model:current="current1"
                        />
                        <br />
                        <a-pagination
                        :total="85"
                        :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
                        :page-size="20"
                        v-model:current="current2"
                        />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TotalNumber">
                        Total Number 
                        <a class="anchor" href="#TotalNumber">#</a>
                    </h4>
                    <p>
                        You can show the total number of data by setting <code>showTotal</code>.
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
      current: 2,
      pageSize: 20,
      current1: 3,
      current2: 4,
    };
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val);
    },
    current(val) {
      console.log('current', val);
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
};
</script>