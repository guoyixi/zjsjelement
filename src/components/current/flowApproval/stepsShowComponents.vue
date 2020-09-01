<template>
  <!--展示-->
  <!--wait——灰色 / process —— 黑色 / finish —— 蓝色 / error —— 红色 / success —— 绿色 -->
  <el-steps :active="activeAfterSteps" process-status="finish" finish-status="success"
            direction="vertical" :space="80">
    <el-step title="建设单位" v-for="(item,index) in approvalProcessList"
             :key="item.id">

      <template slot="icon">
        <strong>{{index+1}}</strong>
      </template>
      <template slot="title">
        <span>{{item.constructionName + ' —— ' + item.userName}}</span>
      </template>

      <!--已审批-->
      <template slot="description" v-if="index<activeAfterSteps">
        <div class="step-row top">
          审批人 <span style="color:#219AFF">{{item.userName}}</span> 通过审批
        </div>

      </template>

      <!--审批中-->
      <template slot="description" v-if="index==activeAfterSteps">
        <el-form :model="fromApprovaling" :rules="fromApprovalingRules" ref="fromApprovaling">

          <!--流程ID-->
          <!--单位名称-->
          <!--用户名称-->
          <!--审批时间 -->

          <!--审批意见-->
          <el-form-item label="审批意见：" prop="approvalCountersign">
            <el-input type="textarea" v-model="fromApprovaling.approvalCountersign" :autosize="{minRows:2,maxRows:1000}"
                      resize="none"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="continueApproval('fromApprovaling',item.id,item.constructionName,item.userName)">下一级审批</el-button>
            <el-button type="danger">驳回</el-button>
          </el-form-item>

          <!--<el-form-item >
            <el-row type="flex" justify="space-between">
              <el-col :span="12">
                <el-button type="primary">下一级审批</el-button>
              </el-col>
              <el-col :span="5">
                <el-button type="danger">驳回</el-button>
              </el-col>
            </el-row>
          </el-form-item>-->
        </el-form>
      </template>

      <!--待审批-->
      <template slot="description" v-if="index>activeAfterSteps">
        <div class="step-row bottom">
          {{item.userName}} 待审批
        </div>
      </template>

    </el-step>


  </el-steps>
</template>

<script>

  export default {
    name: "stepsShowComponents",
    data() {
      return {
        activeAfterSteps: 0, // 激活的步骤条
        fromApprovaling: {   // 审批意见表单
          approvalCountersign: '',
        },
        fromApprovalingRules: { // 审批意见表单的验证规则
          approvalCountersign: [
            {required: true, message: '请填写审批意见', trigger: 'blur'},
          ]
        },
        approvalingProcessList:[], // 审批进行时的集合
      }
    },
    props: {
      //等待审批的单位人员集合
      approvalProcessList: {
        type: Array
      }
    },
    methods: {
      continueApproval(ref,id,cname,uname) {

        // 调用方式
        // console.log(this.$refs[ref][0]);
        // console.log(this.$refs.fromApprovaling[0]);

        //表单对象
        const fromApprovaling = this.$refs[ref][0];

        fromApprovaling.validate((valid) => {
          if (valid) {

            let data = {
              approvalId: id,
                  approvalConstructionName: cname,
                approvalUserName: uname,
                approvalCountersign:this.fromApprovaling.approvalCountersign
            }

            this.approvalingProcessList.push({
              approvalId: id,
              approvalConstructionName: cname,
              approvalUserName: uname,
              approvalCountersign:this.fromApprovaling.approvalCountersign
            });


            fromApprovaling.resetFields();

            //控制流程节点增加
            this.activeAfterSteps++;

          } else {
            console.log('error submit!!');
            return false;
          }
        })


      },
      terminationApproval() {

      }
    },
    filters: {
    }
  }
</script>

<style scoped>
  .step-row {
    width: 372px;
    min-height: 33px;
    margin: 5px 0 10px;
    padding: 5px 5px 5px;
    color: #919192;
    font-size: 14px;
    line-height: 33px;
  }

  .top {
    background-color: #c2e2c0
  }

  .middle {
    background-color: #D9E5F9
  }

  .bottom {
    background-color: #eeeeee
  }

</style>