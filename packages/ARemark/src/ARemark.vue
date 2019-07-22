<template>
  <div class="approvalWrap">
    <div class="approvalText">
      <p>
        审批意见/备注
        <span style="font-size:16px;color:#ed4014" v-show="isError">请填写审批意见</span>
      </p>
      <textarea
        :value="currentValue"
        cols="30"
        rows="10"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "ARemark",
  model: {
    prop: "currentValue",
    event: "input"
  },
  props: {
    currentValue: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      isError: false
    };
  },
  mounted() {},
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value); //这里$emit调用的是默认的input
    },
    handleBlur(event) {
      this.$emit("on-blur", { event: event, val: this.currentValue });
    },
    handleChange() {
      this.$emit("on-change", { event: event, val: this.currentValue });
    }
  }
};
</script>

<style lang="scss" scoped>
.approvalText {
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
  background: #fff;
  -webkit-box-shadow: 0 0 2px 0 rgba(60, 16, 83, 0.12),
    0 2px 2px 0 rgba(60, 16, 83, 0.2);
  box-shadow: 0 0 2px 0 rgba(60, 16, 83, 0.12),
    0 2px 2px 0 rgba(60, 16, 83, 0.2);
  padding-right: 20px;
  padding-left: 20px;
}

.approvalText {
  padding-bottom: 20px;
}

.approvalText p {
  /* font-size: 22px; */
  font-size: 18px;
  font-weight: bold;
  padding-left: 20px;
  color: rgba(60, 17, 83, 1);
}

.approvalText textarea {
  border-radius: 5px;
  border: 2px solid #3c1053;
  width: 100%;
  height: 115px;
  margin-top: 10px;
  padding: 10px;
  font-size: 15px;
  resize: none;
}
</style>
