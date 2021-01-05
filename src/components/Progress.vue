
<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-progress-demo-progress-bar" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-progress :percent="30" />
                        <a-progress :percent="50" status="active" />
                        <a-progress :percent="70" status="exception" />
                        <a-progress :percent="100" />
                        <a-progress :percent="50" :show-info="false" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ProgressBar">
                        Progress Bar
                        <a class="anchor" href="#ProgressBar">#</a>
                    </h4>
                    <p>
                        A standard progress bar. 
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-progress-demo-mini-size-progress-bar" class="code-box">
                <section class="code-box-demo">
                    <div style="width: 170px">
                        <a-progress :percent="30" size="small" />
                        <a-progress :percent="50" size="small" status="active" />
                        <a-progress :percent="70" size="small" status="exception" />
                        <a-progress :percent="100" size="small" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="MiniSize">
                        Mini Size Progress Bar
                        <a class="anchor" href="#MiniSize">#</a>
                    </h4>
                    <p>
                        Appropriate for a narrow area. 
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-progress-demo-progress-bar-with-success-segment" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-tooltip title="3 done / 3 in progress / 4 to do">
                        <a-progress :percent="60" :success-percent="30" />
                        </a-tooltip>
                        <a-tooltip title="3 done / 3 in progress / 4 to do">
                        <a-progress :percent="60" :success-percent="30" type="circle" />
                        </a-tooltip>
                        <a-tooltip title="3 done / 3 in progress / 4 to do">
                        <a-progress :percent="60" :success-percent="30" type="dashboard" />
                        </a-tooltip>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SuccessSegment">
                        Progress Bar with Success Segment
                        <a class="anchor" href="#SuccessSegment">#</a>
                    </h4>
                    <p>
                        A standard progress bar.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-progress-demo-custom-line-gradient" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-progress
                        :stroke-color="{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }"
                        :percent="99.9"
                        />
                        <a-progress
                        :stroke-color="{
                            from: '#108ee9',
                            to: '#87d068',
                        }"
                        :percent="99.9"
                        status="active"
                        />
                        <a-progress
                        type="circle"
                        :stroke-color="{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }"
                        :percent="90"
                        />
                        <a-progress
                        type="circle"
                        :stroke-color="{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }"
                        :percent="100"
                        />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="LineGradient">
                        Custom Line Gradient
                        <a class="anchor" href="#LineGradient">#</a>
                    </h4>
                    <p>
                        A package of <code>linear-gradient</code>. It is recommended to only pass two colors. 
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

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-progress-demo-circular-progress-bar" class="code-box expand">
                <section class="code-box-demo">
                    <div>
                        <a-progress type="circle" :percent="75" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Circular">
                        Circular Progress Bar
                        <a class="anchor" href="#Circular">#</a>
                    </h4>
                    <p>
                        A circular progress bar. 
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-progress-demo-mini-size-circular-progress-bar" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-progress type="circle" :percent="30" :width="80" />
                        <a-progress type="circle" :percent="70" :width="80" status="exception" />
                        <a-progress type="circle" :percent="100" :width="80" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="MiniSizeCircular">
                        Mini Size Circular
                        <a class="anchor" href="#MiniSizeCircular">#</a>
                    </h4>
                    <p>
                        A smaller circular progress bar. 
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-progress-demo-dashboard" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-progress type="dashboard" :percent="75" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Dashboard">
                        Dashboard
                        <a class="anchor" href="#Dashboard">#</a>
                    </h4>
                    <p>
                        A standard progress bar. 
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

<style scoped>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
#components-progress-demo-mini-size-circular-progress-bar .ant-progress{
    margin-right: 16px;
}
#components-progress-demo-progress-bar-with-success-segment .ant-progress{
    margin: 0 16px 16px 0;
}
#components-progress-demo-custom-line-gradient .ant-progress{
    margin: 0 16px 16px 0; 
}
</style>