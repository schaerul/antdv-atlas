<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-descriptions-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-descriptions title="User Info">
                        <a-descriptions-item label="UserName">
                        Chaerul Sutami
                        </a-descriptions-item>
                        <a-descriptions-item label="Mobile No.">
                        +62 838 2013 6 347
                        </a-descriptions-item>
                        <a-descriptions-item label="Live">
                        Cianjur, Jawa Barat
                        </a-descriptions-item>
                        <a-descriptions-item label="Position">
                        UI/UX Designer
                        </a-descriptions-item>
                        <a-descriptions-item label="Address">
                        Jl. Slamet Gg. H. Usman II No. 7, Kel. Bojongherang
                        </a-descriptions-item>
                    </a-descriptions>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicDescription">
                        Basic Description
                        <a class="anchor" href="#CollapseBasic">#</a>
                    </h4>
                    <p>
                        Simplest Usage.
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

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-descriptions-demo-border" class="code-box">
                <section class="code-box-demo">
                    <a-descriptions title="User Info" bordered>
                        <a-descriptions-item label="Product">
                        Cloud Database
                        </a-descriptions-item>
                        <a-descriptions-item label="Billing Mode">
                        Prepaid
                        </a-descriptions-item>
                        <a-descriptions-item label="Automatic Renewal">
                        YES
                        </a-descriptions-item>
                        <a-descriptions-item label="Order time">
                        2018-04-24 18:00:00
                        </a-descriptions-item>
                        <a-descriptions-item label="Usage Time" :span="2">
                        2019-04-24 18:00:00
                        </a-descriptions-item>
                        <a-descriptions-item label="Status" :span="3">
                        <a-badge status="processing" text="Running" />
                        </a-descriptions-item>
                        <a-descriptions-item label="Negotiated Amount">
                        $80.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Discount">
                        $20.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Official Receipts">
                        $60.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Config Info">
                        Data disk type: MongoDB
                        <br />
                        Database version: 3.4
                        <br />
                        Package: dds.mongo.mid
                        <br />
                        Storage space: 10 GB
                        <br />
                        Replication factor: 3
                        <br />
                        Region: East China 1<br />
                        </a-descriptions-item>
                    </a-descriptions>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DescriptionBorder">
                        Border
                        <a class="anchor" href="#DescriptionBorder">#</a>
                    </h4>
                    <p>
                        Descriptions with border and background color.
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

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-descriptions-demo-custom-size" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-radio-group v-model:value="size" @change="onChange">
                        <a-radio value="default">
                            Default
                        </a-radio>
                        <a-radio value="middle">
                            Middle
                        </a-radio>
                        <a-radio value="small">
                            Small
                        </a-radio>
                        </a-radio-group>
                        <br />
                        <br />
                        <a-descriptions bordered title="Custom Size" :size="size">
                        <template #extra>
                            <a-button type="primary">Edit</a-button>
                        </template>
                        <a-descriptions-item label="Product">
                            Cloud Database
                        </a-descriptions-item>
                        <a-descriptions-item label="Billing">
                            Prepaid
                        </a-descriptions-item>
                        <a-descriptions-item label="Time">
                            18:00:00
                        </a-descriptions-item>
                        <a-descriptions-item label="Amount">
                            $80.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Discount">
                            $20.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Official">
                            $60.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Config Info">
                            Data disk type: MongoDB
                            <br />
                            Database version: 3.4
                            <br />
                            Package: dds.mongo.mid
                            <br />
                            Storage space: 10 GB
                            <br />
                            Replication factor: 3
                            <br />
                            Region: East China 1<br />
                        </a-descriptions-item>
                        </a-descriptions>
                        <br />
                        <br />
                        <a-descriptions title="Custom Size" :size="size">
                        <template #extra>
                            <a-button type="primary">Edit</a-button>
                        </template>
                        <a-descriptions-item label="Product">
                            Cloud Database
                        </a-descriptions-item>
                        <a-descriptions-item label="Billing">
                            Prepaid
                        </a-descriptions-item>
                        <a-descriptions-item label="Time">
                            18:00:00
                        </a-descriptions-item>
                        <a-descriptions-item label="Amount">
                            $80.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Discount">
                            $20.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Official">
                            $60.00
                        </a-descriptions-item>
                        </a-descriptions>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomSize">
                        Custom Size
                        <a class="anchor" href="#CustomSize">#</a>
                    </h4>
                    <p>
                        Custom sizes to fit in a variety of containers.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-descriptions-demo-vertical-border" class="code-box">
                <section class="code-box-demo">
                    <a-descriptions title="User Info" layout="vertical" bordered>
                        <a-descriptions-item label="Product">
                        Cloud Database
                        </a-descriptions-item>
                        <a-descriptions-item label="Billing Mode">
                        Prepaid
                        </a-descriptions-item>
                        <a-descriptions-item label="Automatic Renewal">
                        YES
                        </a-descriptions-item>
                        <a-descriptions-item label="Order time">
                        2018-04-24 18:00:00
                        </a-descriptions-item>
                        <a-descriptions-item label="Usage Time" :span="2">
                        2019-04-24 18:00:00
                        </a-descriptions-item>
                        <a-descriptions-item label="Status" :span="3">
                        <a-badge status="processing" text="Running" />
                        </a-descriptions-item>
                        <a-descriptions-item label="Negotiated Amount">
                        $80.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Discount">
                        $20.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Official Receipts">
                        $60.00
                        </a-descriptions-item>
                        <a-descriptions-item label="Config Info">
                        Data disk type: MongoDB
                        <br />
                        Database version: 3.4
                        <br />
                        Package: dds.mongo.mid
                        <br />
                        Storage space: 10 GB
                        <br />
                        Replication factor: 3
                        <br />
                        Region: East China 1<br />
                        </a-descriptions-item>
                    </a-descriptions>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="VerticalBorder">
                        Vertical Border
                        <a class="anchor" href="#VerticalBorder">#</a>
                    </h4>
                    <p>
                        Descriptions with border and background color.
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
export default {
  data() {
    return {
      size: 'default',
    };
  },
  methods: {
    onChange(e) {
      console.log('size checked', e.target.value);
      this.size = e.target.value;
    },
  },
};
</script>