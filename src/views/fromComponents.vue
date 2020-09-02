<template>
  <div id="fromView">
    <el-row type="flex" justify="space-between" align="bottom">
      <el-col :span="22">
        <el-link type="primary" href="${ctx}zjsj/zjsjProject/list" icon="el-icon-d-arrow-left">返回 签证列表
        </el-link>
      </el-col>
      <!--<el-col :span="2">
        <el-link type="primary" @click="submitForm('fromChangeVisa')" icon="el-icon-finished">保存</el-link>
      </el-col>-->
      <el-col :span="2" :offset="2">
        <el-link type="primary" v-print="'#preview'" icon="el-icon-printer">打印</el-link>
      </el-col>
    </el-row>

    <el-form :model="fromChangeVisa" ref="fromChangeVisa">
      <div id="preview">
        <p style="text-align: center;font-family:宋体;font-size: 19px;font-weight: bolder">
          工程签证单
        </p>
        <p style="text-align: left">
          <el-row type="flex" justify="space-between">
            <el-col>
              签证编号：{{fromChangeVisa.fromType==0?'Q':'B' + fromChangeVisa.fromId}}
            </el-col>
            <el-col>
              工程名称：{{fromChangeVisa.fromProjectName}}
            </el-col>
          </el-row>
        </p>
        <table style="border-collapse:collapse;">
          <tbody>
          <tr style="height:39px" class="firstRow">
            <td width="110" valign="middle">
              分部分项位置
            </td>
            <td width="160" valign="middle">

              <el-input v-model.trim="fromChangeVisa.fromPosition" placeholder="请填写分部分项位置"></el-input>

            </td>
            <td width="110" valign="middle">
              施工时间

            </td>
            <td width="160" valign="middle">
              <el-date-picker type="date" placeholder="请选择施工时间" style="width: 190px"
                              v-model.trim="fromChangeVisa.fromConstructionDate"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd"
                              :clearable="false"></el-date-picker>
            </td>
            <td width="110" valign="middle" placeholder="请填写费用">
              建设单位

            </td>
            <td width="160" valign="middle">

              <el-input v-model.trim="fromChangeVisa.fromBuild" placeholder="请填写建设单位"></el-input>

            </td>
          </tr>
          <tr style="height:39px">
            <td width="110" valign="middle">
              工期（天）

            </td>
            <td width="160" valign="middle" id="td2">

              <el-input v-model.trim.number="fromChangeVisa.fromDays" placeholder="请填写工期" type="number"></el-input>

            </td>

            <td width="110" valign="middle">
              施工单位

            </td>
            <td width="160" valign="middle">

              <el-input v-model.trim="fromChangeVisa.fromConstruction" placeholder="请填写施工单位"></el-input>

            </td>
            <td width="110" valign="middle">
              费用（元）
            </td>
            <td width="160" valign="middle">

              <el-input v-model.number="fromChangeVisa.fromCost" placeholder="请填写费用" type="number"></el-input>

            </td>
          </tr>


          <tr>
            <td valign="top" colspan="6">

                <span style="margin:0;margin-top: 5px;text-align:center;font-family:宋体;color:rgb(164,164,164);font-size:13px">
                  签证原因</span>
              <el-input type="textarea" v-model.trim="fromChangeVisa.fromReason" autosize resize="none"
                        style="min-height: 40px"></el-input>

            </td>
          </tr>

          <tr>
            <td valign="top" colspan="6">

                <span style="margin:0;margin-top: 5px;text-align:center;font-family:宋体;color:rgb(164,164,164);font-size:13px">
                  签证内容</span>
              <el-input type="textarea" v-model.trim="fromChangeVisa.fromContent" autosize resize="none"
                        style="min-height: 40px"></el-input>

            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </el-form>

  </div>
</template>

<script>

  import {requestFromInit} from "network/request";
  import {requestFromCommit} from "network/request";


  export default {
    name: "fromComponents",
    data() {
      return {
        fromChangeVisa: {
          fromId: null,
          fromType: null,
          fromStatus: null,
          fromProjectName: null,
          fromPosition: null,
          fromBuild: null,
          fromConstructionDate: new Date(),
          fromConstruction: null,
          fromCost: null,
          fromDays: null,
          fromReason: null,
          fromContent: null,
          fromSponsor: null,
          fromProjectId: null,
          fromFlowId: null,
          fromFlowModeId: null,
        }
      };
    },
    props: {
      fFlowId: {
        type: Number,
      },
      fFlowModelId: {
        type: Number,
      }
    },
    watch: {
      fFlowId(newVal, oldVal) {
        console.log(newVal);
        this.fromChangeVisa.fromFlowId = newVal;
      },
      fFlowModelId(newVal, oldVal) {
        console.log(newVal);
        this.fromChangeVisa.fromFlowModeId = newVal;
      }
    },
    methods: {
      submitForm() {

        let errorMessage;
        if (!this.fromChangeVisa.fromPosition) {
          errorMessage = "请填写分部分项位置";
        } else if (!this.fromChangeVisa.fromConstructionDate) {
          errorMessage = "请选择施工时间";
        } else if (!this.fromChangeVisa.fromBuild) {
          errorMessage = "请填写建设单位";
        } else if (!this.fromChangeVisa.fromDays != '' && this.fromChangeVisa.fromDays != 0) {
          errorMessage = "请填正确写工期";
        } else if (!this.fromChangeVisa.fromConstruction) {
          errorMessage = "请填写施工单位";
        } else if (!this.fromChangeVisa.fromCost && this.fromChangeVisa.fromCost != 0) {
          errorMessage = "请正确填写费用";
        } else if (!this.fromChangeVisa.fromReason) {
          errorMessage = "请输填写原因";
        } else if (!this.fromChangeVisa.fromContent) {
          errorMessage = "请输入内容";
        }

        if (errorMessage != null) {
          this.$message({
            title: '提示',
            message: errorMessage,
            type: 'error',
            offset: 40,
            duration: 2000
          });
          return false;
        }

        Object.defineProperty(this.fromChangeVisa, "fromStatus", "ACTION")
        requestFromCommit({
          url: "save",
          method: "post",
          data: this.fromChangeVisa
        })

      }
    },
    created() {

      //获取路径上的表单ID
      let fromId = getUrlParam('fromId');

      requestFromInit({
        url: 'fromInitialize',
        method: "get",
        params: fromId,
      }).then(res => {

        this.fromChangeVisa = res;

        this.$store.commit({type: "updateFormFlag", fromX: {formIdX: res.fromId, formStatusX: res.fromStatus}});

      }, error => {
        console.log(error);
      })


    },
    computed: {},
    filters: {}
  }

  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

</script>


<style>

  #fromView {
    width: 866px;
    margin: 0 auto;
  }

  #preview {
    padding: 10px;
    flex: 1;
  }

  #preview * {
    font-family: sans-serif;
    font-size: 14px;
  }

  #preview table, td {
    text-align: center;
    border: solid #000 1px;
  }

  #preview td input {
    outline: none;
    border: none;
  }

  #preview textarea {
    overflow: hidden;
    border: none;
  }


</style>