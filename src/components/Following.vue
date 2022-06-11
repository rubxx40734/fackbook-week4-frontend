<template>
  <div class="col-md-8">
    <div class="overlapping mt-4 position-relative mb-4">
      <div class="box1 p-3 w-100">
        <p class="mb-0 text-center">追蹤名單</p>
      </div>
      <div class="box2 p-3 w-100">
        <p class="mb-0 text-center">追蹤名單2</p>
      </div>
    </div>
    <div class="greateBox mb-4"
       v-for="item in following" :key="item._id">
        <div class="user d-flex w-50 align-items-center justify-content-between w-100 greateBox box mb-4 p-3"  v-for="item in item.following"  :key="item._id">
          <div class="postUser  d-flex align-items-center">
            <img :src="item.user.photo" alt="" class="me-2 userphoto">
            <div class="txt">
                <p class="fw-bold d-">{{item.user.name}}</p>
                <p class="fw-lighter smTxt">追蹤時間: {{item.createAt}}</p>
            </div>
          </div>
          <button type="button" class="btn btn-outline-primary" @click="cancel(item.user._id)">取消追蹤</button>
        </div>
    </div>
  </div>
  <FollowModal :folMessage="message" ref="folmodal"></FollowModal>
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

<script>
import FollowModal from './FollowModal.vue'
export default {
  data () {
    return {
      message: ''
    }
  },
  props: ['following'],
  inject: ['emitter'],
  components: { FollowModal },
  methods: {
    cancel (id) {
      this.axios.delete(`https://rocky-wave-99178.herokuapp.com/users/${id}/unfollow`)
        .then(res => {
          this.message = res.data.message
          this.$refs.folmodal.showModal()
          this.$emit('emit-init')
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
  }
}
</script>
