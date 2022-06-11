<template>
  <div class="col-md-8">
    <div class="overlapping mt-4 position-relative mb-4">
      <div class="box1 p-3 w-100">
        <p class="mb-0 text-center">我按讚的貼文</p>
      </div>
      <div class="box2 p-3 w-100">
        <p class="mb-0 text-center">我按讚的貼文2</p>
      </div>
    </div>

    <div class="greateBox box mb-4 p-3 d-flex justify-content-between align-items-center"
      v-for="item in likepost" :key="item.id">
        <div class="user d-flex w-50 align-items-center">
          <img :src="item.user.photo" alt="" class="me-2 userphoto">
          <div class="postUser">
            <p class="fw-bold ">{{item.user.name}}</p>
            <p class="fw-lighter smTxt">發文時間:{{item.createdAt}}</p>
          </div>
        </div>
        <div class="postSetting d-flex align-items-centers">
          <div class="cancel me-3">
            <button type="button" class="btn btn-outline-primary mb-1"
             @click="cancellike(item.id)">
              <i class="bi bi-hand-thumbs-up"></i>
            </button>
            <p class="fw-bold">取消</p>
          </div>
          <div class="checkPost">
            <button type="button" class="btn btn-outline-primary mb-1"
            @click="checkonePost(item.id)">
             <i class="bi bi-plus-circle"></i>
            </button>
            <p class="fw-bold">查看</p>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss">
.box1 {
  position: absolute;
  top: -10px;
  right: -5px;
  z-index: 1000;
  background-color: white;
  border: 2px solid black;
  p {
    font-size: 20px;
    font-weight: 600;
  }
}
.box2 {
  z-index: 100;
  background-color: white;
  border: 2px solid black;
}
.box{
  border: 2px solid black;
  border-radius: 5px;
}
.smTxt{
  font-size: 14px;
}
.userphoto{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>

<script type>
export default {
  data () {
    return {
      test: {}
    }
  },
  props: ['likepost'],
  inject: ['emitter'],
  methods: {
    cancellike (id) {
      this.$emit('emit-update', id)
      this.axios.get(`https://rocky-wave-99178.herokuapp.com/posts/${id}`)
        .then(res => {
          console.log(res.data.post)
          this.onepost = res.data.post
          this.emitter.emit('getone', this.test)
        }).catch(err => {
          console.log(err)
        })
    },
    checkonePost (id) {
      this.axios.get(`https://rocky-wave-99178.herokuapp.com/posts/${id}`)
        .then(res => {
          console.log(res.data.post)
          this.onepost = res.data.post
          this.emitter.emit('getone', this.onepost)
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
  }
}
</script>
