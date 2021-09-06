<template>
  <div class="app">
    <header>
      <img src="../assets/approval-ui.png" alt />
      <nav>
        <ul>
          <li>
            <a href="https://github.com/HappyPot/approval-ui/blob/master/approval-ui.md">文档</a>
          </li>
          <li>
            <a href="https://github.com/HappyPot/approval-ui">github</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/approval-ui">npm</a>
          </li>
        </ul>
      </nav>
    </header>
    <h1 class="header">审批系统快速成型工具</h1>
    <span class="intro">Approval，针对公司审批业务的基于 Vue 2.0 的桌面端组件库</span>
    <p>AHeader组件</p>
    <AHeader
      :projectName="name"
      :applyDate="date"
      :jobNumber="1029898899"
      :label1="label1Name"
      :label2="label2Name"
      class="item"
    />
    <p>AContent组件</p>
    <AContent class="item" :title="title">
      <template>这是附加内容</template>
    </AContent>
    <p>ARemark组件</p>
    <ARemark class="item" v-model="text" ref="aremark" @on-blur="handelBlur"></ARemark>
    <p>ALog组件</p>
    <ALog class="item" :columns="columns1" :data="approvalList"></ALog>
    <footer>
      <div class="footer_box">
        <div class="footer_box_left">
          <h4>获取更多</h4>
          <div class="code_box">
            <img class="code" src="../assets/code.jpg" />
            <p>关注微信公众号</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      text: "",
      name: "项目名称",
      date: "2019-01-01T13:13:13",
      label1Name: "提交日期",
      label2Name: "提交单号",
      title: "申请信息",
      columns1: [
        {
          title: "节点名",
          key: "ActivityName"
        },
        {
          title: "用户名",
          key: "UserName"
        },
        {
          title: "操作",
          key: "ActionCNName"
        },
        {
          title: "操作日期",
          key: "ActionDate"
        },
        {
          title: "审批意见/备注",
          key: "Comments"
        }
      ],
      approvalList: [
        {
          ActivityName: "reWork",
          UserName: "章三",
          ActionCNName: "退回",
          ActionDate: "2019-01-01",
          Comments: "修改经理"
        }
      ]
    };
  },
  methods: {
    handelBlur(obj) {
      !obj.val
        ? (this.$refs.aremark.isError = true)
        : (this.$refs.aremark.isError = false);
      console.log(this.text);
    }
  }
};
</script>
<style>
nav {
  float: right;
}
nav a {
  color: #b6a7f9;
}
ul {
  overflow: hidden;
}
ul li {
  list-style: none;
  height: 100%;
  float: left;
  margin: 0 10px;
}
ul li:hover a {
  color: #7656ff;
}
header {
  width: 1040px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
  margin: 0 auto !important;
  height: 66px;
  box-sizing: border-box;
  line-height: 66px;
}
header > img {
  width: 146px;
  height: 38px;
  vertical-align: middle;
  text-align: center;
}
.item {
  margin-top: 20px !important;
}
.header {
  text-align: center;
  margin-top: 20px;
  font-size: 26px;
}
.app > p {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 960px;
  font-size: 16px;
}
.regular {
  width: 960px;
  display: block;
  text-align: center;
  margin: 0 auto;
}
.doc {
  font-size: 17px;
  margin-top: 10px;
}
.intro {
  text-align: center;
  display: block;
  font-size: 18px;
  margin: 10px 0 5px;
}
footer {
  background: #f9f8ff;
  width: 100%;
  padding: 40px 150px !important;
  box-sizing: border-box;
  height: auto;
}
.footer_box {
  width: 1040px;
  margin: 0 auto;
}
.code {
  width: 100px;
  height: 100px;
}
.footer_box_left h4 {
  font-size: 18px;
  padding-left: 13.1px;
}
.code_box {
  width: 100px;
}
.code_box p {
  text-align: center;
}
</style>

