<template>
  <div id="app" style="margin:auto;width:1460px;border: 1px dashed red">

    <el-container>
      <el-main width="930px" id="main">

        <from-components ref="fromComponents" :f-flow-id="flowId" :f-flow-model-id="flowModeId"></from-components>

      </el-main>

      <el-aside width="490px" id="aside">

        <tabs-components @flow-ids-tabs="commitForm"></tabs-components>

      </el-aside>

    </el-container>

  </div>
</template>

<script>
  import fromComponents from "./views/fromComponents";
  import tabsComponents from "./views/tabsComponents";

  export default {
    name: 'app',
    data(){
      return{
        flowId:null,
        flowModeId:null,
      }
    },
    methods:{
      commitForm(flowIds){
        this.flowId = flowIds.fromFlowId;
        this.flowModeId = flowIds.fromFlowModelId;
        this.$refs.fromComponents.submitForm();
      }
    },
    components: {
      fromComponents,
      tabsComponents,
    }
  }
</script>

<style scoped>
  #main {
    height: 100%;
    background: white;
    margin: 20px 20px 20px 20px;
    border: 1px solid red;
  }

  #aside {
    height: 100%;
    background: white;
    margin: 20px 20px 20px 0;
    padding: 10px 10px 10px 10px;
    border: 1px solid green;
  }
</style>
