<template>
  <div class="col-md-8">
    <div class="overlapping mt-4 position-relative">
      <div class="box1 p-3 w-100">
        <p class="mb-0 text-center">張貼動態</p>
      </div>
      <div class="box2 p-3 w-100">
        <p class="mb-0 text-center">張貼動態2</p>
      </div>
    </div>
    <div class="content mt-4 p-4 d-flex flex-column">
      <p class="mb-0 fw-bold">貼文內容</p>
      <div class="form-floating">
        <textarea
          v-model="content"
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">請輸入您的內容</label>
      </div>
      <div class="row p-2">
          <form class="row g-3">
            <div class="col-md-4">
              <button type="button" @click="upfile" class="btn btn-dark mb-3 w-75">上傳圖片</button>
            </div>
            <div class="col-md-8">
              <input class="form-control" type="file" id="formFile" name="imgur" ref="fileInput">
            </div>
          </form>
      </div>
      <div class="row mt-2 ">
           <div class="col-md-12">
             <img :src="imgUrl" alt="" class="w-100 bgCoverBottom card-img heigh mb-3" v-if="this.imgUrl">
           </div>
      </div>
       <p class="text-center text-danger fw-bold">{{errorMessage}}</p>
      <button
        type="button"
        class="btn btn-info w-75 text-secondary fw-bold mt-2 align-self-center"
        @click="sendPost"
      >
        送出貼文
      </button>
      <!-- Modal -->
      <successModal ref="modal"></successModal>
    </div>
  </div>
</template>
<style lang="scss">
.heigh{
  height: 350px;
}
</style>
<script>
import successModal from '../components/successModal.vue'
export default {
  data () {
    return {
      content: '',
      image: '',
      errorMessage: '',
      imgUrl: ''
    }
  },
  components: { successModal },
  props: ['currentUser'],
  methods: {
    sendPost () {
      const token = window.localStorage.getItem('userToken')
      console.log(token, this.currentUser)
      const data = {
        content: this.content,
        user: this.currentUser._id,
        image: this.imgUrl
      }
      this.axios
        .post('https://rocky-wave-99178.herokuapp.com/posts', data)
        .then((res) => {
          console.log(res)
          this.content = ''
          this.imgUrl = ''
          this.errorMessage = ''
          this.$refs.modal.showModal()
        }).catch(err => {
          this.errorMessage = err.response.data.message
          console.log(err.response.data.message)
        })
    },
    upfile () {
      const fileimg = this.$refs.fileInput.files[0]
      const formDate = new FormData()
      formDate.append('imgur', fileimg)
      // const token = window.localStorage.getItem('userToken')
      // this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
      this.axios.post('https://rocky-wave-99178.herokuapp.com/upload', formDate)
        .then(res => {
          console.log(res.data.imgUrl)
          this.imgUrl = res.data.imgUrl
          this.errorMessage = ''
        })
        .catch(err => {
          this.errorMessage = err.response.data.message
          console.log(err.response.data.message)
        })
    }
  }
}
</script>
