<template>
  <div id="app">

    <el-container>
      <el-main width="100%" id="main">

        <from-components></from-components>

      </el-main>

      <el-aside width="30%" id="aside">

      </el-aside>

    </el-container>

  </div>
</template>

<script>
  import fromComponents from "./components/fromComponents";

  export default {
    name: 'app',
    components: {
      fromComponents
    }
  }
</script>

<style scoped>
  #main {
    height: 100%;
    background: white;
    margin: 20px 20px 20px 20px;
  }

  #aside {
    height: 100%;
    background: white;
    margin: 20px 20px 20px 0;
    padding: 10px 10px;
  }
</style>
