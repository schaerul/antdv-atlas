<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-datepicker-demo-type" class="code-box">
                <section class="code-box-demo">
                    <a-date-picker v-model:value="value1" @change="onChange" />
                    <br />
                    <a-month-picker v-model:value="value2" placeholder="Select month" @change="onChange" />
                    <br />
                    <a-range-picker v-model:value="value3" @change="onChange" />
                    <br />
                    <a-week-picker v-model:value="value4" placeholder="Select week" @change="onChange" />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="BasicCalendar">
                        Basic Calendar
                        <a class="anchor" href="#BasicCalendar">#</a>
                    </h4>
                    <p>
                        Basic use case. Users can select or input a date in panel.
                    </p>
                </section>
            </section>

            <section id="components-date-picker-demo-disabled-date-time" class="code-box">
                <section class="code-box-demo">
                    <a-date-picker
                        format="YYYY-MM-DD HH:mm:ss"
                        :disabled-date="disabledDate"
                        :disabled-time="disabledDateTime"
                        :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                    />
                    <br />
                    <a-month-picker :disabled-date="disabledDate" placeholder="Select month" />
                    <br />
                    <a-range-picker
                        :disabled-date="disabledDate"
                        :disabled-time="disabledRangeTime"
                        :show-time="{
                        hideDisabledOptions: true,
                        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                        }"
                        format="YYYY-MM-DD HH:mm:ss"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DisableDateTime">
                        Disabled Date & Time
                        <a class="anchor" href="#DisableDateTime">#</a>
                    </h4>
                    <p>
                        Disabled part of dates and time by <code>disabledDate</code> and <code>disabledTime</code> respectively,
                        and <code>disabledTime</code> only works with <code>showTime</code>.
                    </p>
                </section>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-date-picker-demo-date-format" class="code-box expand">
                <section class="code-box-demo">
                    <a-date-picker :default-value="moment('2015/01/01', dateFormat)" :format="dateFormat" />
                    <br />
                    <a-date-picker
                        :default-value="moment('01/01/2015', dateFormatList[0])"
                        :format="dateFormatList"
                    />
                    <br />
                    <a-month-picker :default-value="moment('2015/01', monthFormat)" :format="monthFormat" />
                    <br />
                    <a-range-picker
                        :default-value="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
                        :format="dateFormat"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DateFormat">
                        Date Format
                        <a class="anchor" href="#DateFormat">#</a>
                    </h4>
                    <p>
                        We can set the date format by <code>format</code>.
                    </p>
                </section>
            </section>

            <section id="components-date-picker-demo-preset-ranges" class="code-box">
                <section class="code-box-demo">
                    <a-range-picker
                        :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
                        @change="onChange2"
                    />
                    <br />
                    <a-range-picker
                        :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
                        show-time
                        format="YYYY/MM/DD HH:mm:ss"
                        @change="onChange2"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="PresetRanges">
                        Preset Ranges
                        <a class="anchor" href="#PresetRanges">#</a>
                    </h4>
                    <p>
                        We can set presetted ranges to RangePicker to improve user experience.
                    </p>
                </section>
            </section>

            <section id="components-date-picker-demo-customized-range-picker" class="code-box">
                <section class="code-box-demo">
                    <a-date-picker
                        v-model:value="startValue"
                        :disabled-date="disabledStartDate"
                        show-time
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="Start"
                        @openChange="handleStartOpenChange"
                    />
                    <a-date-picker
                        v-model:value="endValue"
                        :disabled-date="disabledEndDate"
                        show-time
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="End"
                        :open="endOpen"
                        @openChange="handleEndOpenChange"
                    />
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="CustomizedRangePicker">
                        Customized Range Picker
                        <a class="anchor" href="#CustomizedRangePicker">#</a>
                    </h4>
                    <p>
                        When <code>RangePicker</code> does not satisfied your requirements, try to implement similar
                        functionality with two <code>DatePicker</code>.
                    </p>
                    <blockquote>
                        <ul>
                            <li>Use the <code>disabledDate</code> property to limit the start and end dates.</li>
                            <li>Improve user experience with <code>open</code> and <code>openChange</code>.</li>
                        </ul>
                    </blockquote>
                </section>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
      value1: null,
      value2: null,
      value3: [],
      value4: null,
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
    };
  },

  watch: {
    startValue(val) {
      console.log('startValue', val);
    },
    endValue(val) {
      console.log('endValue', val);
    },
  },

  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    onChange2(dates, dateStrings) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    },
    moment,
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },

    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },

    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    },

    disabledRangeTime(_, type) {
      if (type === 'start') {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56],
      };
    },

    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
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

#components-datepicker-demo-type .ant-calendar-picker{
    width: 60%;
    margin-bottom: 16px;
}

#components-date-picker-demo-disabled-date-time .ant-calendar-picker{
    width: 60% !important;
    margin-bottom: 16px;
}
#components-date-picker-demo-date-format .ant-calendar-picker{
    width: 60% !important;
    margin-bottom: 16px;
}
#components-date-picker-demo-preset-ranges .ant-calendar-picker{
    width: 60% !important;
    margin-bottom: 16px;
}

#components-date-picker-demo-customized-range-picker .ant-calendar-picker{
    width: 60% !important;
    margin-bottom: 16px;
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