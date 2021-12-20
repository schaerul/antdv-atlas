<template>
    <a-row>

        <!-- Left Section -->

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-badge-demo-overflow-count" class="code-box">
                <section class="code-box-demo">
                    <div>
                    <a-badge :count="99">
                        <a href="#" class="head-example" />
                    </a-badge>
                    <a-badge :count="100">
                        <a href="#" class="head-example" />
                    </a-badge>
                    <a-badge :count="99" :overflow-count="10">
                        <a href="#" class="head-example" />
                    </a-badge>
                    <a-badge :count="1000" :overflow-count="999">
                        <a href="#" class="head-example" />
                    </a-badge>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="OverflowCount">
                        Overflow Count
                        <a class="anchor" href="#OverflowCount">#</a>
                    </h4>
                    <p>
                        <code>${overflowCount}+</code> is displayed when count is larger than <code>overflowCount</code>. The default value of overflowCount is <code>99</code>.
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

        <!-- End of Left Section -->

        <!-- Right Section -->

        <a-col :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-badge-demo-red-badge" class="code-box">
                <section class="code-box-demo">
                    <div id="components-badge-demo-dot">
                        <a-badge dot>
                        <notification-outlined />
                        </a-badge>
                        <a-badge :count="0" dot>
                        <notification-outlined />
                        </a-badge>
                        <a-badge dot>
                        <a href="#">Link something</a>
                        </a-badge>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Type">
                        Type
                        <a class="anchor" href="#Type">#</a>
                    </h4>
                    <p>
                        There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button , <code>danger</code> button and <code>link</code> button in atlasdsgn.
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
import { NotificationOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    NotificationOutlined,
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


#components-badge-demo-overflow-count .head-example{
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #f3f3f4;
    display: inline-block;
    vertical-align: middle;
}

#components-badge-demo-overflow-count .ant-badge{
    margin-right: 24px;
}

#components-badge-demo-dot .anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}

#components-badge-demo-dot .ant-badge:not(.ant-badge-not-a-wrapper){
    margin-right: 24px;
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