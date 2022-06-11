<template>
  <div class="container-fluid p-0">
    <Navbar :current="currentUser"></Navbar>
  </div>
  <div class="container p-3">
    <div class="row">
      <Addpost v-if="isShow"></Addpost>
      <div class="col-md-8" v-if="!isShow">
        <div class="overlapping mt-4 position-relative mb-5">
          <div class="box1 p-3 w-100">
            <p class="mb-0 text-center text">修改個人資料</p>
          </div>
          <div class="box2 p-3 w-100">
            <p class="mb-0 text-center text">修改個人資料2</p>
          </div>
        </div>
        <div class="upBox d-flex border ms-4">
          <button
            type="button"
            class="bigborder py-2 px-3 btn btn-outline-dark text"
            @click="editName"
          >
            暱稱修改
          </button>
          <button
            type="button"
            class="bigborder py-2 px-3 btn btn-outline-dark text"
            @click="editPassword"
          >
            重設密碼
          </button>
        </div>
        <div
          class="downBox d-flex flex-column align-items-center"
          v-if="isFull"
        >
          <div
            class="downBox-editName d-flex flex-column align-items-center w-75"
          >
             <img v-if="updateUser.photo"
              :src="updateUser.photo"
              alt=""
              class="mt-5 uploadimg bgCover card-img mb-3"
            />
            <img v-else
              :src="currentUser.photo"
              alt=""
              class="mt-5 uploadimg bgCover card-img mb-3"
            />
            <div class="checkImg d-flex flex-column align-items-center">
              <input type="file" class="form-control w-75" name="image" ref="fileInputUser">
              <button class="btn btn-dark mt-4 mb-4 px-5 text w-75" type="button" @click="upfileUser">
                上傳大頭貼
              </button>
            </div>
            <div class="mb-3 w-50">
              <label for="exampleFormControlInput1" class="form-label text"
                >暱稱</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="請輸入新暱稱"
                v-model="updateUser.name"
              />
              <p class="mt-3 mb-3 text">性別</p>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sex"
                  id="inlineRadio1"
                  value="male"
                  v-model="updateUser.sex"
                />
                <label class="form-check-label text" for="inlineRadio1"
                  >男性</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sex"
                  id="inlineRadio2"
                  value="female"
                  v-model="updateUser.sex"
                />
                <label class="form-check-label text" for="inlineRadio2"
                  >女性</label
                >
              </div>
            </div>
            <p class="text-center text-danger fw-bold mb-3">{{errMessage}}</p>
            <button
              type="button"
              class="btn btn-primary w-50 mb-5"
              @click="updateProfileUser"
            >
              送出更新
            </button>
          </div>
        </div>

        <div
          class="downBox d-flex flex-column align-items-center py-5"
          v-if="isdrink"
        >
          <div
            class="downBox-editName d-flex flex-column align-items-center w-75"
          >
            <div class="mb-3 w-75">
              <label for="exampleFormControlInput1" class="form-label text"
                >輸入新密碼</label
              >
              <input
                v-model="updatePassword.password"
                type="password"
                class="form-control"
                id="checkexampleFormControlInput1"
                placeholder="請輸入新密碼"
              />
            </div>

            <div class="mb-3 w-75">
              <label for="exampleFormControlInput1" class="form-label text"
                >再次輸入</label
              >
              <input
                v-model="updatePassword.confirmpassword"
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="再次輸入"
              />
            </div>
            <p class="text-center text-danger text">{{errMessage}}</p>
            <button type="button" class="btn btn-primary w-75 mt-3"
             @click="updateProfilePassword">確認送出</button>
          </div>
        </div>

        <!-- <div class="downBox d-flex flex-column align-items-center p-5">
          <div class="downBox-editPassword d-flex flex-column w-50">
            <label for="basic-url" class="form-label text">輸入新密碼</label>
            <div class="input-group mb-3">
              <input
                v-modal="password"
                type="text"
                class="form-control"
                id="basic-url"
                placeholder="請輸入新密碼"/>
            </div>
             <label for="basic-url" class="form-label text">再次輸入</label>
            <div class="input-group mb-3">
              <input
                 v-model="confirmpassword"
                type="text"
                class="form-control"
                id="basic-url"
                placeholder="請再次輸入新密碼"/>
            </div>
            <button type="button" @click="updateProfilePassword" class="btn btn-primary mt-3 text">更新密碼</button>
          </div>
        </div> -->
      </div>
      <div class="col-md-1"></div>
      <Aboutuser :current="currentUser" @change="changeContent"  @emit-gotoIclick="gotoIclick"></Aboutuser>
    </div>
  </div>
  <successModal ref="sucmodal"></successModal>
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
.downBox {
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 1px 0px 0px 1px;
}
.bigborder {
  border: 2px solid black;
  border-bottom: none;
  border-radius: 5px;
}
.text {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}
.uploadimg {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style>

<script>
import Navbar from '../components/Navbar.vue'
import Aboutuser from '../components/Aboutuser.vue'
import Addpost from '../components/Addpost.vue'
import successModal from '../components/successModal.vue'
export default {
  data () {
    return {
      currentUser: {},
      isShow: false,
      isFull: true,
      isdrink: false,
      updateUser: {
        name: '',
        sex: '',
        photo: ''
      },
      updatePassword: {
        password: '',
        confirmpassword: ''
      },
      errMessage: ''
    }
  },
  components: {
    Navbar,
    Aboutuser,
    Addpost,
    successModal
  },
  methods: {
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
      this.axios
        .get('https://rocky-wave-99178.herokuapp.com/users/profile')
        .then((res) => {
          console.log(res.data.user)
          this.currentUser = res.data.user
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeContent () {
      this.isShow = !this.isShow
      console.log(this.isShow)
    },
    editName () {
      this.isFull = true
      this.isdrink = false
      this.errMessage = ''
      console.log(this.isFull)
    },
    editPassword () {
      this.isFull = false
      this.isdrink = true
      this.errMessage = ''
    },
    updateProfileUser () {
      this.axios
        .patch(
          'https://rocky-wave-99178.herokuapp.com/users/profile',
          this.updateUser
        )
        .then((res) => {
          console.log(res)
          this.errMessage = ''
          this.$refs.sucmodal.showModal()
          this.getProfile()
        })
        .catch((err) => {
          this.errMessage = err.response.data.message
          console.log(err)
        })
    },
    updateProfilePassword () {
      console.log(this.updatePassword)
      this.axios
        .post(
          'https://rocky-wave-99178.herokuapp.com/users/updatePassword',
          this.updatePassword
        )
        .then((res) => {
          console.log(res)
          this.$refs.sucmodal.showModal()
          this.errMessage = ''
          this.updatePassword.password = ''
          this.updatePassword.confirmpassword = ''
        })
        .catch((err) => {
          this.errMessage = err.response.data.message
          console.log(err.response.data.message)
        })
    },
    upfileUser () {
      const file = this.$refs.fileInputUser.files[0]
      const formDate = new FormData()
      formDate.append('image', file)
      this.axios.post('https://rocky-wave-99178.herokuapp.com/upload', formDate)
        .then(res => {
          this.updateUser.photo = res.data.imgUrl
        })
        .catch(err => {
          console.log(err)
        })
    },
    gotoIclick () {
      this.$router.push('/greatepost')
    }
  },
  created () {
    this.init()
  }
}
</script>
