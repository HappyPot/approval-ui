# approval-ui

<a name="E6Xyc"></a>
## 安装方式:

```javascript
npm install approval-ui -save
```

<a name="rvazc"></a>
## 使用方式：

```javascript
import approval from 'approval-ui'
Vue.use(approval)
```

包括四个组件模块：AHeader，AContent，ALog，ARemark

<a name="HtAjR"></a>
## AHeader

```javascript
<template>
  <div class="app">
    <AHeader
      :projectName="name"
      :applyDate="date"
      :jobNumber="1029898899"
      :label1="label1Name"
      :label2="label2Name"
    />
    
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      name: "项目名称",
      date: "2019-01-01T13:13:13",
      label1Name: "提交日期",
      label2Name: "提交单号"
    };
  },
};
</script>
```
<a name="coWJk"></a>
## 
<a name="UUg2G"></a>
## API
props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| projectName | 项目名称 | String | "我的项目名称" |
| applyDate | 时间，一般后台会传入类似于这样的日期“2019-01-01T13:13:13” | String | - |
| jobNumber | 申请单号 | Number | String | - |
| label1 | 头部一般会有两项，这是第一项的名称 | String | "提交日期" |
| label2 | 头部一般会有两项，这是第二项的名称 | String | "申请单号" |

<a name="8L08E"></a>
### 显示效果：
![image.png](https://cdn.nlark.com/yuque/0/2019/png/228774/1563760989646-d40f80ed-47e4-40fc-a74e-05103750ec55.png#align=left&display=inline&height=79&name=image.png&originHeight=158&originWidth=1918&size=21255&status=done&width=959)

<a name="VTVXb"></a>
## AContent

```javascript
<template>
  <div class="app">
    <AContent :title="name" >
    </AContent>
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      name: "申请信息"
    };
  }
};
</script>
```
<a name="m3GBP"></a>
## 
<a name="uT9fT"></a>
## API
props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 内容标题 | String | "申请信息" |

<a name="dh0VJ"></a>
### 显示效果：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/228774/1563760819121-75a8c3f2-86f9-49a6-9353-240e82848509.png#align=left&display=inline&height=132&name=image.png&originHeight=264&originWidth=1968&size=14877&status=done&width=984)
<a name="pV659"></a>
#### AContent-slot
| 名称 | 说明 |  |
| --- | --- | --- |
| scoped | 附件内容,(非具名插槽) |  |

<a name="4CuPw"></a>
#### 示例：

```javascript
<AContent :title="name">
  <template>这是附加内容</template>
</AContent>
```

<a name="YSbNB"></a>
### 显示效果：
![image.png](https://cdn.nlark.com/yuque/0/2019/png/228774/1563762713026-d86c5867-727c-4259-af5c-b4b918738e3d.png#align=left&display=inline&height=140&name=image.png&originHeight=280&originWidth=1928&size=19857&status=done&width=964)

<a name="d8qli"></a>
# ALog

```javascript
<template>
  <div class="app">
    <ALog :columns="columns1" :data="approvalList"></ALog>
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      name: "申请信息",
      columns1:[
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
      approvalList:[
        {
          ActivityName:'reWork',
          UserName:'章三',
          ActionCNName:'退回',
          ActionDate:'2019-01-01',
          Comments:'修改经理'
        },
      ]
    };
  }
};
</script>
```
<a name="KYbq7"></a>
## 
<a name="QFa8A"></a>
## API
props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表格列的配置描述，具体可参照iview中的Table文档 | Array | 参照下方的代码 |

<a name="CLf8e"></a>
#### 默认值：

```javascript
[
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
      approvalList:[
        {
          ActivityName:'reWork',
          UserName:'章三',
          ActionCNName:'退回',
          ActionDate:'2019-01-01',
          Comments:'修改经理'
        },
      ]
```
<a name="e2FZe"></a>
## 
<a name="0RtYz"></a>
## 显示效果：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/228774/1563763263092-e2ef06f3-24fb-46f3-a43a-6bae89d66564.png#align=left&display=inline&height=187&name=image.png&originHeight=374&originWidth=1940&size=40875&status=done&width=970)

<a name="hUwj3"></a>
# ARemark

```javascript
<template>
  <div class="app">
    <ARemark v-model="text" ref="aremark" @on-blur="handelBlur"></ARemark>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      text: ""
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
```
<a name="0ZYye"></a>
## 
<a name="A9hNZ"></a>
## API
props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 绑定的值，可使用 v-model 双向绑定 | String | Number | 空 |

events<br />

| 属性 | 说明 | 返回值 |
| --- | --- | --- |
| on-blur | 输入框失去焦点时触发 | 无 |

<a name="2xWRC"></a>
## 显示效果
![image.png](https://cdn.nlark.com/yuque/0/2019/png/228774/1563764022768-4f3faaed-d9c6-47fc-b63e-62cb7a1448ce.png#align=left&display=inline&height=218&name=image.png&originHeight=436&originWidth=1940&size=31602&status=done&width=970)
