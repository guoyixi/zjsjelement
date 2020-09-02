<template>
  <div>
    <!--操作-->
    <el-steps :active="approvalProcessConstructionList.length"
              process-status="process"
              finish-status="process"
              direction="vertical"
              :space="80">

      <el-step v-for="(item,index) in approvalProcessConstructionList"
               :key="item.id">

        <template slot="icon">
          <strong>{{index+1}}</strong>
        </template>

        <template slot="title">
          <el-row type="flex" justify="start">
            <el-col>
              <el-popover
                      placement="bottom"
                      title="请根据单位选择人员"
                      width="400"
                      trigger="click">
                <el-cascader-panel size="medium"
                                   :options="constructionAndEmployeeList"
                                   :props="{expandTrigger:'hover',value:'label'}"
                                   @change="((data)=>{changeConstructionAndEmployee(data,index)})">
                </el-cascader-panel>

                <span slot="reference" style='cursor:pointer'>
                  <span v-if="typeof(item.constructionName)=='undefined'">
                      <span style='color: #409EFF'>点击选择单位和人员</span>
                  </span>
                  <span v-else>
                      <span>{{item.constructionName + ' —— ' + item.userName}}</span>
                  </span>
                </span>

              </el-popover>
            </el-col>

            <el-col :span="7">
              <el-button circle size="small" icon="el-icon-plus" @click="pushNode(index)">
                <!--添加审批单位-人员-->
              </el-button>
              <el-button circle size="small" icon="el-icon-minus" @click="splitNode(index)">
                <!--移除审批单位-人员-->
              </el-button>
            </el-col>

          </el-row>
        </template>

      </el-step>

    </el-steps>

    <!--提交-->
    <el-row type="flex" justify="end">
      <el-col :span="6">
        <el-button type="primary" size="small" icon="el-icon-check"
                   @click="commitFlowNodeAndFromAndFile">
          提交审批
        </el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>

  import {requestConstructionAndEmployee} from "network/request";
  import {requestConstructionAndEmployeeFlowList} from "network/request";


  export default {
    name: "stepsOperationComponents",
    data() {
      return {
        // activeBeforeSteps: 值为流程节点集合的长度, //激活的步骤条

        constructionAndEmployeeList: [], //单位和人员的集合

        approvalProcessConstructionId: 1, //流程节点ID

        // approvalProcessConstructionList: [{}],//流程节点的集合
        approvalProcessConstructionList: [
          {id: 1, constructionName: "建设单位", userName: "谭晶"},
          {id: 2, constructionName: "监理单位", userName: "Jacqueline"},
          {id: 3, constructionName: "施工单位", userName: "花花"},
          {id: 4, constructionName: "咨询单位", userName: "GEM"},
        ],

      }
    },
    methods: {
      // 创建流程节点
      changeConstructionAndEmployee(data, index) {
        let constructionName = data[0];
        let userName = data[1];
        this.approvalProcessConstructionList.splice(index, 1, {
          id: this.approvalProcessConstructionId++,
          constructionName: constructionName,
          userName: userName
        });
      },
      // 提交流程节点 表单 文件上传
      commitFlowNodeAndFromAndFile() {

        /*流程节点*/
        //判断每个流程节点是否不为空
        const ts = this.approvalProcessConstructionList.filter(obj => {
          if (Object.keys(obj).length != 0) {
            return true;
          }
        });

        //两个数组的长度相等则
        if (this.approvalProcessConstructionList.length !== ts.length) {
          this.$message({
            title: '提示',
            message: "请您将节点上的信息选择完整！",
            type: 'error',
            offset: 40,
            duration: 2000
          });
          return false;
        }


        requestConstructionAndEmployeeFlowList({
          url: 'ConstructionAndEmployeeFlowList',
          method: "post",
          data: this.approvalProcessConstructionList,
        }).then(resFlow => {

          const flowIds = {
            fromFlowId: Number(resFlow.flowId),
            fromFlowModelId: Number(resFlow.modelId),
            // flowNodeList:this.approvalProcessConstructionList,
          };

          this.$emit('flow-ids-steps', flowIds)

        }).catch(e => {
          console.log(e);
        })


      },
      //添加节点
      pushNode(index) {

        /*
          one: 需要添加修改删除元素的索引
          two: 0为添加 >1需要替换或删除元素的个数
          three: 添加或替换的元素
        */
        this.approvalProcessConstructionList.splice(index + 1, 0, {})

      },
      //移除节点
      splitNode(index) {
        if (this.approvalProcessConstructionList.length > 1) {
          this.approvalProcessConstructionList.splice(index, 1)
        }
      },

    },
    created() {
      requestConstructionAndEmployee({
        url: 'ConstructionAndEmployee',
      }).then(request => {
        this.constructionAndEmployeeList = request;
      }).catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>

</style>