<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-tooltip-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-tooltip>
                        <template #title>
                        This is a tooltip
                        </template>
                        Tooltip will show when mouse enter.
                    </a-tooltip>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicTooltip">
                        Basic
                        <a class="anchor" href="#BasicTooltip">#</a>
                    </h4>
                    <p>
                        The simplest usage.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-tooltip-demo-arrow-pointing-at-the-center" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-tooltip placement="topLeft" title="Prompt Text">
                        <a-button>Align Edge</a-button>
                        </a-tooltip>
                        <a-tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>
                        <a-button>Arrow Points to Center</a-button>
                        </a-tooltip>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CenterPointing">
                         Center Arrow Pointing
                        <a class="anchor" href="#CenterPointing">#</a>
                    </h4>
                    <p>
                        By specifying <code>arrowPointAtCenter</code> prop, the arrow will point to the center of the target element.
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
            <section id="components-tooltip-demo-placement" class="code-box expand">
                <section class="code-box-demo">
                    <div id="components-a-tooltip-demo-placement">
                        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
                        <a-tooltip placement="topLeft">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>TL</a-button>
                        </a-tooltip>
                        <a-tooltip placement="top">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>Top</a-button>
                        </a-tooltip>
                        <a-tooltip placement="topRight">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>TR</a-button>
                        </a-tooltip>
                        </div>
                        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                        <a-tooltip placement="leftTop">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>LT</a-button>
                        </a-tooltip>
                        <a-tooltip placement="left">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>Left</a-button>
                        </a-tooltip>
                        <a-tooltip placement="leftBottom">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>LB</a-button>
                        </a-tooltip>
                        </div>
                        <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
                        <a-tooltip placement="rightTop">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>RT</a-button>
                        </a-tooltip>
                        <a-tooltip placement="right">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>Right</a-button>
                        </a-tooltip>
                        <a-tooltip placement="rightBottom">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>RB</a-button>
                        </a-tooltip>
                        </div>
                        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
                        <a-tooltip placement="bottomLeft">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>BL</a-button>
                        </a-tooltip>
                        <a-tooltip placement="bottom">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>Bottom</a-button>
                        </a-tooltip>
                        <a-tooltip placement="bottomRight">
                            <template #title>
                            <span>This is a tooltip</span>
                            </template>
                            <a-button>BR</a-button>
                        </a-tooltip>
                        </div>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="TipPlacement">
                        Placement
                        <a class="anchor" href="#TipPlacement">#</a>
                    </h4>
                    <p>
                        There are 12 <code>placement</code> options available.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-tooltip-demo-adjust-placement-automatically" class="code-box">
                <section class="code-box-demo">
                    <div :style="wrapStyles">
                        <a-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">
                        <a-button>Adjust Automatically</a-button>
                        </a-tooltip>
                        <br />
                        <a-tooltip
                        placement="left"
                        title="Prompt Text"
                        :get-popup-container="getPopupContainer"
                        :auto-adjust-overflow="false"
                        >
                        <a-button style="margin-top: 10px">Ingore</a-button>
                        </a-tooltip>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="AdjustPlacement">
                        Adjust Placement Automatically
                        <a class="anchor" href="#AdjustPlacement">#</a>
                    </h4>
                    <p>
                        Adjust popup placement automatically when popup is invisible.
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
const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};

export default {
  data() {
    return {
      buttonWidth: 70,
      wrapStyles,
    };
  },

  methods: {
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
  },
};
</script>


<style scoped>
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}

#components-tooltip-demo-arrow-pointing-at-the-center .ant-btn,
#components-tooltip-demo-adjust-placement-automatically .ant-btn{
    margin-right: 16px;
}


</style>