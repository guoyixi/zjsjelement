<template >
  <div id="app">

<!--    v-loading="$store.getters.getLoading"-->
<!--    this.$store.commit("updateLoading", false)-->

    <transition>
    <el-container v-if="show" >
      <el-main width="930px" id="main">

        <from-components ref="fromComponents"></from-components>


      </el-main>

      <el-aside width="34%" id="aside">

        <tabs-components ref="tabsComponents"></tabs-components>

      </el-aside>

    </el-container>
    </transition>

  </div>
</template>

<script>

  import fromComponents from "views/fromComponents";
  import tabsComponents from "views/tabsComponents";

  export default {
    name: 'app',
    data() {
      return {
        show: false
      }
    },
    components: {
      fromComponents,
      tabsComponents,
    },
    created() {
      this.$store.dispatch("initFormObject").then(res => {
        this.show = true
      }, error => {
        console.error(error);
      })
    }
  }


</script>

<style scoped>

  #app {
    margin: auto;
    width: 1460px;
    border: 1px dashed red
  }

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
