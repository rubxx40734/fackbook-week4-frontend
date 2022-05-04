<template>
  <div class="col-md-7">
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

      <button
        type="button"
        class="btn btn-info w-75 text-secondary fw-bold mt-2 align-self-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="sendPost"
      >
        送出貼文
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">訊息</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">新增貼文成功</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                完成
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      user: '626e33435f91f1319c844b47',
      image: ''
    }
  },
  methods: {
    sendPost () {
      const data = {
        content: this.content,
        user: '626e33435f91f1319c844b47',
        image: this.image
      }
      this.axios
        .post('https://rocky-wave-99178.herokuapp.com/posts', data)
        .then((res) => {
          console.log(res)
          this.content = ''
          this.image = ''
        })
    }
  }
}
</script>
