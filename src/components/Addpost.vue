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
      <div class="mb-3 mt-5 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Image</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputImage"
            v-model="image"
          />
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

<script>
import successModal from '../components/successModal.vue'
export default {
  data () {
    return {
      content: '',
      image: '',
      errorMessage: ''
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
        image: this.image
      }
      this.axios
        .post('https://rocky-wave-99178.herokuapp.com/posts', data)
        .then((res) => {
          console.log(res)
          this.content = ''
          this.image = ''
          this.errorMessage = ''
          this.$refs.modal.showModal()
        }).catch(err => {
          this.errorMessage = err.response.data.message
          console.log(err.response.data.message)
        })
    }
  }
}
</script>
