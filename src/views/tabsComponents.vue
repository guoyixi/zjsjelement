<template>
  <el-tabs v-model="activeTabs" tab-position="top">

    <!--wait——灰色 / process —— 黑色 / finish —— 蓝色 / error —— 红色 / success —— 绿色 -->
    <el-tab-pane label="审批流程" name="first">

      <steps-operation-components v-if="stepsFlag" @flow-ids-steps="commitForm"></steps-operation-components>
      <steps-show-components v-else :approval-process-list="approvalProcessConstructionList"></steps-show-components>

    </el-tab-pane>

    <el-tab-pane label="附件上传" name="second">
      <upload-accessory-components></upload-accessory-components>
    </el-tab-pane>

  </el-tabs>
</template>

<script>

  import stepsOperationComponents from "../components/current/flowApproval/stepsOperationComponents";
  import stepsShowComponents from "../components/current/flowApproval/stepsShowComponents";
  import uploadAccessoryComponents from "../components/current/fieUploadAccessory/uploadAccessoryComponents";

  export default {
    name: "tabsComponents",
    data(){
      return {
        activeTabs: 'first', //激活的标签页
        stepsFlag: true,
        approvalProcessConstructionList: [{}],
      }
    },
    methods:{
      commitForm(flowIds){
        this.$emit('flow-ids-tabs', flowIds);
        // this.stepsFlag = false;
      }
    },
    components:{
      stepsOperationComponents,
      stepsShowComponents,
      uploadAccessoryComponents,
    }
  }
</script>

<style scoped>

</style>