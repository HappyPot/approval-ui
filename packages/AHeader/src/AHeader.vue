<template>
  <div class="approval_header">
    <div class="approval_header_text approval_header_item">{{projectName}}</div>
    <template v-if="applyDate">
      <div class="approval_header_submitTiem approval_header_item">
        <span class="approval_header_submitTiem_left">{{label1}}</span>
        <span class="approval_header_submitTiem_right">{{time}}</span>
      </div>
    </template>
    <template v-if="jobNumber">
      <div class="approval_header_jobnumber approval_header_item">
        <span class="approval_header_submitTiem_left">{{label2}}</span>
        <span class="approval_header_submitTiem_right">{{jobNumber}}</span>
      </div>
    </template>
    <!-- 插槽用于扩展 -->
    <template>
      <div class="approval_header_item">
        <slot name="scoped"></slot>
      </div>
    </template>
  </div>
</template>

<script>
import Time from "../../utils/index";
export default {
  name: "AHeader",
  props: {
    // 项目名称
    projectName: {
      required: true,
      default: ""
    },
    // 日期
    applyDate: {
      default: ""
    },
    //单号
    jobNumber: {
      default: ""
    },
    // 显示标题
    label1: {
      default: "提交日期"
    },
    // 显示标题
    label2: {
      default: "申请单号"
    }
  },
  computed: {
    time() {
      return Time.FormatRenderTime2(this.applyDate);
    }
  }
};
</script>

<style lang="scss" scoped>
.approval_header {
  border-top: 3px solid #3c1153;
  height: 60px;
  line-height: 60px;
  width: 960px;
  background: #ffffff;
  margin: 0 auto;
}

.approval_header_text {
  color: #3c1053;
  font-size: 18px;
  text-align: center;
  padding-left: 35px;
  font-weight: bold;
}

.approval_header_submitTiem {
  margin-left: 79px;
}

.approval_header_submitTiem span {
  display: inline-block;
}

.approval_header_jobnumber {
  margin-left: 24px;
}

.approval_header_submitTiem_right {
  width: 180px;
}

.approval_header_submitTiem_left {
  width: 84px;
}

.approval_header_jobnumber span {
  display: inline-block;
}
.approval_header_item {
  float: left;
}
</style>
