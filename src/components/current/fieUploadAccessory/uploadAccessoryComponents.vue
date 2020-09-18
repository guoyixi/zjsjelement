<template>
  <div>
    <el-upload

            :limit="10"

            :multiple="true"
            :auto-upload="true"
            :accept="fileType"
            :list-type="listType"
            :disabled="$store.getters.getFormObject.fromStatus === 'WAIT'?false:true"

            :action="uploadURL"
            :data="uploadData"
            :file-list="fileList"

            :on-exceed="exceed"
            :before-upload="before"
            :http-request="upload"


    >

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

  import {requestUploadFile} from 'network/request'
  import md5 from 'js-md5';
  import qs from 'qs'

  export default {
    name: "uploadAccessoryComponents",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,

        listType: 'picture-card',
        fileType: ".bmp,.jpg,.jpeg,.png,.tif,.gif,.pcx,.tga,.exif,.fpx,.svg,.psd,.cdr,.pcd,.dxf,.ufo,.eps,.ai,.raw,.WMF,.webp",

        uploadData: null,
        uploadURL: '',
        fileList: [{
          name:'aa',
          url:'http://localhost:8980/zjsj/userfiles/fileupload/202009/1306767790616920066.jpg'
        }],
      }
    },
    methods: {
      //预览文件
      handlePreview(file) {
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //删除文件
      handleRemove(file) {
        console.log(file);
      },
      //下载文件
      handleDownload (file) {

        console.log(file);

        this.mywindow.URL.createObjectURL(file.url);



      },
      //超出限制时触发
      exceed(files, fileList) {
        this.$message({
          title: '提示',
          message: '超出文件支持个数！（MAX:10）',
          type: 'error',
          offset: 40,
        });
      },
      //文件上传以前
      before(file) {

        const isIMAGE = "image/bmp,image/jpg,image/jpeg,image/image/png,image/tif,image/gif,image/pcx,image/tga,image/exif,image/fpx,image/svg,image/psd,image/cdr,image/pcd,image/dxf,image/ufo,image/eps,image/ai,image/raw,image/WMF,image/webp".includes(file.type);
        const isLt1G = file.size / 1024 / 1024 / 1024 < 1;

        if (!isIMAGE) {
          this.$message.error('上传文件只能是图片格式!');
          return false;
        }
        if (!isLt1G) {
          this.$message.error('上传文件大小不能超过 1MB!');
          return false;
        }

        return isIMAGE && isLt1G;
      },
      // 自定义文件上传
      upload(file) {

        requestUploadFile({
          url: "/upload",
          method: "post",
          data: qs.stringify({
            "fileMd5": md5(file.file.name),
            "fileName": file.file.name,
          }),
        }).then(res => {

          if (!JSON.parse(res.result)) {
            return requestUploadFile({
              url: "/upload",
              method: "post",
              data:this.parseToFormData(file, res),
            })
          }

          return res;
        }).then(res => {

          return res;
        }).catch(error => {
          console.log(error);
        })

      },
      parseToFormData(file, data) {
        let formData = new FormData();
        formData.append("bizKey", this.$store.getters.getFormObject.fromId);
        formData.append("bizType", "zjsjProjectFrom_from");
        formData.append("uploadType", "image");
        formData.append("fileMd5", data.fileUpload.fileEntity.fileMd5);
        formData.append("fileName", data.fileUpload.fileName);
        formData.append("fileUploadId", data.fileUploadId);
        formData.append("fileEntityId", data.fileEntityId);
        formData.append("name", data.fileUpload.fileName);
        formData.append("lastModifiedDate", file.file.lastModifiedDate);
        formData.append("file", file.file);
        return formData;
      }
    },
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