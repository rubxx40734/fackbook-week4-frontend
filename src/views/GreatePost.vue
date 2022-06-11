<template>
  <div class="container-fluid p-0">
    <Navbar :current="currentUser"
    @emit-personPost="getPeronPost"></Navbar>
  </div>
  <div class="container p-3">
    <div class="row">
      <Iclickgreate v-if="isGreate" :likepost="showMylikePost"
      @emit-update="updateShowmyGreate"></Iclickgreate>

      <Following :following="following" v-if="isFollow" @emit-init="getProfile"></Following>

       <Addpost v-if="isAddost" :currentUser="currentUser"></Addpost>
      <div class="col-md-1"></div>
      <Aboutuser :current="currentUser" @change="changeContent"
      @emit-gotoIclick="showmyGreate"  @emit-personPost="getPeronPost"
      @emit-showFollow="showFollow"></Aboutuser>

      <Onepost :currentUser="currentUser" v-if="isOne"></Onepost>
    </div>
  </div>
</template>
<style lang="scss">
body {
  background-image: url('../assets/bg.svg');
}
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
.content {
  border: 2px solid black;
  border-radius: 5px;
}
.iconBox {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #e2edfa;
  border: 2px solid black;
}
</style>
<script>
// @ is an alias to /src
import emitter from '../methods/emitter'
import Navbar from '../components/Navbar.vue'
import Iclickgreate from '../components/Iclickgreate.vue'
import Addpost from '../components/Addpost.vue'
import Aboutuser from '../components/Aboutuser.vue'
import Onepost from '../components/Onepost.vue'
import Following from '../components/Following.vue'
export default {
  data () {
    return {
      posts: [],
      isGreate: false,
      isFollow: false,
      isAddost: false,
      isOne: true,
      currentUser: {},
      showMylikePost: {},
      following: []
    }
  },
  components: {
    Navbar,
    Aboutuser,
    Iclickgreate,
    Addpost,
    Onepost,
    Following
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    getProfile () {
      const token = window.localStorage.getItem('userToken')
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
      this.axios.get('https://rocky-wave-99178.herokuapp.com/users/profile')
        .then(res => {
          console.log(res.data)
          this.following = res.data.我追蹤名單
          this.currentUser = res.data.user
        }).catch(err => {
          console.log(err)
        })
    },
    changeContent () {
      this.isAddost = true
      this.isFollow = false
      this.isGreate = false
    },
    getPeronPost () {
      this.$router.push('/postpage')
    },
    showmyGreate () {
      this.axios.get('https://rocky-wave-99178.herokuapp.com/users/getlikelist')
        .then(res => {
          this.isOne = true
          this.showMylikePost = res.data.likePost
          this.isFollow = false
          this.isAddost = false
          this.isGreate = true
          console.log(this.showMylikePost)
        }).catch(err => {
          console.log(err)
        })
    },
    updateShowmyGreate (id) {
      this.axios.delete(`https://rocky-wave-99178.herokuapp.com/posts/${id}/likes`)
        .then(res => {
          console.log(res)
          this.showmyGreate()
        }).catch(err => {
          console.log(err)
        })
    },
    showFollow () {
      this.isFollow = true
      this.isOne = false
      this.isAddost = false
      this.isGreate = false
    }
  },
  created () {
    this.getProfile()
    this.showmyGreate()
  }
}
</script>
