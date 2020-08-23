<template>
  <div>

    <el-row type="flex" justify="space-between" align="bottom">
      <el-col :span="22">
        <el-link type="primary" href="${ctx}zjsj/zjsjProject/list" icon="el-icon-d-arrow-left">返回 签证列表
        </el-link>
      </el-col>
      <el-col :span="2" :offset="2">
        <el-link type="primary" v-print="'#preview'" icon="el-icon-printer">打印</el-link>
      </el-col>
    </el-row>

    <div id="preview" >

      <el-form :model="fromData" ref="fromData" label-width="100px">
        <p style="text-align: center;font-family:宋体;font-size: 19px;font-weight: bolder">
          工程签证单
        </p>
        <p style="text-align: left">
          <el-row type="flex" justify="space-between">
            <el-col >
              签证编号：{{fromData.fromId != null ?'Q' + fromData.fromId:''}}
            </el-col>
            <el-col>
              工程名称：{{fromData.fromProjectName}}
            </el-col>
          </el-row>
        </p>
        <table style="border-collapse:collapse;">
          <tbody>
          <tr style="height:39px" class="firstRow">
            <td width="102" valign="middle">
              分部分项位置
            </td>
            <td width="157" valign="middle">
              <el-input style="border: none;outline: none;" v-model="fromData.fromPosition"></el-input>
            </td>
            <td width="113" valign="middle">
              施工时间

            </td>
            <td width="152" valign="middle">
              <el-date-picker type="date" placeholder="选择日期" v-model="fromData.fromConstructionDate"
                              style="width: 100%;"></el-date-picker>
            </td>
            <td width="99" valign="middle"
            >
              建设单位

            </td>
            <td width="167" valign="middle"
            >

              <el-input v-model="fromData.fromBuild"></el-input>

            </td>
          </tr>
          <tr style="height:39px">
            <td width="102" valign="middle">
              变更原因

            </td>
            <td width="161" valign="middle"

                id="td2">

              <el-input v-model="fromData.fromTitle"></el-input>

            </td>

            <td width="99" valign="middle">
              施工单位

            </td>
            <td width="167" valign="middle">

              <el-input v-model="fromData.fromConstruction"></el-input>

            </td>
            <td width="117" valign="middle">
              变更费用
            </td>
            <td width="152" valign="middle">

              <el-input v-model="fromData.fromCost"></el-input>

            </td>
          </tr>
          <tr>
            <td width="117" valign="middle">

              工期

            </td>
            <td width="152" valign="middle">

              <el-input v-model="fromData.fromDays"></el-input>

            </td>

            <td width="117" valign="middle" colspan="4">
            </td>
          </tr>


          <tr>
            <td valign="top" colspan="6">

              <p
                style="margin:0;margin-top: 5px;text-align:center;font-family:宋体;color:rgb(164,164,164);font-size:13px">
                签证原因</p>
              <el-input type="textarea" v-model="fromData.fromReason" autosize resize="none"></el-input>

            </td>
          </tr>

          <tr>
            <td valign="top" colspan="6">

              <p
                style="margin:0;margin-top: 5px;text-align:center;font-family:宋体;color:rgb(164,164,164);font-size:13px">
                签证内容</p>
              <el-input type="textarea" v-model="fromData.fromContent" autosize resize="none"></el-input>

            </td>
          </tr>

          </tbody>
        </table>

      </el-form>
    </div>
  </div>

</template>

<script>
  export default {
    name: "fromComponents",
    data() {
      return {
        fromData: {
          fromId: 15,
          fromProjectName: '水水水水水水水',
          fromPosition: '',
          fromConstructionDate: '',
          fromBuild: '',
          fromTitle: '',
          fromConstruction: '',
          fromCost: 0.0,
          fromDays: 0,
        },
        /*
        //表单验证规则
        rules: {
          fromPosition: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ],
          fromConstructionDate: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          fromBuild: [
            {required: true, message: '请输入建设单位', trigger: 'blur'}
          ],
          fromTitle: [
            {required: true, message: '请填写原因', trigger: 'blur'}
          ],
          fromConstruction: [
            {required: true, message: '请填写施工单位', trigger: 'blur'}
          ],
          fromCost: [
            {required: true, message: '请填写费用', trigger: 'blur'}
          ],
          fromDays: [
            {required: true, message: '请填写工期', trigger: 'blur'}
          ]
        }*/
      };
    },
    methods: {
      submitForm(formName) {
        console.log(this)
        console.log(this.$refs);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }


</script>


<style>


  #preview {
    padding: 10px;
    margin: 0;
    flex: 1;
  }

  #preview * {
    font-family: sans-serif;
    font-size: 14px;
  }

  #preview table, td {
    text-align: center;
    border:solid #000 1px;
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