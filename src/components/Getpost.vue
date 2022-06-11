<template>
  <div class="col-md-8">
    <div class="row">
      <div class="col-md-4">
        <select
          class="form-select borderSet"
          aria-label="Default select example"
          id="date"
          @change="selectDate"
          v-model="datePost"
        >
          <option value="" selected>排序</option>
          <option value="des">最新貼文</option>
          <option value="asc">由舊到新</option>
        </select>
      </div>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control borderSet"
            placeholder="搜尋貼文"
            aria-label="搜尋貼文"
            aria-describedby="basic-addon1"
            @change="searchContent"
          />
          <button class="btn btn-primary input-group-text">
            <i class="bi bi-search"></i>
          </button>
          <!-- <input type="button" class="input-group-text" value="bi bi-search"> -->
        </div>
      </div>
    </div>

   <div  ref="postId"
      class="friendPost p-4 d-flex flex-column mb-3 bg-light"
      v-for="(item,index) in post"
      :key="index">
      <div class="user d-flex align-items-center mb-4 justify-content-between">
        <div class="personImgName d-flex">
          <img :src="item.user.photo" alt="" class="me-3 userphoto bgCover card-img" />
          <div class="nameTime">
            <button class="mb-0 fw-bold btn btn-link p-0"
             @click="this.$emit('emit-personPost', item.user._id)">
              {{ item.user.name }}</button>
            <p class="mb-0 createTime">{{ item.createdAt }}</p>
          </div>
        </div>
        <div class="follingFans">
           <button type="button" class="btn btn-yellow fw-bold mb-1" @click="follow(item.user._id)">追蹤</button>
        </div>
      </div>
      <h1 class="fs-5 fw-bold mb-2">
        {{ item.content }}
      </h1>
      <img :src="item.image" alt="" class="text-center imgSetting w-100" v-if="item.image" >
      <div class="addGreate mt-3">
        <div class="likebox d-flex mb-3">
          <button type="button" class="btn btn-outline-primary greatPost me-1 p-0"
          @click="addOrcancel(item._id)">
          <i class="bi bi-hand-thumbs-up"></i></button>
          <button class="btn btn-link btn-sm d-block" v-if="!item.likes.length == 0"
           @click="getGreatDetail(item._id)">{{item.likes.length}}</button>
        </div>

         <div class="input-group mb-3">
           <img :src="current.photo" alt="" class="me-3 userphoto bgCover card-img" />
          <input type="text" class="form-control" placeholder="留言..." @change="inputValue">
          <button class="btn btn-primary w-25" type="button" @click="sendMessage(item._id)">留言</button>
        </div>
      </div>

      <div class="messageBox d-flex bg-warning p-3 mb-3" v-for="(item,index) in item.comments" :key="index">
         <img :src="item.user.photo" alt="" class="me-3 userphoto bgCover card-img">
         <div class="comment">
             <p class="fw-bold">{{item.user.name}}</p>
             <p class="mb-0 createTime mb-2">{{item.createdAt}}</p>
             <p>{{item.comment}}</p>
         </div>
      </div>
    </div>
      <greateModal ref="modal" :greateUser="greateDetail"></greateModal>
    <div class="friendPost d-flex flex-column mb-3" v-if="this.post.length == 0">
      <div class="user d-flex align-items-center mb-4 colorBar p-0">
        <ul class="colorCur d-flex p-2">
            <li class="red border me-2"></li>
            <li class="yellow me-2"></li>
            <li class="green me-2"></li>
        </ul>
      </div>
      <h1 class="fs-5 fw-bold text-center noContent py-5">
          目前尚無動態，新增一則貼文吧！
      </h1>
    </div>
  </div>
  <FollowModal ref="FoModal" :folMessage="followMessage"></FollowModal>
</template>

<style lang="scss">

.friendPost {
  border: 2px solid black;
  border-radius: 6px;
}
.createTime {
  font-size: 12px;
  color: gray;
}
.borderSet {
  border: 2px solid black;
}
.imgSetting {
  height: 223px;
  object-fit: cover;
  object-position: center;
  border: 3px solid black;
  border-radius: 10px;
}
.noContent{
  color: gray;
}
.colorBar{
  border-bottom: 2px solid black;
}
.red{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #DE4B63;
}
.yellow{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #FAA722;
}
.green{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #83C51D;
}
.userphoto{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.greatPost{
  width: 50px;
}
.messageBox{
  border-radius: 8px;
}
</style>
<script>
import greateModal from '../components/GreatModal.vue'
import FollowModal from '../components/FollowModal.vue'
export default {
  data () {
    return {
      search: '',
      datePost: '',
      postLength: 0,
      greateDetail: '',
      message: '',
      followMessage: ''
    }
  },
  components: { greateModal, FollowModal },
  props: ['post', 'current'],
  methods: {
    searchContent () {
      console.log(this.search)
      this.$emit('searchKey', this.search)
    },
    selectDate () {
      console.log(this.datePost)
      this.$emit('dateKey', this.datePost)
    },
    addOrcancel (id) {
      this.axios.post(`https://rocky-wave-99178.herokuapp.com/posts/${id}/likes`)
        .then(res => {
          console.log(res)
          this.refreshGreat()
        })
    },
    refreshGreat () {
      this.$emit('emit-great')
    },
    getGreatDetail (id) {
      console.log(id)
      this.axios.get(`https://rocky-wave-99178.herokuapp.com/posts/${id}/greateNum`)
        .then(res => {
          console.log(res.data.greateNum[0].likes)
          this.greateDetail = res.data.greateNum[0].likes
          this.showGmodal()
        }).catch(err => {
          console.log(err)
        })
    },
    inputValue (e) {
      this.message = e.target.value
    },
    sendMessage (id) {
      const comment = {
        comment: this.message
      }
      this.axios.post(`https://rocky-wave-99178.herokuapp.com/posts/${id}/comment`, comment)
        .then(res => {
          console.log(res)
          this.message = ''
          this.refreshGreat()
        }).catch(err => {
          console.log(err)
        })
      console.log(this.message)
    },
    showGmodal () {
      this.$refs.modal.showModal()
    },
    follow (id) {
      console.log(id)
      this.axios.post(`https://rocky-wave-99178.herokuapp.com/users/${id}/follow`)
        .then(res => {
          console.log(res)
          this.followMessage = res.data.message
          this.$refs.FoModal.showModal()
        })
        .catch(err => {
          console.log(err)
          this.followMessage = err.response.data.message
          this.$refs.FoModal.showModal()
        })
    }
  },
  mounted () {
    console.log(this.post.length)
  }
}
</script>
