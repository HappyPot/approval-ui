<template>
  <div class="approvalWrap">
    <div class="approvalTable" ref="print">
      <div class="approvalHead">
        <div class="arizhi">审批日志</div>
        <div class="aprint" @click="printPage">
          <Icon type="md-print" />打印
        </div>
        <div class="showprocess">
          <!-- <Checkbox v-model="allprocess">显示所有流程操作</Checkbox> -->
        </div>
      </div>
      <div class="approvalTableBody">
        <Table :columns="columns" :data="data"></Table>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../../utils/index";
export default {
  name: "ALog",
  props: {
    //标题
    columns: {
      required: true,
      default: [
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
      ]
    },
    data: {
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    printPage() {
      utils.printPage(this);
    }
  }
};
</script>

<style lang="scss" scoped>
.approvalTable {
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

.approvalTable {
  padding-bottom: 20px;
  margin-top: 13px;
  margin-bottom: 20px;
}

.approvalHead {
  overflow: hidden;
}

.approvalHead > div {
  float: left;
  line-height: 33px;
}
.arizhi {
  /* font-size: 22px; */
  font-size: 18px;
  font-weight: bold;
  padding-left: 20px;
  color: rgba(60, 17, 83, 1);
}

.aprint {
  margin-left: 20px;
  font-size: 16px;
}

.showprocess {
  font-size: 22px;
  float: right !important;
}
</style>
