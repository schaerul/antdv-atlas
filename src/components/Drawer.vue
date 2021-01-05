<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-drawer-demo-custom-placement" class="code-box">
                <section class="code-box-demo">
                    <a-radio-group style="margin-right: 8px" v-model:value="placement">
                        <a-radio value="top">
                        Top
                        </a-radio>
                        <a-radio value="right">
                        Right
                        </a-radio>
                        <a-radio value="bottom">
                        Bottom
                        </a-radio>
                        <a-radio value="left">
                        Left
                        </a-radio>
                    </a-radio-group>
                    <a-button type="primary" @click="showDrawer1">
                        Open
                    </a-button>
                    <a-drawer
                        title="Basic Drawer"
                        :placement="placement"
                        :closable="false"
                        :visible="visible1"
                        @close="onClose"
                    >
                        <p>I graduated from the Department of Architecture at the University of Madrid in 2012 and have since then been working on the urban design project of the Institute of the Environment and of Architecture, Madrid (IxD). This project has resulted in a number of projects. I have also been involved in various projects in the architecture field including the design and construction of the project of the Instituto Geofisica de Madrid. About the company: IxD is a design studio specialized in urban architecture and urban planning. IxD has been located in Madrid since 2005.</p>
                    </a-drawer>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomPlacement">
                        Custom Placement
                        <a class="anchor" href="#CustomPlacement">#</a>
                    </h4>
                    <p>
                        The Drawer can appear from any edge of the screen.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-statistic-demo-in-card" class="code-box">
                <section class="code-box-demo">
                    <a-button type="primary" @click="showDrawer2">
                        Open
                    </a-button>
                    <a-drawer
                        title="Multi-level drawer"
                        width="520"
                        :closable="false"
                        :visible="visible2"
                        @close="onClose"
                    >
                        <a-button type="primary" @click="showChildrenDrawer">
                        Two-level drawer
                        </a-button>
                        <a-drawer
                        title="Two-level Drawer"
                        width="320"
                        :closable="false"
                        :visible="childrenDrawer"
                        @close="onChildrenDrawerClose"
                        >
                        <a-button type="primary" @click="showChildrenDrawer">
                            This is two-level drawer
                        </a-button>
                        </a-drawer>
                        <div
                        :style="{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e8e8e8',
                            padding: '10px 16px',
                            textAlign: 'right',
                            left: 0,
                            background: '#fff',
                            borderRadius: '0 0 4px 4px',
                        }"
                        >
                        <a-button style="marginRight: 8px" @click="onClose">
                            Cancel
                        </a-button>
                        <a-button type="primary" @click="onClose">
                            Submit
                        </a-button>
                        </div>
                    </a-drawer>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="MultiDrawer">
                        Multi-level Drawer
                        <a class="anchor" href="#MultiDrawer">#</a>
                    </h4>
                    <p>
                        Open a new drawer on top of an existing drawer to handle multi branch tasks.
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
            <section id="components-statistic-demo-unit" class="code-box expand">
                <section class="code-box-demo">

                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DemoUnit">
                        Demo Unit
                        <a class="anchor" href="#DemoUnit">#</a>
                    </h4>
                    <p>
                        Add unit through <code>prefix</code> and <code>suffix</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-statistic-demo-countdown" class="code-box">
                <section class="code-box-demo">
                   
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Countdown">
                        Countdown
                        <a class="anchor" href="#Countdown">#</a>
                    </h4>
                    <p>
                        Countdown component.
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
      visible1: false,
      visible2: false,
      placement: 'left',
      childrenDrawer: false,
    };
  },
  methods: {
    showDrawer1() {
      this.visible1 = true;
    },
    showDrawer2() {
      this.visible2 = true;
    },
    onClose() {
      this.visible1 = false;
      this.visible2 = false;
    },
    showChildrenDrawer() {
      this.childrenDrawer = true;
    },
    onChildrenDrawerClose() {
      this.childrenDrawer = false;
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
</style>