<template>
  <div id="app" style="margin:auto;width:1460px;border: 1px dashed red">

    <el-container v-if="show">
      <el-main width="930px" id="main">

        <from-components ref="fromComponents"></from-components>


      </el-main>

      <el-aside width="34%" id="aside">

        <tabs-components ref="tabsComponents"></tabs-components>

      </el-aside>

    </el-container>

  </div>
</template>

<script>

  import fromComponents from "views/fromComponents";
  import tabsComponents from "views/tabsComponents";

  export default {
    name: 'app',
    data(){
      return {
        show:false
      }
    },
    methods:{
      init(){
        this.$store.dispatch("initFormObject").then(res => {
          this.show = true
        }, error => {
          console.error(error);
        })
      }
    },
    components: {
      fromComponents,
      tabsComponents,
    },
    created() {
      this.init();
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
