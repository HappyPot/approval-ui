<template>
  <div class="approval_people">
    <div class="approval_people_title">{{title}}</div>
    <div class="approval_people_body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Time from "../../utils/index";
export default {
  name: "AContent",
  props: {
    //标题
    title: {
      default: "申请信息"
    }
  }
};
</script>

<style lang="scss" scoped>
.approval_people {
  padding-top: 27px;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 0px rgba(60, 16, 83, 0.2);
  border-radius: 2px;
  margin-bottom: 20px;
  background: #fff;
  margin-top: 20px;
  width: 960px;
  margin: 0 auto;
  padding-bottom: 14px;
}
.approval_people_title {
  color: rgba(60, 17, 83, 1);
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
}
.approval_people_body {
  padding-top: 20px;
}
</style>
