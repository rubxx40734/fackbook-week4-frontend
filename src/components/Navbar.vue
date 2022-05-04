<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand title" href="#">MetaWall</a>
      <div class="user d-flex align-items-center">
        <img src="../assets/user.png" alt="" class="me-3" />
        <!-- <p class="mb-0 person">Member</p> -->
        <div class="nav-item dropdown position-relative">
          <a
            class="nav-link dropdown-toggle person mb-0 text-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Member</a
          >
          <ul class="dropdown-menu content">
            <router-link to="/"><li><a class="dropdown-item fw-bold" href="#">我的貼文牆</a></li></router-link>
            <li><a class="dropdown-item fw-bold" href="#">修改個人資料</a></li>
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
</style>
