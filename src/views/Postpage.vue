<template>
  <div class="container-fluid p-0">
    <Navbar :current="currentUser" @emit-showPosatpage="showPostpage"></Navbar>
  </div>
  <div class="container p-3">
    <div class="row">
      <Getpost
        :post="posts"
        @searchKey="postSearch"
        @dateKey="postDate"
        v-if="!isShow"
      ></Getpost>
      <Addpost v-if="isShow" :currentUser="currentUser"></Addpost>
      <div class="col-md-1"></div>
      <Aboutuser :current="currentUser" @change="changeContent"></Aboutuser>
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
}
</style>
<script>
// @ is an alias to /src

import Navbar from '../components/Navbar.vue'
// import Addpost from '../components/Addpost.vue'
import Getpost from '../components/Getpost.vue'
import Aboutuser from '../components/Aboutuser.vue'
import Addpost from '../components/Addpost.vue'
export default {
  data () {
    return {
      posts: [],
      isShow: false,
      currentUser: {}
    }
  },
  components: {
    Navbar,
    Getpost,
    Aboutuser,
    Addpost
  },
  methods: {
    postSearch (q) {
      console.log(q)
      this.axios
        .get(`https://rocky-wave-99178.herokuapp.com/posts/?q=${q}`)
        .then((res) => {
          console.log(res.data.allPost)
          this.posts = res.data.allPost
        })
    },
    postDate (date) {
      console.log(date)
      this.axios
        .get(`https://rocky-wave-99178.herokuapp.com/posts/?timeSort=${date}`)
        .then((res) => {
          console.log(res)
          this.posts = res.data.allPost
        })
    },
    changeContent () {
      this.isShow = !this.isShow
      // this.init()
    },
    init () {
      const token = window.localStorage.getItem('userToken')
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
      this.axios
        .get('https://rocky-wave-99178.herokuapp.com/posts')
        .then((res) => {
          console.log(res.data.allPost)
          this.posts = res.data.allPost
        })
        .catch((err) => {
          console.log(err)
        })
      this.getProfile()
    },
    getProfile () {
      this.axios.get('https://rocky-wave-99178.herokuapp.com/users/profile')
        .then(res => {
          console.log(res.data.user)
          this.currentUser = res.data.user
        }).catch(err => {
          console.log(err)
        })
    },
    showPostpage () {
      this.isShow = false
      this.init()
    }
  },
  created () {
    this.init()
  }
}
</script>
