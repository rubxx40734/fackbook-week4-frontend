<template>
  <div class="container">
    <div class="row outBox mt-5">
      <div class="col-md-2"></div>
      <div class="col-md-8 loginBox p-5 bg-success">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/img.svg" class="mt-5 card-img bgCover" alt="" />
          </div>
          <div class="col-md-6 mt-4">
            <h1 class="text-center text-primary fw-bold mb-3 title">
              MetaWall
            </h1>
            <h2 class="text-center fw-bold mb-3 fs-5">註冊</h2>
            <form class="row justify-content-center">
              <div class="input-group mb-3 p-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="暱稱"
                  aria-label="name"
                  v-model="user.name"
                />
              </div>
              <div class="input-group mb-3 p-0">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  v-model="user.email"
                />
              </div>
              <div class="input-group mb-3 p-0">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  v-model="user.password"
                />
              </div>
              <div class="input-group mb-3 p-0">
                <input
                  type="password"
                  class="form-control"
                  placeholder="確認密碼"
                  aria-label="Password"
                  v-model="user.confirmpassword"
                />
              </div>
              <span class="text-center mb-2 text-danger">{{
                errormessage
              }}</span>
              <button
                class="btn btn-primary Roboto mb-3"
                @click.prevent="signUp"
                type="submit"
              >
                註冊
              </button>
              <button class="btn w-100 Roboto fw-bold" @click="gotologin">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
  <Modal ref="signupModal" @emit-gotologin="gotologin"></Modal>
</template>
<style lang="scss">
body {
  background-image: url('../assets/bg.svg');
}
.Roboto {
  font-family: 'Roboto', sans-serif;
}
.title {
  font-size: 60px;
  font-family: 'Roboto', sans-serif;
}
.loginBox {
  border: 2px solid black;
  box-shadow: 0px 30px 10px 0px gray;
}
</style>

<script>
import Modal from '../components/Modal.vue'
export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        confirmpassword: '',
        name: ''
      },
      errormessage: ''
    }
  },
  components: {
    Modal
  },
  methods: {
    signUp () {
      const api = `${process.env.VUE_APP_API}/users/sign_up`
      this.axios
        .post(api, this.user)
        .then((res) => {
          console.log(res)
          this.errormessage = ''
          this.$refs.signupModal.showModal()
        })
        .catch((err) => {
          this.errormessage = err.response.data.message
          console.log(err.response.data.message)
        })
    },
    gotologin () {
      this.$router.push('/')
    }
  },
  created () {

  }
}
</script>
