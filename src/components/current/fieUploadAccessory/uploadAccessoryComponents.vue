<template>
  <div>
    <el-upload
            action="#"
            multiple
            list-type="picture-card"
            accept="image/jpeg,image/gif,image/png,image/bmp"
            :limit="10"
            :auto-upload="false"
            :on-exceed="overFiles"
            :before-upload="beforeUploadFile">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
        <span class="el-upload-list__item-actions">

                                <span class="el-upload-list__item-preview" @click="handlePreview(file)">
                                        <i class="el-icon-zoom-in"></i>
                                </span>

                                <span v-if="!disabled" class="el-upload-list__item-delete"
                                      @click="handleDownload(file)">
                                      <i class="el-icon-download"></i>
                                </span>

                                <span v-if="!disabled"
                                      class="el-upload-list__item-delete"
                                      @click="handleRemove(file)">
                                    <i class="el-icon-delete"></i>
                                </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "uploadAccessoryComponents",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,

        fileData: {},
        fileList: [],
      }
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      overFiles(files, fileList) {
        this.$message({
          title: '提示',
          message: '超出文件支持个数！（MAX:10）',
          type: 'error',
          offset: 40,
        });
      },
      beforeUploadFile(file) {

        const isIMAGE = file.type === 'image/jpeg' || 'image/gif' || 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 1;

        if (!isIMAGE) {
          this.$message.error('上传文件只能是图片格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传文件大小不能超过 1MB!');
        }
        return isIMAGE && isLt1M;
      }
    }
  }
</script>

<style>
  .filePlus {
    width: 146px;
    height: 146px
  }

  /deep/ .el-upload--picture-card {
    width: 100px;
    height: 100px;
  }

  /deep/ .el-upload {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

  /deep/ .el-upload-list--picture-card .el-upload-list__item {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

  /deep/ .el-upload-list--picture-card .el-upload-list__item-thumbnail {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

  /deep/ .avatar {
    width: 100px;
    height: 100px;
  }
</style>