<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-statistic-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-statistic title="Active Users" :value="112893" style="margin-bottom: 24px" />
                        <a-statistic title="Account Balance (IDR)" :precision="2" :value="112893" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DemoBasicStat">
                        Basic
                        <a class="anchor" href="#DemoBasicStat">#</a>
                    </h4>
                    <p>
                        Simplest usage.
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
                    <div style="background: #ECECEC; padding: 30px">
                        <a-row :gutter="16">
                        <a-col :span="12">
                            <a-card>
                            <a-statistic
                                title="Feedback"
                                :value="11.28"
                                :precision="2"
                                suffix="%"
                                :value-style="{ color: '#00875A' , fontWeight: '500' }"
                                style="margin-right: 50px"
                            >
                                <template #prefix>
                                <arrow-up-outlined />
                                </template>
                            </a-statistic>
                            </a-card>
                        </a-col>
                        <a-col :span="12">
                            <a-card>
                            <a-statistic
                                title="Idle"
                                :value="9.3"
                                :precision="2"
                                suffix="%"
                                class="demo-class"
                                :value-style="{ color: '#F53240' , fontWeight: '500' }"
                            >
                                <template #prefix>
                                <arrow-down-outlined />
                                </template>
                            </a-statistic>
                            </a-card>
                        </a-col>
                        </a-row>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DemoInCard">
                        In Card
                        <a class="anchor" href="#DemoInCard">#</a>
                    </h4>
                    <p>
                        Display statistic data in Card.
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
                    <div>
                    <a-row :gutter="16">
                        <a-col :span="12">
                        <a-statistic title="Feedback" :value="1128">
                            <template #suffix>
                            <like-outlined />
                            </template>
                        </a-statistic>
                        </a-col>
                        <a-col :span="12">
                        <a-statistic title="Unmerged" :value="93" class="demo-class">
                            <template #suffix>
                            <span> / 100</span>
                            </template>
                        </a-statistic>
                        </a-col>
                    </a-row>
                    </div>
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
                    <a-row :gutter="16">
                        <a-col :span="12">
                        <a-statistic-countdown
                            title="Countdown"
                            :value="deadline"
                            style="margin-right: 50px"
                            @finish="onFinish"
                        />
                        </a-col>
                        <a-col :span="12">
                        <a-statistic-countdown
                            title="Million Seconds"
                            :value="deadline"
                            format="HH:mm:ss:SSS"
                            style="margin-right: 50px"
                        />
                        </a-col>
                        <a-col :span="24" style="margin-top: 32px;">
                        <a-statistic-countdown title="Day Level" :value="deadline" format="D 天 H 时 m 分 s 秒" />
                        </a-col>
                    </a-row>
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

import { LikeOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    LikeOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
  data() {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
    };
  },
  methods: {
    onFinish() {
      console.log('finished!');
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