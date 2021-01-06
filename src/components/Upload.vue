<template>
    <a-row :style="{ marginLeft: '-8px', marginRight: '-8px' }">
        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-upload-demo-upload-by-clicking" class="code-box">
                <section class="code-box-demo">
                    <a-upload
                        v-model:fileList="fileList"
                        name="file"
                        :multiple="true"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :headers="headers"
                        @change="handleChange"
                    >
                        <a-button> <upload-outlined /> Click to Upload </a-button>
                    </a-upload>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="ClickingUpload">
                        Upload by Clicking
                        <a class="anchor" href="#ClickingUpload">#</a>
                    </h4>
                    <p>
                        Classic mode. File selection dialog pops up when upload button is clicked.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-upload-demo-upload-directory" class="code-box">
                <section class="code-box-demo">
                    <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
                        <a-button> <upload-outlined /> Upload Directory </a-button>
                    </a-upload>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="UploadDirectory">
                        Upload Directory
                        <a class="anchor" href="#UploadDirectory">#</a>
                    </h4>
                    <p>
                        You can select and upload a whole directory.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>
        </a-col>

        <a-col class="code-boxes-col-2-1" :span="12" :style="{ paddingLeft: '8px', paddingRight: '8px' }">
            <section id="components-upload-demo-avatar" class="code-box expand">
                <section class="code-box-demo">
                    <a-upload
                        v-model:fileList="fileList"
                        name="avatar"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :show-upload-list="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :before-upload="beforeUpload"
                        @change="handleChange2"
                    >
                        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                        <div v-else>
                        <!-- todo -->
                        <loading-outlined v-if="loading" />
                        <plus-outlined v-else />
                        <div class="ant-upload-text">Upload</div>
                        </div>
                    </a-upload>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="Avatar">
                        Avatar
                        <a class="anchor" href="#Avatar">#</a>
                    </h4>
                    <p>
                        Click to upload user's avatar, and validate size and format of picture with <code>beforeUpload</code>.<br/>
                        The return value of function <code>beforeUpload</code> can be a Promise to check asynchronously.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>

            <section id="components-upload-demo-drag-and-drop" class="code-box">
                <section class="code-box-demo">
                    <a-upload-dragger
                        name="file"
                        :multiple="true"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        @change="handleChange3"
                    >
                        <p class="ant-upload-drag-icon">
                        <inbox-outlined />
                        </p>
                        <p class="ant-upload-text">
                        Click or drag file to this area to upload
                        </p>
                        <p class="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                        </p>
                    </a-upload-dragger>
                </section>
                <section class="code-box-meta markdown">
                    <h4 id="DragDrop">
                        Drag and Drop
                        <a class="anchor" href="#DragDrop">#</a>
                    </h4>
                    <p>
                        Classic mode. File selection dialog pops up when upload button is clicked.
                    </p>
                </section>
                <div class="code-box-actions">
                    <span class="code-expand-icon">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show">
                        <img width="18" alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide">
                    </span>
                </div>
            </section>
        </a-col>
    </a-row>
</template>

<script>
import { message } from 'ant-design-vue';
import { UploadOutlined, PlusOutlined, LoadingOutlined, InboxOutlined } from '@ant-design/icons-vue';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components: {
    UploadOutlined,
    LoadingOutlined,
    PlusOutlined,
    InboxOutlined,
  },
  data() {
    return {
      fileList: [],
      loading: false,
      imageUrl: '',
      headers: {
        authorization: 'authorization-text',
      },
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    handleChange2(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
      if (info.file.status === 'error') {
        this.loading = false;
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
    handleChange3(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>

<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #2C3E50;
}
</style>