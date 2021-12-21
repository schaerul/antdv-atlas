<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-page-header-demo-basic-page-header" class="code-box">
                <section class="code-box-demo">
                    <a-page-header
                        style="border: 1px solid rgb(235, 237, 240)"
                        title="Title"
                        sub-title="This is a subtitle"
                        @back="() => null"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicPageHeader">
                        Basic Page Header 
                        <a class="anchor" href="#BasicPageHeader">#</a>
                    </h4>
                    <p>
                        Standard header, suitable for use in scenarios that require a brief description.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-page-header-demo-use-with-breadcrumbs" class="code-box">
                <section class="code-box-demo">
                    <a-page-header
                        style="border: 1px solid rgb(235, 237, 240)"
                        title="Title"
                        :breadcrumb="{ routes }"
                        sub-title="This is a subtitle"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="UseBreadcrumbs">
                        Use with Breadcrumbs
                        <a class="anchor" href="#UseBreadcrumbs">#</a>
                    </h4>
                    <p>
                        Customize the background, border and margin styles and icon for each panel.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-page-header-demo-various-forms-of-pageheader" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-page-header
                        style="border: 1px solid rgb(235, 237, 240)"
                        title="Title"
                        sub-title="This is a subtitle"
                        @back="() => $router.go(-1)"
                        >
                        <template #extra>
                            <a-button key="3">
                            Operation
                            </a-button>
                            <a-button key="2">
                            Operation
                            </a-button>
                            <a-button key="1" type="primary">
                            Primary
                            </a-button>
                        </template>
                        <a-descriptions size="small" :column="3">
                            <a-descriptions-item label="Created">
                            Chaerul Sutami
                            </a-descriptions-item>
                            <a-descriptions-item label="Association">
                            <a>421421</a>
                            </a-descriptions-item>
                            <a-descriptions-item label="Creation Time">
                            2017-01-10
                            </a-descriptions-item>
                            <a-descriptions-item label="Effective Time">
                            2017-10-10
                            </a-descriptions-item>
                            <a-descriptions-item label="Remarks">
                            Bojongherang, Cianjur, Jawa Barat, Indonesia
                            </a-descriptions-item>
                        </a-descriptions>
                        </a-page-header>
                        <br />
                        <a-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
                        <template #tags>
                            <a-tag color="cyan">
                            Running
                            </a-tag>
                        </template>
                        <template v:slot="extra">
                            <a-button key="3">
                            Operation
                            </a-button>
                            <a-button key="2">
                            Operation
                            </a-button>
                            <a-button key="1" type="primary">
                            Primary
                            </a-button>
                        </template>
                        <a-row type="flex">
                            <a-statistic title="Status" value="Pending" />
                            <a-statistic
                            title="Price"
                            prefix="$"
                            :value="568.08"
                            :style="{
                                margin: '0 32px',
                            }"
                            />
                            <a-statistic title="Balance" prefix="$" :value="3345.08" />
                        </a-row>
                        </a-page-header>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="VariousForms">
                        Various Forms of PageHeader
                        <a class="anchor" href="#VariousForms">#</a>
                    </h4>
                    <p>
                        Use the operating area and customize the sub-nodes, suitable for use in the need to display some complex information to help users quickly understand the information and operations of this page.
                    </p>
                </section>
            </section>

            <section id="components-page-header-demo-responsive" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-page-header
                        style="border: 1px solid rgb(235, 237, 240)"
                        title="Title"
                        sub-title="This is a subtitle"
                        @back="() => $router.go(-1)"
                        >
                        <template #extra>
                            <a-button key="3">
                            Operation
                            </a-button>
                            <a-button key="2">
                            Operation
                            </a-button>
                            <a-button key="1" type="primary">
                            Primary
                            </a-button>
                        </template>
                        <template #footer>
                            <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="Details" />
                            <a-tab-pane key="2" tab="Rule" />
                            </a-tabs>
                        </template>
                        <div class="content">
                            <div class="main">
                            <a-descriptions size="small" :column="2">
                                <a-descriptions-item label="Created">
                                Chaerul Sutami
                                </a-descriptions-item>
                                <a-descriptions-item label="Association">
                                <a>421421</a>
                                </a-descriptions-item>
                                <a-descriptions-item label="Creation Time">
                                2017-01-10
                                </a-descriptions-item>
                                <a-descriptions-item label="Effective Time">
                                2017-10-10
                                </a-descriptions-item>
                                <a-descriptions-item label="Remarks">
                                Bojongherang, Cianjur, Jawa Barat, Indonesia
                                </a-descriptions-item>
                            </a-descriptions>
                            </div>
                            <div class="extra">
                            <div
                                :style="{
                                display: 'flex',
                                width: 'max-content',
                                justifyContent: 'flex-end',
                                }"
                            >
                                <a-statistic
                                title="Status"
                                value="Pending"
                                :style="{
                                    marginRight: '32px',
                                }"
                                />
                                <a-statistic title="Price" prefix="$" :value="568.08" />
                            </div>
                            </div>
                        </div>
                        </a-page-header>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Responsive">
                        Responsive
                        <a class="anchor" href="#Responsive">#</a>
                    </h4>
                    <p>
                        Under different screen sizes, there should be different performance
                    </p>
                </section>
            </section>

            <section id="components-page-header-demo-white-background-mode" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-page-header
                        style="border: 1px solid rgb(235, 237, 240)"
                        title="Title"
                        sub-title="This is a subtitle"
                        @back="() => $router.go(-1)"
                        >
                        <template #extra>
                            <a-button size="small" key="3">
                            Operation
                            </a-button>
                            <a-button size="small" key="2">
                            Operation
                            </a-button>
                            <a-button size="small" key="1" type="primary">
                            Primary
                            </a-button>
                        </template>
                        <template #footer>
                            <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="Details" />
                            <a-tab-pane key="2" tab="Rule" />
                            </a-tabs>
                        </template>
                        <div class="content">
                            <div class="main">
                            <a-descriptions size="small" :column="2">
                                <a-descriptions-item label="Created">
                                Chaerul Sutami
                                </a-descriptions-item>
                                <a-descriptions-item label="Association">
                                <a>421421</a>
                                </a-descriptions-item>
                                <a-descriptions-item label="Creation Time">
                                2017-01-10
                                </a-descriptions-item>
                                <a-descriptions-item label="Effective Time">
                                2017-10-10
                                </a-descriptions-item>
                                <a-descriptions-item label="Remarks">
                                Bojongherang, Cianjur, Jawa Barat, Indonesia
                                </a-descriptions-item>
                            </a-descriptions>
                            </div>
                            <div class="extra">
                            <div
                                :style="{
                                display: 'flex',
                                width: 'max-content',
                                justifyContent: 'flex-end',
                                }"
                            >
                                <a-statistic
                                title="Status"
                                value="Pending"
                                :style="{
                                    marginRight: '32px',
                                }"
                                />
                                <a-statistic title="Price" prefix="$" :value="568.08" />
                            </div>
                            </div>
                        </div>
                        </a-page-header>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Responsive">
                        White Background Mode
                        <a class="anchor" href="#Responsive">#</a>
                    </h4>
                    <p>
                        Under different screen sizes, there should be different performance
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
      routes: [
        {
          path: 'index',
          breadcrumbName: 'First-level Menu',
        },
        {
          path: 'first',
          breadcrumbName: 'Second-level Menu',
        },
        {
          path: 'second',
          breadcrumbName: 'Third-level Menu',
        },
      ],
    };
  },
};
</script>

<style>
tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>