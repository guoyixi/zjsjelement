<template>
  <div>
    <el-upload
            action="#"
            multiple
            :limit="10"
            :auto-upload="false"
            :on-exceed="overFiles"
            list-type="picture-card">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
        <span class="el-upload-list__item-actions">

                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
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

    <!--<el-upload
            action="#"
            multiple
            auto-upload
            :limit="10"
            :on-exceed="overFiles"
            list-type="picture-card">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
        <span class="el-upload-list__item-actions">

                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
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
    </el-upload>-->

    <!--<el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            drag
            multiple
            list-type="picture"
            :file-list="fileList"
            class="upload-demo"
            >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>-->

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
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],

      }
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      overFiles(files, fileList) {
        console.log(fileList);
        this.$message({
          title: '提示',
          message: '超出文件支持个数！（MAX:10）',
          type: 'error',
          offset: 40,
        });
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