<template>
  <div class="container">
    <div class="row outBox mt-5">
      <div class="col-md-2"></div>
      <div class="col-md-8 loginBox p-5 bg-success">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/img.svg" alt="" class="card-img bgCover"/>
          </div>
          <div class="col-md-6 mt-4">
            <h1 class="text-center text-primary fw-bold mb-3 title">
              MetaWall
            </h1>
            <h2 class="text-center fw-bold mb-3 fs-5">
              到元宇宙展開全新社交圈
            </h2>
            <Form class="row justify-content-center" v-slot="{errors}">
              <div class="input-group mb-3 p-0">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  :class="{ 'is-invalid': errors['email']}"
                  rules="email||required"
                  v-model="user.email"></Field>
                <error-message name="email" class="invalid-feedback"></error-message>
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
              <span class="text-center mb-2 text-danger">{{errorPassword}}</span>
              <button class="btn btn-primary Roboto mb-3" @click="signIn" type="submit">
                登入
              </button>
              <button class="btn w-100 Roboto fw-bold" @click="gotosignup">註冊帳號</button>
            </Form>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
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
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      errorPassword: ''
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}/users/sign_in`
      this.axios.post(api, this.user)
        .then(res => {
          const token = res.data.user.token
          console.log(token)
          window.localStorage.setItem('userToken', token)
          // this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
          this.errorPassword = ''
          this.$router.push('/postpage')
        })
        .catch(err => {
          this.errorPassword = err.response.data.message
          console.log(err.response.data.message)
        })
    },
    gotosignup () {
      this.$router.push('/signup')
    }
  },
  created () {

  }
}
</script>
