<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-time-picker-demo-12-hours" class="code-box">
                <section class="code-box-demo">
                    <div>
                        <a-time-picker use12-hours @change="onChange" />
                        <a-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
                        <a-time-picker use12-hours format="h:mm a" @change="onChange" />
                    </div>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="EmptyBasic">
                        12 hours
                        <a class="anchor" href="#EmptyBasic">#</a>
                    </h4>
                    <p>
                        TimePicker of 12 hours format, with default format <code>h:mm:ss a</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-time-picker-demo-hour-and-minute" class="code-box">
                <section class="code-box-demo">
                    <a-time-picker v-model:value="value" format="HH:mm" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="HourMinute">
                        Hour and Minute
                        <a class="anchor" href="#CustomEmpty">#</a>
                    </h4>
                    <p>
                        While part of <code>format</code> is omitted, the corresponding column in panel will disappear, too.
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
            <section id="components-time-picker-demo-interval-option" class="code-box expand">
                <section class="code-box-demo">
                    <a-time-picker :minute-step="15" :second-step="10" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="IntervalOption">
                        Interval Option
                        <a class="anchor" href="#IntervalOption">#</a>
                    </h4>
                    <p>
                        Show stepped options by <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code>.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-time-picker-demo-suffix" class="code-box">
                <section class="code-box-demo">
                    <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')">
                        <template #suffixIcon><smile-outlined /></template>
                    </a-time-picker>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomImage">
                        Suffix
                        <a class="anchor" href="#CustomImage">#</a>
                    </h4>
                    <p>
                        Click <code>TimePicker</code>, and then we could select or input a time in panel.
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
import moment from 'moment';
import { SmileOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SmileOutlined,
  },
  data() {
    return {
      value: moment('12:08', 'HH:mm'),
    };
  },
  methods: {
    moment,
    onChange(time, timeString) {
      console.log(time, timeString);
    },
  },
};
</script>

<style>
#components-time-picker-demo-12-hours .ant-time-picker{
    margin-right: 16px;
}
</style>