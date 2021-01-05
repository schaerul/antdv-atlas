<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="24" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-skeleton-demo-basic" class="code-box">
                <section class="code-box-demo">
                    <a-skeleton />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="SkeletonBasic">
                        Basic Skeleton
                        <a class="anchor" href="#SkeletonBasic">#</a>
                    </h4>
                    <p>
                        Simplest Skeleton usage.
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
            <section id="components-skeleton-demo-complex-combination" class="code-box">
                <section class="code-box-demo">
                    <a-skeleton avatar :paragraph="{ rows: 4 }" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ComplexCombination">
                        Complex Combination
                        <a class="anchor" href="#ComplexCombination">#</a>
                    </h4>
                    <p>
                        Complex combination with avatar and multiple paragraphs.
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
            <section id="components-skeleton-demo-active-animation" class="code-box expand">
                <section class="code-box-demo">
                    <a-skeleton active />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ActiveAnimation">
                        Active Animation
                        <a class="anchor" href="#ActiveAnimation">#</a>
                    </h4>
                    <p>
                        Display active animation.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-skeleton-demo-list" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-switch :checked="!loading" @change="onChange" />
                        <a-list item-layout="vertical" size="large" :data-source="listData">
                        <template #renderItem="{ item }">
                            <a-list-item key="item.title">
                            <template v-if="!loading" #actions>
                                <span v-for="{ type, text } in actions" :key="type">
                                <component v-bind:is="type" style="margin-right: 8px"></component>
                                {{ text }}
                                </span>
                            </template>
                            <template #extra>
                                <img
                                v-if="!loading"
                                width="272"
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            </template>
                            <a-skeleton :loading="loading" active avatar>
                                <a-list-item-meta :description="item.description">
                                <template #title>
                                    <a :href="item.href">{{ item.title }}</a>
                                </template>
                                <template #avatar><a-avatar :src="item.avatar"/></template>
                                </a-list-item-meta>
                                {{ item.content }}
                            </a-skeleton>
                            </a-list-item>
                        </template>
                        </a-list>
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="List">
                        List
                        <a class="anchor" href="#List">#</a>
                    </h4>
                    <p>
                        More than one panel can be expanded at a time, the first panel is initialized to be active in this case.
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
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default {
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  data() {
    return {
      loading: true,
      listData,
      actions: [
        { type: 'star-outlined', text: '156' },
        { type: 'like-outlined', text: '156' },
        { type: 'message-outlined', text: '2' },
      ],
    };
  },
  methods: {
    onChange(checked) {
      this.loading = !checked;
    },
  },
};
</script>
<style>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
