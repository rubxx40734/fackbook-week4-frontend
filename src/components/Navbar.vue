<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand title" href="#">MetaWall</a>
      <div class="user d-flex align-items-center">
        <img :src="current.photo" alt="" class="me-3 userphoto bgCover card-img" />
        <!-- <p class="mb-0 person">Member</p> -->
        <div class="nav-item dropdown position-relative ">
          <a
            class="nav-link dropdown-toggle person mb-0 text-dark fw-bold"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >{{current.name}}</a
          >
          <ul class="dropdown-menu content minW">
            <router-link to="/postpage"><li><a class="dropdown-item fw-bold" @click="checkPostpage">我的貼文牆</a></li></router-link>
            <router-link to="/profile"><a class="dropdown-item fw-bold">修改個人資料</a></router-link >
            <li><a class="dropdown-item fw-bold" href="#">登出</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.title {
  font-family: Roboto;
  font-size: 26px;
  font-weight: 900;
}
.person {
  font-family: Roboto;
  font-size: 16px;
  border-bottom: 3px solid black;
}
a{
    text-decoration: none;
}
.userphoto{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.minW{
  min-width: 0;
}
</style>

<script>
export default {
  data () {

  },
  methods: {
    checkPostpage () {
      this.$emit('emit-showPosatpage')
    }
  },
  props: ['current']
}
</script>
