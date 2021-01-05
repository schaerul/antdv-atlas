<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-empty-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-empty />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="EmptyBasic">
                        Basic
                        <a class="anchor" href="#EmptyBasic">#</a>
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

            <section id="components-empty-demo-customize" class="code-box">
                <section class="code-box-demo">
                    <a-empty
                        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                        :image-style="{
                        height: '60px',
                        }"
                    >
                        <template #description>
                        <span> Customize <a href="#API">Description</a> </span>
                        </template>
                        <a-button type="primary" size="small">
                        Create Now
                        </a-button>
                    </a-empty>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomEmpty">
                        Customize Empty
                        <a class="anchor" href="#CustomEmpty">#</a>
                    </h4>
                    <p>
                        Customize image, description and extra content.
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
            <section id="components-empty-demo-no-description" class="code-box expand">
                <section class="code-box-demo">
                    <a-empty :description="false" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="NoDescription">
                        No Description
                        <a class="anchor" href="#NoDescription">#</a>
                    </h4>
                    <p>
                        Simplest Usage with no description.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-empty-demo-chose-image" class="code-box">
                <section class="code-box-demo">
                    <a-empty :image="simpleImage" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomImage">
                        Choose Image
                        <a class="anchor" href="#CustomImage">#</a>
                    </h4>
                    <p>
                        You can choose another style of <code>image</code> by setting image to <code>Empty.PRESENTED_IMAGE_SIMPLE</code>.
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
import { Empty } from 'ant-design-vue';
export default {
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  },
};
</script>